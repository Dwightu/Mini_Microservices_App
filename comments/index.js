const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { randomBytes } = require('crypto')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())
app.use(cors());

const commentByPostId = {};


//Get all posts
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentByPostId[req.params.id] || [])
})

//Create a post
app.post('/posts/:id/comments', async (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;
    const comments = commentByPostId[req.params.id] || [];
    comments.push({ id: commentId, content });
    commentByPostId[req.params.id] = comments;


    await axios.post('http://localhost:7000/events', {
        type: 'CommentCreated',
        data: {
            id: commentId, content, postId: req.params.id
        }
    })

    res.status(201).send(comments)
})


app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type);
    res.send({});
})


app.listen(5000, () => {
    console.log('Listening on port 5000')
})