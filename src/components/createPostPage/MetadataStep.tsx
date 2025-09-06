import { CreatePostFormSchema } from '@/api/post/model/post';
import { FieldError } from '@/components/createPostPage/FieldError';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UseCreatePostLogic } from '@/logic/useCreatePostLogic';

export const MetadataStep = ({
  postForm,
}: {
  postForm: UseCreatePostLogic['postForm'];
}) => {
  return (
    <div className="space-y-6">
      <postForm.Field
        name="title"
        validators={{
          onMount: CreatePostFormSchema.shape.title,
          onChange: CreatePostFormSchema.shape.title,
        }}
      >
        {(field) => (
          <div className="flex flex-col gap-y-2">
            <Label htmlFor={field.name}>Blog Title *</Label>
            <Input
              type="text"
              id={field.name}
              name={field.name}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Enter your title..."
              className="mt-2"
            />
            <FieldError
              errorMessages={field.state.meta.errors.map(
                (error) => error?.message,
              )}
            />
          </div>
        )}
      </postForm.Field>

      <postForm.Field
        name="author"
        validators={{
          onMount: CreatePostFormSchema.shape.author,
          onChange: CreatePostFormSchema.shape.author,
        }}
      >
        {(field) => (
          <div className="flex flex-col gap-y-2">
            <Label htmlFor={field.name}>Author *</Label>
            <Input
              type="text"
              id={field.name}
              name={field.name}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Enter author name..."
              className="mt-2"
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
