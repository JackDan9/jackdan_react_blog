import React from 'react';
import {Route} from 'react-router-dom';
import App from '../App';
import Topics from '../components/topics';
import Video from '../views/video';

export default(
    <Route path='/' component={App}>
        <Route exact component={Topics} />
        {/* <Route path='video' component={Video}  /> */}
        {/* <Route path='topic/:id' component={Article}/>
        <Route path='message' component={Message}/>
        <Route path='login' component={Login}/>
        <Route path='profile' component={Profile}/>
        <Route path='publishTopic' component={PublishTopic}/> */}
    </Route>
)