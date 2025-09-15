// Automated Backup System

interface BackupConfig {
  schedule: 'daily' | 'weekly' | 'monthly';
  retentionDays: number;
  includeAnalytics: boolean;
  includeUserData: boolean;
  includeSettings: boolean;
}

interface BackupEntry {
  id: string;
  timestamp: Date;
  type: 'full' | 'incremental';
  size: number;
  status: 'pending' | 'completed' | 'failed';
  data: any;
}

class BackupSystem {
  private config: BackupConfig = {
    schedule: 'daily',
    retentionDays: 30,
    includeAnalytics: true,
    includeUserData: true,
    includeSettings: true
  };

  private backups: BackupEntry[] = [];
  private isRunning = false;

  constructor() {
    // Schedule automatic backups
    this.scheduleBackups();
  }

  private scheduleBackups() {
    const scheduleInterval = this.getScheduleInterval();
    
    setInterval(() => {
      if (!this.isRunning) {
        this.createBackup();
      }
    }, scheduleInterval);

    // Also run cleanup daily
    setInterval(() => {
      this.cleanupOldBackups();
    }, 24 * 60 * 60 * 1000); // 24 hours
  }

  private getScheduleInterval(): number {
    switch (this.config.schedule) {
      case 'daily':
        return 24 * 60 * 60 * 1000; // 24 hours
      case 'weekly':
        return 7 * 24 * 60 * 60 * 1000; // 7 days
      case 'monthly':
        return 30 * 24 * 60 * 60 * 1000; // 30 days
      default:
        return 24 * 60 * 60 * 1000;
    }
  }

  async createBackup(type: 'full' | 'incremental' = 'full'): Promise<string> {
    if (this.isRunning) {
      throw new Error('Backup already in progress');
    }

    this.isRunning = true;
    const backupId = this.generateBackupId();
    
    const backup: BackupEntry = {
      id: backupId,
      timestamp: new Date(),
      type,
      size: 0,
      status: 'pending',
      data: {}
    };

    this.backups.push(backup);

    try {
      // Collect data based on configuration
      const data = await this.collectBackupData(type);
      
      backup.data = data;
      backup.size = this.calculateDataSize(data);
      backup.status = 'completed';

      console.log(`Backup ${backupId} completed successfully. Size: ${this.formatBytes(backup.size)}`);
      
      return backupId;
    } catch (error) {
      backup.status = 'failed';
      console.error(`Backup ${backupId} failed:`, error);
      throw error;
    } finally {
      this.isRunning = false;
    }
  }

  private async collectBackupData(type: 'full' | 'incremental'): Promise<any> {
    const data: any = {
      metadata: {
        timestamp: new Date().toISOString(),
        type,
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development'
      }
    };

    // Analytics data
    if (this.config.includeAnalytics) {
      try {
        // Import analytics data from the API route
        const { analyticsEvents, funnelData, performanceMetrics } = await import('../app/api/analytics/route');
        data.analytics = {
          events: analyticsEvents || [],
          funnels: funnelData || [],
          performance: performanceMetrics || []
        };
      } catch (error) {
        console.warn('Could not backup analytics data:', error);
        data.analytics = { error: 'Failed to collect analytics data' };
      }
    }

    // User data
    if (this.config.includeUserData) {
      try {
        // Import data retention manager
        const { dataRetentionManager } = await import('./data-retention');
        data.userData = dataRetentionManager.getStatistics();
      } catch (error) {
        console.warn('Could not backup user data:', error);
        data.userData = { error: 'Failed to collect user data' };
      }
    }

    // Settings and configuration
    if (this.config.includeSettings) {
      data.settings = {
        backupConfig: this.config,
        appConfig: {
          nodeEnv: process.env.NODE_ENV,
          version: process.env.npm_package_version || 'unknown'
        }
      };
    }

    // System information
    data.system = {
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      platform: process.platform,
      nodeVersion: process.version
    };

    return data;
  }

  private calculateDataSize(data: any): number {
    try {
      return JSON.stringify(data).length;
    } catch (error) {
      return 0;
    }
  }

  private formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  private generateBackupId(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `backup_${timestamp}_${random}`;
  }

  // Get backup by ID
  getBackup(id: string): BackupEntry | null {
    return this.backups.find(backup => backup.id === id) || null;
  }

  // Get all backups
  getAllBackups(): BackupEntry[] {
    return [...this.backups].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }

  // Download backup as JSON file
  downloadBackup(id: string): void {
    const backup = this.getBackup(id);
    if (!backup) {
      throw new Error('Backup not found');
    }

    const dataStr = JSON.stringify(backup.data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `backup-${id}-${backup.timestamp.toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  // Cleanup old backups
  private cleanupOldBackups(): void {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - this.config.retentionDays);

    const initialCount = this.backups.length;
    this.backups = this.backups.filter(backup => backup.timestamp > cutoffDate);
    
    const deletedCount = initialCount - this.backups.length;
    if (deletedCount > 0) {
      console.log(`Backup cleanup: deleted ${deletedCount} old backups`);
    }
  }

  // Get backup statistics
  getStatistics(): any {
    const totalBackups = this.backups.length;
    const successfulBackups = this.backups.filter(b => b.status === 'completed').length;
    const failedBackups = this.backups.filter(b => b.status === 'failed').length;
    const totalSize = this.backups.reduce((sum, backup) => sum + backup.size, 0);

    return {
      totalBackups,
      successfulBackups,
      failedBackups,
      totalSize: this.formatBytes(totalSize),
      averageSize: totalBackups > 0 ? this.formatBytes(totalSize / totalBackups) : '0 Bytes',
      config: this.config,
      lastBackup: this.backups.length > 0 ? this.backups[0].timestamp : null,
      nextScheduledBackup: new Date(Date.now() + this.getScheduleInterval())
    };
  }

  // Update configuration
  updateConfig(newConfig: Partial<BackupConfig>): void {
    this.config = { ...this.config, ...newConfig };
    console.log('Backup configuration updated:', this.config);
  }

  // Manual backup trigger
  async triggerBackup(type: 'full' | 'incremental' = 'full'): Promise<string> {
    return await this.createBackup(type);
  }
}

// Create singleton instance
export const backupSystem = new BackupSystem();

// Export types
export type { BackupConfig, BackupEntry };

// Helper functions for admin dashboard
export const getBackupStatus = () => {
  return backupSystem.getStatistics();
};

export const createManualBackup = async (type: 'full' | 'incremental' = 'full') => {
  return await backupSystem.triggerBackup(type);
};

export const downloadBackupFile = (id: string) => {
  return backupSystem.downloadBackup(id);
};

export const getAllBackups = () => {
  return backupSystem.getAllBackups();
};
