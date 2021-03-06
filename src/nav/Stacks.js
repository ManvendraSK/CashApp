import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import Signup from '../comps/Signup';
import SignupConfirm from '../comps/SignupConfirm';
import RequestPayment from '../comps/RequestPayment';
import StacksContainer from './StacksContainer';
import getStore from '../store';

export const Stacks = StackNavigator({
  Signup: {
    screen: Signup
  },
  SignupConfirm: {
    screen: SignupConfirm
  },
  RequestPayment: {
    screen: RequestPayment
  }
}, {
  initialRouteName: 'Signup'
});

const initialState = Stacks.router
  .getStateForAction(Stacks.router.getActionForPathAndParams('Signup'));

const navReducer = (state = initialState, action) => {
  const newState = Stacks.router.getStateForAction(action, state);
  return newState || state;
};

const store = getStore(navReducer);

const Root = () => (
  <Provider store={store}>
    <StacksContainer />
  </Provider>
);

export default Root;
