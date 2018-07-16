import React, { Component } from 'react';
import './App.css';
import HaikuList from './haikuList';
import {Route, Switch} from 'react-router-dom';
import SingleHaiku from './singleHaiku'
import Create from './Create';
import Edit from './Edit.js'
import Navbar from './components/navbar'

class App extends Component {

  render() {
    return (
      <div className="App">
      <Navbar />
      <Switch>
          <Route path="/haikus/:id/edit" component={Edit} />
          <Route path='/haikus/:id' component ={SingleHaiku} />
          <Route exact path = '/create' component= {Create} />
          <Route exact path="/" component={HaikuList} />
      </Switch>
      </div>

    );
  }
}

export default App;
