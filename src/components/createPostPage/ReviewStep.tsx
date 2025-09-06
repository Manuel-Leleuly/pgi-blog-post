import { UseCreatePostLogic } from '@/logic/useCreatePostLogic';
import { useStore } from '@tanstack/react-form';

export const ReviewStep = ({
  postForm,
}: {
  postForm: UseCreatePostLogic['postForm'];
}) => {
  const formData = useStore(postForm.store, (state) => state.values);

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg space-y-4">
        <h3 className="text-lg font-semibold">Review Your Blog Post</h3>

        <p className="break-words">
          <strong>Title:</strong> {formData.title}
        </p>
        <p className="break-words">
          <strong>Author:</strong> {formData.author}
        </p>
        <p>
          <strong>Category:</strong> {formData.category}
        </p>

        <div>
          <p className="break-words">
            <strong>Summary:</strong>
          </p>
          <p className="text-gray-700 mt-1 break-words">{formData.summary}</p>
        </div>

        <div>
          <p>
            <strong>Content Preview:</strong>
          </p>
          <div className="mt-2 p-4 break-words bg-white border rounded max-h-48 overflow-y-auto">
            <p className="whitespace-pre-wrap text-gray-700">
              {formData.content}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-blue-800">
          Ready to publish? Click &#34;Submit&#34; to add your blog post to the
          platform.
        </p>
      </div>
    </div>
  );
};
