import { CreatePostForm } from '@/components/createPostPage/CreatePostForm';
import { PageContainer } from '@/components/PageContainer';

export default function CreatePostPage() {
  return (
    <PageContainer className="pt-8 sm:pt-20">
      <div className="max-w-4xl mx-auto">
        <CreatePostForm />
      </div>
    </PageContainer>
  );
}
