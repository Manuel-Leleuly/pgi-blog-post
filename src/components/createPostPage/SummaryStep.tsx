import { CreatePostFormSchema } from '@/api/post/model/post';
import { FieldError } from '@/components/createPostPage/FieldError';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CATEGORIES, UseCreatePostLogic } from '@/logic/useCreatePostLogic';

export const SummaryStep = ({
  postForm,
}: {
  postForm: UseCreatePostLogic['postForm'];
}) => {
  return (
    <div className="space-y-6">
      <postForm.Field
        name="summary"
        validators={{
          onMount: CreatePostFormSchema.shape.summary,
          onChange: CreatePostFormSchema.shape.summary,
        }}
      >
        {(field) => (
          <div className="flex flex-col gap-y-2">
            <Label htmlFor={field.name}>Blog Summary *</Label>
            <Textarea
              id={field.name}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Write a brief summary or excerpt of your blog post..."
              rows={4}
              className="mt-2 w-full break-all max-h-52"
            />
            <FieldError
              errorMessages={field.state.meta.errors.map(
                (error) => error?.message,
              )}
            />
          </div>
        )}
      </postForm.Field>

      <postForm.Field name="category">
        {(field) => (
          <div className="flex flex-col gap-y-2">
            <Label htmlFor={field.name}>Category *</Label>
            <Select
              onValueChange={(value) => field.handleChange(value)}
              defaultValue={field.state.value}
            >
              <SelectTrigger className="mt-2 w-full">
                <SelectValue placeholder="Select a category..." />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((category) => (
                  <SelectItem value={category} key={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </postForm.Field>
    </div>
  );
};
