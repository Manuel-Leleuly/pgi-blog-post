import { ProgressStep } from '@/components/createPostPage/ProgressStep';
import {
  CREATE_POST_STEP,
  UseCreatePostLogic,
} from '@/logic/useCreatePostLogic';
import { useStore } from '@tanstack/react-form';

export const ProgressSteps = ({
  postForm,
  selectedStep,
}: {
  postForm: UseCreatePostLogic['postForm'];
  selectedStep: keyof typeof CREATE_POST_STEP;
}) => {
  const { title, author, summary, category, content } = useStore(
    postForm.store,
    (state) => state.values,
  );

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        <ProgressStep
          title="Metadata"
          stepNumber={1}
          isActive={selectedStep === CREATE_POST_STEP.METADATA}
          isFinished={!!title && !!author}
        />
        <ProgressStep
          title="Summary & Category"
          stepNumber={2}
          isActive={selectedStep === CREATE_POST_STEP.SUMMARY}
          isFinished={!!summary && !!category}
        />
        <ProgressStep
          title="Blog Content"
          stepNumber={3}
          isActive={selectedStep === CREATE_POST_STEP.CONTENT}
          isFinished={!!content}
        />
        <ProgressStep
          title="Review"
          stepNumber={4}
          isActive={selectedStep === CREATE_POST_STEP.REVIEW}
          isFinished={false}
        />
      </div>
    </div>
  );
};
