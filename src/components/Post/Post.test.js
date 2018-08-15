import React from 'react'
// setup file
import {
  configure,
  shallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'
import Post from './Post'

configure({
  adapter: new Adapter()
});

test('Post component should render no link', () => {
  const component = shallow( < Post title='My post'/ > )
  const tree = toJson(component)

  expect(tree).toMatchSnapshot()
})

test('Post component should render with link', () => {
  const component = shallow( < Post title = 'My post' showTitleLink /> )
  const tree = toJson(component)

  expect(tree).toMatchSnapshot()
})

