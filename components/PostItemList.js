import React from 'react'
import styled from 'styled-components'
import PostItem from './PostItem'
import mockRSS from '../utils/mocks/rss.json'

const posts = mockRSS.rss.channel.item

const Container = styled.div`
  /* max-width:1024px; */
  margin: auto;
  width: calc(100% - 32px);
  box-sizing:content-box;
`

const Main = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap:${(props) => props.theme.space * 2}px;
`

const PostItemList = () => {
  return (
    <Container>
      <Main>
        {
          posts.map((post) => <PostItem post={post} />)
        }
      </Main>
    </Container>
  )
}

export default PostItemList
