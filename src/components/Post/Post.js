import React from 'react'

import styles from './Post.css'
import { Link } from 'react-router-dom'

const Post = (props) => {
  const {title, excerpt, slug, showTitleLink} = props

  return (
    <div>
      <h2 className={styles.title}>
        {showTitleLink
          ? <Link className={styles.link} to={`/post/${slug}`}>{title} </Link>
          : title}
      </h2>
      <p className={styles.content}>{excerpt}</p>
    </div>
  )
}

export default Post
