import React from 'react'
import { mount, configure } from 'enzyme'
import { MemoryRouter } from 'react-router'
import Adapter from 'enzyme-adapter-react-16';

import Routes from './Routes'
import Home from '../Home/Home'
import About from '../About/About'
import PostDetail from '../PostDetail/PostDetail'

configure({
  adapter: new Adapter()
});

test('should render the Home component on visit /', () => {
  const component = mount(
    <MemoryRouter
    initialEntries={[ '/']}
    initialIndex={0} >
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(Home).length).toBe(1)
})

test('should render the About component on visit /about', () => {
  const component = mount(
    <MemoryRouter
    initialEntries={[ '/about']}
    initialIndex={0} >
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(About).length).toBe(1)
})

test('should render the PostDetail component on visit /post/:slug', () => {
  const component = mount(
    < MemoryRouter
    initialEntries={['/post/how-to-build-a-progressive-web-app-with-react']}
    initialIndex={0} >
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(PostDetail).length).toBe(1)
})

test('should render the PostDetail component on visit /post/:slug', () => {
  const component = mount(
    < MemoryRouter
    initialEntries={ ['/post/testing-with-jest-and-enzyme']}
    initialIndex={0} >
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(PostDetail).length).toBe(1)
})

test('should render the PostDetail component on visit /post/:slug', () => {
  const component = mount(
    < MemoryRouter
    initialEntries={['/post/getting-started-with-css-modules-in-webpack']}
    initialIndex={0} >
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(PostDetail).length).toBe(1)
})
