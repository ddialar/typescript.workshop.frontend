import { ApiPost, FullPost, BasicPost } from '@types'

const mapPostFromApiToBasicPost = (post: ApiPost): BasicPost => {
  const { id: postId, owner, body, createdAt, comments, likes } = post

  const likedByUser = !!likes.find(({ id: likeOwnerId }) => likeOwnerId === owner.id)
  const commentsAmount = comments.length
  const likesAmount = likes.length

  return {
    id: postId,
    owner,
    body,
    likedByUser,
    commentsAmount,
    likesAmount,
    createdAt
  }
}

export const mapPostsFromApiToBasicPosts = (posts: ApiPost[] | null): BasicPost[] => (posts && posts.map(mapPostFromApiToBasicPost)) || []

export const mapPostFromApiToFullPost = (post: ApiPost | null): FullPost | null => {
  if (!post) { return post }

  const { id: postId, owner, body, createdAt, comments, likes } = post
  const likedByUser = !!likes.find(({ id: likeOwnerId }) => likeOwnerId === owner.id)

  return {
    id: postId,
    owner,
    body,
    likedByUser,
    comments,
    likes,
    createdAt
  }
}
