import { getAllPostsApi, getPostByIdApi } from '@api'
import { mapErrorFromApi, mapPostsFromApiToBasicPosts, mapPostFromApiToFullPost } from '@mappers'

export const getAllPosts = async () => {
  const result = await getAllPostsApi()
  return result.error ? mapErrorFromApi(result) : mapPostsFromApiToBasicPosts(result)
}

export const getPostById = async (postId: string) => {
  const result = await getPostByIdApi(postId)
  return result.error ? mapErrorFromApi(result) : mapPostFromApiToFullPost(result)
}
