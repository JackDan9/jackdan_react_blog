import React, {Component} from 'react';
import Cell from './cell';
import Pagination from './pagination';
import Axios from 'axios';

class TopicsInner extends Component {
    constructor() {
        super()
        this.state = {
            cells: []
        };
    }
    componentWillMount() {
        (async() => {
            this.setState({
                cells: (await Axios.get(`https://cnodejs.org/api/v1/topics${this.props.query}`))
                    .data
                    .data
                    .map(topic => <Cell
                        id={topic.id}
                        author={topic.author}
                        title={topic.title}
                        tab={topic.tab}
                        top={topic.top}
                        good={topic.good}
                        reply_count={topic.reply_count}
                        visit_count={topic.visit_count}
                        last_reply_at={topic.last_reply_at}
                        key={topic.id}/>)
            })
        })()
    }
    render() {
        return (
            <div className="inner no-padding">
                <div id="topic_list">
                    {this.state.cells}
                </div>
                <Pagination/>
            </div>
        )
    }
}

export default TopicsInner;