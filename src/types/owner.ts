export interface PostOwner {
  id: string
  name: string
  surname: string
  avatar: string
}

export interface PostCommentOwner extends PostOwner {}
export interface PostLikeOwner extends PostOwner {}
