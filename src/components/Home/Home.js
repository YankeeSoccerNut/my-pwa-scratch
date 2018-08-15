import React from 'react'

import Post from '../Post/Post'

import posts from '../../blog-posts.json'

const Home = () => {
  return (
    <div>
      {posts.posts.map(post => <Post {...post} key={post.slug} showTitleLink />)}
    </div>
  )
}

export default Home
