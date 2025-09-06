'use client';

import { ContentStep } from '@/components/createPostPage/ContentStep';
import { MetadataStep } from '@/components/createPostPage/MetadataStep';
import { ProgressSteps } from '@/components/createPostPage/ProgressSteps';
import { ReviewStep } from '@/components/createPostPage/ReviewStep';
import { SummaryStep } from '@/components/createPostPage/SummaryStep';
import { DiscardChangesModal } from '@/components/modals/DiscardChangesModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn, sleepAsync } from '@/lib/utils';
import {
  CREATE_POST_STEP,
  useCreatePostLogic,
} from '@/logic/useCreatePostLogic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { z } from 'zod';

const MODAL = z.enum(['DISCARD']).enum;
type MODAL_TYPE = keyof typeof MODAL;

export const CreatePostForm = () => {
  const router = useRouter();
  const [selectedModal, setSelectedModal] = useState<MODAL_TYPE | null>(null);
  const {
    postForm,
    isLoading,
    selectedStep,
    onPreviousStep,
    onNextStep,
    getStepTitle,
    onCancel,
    isStepValid,
  } = useCreatePostLogic({
    onDiscardChanges: () => setSelectedModal(MODAL.DISCARD),
  });

  return (
    <>
      <ProgressSteps selectedStep={selectedStep} postForm={postForm} />
      <Card>
        <CardHeader>
          <CardTitle>{getStepTitle()}</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            {selectedStep === CREATE_POST_STEP.METADATA && (
              <MetadataStep postForm={postForm} />
            )}
            {selectedStep === CREATE_POST_STEP.SUMMARY && (
              <SummaryStep postForm={postForm} />
            )}
            {selectedStep === CREATE_POST_STEP.CONTENT && (
              <ContentStep postForm={postForm} />
            )}
            {selectedStep === CREATE_POST_STEP.REVIEW && (
              <ReviewStep postForm={postForm} />
            )}

            <div className="flex justify-between items-center mt-8 pt-6 border-t">
              <div className="flex items-center gap-x-3">
                <Button
                  variant="outline"
                  onClick={onCancel}
                  disabled={isLoading}
                  type="button"
                >
                  Cancel
                </Button>
                {selectedStep !== CREATE_POST_STEP.METADATA && (
                  <Button
                    variant="outline"
                    onClick={onPreviousStep}
                    disabled={isLoading}
                    type="button"
                  >
                    Previous
                  </Button>
                )}
              </div>

              <Button
                onClick={onNextStep}
                type="button"
                className={cn(
                  selectedStep === CREATE_POST_STEP.REVIEW &&
                    'bg-green-600 hover:bg-green-700',
                )}
                disabled={isLoading || !isStepValid()}
              >
                {isLoading ? (
                  <ClipLoader size={25} color="#fff" />
                ) : (
                  <>
                    {selectedStep === CREATE_POST_STEP.REVIEW
                      ? 'Submit'
                      : 'Next'}
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <DiscardChangesModal
        isOpen={selectedModal === MODAL.DISCARD}
        onConfirm={() => {
          setSelectedModal(null);

          // this is to make sure modal is fully closed
          // before redirecting to another page
          sleepAsync(200).then(() => {
            router.push('/');
          });
        }}
        onCancel={() => setSelectedModal(null)}
        message="You have unsaved changes in your blog post. If you cancel now, all your progress will be lost. Are you sure you want to discard your changes and return to the blog list?"
      />
    </>
  );
};
