import { Button } from '@/components/ui/button';
import { FileX } from 'lucide-react';
import Link from 'next/link';

export default function PostNotFound() {
  return (
    <div className="w-full p-8 flex flex-col gap-y-4 items-center">
      <FileX size={200} strokeWidth={1} />
      <p className="text-2xl">
        I&#39;m sorry, but the post you are looking for is not here
      </p>
      <Link href="/public">
        <Button className="p-8 bg-blue-500 hover:bg-blue-600 text-white text-2xl">
          Back to home
        </Button>
      </Link>
    </div>
  );
}
