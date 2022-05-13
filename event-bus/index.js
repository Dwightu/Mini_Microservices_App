const express = require('express')
const bodyparser = require('body-parser')
const axios = require('axios')
const app = express();


app.use(bodyparser.json());

app.post('/events', (req, res) => {
    const event = req.body;

    //Port 4000:Posts
    axios.post('http://localhost:4000/events', event)
    //Port 5000:Comments
    axios.post('http://localhost:5000/events', event)
    //Post 6000:Query Service
    axios.post('http://localhost:4005/events', event)

    res.send({ status: 'OK' });
})

//Port 7000: Event Bus
app.listen(7000, () => {
    console.log('Listening on Port 7000')
})