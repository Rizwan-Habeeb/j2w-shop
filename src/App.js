import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import cartReducer from './store/reducers/cart';
import productReducer from './store/reducers/product';
import Layout from './pages/Layout';

const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer
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
