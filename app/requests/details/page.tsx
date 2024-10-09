'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Details {
  name: string;
  country: string;
}

export default function EnterDetails() {
  const router = useRouter();
  const [document, setDocument] = useState<string | null>(null);
  const [details, setDetails] = useState<Details>({
    name: '',
    country: '',
  });

  useEffect(() => {
    // Get the document from searchParams
    const params = new URLSearchParams(window.location.search);
    const documentParam = params.get('document');
    if (documentParam) {
      setDocument(documentParam);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/requests/upload?document=${document}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8">Enter Details for {document}</h1>
      
      {/* Details Form */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 text-lg"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Country</label>
          <input
            type="text"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 text-lg"
            value={details.country}
            onChange={(e) => setDetails({ ...details, country: e.target.value })}
            required
          />
        </div>

        {/* Proceed Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
        >
          Proceed
        </button>
      </form>

      {/* Optional Info Section (If Needed) */}
      <div className="mt-12 max-w-2xl text-center">
        <p className="text-gray-600">
          Please double-check your details before proceeding. Ensure your name and country information is accurate to avoid processing delays.
        </p>
      </div>
    </div>
  );
}
