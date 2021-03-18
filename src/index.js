import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import App from './App';
import Home from './views/home';
// import Topics from './components/topics';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);


render(
  // <BrowserRouter>
  //   <Switch>
  //     <Route path='/' component={Home}>
  //       {/* <Route exact component={Topics} /> */}
  //       {/* <Route path='video' component={Video}  /> */}
  //       {/* <Route path='topic/:id' component={Article}/> */}
  //       {/* <Route path='message' component={Message}/> */}
  //       {/* <Route path='login' component={Login}/> */}
  //       {/* <Route path='profile' component={Profile}/> */}
  //       {/* <Route path='publishTopic' component={PublishTopic}/> */}
  //     </Route>,
  //     <Route path='/home' component={App} />
  //   </Switch>
  // </BrowserRouter>, 
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();