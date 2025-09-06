'use client';

import { PageError } from '@/models/models';
import { SearchX } from 'lucide-react';
import { useEffect } from 'react';

export default function PostsError({ error }: PageError) {
  useEffect(() => {
    console.error(error);
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
        There&#39;s an error occurred while fetching posts.
        <br />
        Please try again.
      </p>
    </div>
  );
}
