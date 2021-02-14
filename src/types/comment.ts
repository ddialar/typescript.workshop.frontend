import { PostCommentOwner } from './owner'

export interface PostComment {
  id: string
  owner: PostCommentOwner
  body: string
  createdAt: string
}
