import { PostApi } from '@/api/post/post';
import { PageContainer } from '@/components/PageContainer';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { DateLib } from '@/lib/dateLib';
import { NetworkLib } from '@/lib/networkLib';
import { PageRouteProps } from '@/models/models';
import { Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = PageRouteProps<{ postId: string }>;

export default async function PostDetailPage({ params }: Props) {
  const { postId } = await params;

  const network = NetworkLib.create();
  const post = await PostApi.getPostById(network, postId);

  if (!post) throw notFound();

  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto flex flex-col gap-y-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="max-w-[200px] text-nowrap overflow-hidden overflow-ellipsis">
                {post.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader className="pb-6 wrap-anywhere">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="text-sm">
                {post.category}
              </Badge>
            </div>

            <h1 className="text-3xl mb-4 leading-tight line-clamp-3 break-words">
              {post.title}
            </h1>

            <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <div className="max-w-[300px]">
                  <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                    By {post.author}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{DateLib.getFullDateTime(post.createdAt)}</span>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-sm text-gray-600 mb-2">Summary</h3>
              <p className="text-gray-800 leading-relaxed">{post.summary}</p>
            </div>
          </CardHeader>

          <CardContent>
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap break-words text-gray-700 leading-relaxed">
                {post.content}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
