import { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { SinglePost } from '@components'

interface MatchParams {
    postId: string
}

export const SinglePostScreen: FC<RouteComponentProps<MatchParams>> = ({ match: { params: { postId } } }) => <SinglePost postId={postId} />
