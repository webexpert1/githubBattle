import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Popular from './components/Popular';
import { Nav } from './components/Nav';
import  Home  from './components/Home';
import Battle from './components/Battle';




class App extends Component {
  render() {
    return (
      <Router>
          <main className="container">
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/battle' component={Battle} />
              <Route path='/popular' component={Popular} />
              <Route render={() => {
                return <p>Not Found!</p>
              }} />
            </Switch>
         
        </main>
      </Router>
    );
  }
}

export default App;
