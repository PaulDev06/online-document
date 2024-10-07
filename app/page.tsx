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
      <h1 className="text-3xl font-bold mb-6">Online Document Request Platform</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <select
        className="mb-4 p-2 border rounded"
        onChange={(e) => setSelectedDocument(e.target.value)} // Set the document name directly
        value={selectedDocument}
      >
        <option value="">Select Document</option>
        {documents.map((doc) => (
          <option key={doc.id} value={doc.name}>{doc.name}</option> // Use doc.name as the value
        ))}
      </select>

      <Link 
        href={`/requirements?document=${encodeURIComponent(selectedDocument)}`} 
        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${!selectedDocument ? 'opacity-50 cursor-not-allowed' : ''}`} 
        onClick={(e) => {
          if (!selectedDocument) {
            e.preventDefault();
          }
        }}
      >
        View Requirements
      </Link>

      <Link href="/auth/login" className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Login
      </Link>
    </div>
  );
};

export default HomePage;
