import React, {Component} from 'react'
import TopicsHeader from './header'
import TopicsInner from './inner'

class Topics extends Component {
    render() {
        return (
            <div id="content">
                <div className="panel">
                    <TopicsHeader/>
                    <TopicsInner query={this.props.location.search}/>
                </div>
            </div>
        )
    }
}

export default Topics;