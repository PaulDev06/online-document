'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ThankYouPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home after 5 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="mb-4">Your request has been submitted successfully.</p>
      <p>You will be redirected to the home page shortly.</p>
      <p>If you are not redirected, click <a href="/" className="text-blue-500">here</a>.</p>
    </div>
  );
};

export default ThankYouPage;
