import React, {Component} from 'react';
import Cell from './cell';

class Replies extends Component {
    constructor(props){
        super(props);
        this.state = {
            cells: props.replies.map((reply,index)=>(
                <Cell id={reply.id} reply_id={reply.reply_id} nth={++index} author={reply.author} content={reply.content} create_at={reply.create_at} is_author={reply.author.loginname === props.author} ups_number={reply.ups.length} is_uped={reply.ups.length>0} key={reply.id}/>
            ))
        }
    }
    render() {
        return (
            <div className="panel">
                <div className="header">
                    <span className="col_fade">{this.props.replies.length} 回复</span>
                </div>
                {this.state.cells}
            </div>
        )
    }
}

export default Replies;