import {
  CreatePostReqBody,
  Post,
  PostResponse,
  PostResponseSchema,
  PostSchema,
} from '@/api/post/model/post';
import { FetchLib } from '@/lib/fetchLib';
import { AxiosInstance } from 'axios';

export class PostApi {
  static getAllPosts = async (network: AxiosInstance) => {
    return await FetchLib.validateResponse<PostResponse>(
      () => network.get(`/posts`),
      PostResponseSchema,
    );
  };

  static getPostById = async (network: AxiosInstance, postId: string) => {
    return await FetchLib.validateResponse<Post>(
      () => network.get(`/posts/${postId}`),
      PostSchema,
    );
  };

  static createPost = async (
    network: AxiosInstance,
    reqBody: CreatePostReqBody,
  ) => {
    return await FetchLib.validateResponse<Post>(
      () => network.post(`/posts`, reqBody),
      PostSchema,
    );
  };
}
