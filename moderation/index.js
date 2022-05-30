const express = require('express')
const bodyparser = require('body-parser')
const axios = require('axios')
const app = express();
const cors = require('cors')

app.use(bodyparser.json());
app.use(cors())


app.post('/events', async (req, res) => {
    const { type, data } = req.body;
    if (type === 'CommentCreated') {
        const status = data.content.includes('orange') ? 'rejected' : 'approved';
        console.log('I found it orange!!')
        //4005:Event-Bus Service
        await axios.post('http://event-bus-srv:4005/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        })
    }
    res.send({})
})



app.listen(4003, () => {
    console.log('Listening on 4003')
})