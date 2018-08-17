import React from 'react'

import Post from '../Post/Post'

const Home = ({posts}) => {
  return (
    <div>
      {posts.length
        ? posts.map(post => <Post {...post} key={post.slug} showTitleLink />)
        : 'Awaiting Posts'}
    </div>
  )
}

export default Home
