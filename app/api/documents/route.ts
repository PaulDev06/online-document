// /app/api/documents/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const documents = [
    { id: 1, name: 'Birth Certificate' },
    { id: 2, name: 'Attestation of Birth' },
    // Add more documents as needed
  ];

  return NextResponse.json(documents);
}
