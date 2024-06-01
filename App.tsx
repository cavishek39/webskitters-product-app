import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/redux/reducers';
import rootSaga from './src/redux/sagas';
import AppNavigator from './src/navigation/AppNavigator';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create a Redux store with the root reducer and middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the root saga
sagaMiddleware.run(rootSaga);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
