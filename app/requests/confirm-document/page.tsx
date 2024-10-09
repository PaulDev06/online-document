'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ConfirmDocument() {
  const [document, setDocument] = useState<string>(''); // State for selected document
  const router = useRouter();

  const handleConfirm = () => {
    if (document) {
      router.push(`/requests/details?document=${document}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      
      <h1 className="text-4xl font-bold mb-8">Confirm Document Needed</h1>
      
      {/* Document Selection Card */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mb-6">
        <select
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 text-lg"
          value={document}
          onChange={(e) => setDocument(e.target.value)}
        >
          <option value="">Select Document</option>
          <option value="Birth Certificate">Birth Certificate</option>
          <option value="Attestation of Birth">Attestation of Birth</option>
          <option value="Marriage Certificate">Marriage Certificate</option>
        </select>
      </div>

      {/* Confirm Button - Aligned and Styled */}
      <button
        onClick={handleConfirm}
        disabled={!document}  // Disable button if no document is selected
        className={`bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all ${!document ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Confirm and Proceed
      </button>

      {/* Info Cards Below (Optional) */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Important Information</h2>
          <p className="text-gray-700">
            Make sure you select the correct document before proceeding. This will affect the requirements and processing.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-700">
            If you're not sure which document you need, you can contact our support team for further assistance.
          </p>
        </div>
      </div>
    </div>
  );
}
