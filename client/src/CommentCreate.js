import axios from 'axios';
import { useState } from 'react'

function CommentCreate({ postId }) {

    const [content, setContent] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        await axios.post(`http://localhost:5000/posts/${postId}/comments`, {
            content
        })

        setContent('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>New Comment</label>
                    <input value={content} onChange={(e) => setContent(e.target.value)} className="form-control"></input>
                </div>
                <button className="btn btn-primary">Submit Comment</button>
            </form>
        </div>
    )
}

export default CommentCreate