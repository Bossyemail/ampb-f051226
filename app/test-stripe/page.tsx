"use client";

export default function TestStripePage() {
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-4">Stripe Environment Variable Test</h1>
      
      <div className="space-y-4">
        <div>
          <strong>Publishable Key Status:</strong> 
          <span className={publishableKey ? "text-green-400" : "text-red-400"}>
            {publishableKey ? "✅ Found" : "❌ Missing"}
          </span>
        </div>
        
        <div>
          <strong>Key Value (first 10 chars):</strong> 
          <span className="text-gray-400">
            {publishableKey ? publishableKey.substring(0, 10) + "..." : "None"}
          </span>
        </div>
        
        <div>
          <strong>Key Type:</strong> 
          <span className="text-gray-400">
            {publishableKey?.startsWith('pk_test_') ? "Test Key ✅" : 
             publishableKey?.startsWith('pk_live_') ? "Live Key ✅" : 
             publishableKey ? "Invalid Format ❌" : "None"}
          </span>
        </div>
      </div>
      
      <div className="mt-8">
        <a 
          href="/clausevault/pay" 
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Payment Page
        </a>
      </div>
    </div>
  );
}
