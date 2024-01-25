const express = require('express')
const app = express()
const port = 4000;

// endpoint 1: text response
app.get('/textmessage', (req, res) => {
    res.send('This is a simple text response.')
});

//endpoints 2: json response
app.get('/jsonmessage', (req, res) => {
    const jsonData = {
        message: 'This is a JSON response.',
        timestamp: new Date()
    };
    
    res.json(jsonData);
});

//endpoints 3: html response
app.get('/htmlmessage', (req, res) => {
    res.send('<h1>This is a simple html response.</h1>')
});

//endpoints 4: html greeting response
app.get('/info', (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.send(`<h1>Hello user!</h1><p>Request received at: ${currentTime}</p>`)
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
