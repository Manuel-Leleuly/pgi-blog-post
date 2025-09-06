import { createPost } from '@/actions/postServerActions';
import { CreatePostForm, CreatePostFormSchema } from '@/api/post/model/post';
import { useForm, useStore } from '@tanstack/react-form';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

export const CREATE_POST_STEP = z.enum([
  'METADATA',
  'SUMMARY',
  'CONTENT',
  'REVIEW',
]).enum;
type CREATE_POST_STEP_TYPE = keyof typeof CREATE_POST_STEP;

export const CATEGORIES = [
  'Tech',
  'Lifestyle',
  'Business',
  'Health',
  'Travel',
  'Food',
  'Sports',
  'Entertainment',
];

export const useCreatePostLogic = ({
  onDiscardChanges,
}: {
  onDiscardChanges: () => void;
}) => {
  const router = useRouter();
  const [selectedStep, setSelectedStep] = useState<CREATE_POST_STEP_TYPE>(
    CREATE_POST_STEP.METADATA,
  );

  const createPostMutation = useMutation({
    mutationKey: ['createPost'],
    mutationFn: async (reqBody: CreatePostForm) => {
      const today = new Date().toISOString();
      const postReqBody = CreatePostFormSchema.parse(reqBody);
      const errorData = await createPost({
        ...postReqBody,
        createdAt: today,
        updatedAt: today,
        deletedAt: '',
      });
      if (errorData) throw errorData;
    },
    onSuccess: () => {
      toast.success('Successfully created post. Redirecting...');
      router.replace('/');
    },
    onError: (error) => {
      console.error(error);
      toast.error('Failed to create post. Please try again.');
    },
  });

  const postForm = useForm({
    defaultValues: {
      title: '',
      author: '',
      summary: '',
      category: CATEGORIES[0],
      content: '',
    },
    validators: {
      onSubmit: CreatePostFormSchema,
    },
    onSubmit: async ({ value }) => {
      await createPostMutation.mutateAsync(value);
    },
    canSubmitWhenInvalid: false,
  });

  const isFormDirty = useStore(postForm.store, (state) => state.isDirty);
  const fieldMeta = useStore(postForm.store, (state) => state.fieldMeta);

  const onCancel = () => {
    if (isFormDirty) onDiscardChanges();
    else router.push('/');
  };

  const onNextStep = async () => {
    switch (selectedStep) {
      case CREATE_POST_STEP.METADATA:
        setSelectedStep(CREATE_POST_STEP.SUMMARY);
        break;
      case CREATE_POST_STEP.SUMMARY:
        setSelectedStep(CREATE_POST_STEP.CONTENT);
        break;
      case CREATE_POST_STEP.CONTENT:
        setSelectedStep(CREATE_POST_STEP.REVIEW);
        break;
      case CREATE_POST_STEP.REVIEW:
        await postForm.handleSubmit();
        break;
    }
  };

  const onPreviousStep = () => {
    switch (selectedStep) {
      case CREATE_POST_STEP.SUMMARY:
        setSelectedStep(CREATE_POST_STEP.METADATA);
        break;
      case CREATE_POST_STEP.CONTENT:
        setSelectedStep(CREATE_POST_STEP.SUMMARY);
        break;
      case CREATE_POST_STEP.REVIEW:
        setSelectedStep(CREATE_POST_STEP.CONTENT);
        break;
    }
  };

  const getStepTitle = () => {
    switch (selectedStep) {
      case CREATE_POST_STEP.METADATA:
        return 'Blog Metadata';
      case CREATE_POST_STEP.SUMMARY:
        return 'Summary & Category';
      case CREATE_POST_STEP.CONTENT:
        return 'Blog Content';
      case CREATE_POST_STEP.REVIEW:
        return 'Review & Submit';
      default:
        return '';
    }
  };

  const isStepValid = () => {
    switch (selectedStep) {
      case CREATE_POST_STEP.METADATA:
        return !!fieldMeta?.title?.isValid && !!fieldMeta?.author?.isValid;
      case CREATE_POST_STEP.SUMMARY:
        return !!fieldMeta?.summary?.isValid && !!fieldMeta?.category?.isValid;
      case CREATE_POST_STEP.CONTENT:
        return !!fieldMeta?.content?.isValid;
      default:
        return true;
    }
  };

  return {
    postForm,
    isLoading: createPostMutation.isPending,
    error: createPostMutation.error,
    selectedStep,
    onNextStep,
    onPreviousStep,
    getStepTitle,
    onCancel,
    isStepValid,
  };
};

export type UseCreatePostLogic = ReturnType<typeof useCreatePostLogic>;
