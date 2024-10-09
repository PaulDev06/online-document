'use client';

import { useRouter } from 'next/navigation';

export default function Payment() {
  const router = useRouter();

  const handlePayment = () => {
    // Simulate payment process
    router.push('/requests/thank-you?ref=ABC123');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8">Payment</h1>

      {/* Payment Details Card */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <p className="text-xl mb-4">Amount Due: <span className="font-bold">$100</span></p>

        {/* Pay Now Button */}
        <button
          onClick={handlePayment}
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
