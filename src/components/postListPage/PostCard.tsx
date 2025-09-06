import { Post } from '@/api/post/model/post';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { DateLib } from '@/lib/dateLib';
import { Calendar, User } from 'lucide-react';

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <Badge variant="secondary" className="mb-2">
          {post.category}
        </Badge>
        <h3 className="hover:text-blue-600 transition-colors line-clamp-2 break-words">
          {post.title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 break-words">
          {post.summary}
        </p>

        <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 gap-3 overflow-hidden">
          <div className="flex items-center space-x-1">
            <User className="w-3 h-3" />
            <div className="max-w-[290px]">
              <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                {post.author}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3" />
            <span>{DateLib.getFullDateTime(post.createdAt)}</span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t">
          <Button
            variant="link"
            className="hover:no-underline text-blue-600 hover:text-blue-700 transition-colors"
          >
            Read more →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
