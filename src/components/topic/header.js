import React, {Component} from 'react';
import relativeTime from '../../assets/js/relativeTime';
import getTabName from '../../assets/js/getTabName';

class TopicHeader extends Component {
    render() {
        return (
            <div className="header topic_header">
                <span className="topic_full_title">
                    {this.props.top ? <span className="put_top">置顶</span> : (this.props.good ? <span className="put_good">精华</span> : '')}
                    {`\n${this.props.title}\n`}
                </span>
                <div className="changes">
                    <span>
                        {`\n发布于 ${relativeTime(this.props.create_at)}\n`}
                    </span>
                    <span>
                        {`\n作者\n`}
                        <a href={`/user/${this.props.author.loginname}`}>{`\n${this.props.author.loginname}\n`}</a>
                    </span>
                    <span>
                        {`\n${this.props.visit_count} 次浏览\n`}
                    </span>
                    <span>
                        {`\n来自 ${getTabName(this.props.tab)}\n`}</span>
                    <input
                        className="span-common span-success pull-right collect_btn"
                        type="submit"
                        value="收藏"
                        action="collect"/>
                </div>
                <div id="manage_topic"></div>
            </div>
        )
    }
}

export default TopicHeader;