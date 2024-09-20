import { Provider } from 'react-redux';
import { store } from './store';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ReduxProvider: React.FC<Props> = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default ReduxProvider;
