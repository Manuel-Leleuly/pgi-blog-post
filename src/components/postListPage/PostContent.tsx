import { Post } from '@/api/post/model/post';
import { PostCard } from '@/components/postListPage/PostCard';
import Link from 'next/link';

export const PostContent = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl">All Blog Posts</h2>
        <p className="text-gray-600">
          {posts.length} post{posts.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
};
