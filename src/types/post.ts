import { PostOwner } from './owner'
import { PostComment } from './comment'
import { PostLike } from './like'

interface BasicPostData {
  id: string
  owner: PostOwner
  body: string
  createdAt: string
  userIsOwner: boolean
  userHasLiked: boolean
}

export interface ApiPost extends BasicPostData {
  comments: PostComment[]
  likes: PostLike[]
}

export type BasicPost = BasicPostData & {
  commentsAmount: number
  likesAmount: number
}

export interface FullPost extends ApiPost {}
