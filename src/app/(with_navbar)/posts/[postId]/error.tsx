'use client';

import { PageError } from '@/models/models';
import { StatusCodes } from 'http-status-codes';
import { SearchX } from 'lucide-react';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';

export default function PostError({ error }: PageError) {
  useEffect(() => {
    console.error(error);
    if (
      error.name.toLowerCase() === 'axioserror' &&
      error.message.endsWith(StatusCodes.NOT_FOUND.toString())
    ) {
      throw notFound();
    }
  }, [error]);

  return (
    <div className="text-center py-12">
      <SearchX
        strokeWidth={1}
        size={100}
        className="text-gray-400 mx-auto mb-4"
      />
      <h2 className="text-xl text-gray-600 mb-2">Oops...</h2>
      <p className="text-gray-500 mb-6">
        There&#39;s an error occurred while fetching post.
        <br />
        Please try again.
      </p>
    </div>
  );
}
