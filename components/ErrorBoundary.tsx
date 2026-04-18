import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    return { 
      hasError: true, 
      error,
      errorId
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    
    this.setState({ errorInfo });
    
    // Send error to analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: true,
        error_id: this.state.errorId
      });
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to backend for logging (optional)
    this.logErrorToBackend(error, errorInfo);
  }

  private logErrorToBackend = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: 'error_boundary',
          error: {
            message: error.message,
            stack: error.stack,
            name: error.name,
            errorId: this.state.errorId
          },
          errorInfo: {
            componentStack: errorInfo.componentStack
          },
          metadata: {
            userAgent: navigator.userAgent,
            url: window.location.href,
            timestamp: new Date().toISOString()
          }
        })
      });
    } catch (logError) {
      console.error('Failed to log error to backend:', logError);
    }
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined, errorId: undefined });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleContactSupport = () => {
    window.location.href = 'mailto:hello@aylenmontenegro.com?subject=Error Report&body=Error ID: ' + this.state.errorId;
  };

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#121216] via-[#0c0d11] to-[#0a0a0d] text-white p-8">
          <div className="text-center max-w-lg">
            {/* Error Icon */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
            </div>

            {/* Error Message */}
            <h2 className="text-2xl font-bold mb-4 text-white">Something went wrong</h2>
            <p className="text-gray-300 mb-2">
              We're sorry, but something unexpected happened. 
            </p>
            <p className="text-gray-400 mb-6 text-sm">
              Our team has been notified and we're working to fix this.
            </p>

            {/* Error ID for support */}
            {this.state.errorId && (
              <p className="text-gray-500 text-xs mb-6 font-mono">
                Error ID: {this.state.errorId}
              </p>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-none hover:bg-white/90 transition-all duration-150 select-none active:scale-[0.98] active:shadow-[inset_0_2px_10px_rgba(0,0,0,0.12)] active:brightness-95"
                style={{ color: '#000000' }}
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              
              <div className="flex gap-3">
                <button
                  onClick={this.handleGoHome}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-white/20 text-white hover:bg-white/10 transition-all duration-150 rounded-none select-none active:scale-[0.97] active:shadow-[inset_0_2px_12px_rgba(0,0,0,0.35)] active:brightness-90"
                >
                  <Home className="w-4 h-4" />
                  Go Home
                </button>
                <button
                  onClick={this.handleContactSupport}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-white/20 text-white hover:bg-white/10 transition-all duration-150 rounded-none select-none active:scale-[0.97] active:shadow-[inset_0_2px_12px_rgba(0,0,0,0.35)] active:brightness-90"
                >
                  <Mail className="w-4 h-4" />
                  Contact Support
                </button>
              </div>
            </div>

            {/* Technical Details (for development) */}
            {this.props.showDetails && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300">
                  Technical Details
                </summary>
                <div className="mt-4 p-4 bg-black/20 rounded-lg text-xs font-mono text-gray-400 overflow-auto max-h-40">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  <div className="mb-2">
                    <strong>Stack:</strong>
                    <pre className="whitespace-pre-wrap mt-1">{this.state.error.stack}</pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">{this.state.errorInfo.componentStack}</pre>
                    </div>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
