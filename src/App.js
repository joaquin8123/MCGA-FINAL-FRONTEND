
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Products/Products';
import ProductsPublic from './components/Public/Products';
import NewProduct from './components/Products/NewProduct';
import EditProduct from './components/Products/EditProduct';
import Home from './components/Home';
import { Login } from './components/Login/login';
import { SignUp } from './components/SignUp/signup';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Route exact path="/" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/public/products" component={ProductsPublic}/>
          <Route exact path="/product/edit/:id" component={EditProduct} />
          <Route exact path="/product/new" component={NewProduct} />
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
