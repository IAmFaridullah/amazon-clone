import './App.css';
import Header from './components/header'
import Home from './components/home'
import Product from './components/product'
import Checkout from './components/checkout'
import Login from './components/login'
import SignUp from './components/signUp'
import Footer from './components/footer'




import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
 
  return (
     <div>
    <BrowserRouter>
    <Header />
      <Switch>
    <Route exact path="/">
    <Home />
    <Footer />
    </Route>
    <Route path="/login">
        <Login />
    </Route>
    <Route path="/signup">
        <SignUp />
    </Route>
    <Route path="/product">
      <Product />
    </Route>
    <Route path="/checkout">
      <Checkout />
    </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )

}

export default App;
