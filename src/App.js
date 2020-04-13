import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import HelloWorld from './components/HelloWorld';
import LocalStorage from './components/LocalStorage';
import GlobalStyle from './styles/global';

class App extends Component {
  state = {}

  render() {
    return (
      <Provider store={store}>
        <HelloWorld />
        <LocalStorage />
        <GlobalStyle />
      </Provider>
    );
  }
}

export default App;
