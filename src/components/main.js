import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom';
import Topics from './topics';
import Topic from './topic';
import GetStart from './getstart';
import API from './api';
import About from './about';

class Main extends Component {
  render() {
    return (
      <div id="main">
        <Switch>
          <Route path="/" exact component={Topics}/>
          <Route path="/topic/:id" component={Topic}/>
          <Route path="/getstart" component={GetStart}/>
          <Route path="/api" component={API}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
    )
  }
}

export default Main;