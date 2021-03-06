import axios from 'axios';
import { useState } from 'react'

function CommentCreate({ postId }) {

    const [content, setContent] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        //5000 to comments
        await axios.post(`http://posts.com/posts/${postId}/comments`, {
            content
        })

        setContent('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>New Comment sss</label>
                    <input value={content} onChange={(e) => setContent(e.target.value)} className="form-control"></input>
                </div>
                <br />
                <button className="btn btn-primary">Submit Comment</button>
            </form>
        </div>
    )
}

export default CommentCreate