import React, { FC, useState, useEffect, ReactElement } from 'react'
import { Grid } from 'semantic-ui-react'

import { SECTION_TITLE, NO_POSTS_MESSAGE } from './postsList.constants'

import { BasicPost } from '@types'
import { ErrorComponent, Spinner } from '@components'
import { PostCard } from '@containers'
import { getAllPosts } from '@dataSources'

export const PostsListLayout: FC = () => {
  const [posts, setPosts] = useState<BasicPost[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    (async () => {
      setLoading(true)

      const result = await getAllPosts()

      if ('error' in result) {
        setError(result.message)
      } else {
        setPosts(result)
      }

      setLoading(false)
    })()
  }, [])

  const processPosts = (posts: BasicPost[]): ReactElement => {
    return (
      <Grid.Row columns={3}>
        {
          posts.map(post => (
            <Grid.Column key={post.id} style={{ marginBottom: '20px' }}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        }
      </Grid.Row>
    )
  }

  const buildPostsList = () => (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <h1>{posts ? SECTION_TITLE : NO_POSTS_MESSAGE}</h1>
          </Grid.Column>
        </Grid.Row>
        {posts ? processPosts(posts) : null}
      </Grid>
      <Spinner active={loading} />
    </>
  )

  return (error && (<ErrorComponent message={error} />)) || buildPostsList()
}
