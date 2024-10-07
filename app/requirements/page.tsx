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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">{document ? `${document} Requirements` : 'Loading...'}</h1>

      {requirements.length > 0 ? (
        <ul className="bg-white p-6 rounded-lg shadow-md max-w-sm">
          {requirements.map((req, index) => (
            <li key={index} className="mb-2 text-gray-700">
              {req}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No requirements found for this document.</p>
      )}

      <button
        onClick={() => router.push('/auth/login')}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Login to Proceed
      </button>
    </div>
  );
}
