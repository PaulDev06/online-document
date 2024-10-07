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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Enter Details for {document}</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={details.country}
            onChange={(e) => setDetails({ ...details, country: e.target.value })}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Proceed
        </button>
      </form>
    </div>
  );
}
