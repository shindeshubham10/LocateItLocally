
import Header from './components/header/Header'
import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Cart from './components/contact/Contact';
import Favourites from './components/favourites/Favourites';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {

  
  return (
    
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/favourites" component={Favourites} />

      </Switch>
    </Router>

    
   
  );
}

export default App;
