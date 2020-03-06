import React, {Component} from 'react'
import './Item.css'
export default class Item extends Component {
    delete=()=>{
        let {deleteComment,userName}=this.props;
        if(window.confirm(`确定删除${userName}用户的评论吗？`)){
            let {commentId}=this.props;
            deleteComment(commentId);
        }
    }
    render() {
        let {userName,content}=this.props;
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="#1" onClick={this.delete}>删除</a>
                </div>
                <p className="user"><span>{userName}</span><span>说:</span></p>
                <p className="centence">{content}</p>
            </li>
        )
    }
}