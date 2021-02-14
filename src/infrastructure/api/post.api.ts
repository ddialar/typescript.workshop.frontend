import { runRequest, RequestArgs } from './api'
import { POSTS_PATH } from '@common'

export const getAllPostsApi = async () => {
  const requestParams: RequestArgs = {
    method: 'get',
    url: POSTS_PATH
  }

  return await runRequest(requestParams)
}

export const getPostByIdApi = async (postId: string) => {
  const requestParams: RequestArgs = {
    method: 'get',
    url: `${POSTS_PATH}/${postId}`
  }

  return await runRequest(requestParams)
}
