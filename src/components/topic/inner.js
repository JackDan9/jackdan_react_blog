import React, {Component} from 'react';

class TopicInner extends Component {
    render() {
        return (
            <div className="inner topic">
                <div className="topic_content" dangerouslySetInnerHTML={{__html: this.props.content}}></div>
            </div>
        )
    }
}

export default TopicInner;