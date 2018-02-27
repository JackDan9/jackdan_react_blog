import React, {Component} from 'react';
import TopicHeader from './header';
import TopicInner from './inner';

class TopicContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            header:<TopicHeader title={props.topic.title} author={props.topic.author} create_at={props.topic.create_at} visit_count={props.topic.visit_count} top={props.topic.top} good={props.topic.good} tab={props.topic.tab}/>,
            inner:<TopicInner content={props.topic.content}/>
        }
    }
    render() {
        return (
            <div className="panel">
                {this.state.header}
                {this.state.inner}
            </div>
        )
    }
}

export default TopicContent;