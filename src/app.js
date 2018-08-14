import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from './components/Header/Header'
import About from './components/About/About'
// import Post from './components/Post/Post'
import PostDetail from './components/PostDetail/PostDetail'
import styles from './app.css'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'

const App = () => (
  <Router>
    <div className={styles.container}>
      <Header />
      <Switch >
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route path='/post/:slug' component={PostDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default App
