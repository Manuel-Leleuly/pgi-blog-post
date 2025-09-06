'use server';

import { CreatePostReqBody } from '@/api/post/model/post';
import { PostApi } from '@/api/post/post';
import { FetchLib } from '@/lib/fetchLib';
import { NetworkLib } from '@/lib/networkLib';
import { AxiosError } from 'axios';
import { revalidatePath } from 'next/cache';

export const createPost = async (reqBody: CreatePostReqBody) => {
  try {
    const network = NetworkLib.create();
    await PostApi.createPost(network, reqBody);
    revalidatePath('/');
  } catch (error) {
    return FetchLib.getAxiosErrorFromServerAction(
      error as AxiosError,
      'createPost',
    );
  }
};
