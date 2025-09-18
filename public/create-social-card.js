// Simple script to create a social sharing image
// Run this in the browser console on the generate-social-image.html page

function createSocialCard() {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d');
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
    gradient.addColorStop(0, '#1f2937');
    gradient.addColorStop(0.5, '#374151');
    gradient.addColorStop(1, '#4b5563');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 630);
    
    // Add text
    ctx.fillStyle = '#d1d5db';
    ctx.font = '18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fontStyle = 'italic';
    ctx.textAlign = 'center';
    ctx.fillText('20+ Years of Real Estate Expertise', 600, 200);
    
    // Main headline
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('Turn Real Estate Chaos', 600, 280);
    ctx.fillText('Into Systems & Profit', 600, 340);
    
    // Description
    ctx.fillStyle = '#e5e7eb';
    ctx.font = '24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('From contract to closing, I manage the details', 600, 420);
    ctx.fillText('and build the tools so agents can sell more and stress less.', 600, 460);
    
    // CTA Button
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(450, 500, 300, 60);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('Get Started Today', 600, 540);
    
    // Footer
    ctx.fillStyle = '#9ca3af';
    ctx.font = '16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('aylenmontenegro.com', 600, 600);
    
    // Convert to image
    const dataURL = canvas.toDataURL('image/jpeg', 0.9);
    
    // Download the image
    const link = document.createElement('a');
    link.download = 'social-share-card.jpg';
    link.href = dataURL;
    link.click();
    
    console.log('Social sharing image created and downloaded!');
}

// Run the function
createSocialCard();
