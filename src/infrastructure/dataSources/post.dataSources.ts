import { createNewPostApi, getAllExtendedPostsApi, getAllPostsApi, getPostByIdApi } from '@api'
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
  return result && 'error' in result ? mapErrorFromApi(result) : mapPostFromApiToFullPost(result)
}

export const createNewPost = async (postBody: string, token: string) => {
  const result = await createNewPostApi(postBody, token)
  return 'error' in result ? mapErrorFromApi(result) : mapPostFromApiToBasicPost(result)
}
