import './App.css';
import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Menu from "./Páginas/menu"
import Perguntas from "./Páginas/perguntas"
import Hoje from "./Páginas/hoje"
import ComoUsar from "./Páginas/comoUsar"

class App extends React.Component {
 render() {
   return( 
   <Router>
      <Switch>
          <Route exact path="/">
            <Redirect to="/menu" />
          </Route>
          <Route path='/perguntas' component={Perguntas} />
          <Route path='/menu' component={Menu} />
          <Route path='/hoje' component={Hoje} />
          <Route path='/comousar' component={ComoUsar} />
      </Switch>
  </Router>)
 }
}

export default App;
