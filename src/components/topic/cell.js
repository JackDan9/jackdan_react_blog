import React, {Component} from 'react';
import relativeTime from '../../assets/js/relativeTime';

class Cell extends Component {
    constructor(){
        super();
        this.state = {
            isShowed: false
        }
        this.showUp = this.showUp.bind(this);
    }
    showUp(){
        this.setState(prevState => ({
            isShowed: !prevState.isShowed
          }));
    }
    render() {
        const reply = this.props;
        return (
            <div
                className="cell reply_area reply_item"
                reply_id={reply.id}
                reply_to_id={reply.reply_id}
                id={reply.id}
                onMouseOver={!reply.ups_number ? this.showUp : void 0}
                onMouseOut={!reply.ups_number ? this.showUp : void 0}>
                <div className="author_content">
                    <a href={`/user/${reply.author.loginname}`} className="user_avatar">
                        <img
                            src={reply.author.avatar_url}
                            title={reply.author.loginname}
                            alt={reply.author.loginname}/></a>
                    <div className="user_info">
                        <a className="dark reply_author" href={`/user/${reply.author.loginname}`}>{reply.author.loginname}</a>{`\n`}
                        <a className="reply_time" href={`#${reply.id}`}>{reply.nth}楼•{relativeTime(reply.create_at)}</a>{`\n`}
                        {reply.is_author ? <span className="reply_by_author">作者</span> : ''}
                    </div>
                    <div className="user_action">
                        <span>
                            <i className={`fa up_btn fa-thumbs-o-up ${reply.ups_number || this.state.isShowed ? '' : 'invisible'}`} title="喜欢"></i>{`\n`}
                            <span className="up-count">
                                {reply.ups_number ? reply.ups_number : ''}
                            </span>{`\n`}
                        </span>
                        <span>
                            <i className="fa fa-reply reply2_btn" title="回复"></i>
                        </span>
                    </div>
                </div>
                <div className={`reply_content from-${reply.author.loginname}`} dangerouslySetInnerHTML={{__html: reply.content}}></div>
                <div className="clearfix">
                    <div className="reply2_area">
                        <form
                            className="reply2_form"
                            action="/59e720d6a9a1e19f3634c7da/reply"
                            method="post">
                            <input type="hidden" name="_csrf" value="YsmOSfCH-CshNfPFeU4B5aRmzCH0o7X3esP4"/>
                            <input type="hidden" name="reply_id" value="59f98087c8ef9425668ac1f7"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cell;