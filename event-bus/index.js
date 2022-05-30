const express = require('express')
const bodyparser = require('body-parser')
const axios = require('axios')
const app = express();


app.use(bodyparser.json());

const events = [];

app.post('/events', (req, res) => {
    const event = req.body;

    events.push(event);

    //Port 4000:Posts
    axios.post('http://posts-clusterip-srv:4000/events', event).catch((err) => {
        console.log(err.message);
    });

    //Port 5000:Comments
    axios.post('http://comments-srv:4001/events', event).catch((err) => {
        console.log(err.message);
    });
    //Post 4005:Query Service
    axios.post('http://query-srv:4002/events', event).catch((err) => {
        console.log(err.message);
    });
    //Post 4003:Moderation Service
    axios.post('http://moderation-srv:4003/events', event).catch((err) => {
        console.log(err.message);
    });

    res.send({ status: 'OK' });
})

app.get('/events', (req, res) => {
    console.log(events)
    res.send(events)
})

//Port 7000: Event Bus
app.listen(4005, () => {
    console.log('Listening on Port 4005')
})