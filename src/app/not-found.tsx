import { Button } from '@/components/ui/button';
import { SearchX } from 'lucide-react';
import Link from 'next/link';

export default function PageNotFound() {
  return (
    <div className="w-full p-8 flex flex-col gap-y-4 items-center">
      <SearchX size={200} strokeWidth={1} />
      <p className="text-2xl">
        I&#39;m sorry, but the page you are looking for is not here
      </p>
      <Link href="/">
        <Button className="p-8 bg-blue-500 hover:bg-blue-600 text-white text-2xl">
          Back to home
        </Button>
      </Link>
    </div>
  );
}
