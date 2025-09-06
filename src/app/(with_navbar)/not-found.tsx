import { FileText } from 'lucide-react';

export default function PostsNotFound() {
  return (
    <div className="text-center py-12">
      <FileText
        size={200}
        strokeWidth={1}
        className="text-gray-400 mx-auto mb-4"
      />
      <h2 className="text-xl text-gray-600 mb-2">No blog posts yet</h2>
      <p className="text-gray-500 mb-6">
        Create your first blog post to get started!
      </p>
    </div>
  );
}
