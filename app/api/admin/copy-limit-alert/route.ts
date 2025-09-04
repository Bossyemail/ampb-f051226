import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, clauseTitle, copyCount, timestamp, alertType, recentCopiesCount, message } = body;

    // Log the alert (you can replace this with your preferred notification method)
    const alertMessage = alertType === 'legitimate_use_pattern' 
      ? `User showing legitimate use pattern: ${recentCopiesCount} copies in last hour`
      : 'User has reached monthly copy limit - investigate usage pattern';
    
    console.log('🚨 COPY ALERT RECEIVED:', {
      userId,
      clauseTitle,
      copyCount,
      timestamp,
      alertType,
      recentCopiesCount,
      message: alertMessage,
      action: alertType === 'legitimate_use_pattern' ? 'Monitor - likely building addendum' : 'Investigate immediately'
    });

    // You can add various notification methods here:
    
    // 1. Email notification (using your preferred email service)
    // await sendEmail({
    //   to: 'your-email@clausevault.co',
    //   subject: '🚨 Copy Limit Alert - User Investigation Required',
    //   body: `User ${userId} has reached the 50 copy limit.\n\nDetails:\n- Clause: ${clauseTitle}\n- Total Copies: ${copyCount}\n- Time: ${timestamp}\n\nInvestigate usage pattern immediately.`
    // });

    // 2. Slack webhook
    // await fetch('YOUR_SLACK_WEBHOOK_URL', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     text: `🚨 *Copy Limit Alert*\nUser ${userId} has reached the 50 copy limit.\n• Clause: ${clauseTitle}\n• Total Copies: ${copyCount}\n• Time: ${timestamp}\n\nInvestigate usage pattern immediately.`
    //   })
    // });

    // 3. SMS notification (using Twilio or similar)
    // await sendSMS({
    //   to: 'YOUR_PHONE_NUMBER',
    //   message: `🚨 Copy Limit Alert: User ${userId} reached 50 copies at ${timestamp}`
    // });

    // 4. Store in database for admin dashboard
    // await db.copyAlerts.create({
    //   userId,
    //   clauseTitle,
    //   copyCount,
    //   timestamp,
    //   status: 'pending_investigation'
    // });

    return NextResponse.json({ 
      success: true, 
      message: 'Copy limit alert logged successfully',
      alertId: Date.now().toString()
    });

  } catch (error) {
    console.error('Error processing copy limit alert:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process alert' },
      { status: 500 }
    );
  }
}
