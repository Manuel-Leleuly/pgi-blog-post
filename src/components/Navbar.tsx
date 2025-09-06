import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button
              variant="link"
              className="hover:no-underline text-2xl text-blue-600 hover:text-blue-700 transition-colors"
            >
              Blog Platform
            </Button>
          </Link>
          <Link href="/create">
            <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Create New Post
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
