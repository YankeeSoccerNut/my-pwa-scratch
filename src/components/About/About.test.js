import React from 'react'
// setup file
import {
  configure,
  shallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'
import About from './About'

configure({
  adapter: new Adapter()
});

test('About component should render as expected', () => {
    const component = shallow(<About />)
    const tree = toJson(component)
    
    expect(tree).toMatchSnapshot()
  })
