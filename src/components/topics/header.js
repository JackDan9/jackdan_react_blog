import React, {Component} from 'react'

class TopicsHeader extends Component {
    render() {
        return (
            <div className="header">
                <a href="/?tab=all" className="topic-tab current-tab">全部</a>{`\n`}
                <a href="/?tab=good" className="topic-tab ">精华</a>{`\n`}
                <a href="/?tab=share" className="topic-tab ">分享</a>{`\n`}
                <a href="/?tab=ask" className="topic-tab ">问答</a>{`\n`}
                <a href="/?tab=job" className="topic-tab ">招聘</a>{`\n`}
                <a href="/?tab=dev" className="topic-tab ">客户端测试</a>{`\n`}
            </div>
        )
    }
}

export default TopicsHeader;