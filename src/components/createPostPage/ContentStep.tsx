import { CreatePostFormSchema } from '@/api/post/model/post';
import { FieldError } from '@/components/createPostPage/FieldError';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { UseCreatePostLogic } from '@/logic/useCreatePostLogic';

export const ContentStep = ({
  postForm,
}: {
  postForm: UseCreatePostLogic['postForm'];
}) => {
  return (
    <div className="space-y-6">
      <postForm.Field
        name="content"
        validators={{
          onMount: CreatePostFormSchema.shape.content,
          onChange: CreatePostFormSchema.shape.content,
        }}
      >
        {(field) => (
          <div className="flex flex-col gap-y-2">
            <Label htmlFor={field.name}>Blog Content *</Label>
            <Textarea
              id={field.name}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Write your blog post content..."
              rows={4}
              className="mt-2 w-full break-words max-h-80"
            />
            <FieldError
              errorMessages={field.state.meta.errors.map(
                (error) => error?.message,
              )}
            />
          </div>
        )}
      </postForm.Field>
    </div>
  );
};
