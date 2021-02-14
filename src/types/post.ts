import { PostOwner } from './owner'
import { PostComment } from './comment'
import { PostLike } from './like'

interface BasicPostData {
  id: string
  owner: PostOwner
  body: string
  likedByUser: boolean
  createdAt: string
}

export interface BasicPost extends BasicPostData {
  commentsAmount: number
  likesAmount: number
}

export interface FullPost extends BasicPostData {
  comments: PostComment[]
  likes: PostLike[]
}

export type ApiPost = Omit<FullPost, 'likedByUser'>
