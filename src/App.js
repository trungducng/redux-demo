import React from 'react';
import List from './components/List';
import {Provider} from 'react-redux';
import * as redux from 'redux';
import {rootReducer} from './reducers/reducer';

var store = redux.createStore(rootReducer, redux.compose(
    window.devToolsExtension ?  window.devToolsExtension() : f => f
));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <List/>
      </Provider>
    );
  }
}

export default App;
