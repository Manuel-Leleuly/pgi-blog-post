import { PostApi } from '@/api/post/post';
import { PageContainer } from '@/components/PageContainer';
import { PostContent } from '@/components/postListPage/PostContent';
import { NetworkLib } from '@/lib/networkLib';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function PostListPage() {
  const network = NetworkLib.create();
  const posts = await PostApi.getAllPosts(network);

  if (!posts.length) throw notFound();

  // mockAPI doesn't yet support sorting
  posts.sort((a, b) => {
    const firstDateUnix = Math.floor(new Date(a.createdAt).valueOf() / 1000);
    const secondDateUnix = Math.floor(new Date(b.createdAt).valueOf() / 1000);
    return secondDateUnix - firstDateUnix;
  });

  return (
    <PageContainer>
      <PostContent posts={posts} />
    </PageContainer>
  );
}
