'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Requirements() {
  const router = useRouter();
  const [document, setDocument] = useState<string | null>(null); // Local state for the document
  const [requirements, setRequirements] = useState<string[]>([]); // State for requirements

  const requirementsMap: Record<string, string[]> = {
    'Birth Certificate': ['Copy of ID', 'Proof of Address'],
    'Attestation of Birth': ['Birth Certificate', 'Copy of ID'],
    'Marriage Certificate': ['Copy of Marriage Document', 'Proof of Address'],
  };

  useEffect(() => {
    // Extract the document from the URL
    const documentParam = new URLSearchParams(window.location.search).get('document');
    if (documentParam) {
      setDocument(documentParam);
      setRequirements(requirementsMap[documentParam] || []);
    }
  }, []); // No dependencies to avoid re-running

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">

      <h1 className="text-4xl font-bold mb-6">{document ? `${document} Requirements` : 'Loading...'}</h1>

      {/* Display Requirements Card */}
      {requirements.length > 0 ? (
        <ul className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mb-6">
          {requirements.map((req, index) => (
            <li key={index} className="mb-4 text-gray-700 text-lg">
              {req}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-lg">No requirements found for this document.</p>
      )}

      {/* Inline Button */}
      <div className="flex justify-center w-full max-w-xl">
        <button
          onClick={() => router.push('/auth/login')}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Login to Proceed
        </button>
      </div>

      {/* Additional Card Sections */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* Additional Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Card Title 1</h2>
          <p className="text-gray-700">
            Description for this section can include steps or useful tips on how to process the selected document.
          </p>
        </div>

        {/* Additional Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Card Title 2</h2>
          <p className="text-gray-700">
            More information about related documents, other services offered, or any relevant process details.
          </p>
        </div>
      </div>
    </div>
  );
}
