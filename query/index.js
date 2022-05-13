const express = require('express')
const bodyparser = require('body-parser')
const axios = require('axios')
const app = express();
const cors = require('cors')

app.use(bodyparser.json());
app.use(cors())

const posts = {}

app.get('/posts', (req, res) => {
    res.send(posts)
})


app.post('/events', (req, res) => {
    const { type, data } = req.body;
    if (type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] };
    }
    if (type === 'CommentCreated') {
        const { id, content, postId, status } = data;
        posts[postId].comments.push({ id, content, status })
    }
    //Implement Moderation Service
    if (type === 'CommentUpdated') {
        const { id, content, postId, status } = data;

        const post = posts[postId];
        const comment = post.comments.find(comment => {
            return comment.id === id;
        })
        comment.status = status;
        comment.content = content;
    }
    console.log(posts)
    res.send({})
})



app.listen(4005, () => {
    console.log('Listening on Port 4005')
})