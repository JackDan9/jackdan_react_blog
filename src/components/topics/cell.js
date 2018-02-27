import React, {Component} from 'react';
import relativeTime from '../../assets/js/relativeTime';
import getTabName from '../../assets/js/getTabName';

class Cell extends Component {
    render() {
        const topic = this.props;
        return (
            <div className="cell">
                <a className="user_avatar pull-left" href={`/user/${topic.author.loginname}`}>
                    <img
                        src={topic.author.avatar_url}
                        title={topic.author.loginname}
                        alt={topic.author.loginname}/>
                </a>
                <span className="reply_count pull-left">
                    <span className="count_of_replies" title="回复数">
                        {`\n${topic.reply_count}\n`}
                    </span>
                    <span className="count_seperator">/</span>
                    <span className="count_of_visits" title="点击数">
                        {`\n${topic.visit_count}\n`}
                    </span>
                </span>
                <span className="last_time pull-right">
                    <span className="last_active_time">{!topic.reply_count?'暂无回复':`最后回复于 ${relativeTime(topic.last_reply_at)}`}</span>
                </span>
                <div className="topic_title_wrapper">
                    <span
                        className={topic.top
                        ? "put_top"
                        : (topic.good
                            ? "put_good"
                            : "topiclist-tab")}>{topic.top
                            ? "置顶"
                            : (topic.good
                                ? "精华"
                                : getTabName(topic.tab))}</span>{`\n`}
                    <a className="topic_title" href={`/topic/${topic.id}`} title={topic.title}>
                        {topic.title}
                    </a>
                </div>
            </div>
        )
    }
}

export default Cell;