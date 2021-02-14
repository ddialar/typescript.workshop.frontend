import React, { FC, useState, useEffect, ReactElement, useContext } from 'react'
import { Grid } from 'semantic-ui-react'

import { SECTION_TITLE, NO_POSTS_MESSAGE } from './postsList.constants'

import { AppContext } from '@context'
import { BasicPost } from '@types'
import { Spinner } from '@components'
import { PostCard, PostForm } from '@containers'
import { getAllPosts } from '@dataSources'

export const PostsListLayout: FC = () => {
  const { user } = useContext(AppContext)
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

  const addNewPost = (newPost: BasicPost): void => {
    setPosts([...posts, newPost])
  }

  const processPosts = (posts: BasicPost[]): ReactElement => {
    return (
      <Grid.Row columns={3}>
        {
          user?.token
            ? (
              <Grid.Column style={{ marginBottom: '20px' }}>
                <PostForm token={user.token} addNewPost={addNewPost} setError={setError} />
              </Grid.Column>
            )
            : null
        }
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
            {error ? (<div className="ui error message">{error}</div>) : null}
          </Grid.Column>
        </Grid.Row>
        {posts ? processPosts(posts) : null}
      </Grid>
      <Spinner active={loading} />
    </>
  )

  return buildPostsList()
}
