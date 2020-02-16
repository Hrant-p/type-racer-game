import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Game from './Game';
import store from '../../store/store';

Enzyme.configure({ adapter: new Adapter() });

const GameComponent = mount(
  <Provider store={store}>
    <Game
      randomText=""
      lastResult={0}
      user={null}
      textLoading={false}
      textError={null}
    />
  </Provider>
);

it('After click new game button check showing game board', () => {
  const startBtn = GameComponent.find('.designed-btn');
  const gameElement = GameComponent.find('.game');
  startBtn.simulate('click');

  expect(gameElement.children().length).toBeGreaterThan(1);
});
