'use client'
import { useRouter } from 'next/navigation';

export default function Payment() {
  const router = useRouter();

  const handlePayment = () => {
    // Simulate payment process
    router.push('/requests/thank-you?ref=ABC123');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Payment</h1>

      <p className="mb-6">Amount Due: $100</p>

      <button
        onClick={handlePayment}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Pay Now
      </button>
    </div>
  );
}
