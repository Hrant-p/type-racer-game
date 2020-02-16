import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

Enzyme.configure({ adapter: new Adapter() });

it('Component Button: click', () => {
  const clickHandler = jest.fn();
  const app = shallow(<Button
    content="A"
    onClick={clickHandler}
  />);
  const preventDefault = jest.fn();

  const startButton = app.find('button');
  startButton.simulate('click', { preventDefault });

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
