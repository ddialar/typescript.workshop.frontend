import { ApiPost, FullPost, BasicPost } from '@types'

export const mapPostFromApiToBasicPost = (post: ApiPost): BasicPost => {
  const { id, owner, body, createdAt, comments, likes, userIsOwner, userHasLiked } = post

  const commentsAmount = (comments && comments.length) || 0
  const likesAmount = (likes && likes.length) || 0

  return {
    id,
    owner,
    body,
    userIsOwner: !!userIsOwner,
    userHasLiked: !!userHasLiked,
    commentsAmount,
    likesAmount,
    createdAt
  }
}

export const mapPostsFromApiToBasicPosts = (posts: ApiPost[]): BasicPost[] => (posts && posts.map(mapPostFromApiToBasicPost)) || []

export const mapPostFromApiToFullPost = (post: ApiPost | null): FullPost | null => {
  if (!post) { return post }

  const { id, owner, body, createdAt, comments, likes, userIsOwner, userHasLiked } = post

  return {
    id,
    owner,
    body,
    userIsOwner: !!userIsOwner,
    userHasLiked: !!userHasLiked,
    comments: comments && comments.length ? comments.map(comment => ({ ...comment, userIsOwner: !!comment.userIsOwner })) : [],
    likes,
    createdAt
  }
}
