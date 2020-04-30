import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import cartReducer from './store/reducers/cart';
import Layout from './pages/Layout';

const rootReducer = combineReducers({
    cart: cartReducer,
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
        <Layout/>
    </Provider>
  );
}

export default App;
