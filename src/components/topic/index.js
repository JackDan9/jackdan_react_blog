import React, {Component} from 'react';
import Content from './content';
import Replies from './replies';
// import MarkdownEditor from './editor';
import Axios from 'axios';

class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            content: null,
            replies: null
        }
    }
    componentWillMount() {
        (async() => {
            const res = await Axios.get(`https://cnodejs.org/api/v1/topic/${this.state.id}`);
            const topic = res.data.data;
            this.setState({
                content: <Content
                    topic={{
                    title: topic.title,
                    author: topic.author,
                    create_at: topic.create_at,
                    visit_count: topic.visit_count,
                    top: topic.top,
                    good: topic.good,
                    tab: topic.tab,
                    content: topic.content
                }}/>,
                replies: <Replies replies={topic.replies} author={topic.author.loginname}/>
            })
        })()
    }
    render() {
        return (
            <div id="content">
                {this.state.content}
                {this.state.replies}
                {/* <MarkdownEditor/> */}
            </div>
        )
    }
}

export default Topic;