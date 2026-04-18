import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_fallback_key');

export async function POST(request: NextRequest) {
  try {
    const { email, customerName, productName, accessUrl } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Aylen Montenegro <noreply@aylenmontenegro.com>',
      to: [email],
      subject: `Your ${productName} Access is Ready! 🎉`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your Access is Ready</title>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f8f9fa;
            }
            .container {
              background: white;
              border-radius: 8px;
              padding: 40px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
            }
            .logo {
              font-size: 24px;
              font-weight: bold;
              color: #2d3748;
              margin-bottom: 10px;
            }
            .title {
              font-size: 28px;
              font-weight: bold;
              color: #2d3748;
              margin-bottom: 20px;
            }
            .subtitle {
              font-size: 16px;
              color: #718096;
              margin-bottom: 30px;
            }
            .cta-button {
              display: inline-block;
              background: #2d3748;
              color: white;
              padding: 16px 32px;
              text-decoration: none;
              border-radius: 6px;
              font-weight: 600;
              margin: 20px 0;
            }
            .details {
              background: #f7fafc;
              padding: 20px;
              border-radius: 6px;
              margin: 20px 0;
            }
            .footer {
              margin-top: 40px;
              padding-top: 20px;
              border-top: 1px solid #e2e8f0;
              font-size: 14px;
              color: #718096;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">Aylen Montenegro</div>
              <div class="title">Your Access is Ready! 🎉</div>
              <div class="subtitle">Welcome to ${productName}</div>
            </div>
            
            <p>Hi ${customerName || 'there'},</p>
            
            <p>Thank you for your purchase! Your access to <strong>${productName}</strong> is now active and ready to use.</p>
            
            <div class="details">
              <h3>What you get:</h3>
              <ul>
                <li>50+ ready-to-paste real estate clauses</li>
                <li>Searchable database with filters</li>
                <li>Copy-to-clipboard functionality</li>
                <li>Annual access with updates</li>
              </ul>
            </div>
            
            <div style="text-align: center;">
              <a href="${accessUrl}" class="cta-button">Access Your ClauseVault →</a>
            </div>
            
            <p><strong>Quick Start:</strong></p>
            <ol>
              <li>Click the button above to access your account</li>
              <li>Use the search bar to find specific clauses</li>
              <li>Filter by side (buyer/seller) and category</li>
              <li>Click "Copy clause" to use in your contracts</li>
            </ol>
            
            <p><strong>Need help?</strong> Reply to this email or reach out if you have any questions about using your new tools.</p>
            
            <div class="footer">
              <p>Best regards,<br>Aylen Montenegro</p>
              <p><small>This email was sent to ${email}. If you didn't make this purchase, please contact us immediately.</small></p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Email error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
