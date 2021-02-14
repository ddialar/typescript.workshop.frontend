import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { SinglePostLayout } from '@layouts'

interface MatchParams {
    postId: string
}

export const SinglePostScreen: FC<RouteComponentProps<MatchParams>> = ({ match: { params: { postId } } }) => <SinglePostLayout postId={postId} />
