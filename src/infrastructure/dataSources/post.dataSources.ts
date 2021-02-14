import { createNewPostApi, getAllPostsApi, getPostByIdApi } from '@api'
import { mapErrorFromApi, mapPostsFromApiToBasicPosts, mapPostFromApiToFullPost, mapPostFromApiToBasicPost } from '@mappers'

export const getAllPosts = async () => {
  const result = await getAllPostsApi()
  return result.error ? mapErrorFromApi(result) : mapPostsFromApiToBasicPosts(result)
}

export const getPostById = async (postId: string) => {
  const result = await getPostByIdApi(postId)
  return result.error ? mapErrorFromApi(result) : mapPostFromApiToFullPost(result)
}

export const createNewPost = async (postBody: string, token: string) => {
  const result = await createNewPostApi(postBody, token)
  return result.error ? mapErrorFromApi(result) : mapPostFromApiToBasicPost(result)
}
