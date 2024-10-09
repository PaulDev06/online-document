'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const HomePage = () => {
  const [documents, setDocuments] = useState<{ id: number; name: string }[]>([]);
  const [selectedDocument, setSelectedDocument] = useState<string>(''); // Change type to string
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch('/api/documents');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format received');
        }

        setDocuments(data);
      } catch (error) {
        console.error('Error fetching documents:', error);
        setError('Failed to load documents. Please try again later.');
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      {/* Display error if there is one */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Input and Button in a Row */}
      <div className="flex space-x-4 mb-4">
        <select
          className="w-96 p-2 border rounded"  // Longer input field
          onChange={(e) => setSelectedDocument(e.target.value)} // Set the document name directly
          value={selectedDocument}
        >
          <option value="">Select Document</option>
          {documents.map((doc) => (
            <option key={doc.id} value={doc.name}>{doc.name}</option> // Use doc.name as the value
          ))}
        </select>

        {/* Inline Button */}
        <Link 
          href={`/requirements?document=${encodeURIComponent(selectedDocument)}`} 
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center ${!selectedDocument ? 'opacity-50 cursor-not-allowed' : ''}`} 
          onClick={(e) => {
            if (!selectedDocument) {
              e.preventDefault();
            }
          }}
        >
          View Requirements
        </Link>
      </div>

      {/* Login Button */}
      <Link href="/auth/login" className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Login
      </Link>

      {/* Card Sections Below */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Card Title 1</h2>
          <p className="text-gray-700">
            This is a brief description for the first section. You can add any content here, such as services offered, news, or other relevant information.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Card Title 2</h2>
          <p className="text-gray-700">
            This is a brief description for the second section. Like the first card, you can include relevant details or features of the platform.
          </p>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
