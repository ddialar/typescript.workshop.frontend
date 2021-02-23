import { createNewPostApi, deletePostByIdApi, dislikePostApi, getAllExtendedPostsApi, getAllPostsApi, getExtendedPostByIdApi, getPostByIdApi, likePostApi } from '@api'
import { mapErrorFromApi, mapPostsFromApiToBasicPosts, mapPostFromApiToFullPost, mapPostFromApiToBasicPost } from '@mappers'

export const getAllPosts = async () => {
  const result = await getAllPostsApi()
  return 'error' in result ? mapErrorFromApi(result) : mapPostsFromApiToBasicPosts(result)
}

export const getAllExtendedPosts = async (token: string) => {
  const result = await getAllExtendedPostsApi(token)
  return 'error' in result ? mapErrorFromApi(result) : mapPostsFromApiToBasicPosts(result)
}

export const getPostById = async (postId: string) => {
  const result = await getPostByIdApi(postId)
  return 'error' in result ? mapErrorFromApi(result) : mapPostFromApiToFullPost(result)
}

export const getExtendedPostById = async (postId: string, token: string) => {
  const result = await getExtendedPostByIdApi(postId, token)
  return 'error' in result ? mapErrorFromApi(result) : mapPostFromApiToFullPost(result)
}

export const createNewPost = async (postBody: string, token: string) => {
  const result = await createNewPostApi(postBody, token)
  return 'error' in result ? mapErrorFromApi(result) : mapPostFromApiToBasicPost(result)
}

export const likePost = async (postId: string, token: string) => {
  const result = await likePostApi(postId, token)
  return 'error' in result ? mapErrorFromApi(result) : mapPostFromApiToBasicPost(result)
}

export const dislikePost = async (postId: string, token: string) => {
  const result = await dislikePostApi(postId, token)
  return 'error' in result ? mapErrorFromApi(result) : mapPostFromApiToBasicPost(result)
}

export const deletePostById = async (postId: string, token: string) => {
  const error = await deletePostByIdApi(postId, token)
  return error ? mapErrorFromApi(error) : null
}
