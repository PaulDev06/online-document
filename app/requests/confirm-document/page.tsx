'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ConfirmDocument() {
  const [document, setDocument] = useState<string>('');
  const router = useRouter();

  const handleConfirm = () => {
    router.push(`/requests/details?document=${document}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Confirm Document Needed</h1>

      <select
        className="w-full max-w-sm px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        value={document}
        onChange={(e) => setDocument(e.target.value)}
      >
        <option value="">Select Document</option>
        <option value="Birth Certificate">Birth Certificate</option>
        <option value="Attestation of Birth">Attestation of Birth</option>
        <option value="Marriage Certificate">Marriage Certificate</option>
      </select>

      <button
        onClick={handleConfirm}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Confirm and Proceed
      </button>
    </div>
  );
}
