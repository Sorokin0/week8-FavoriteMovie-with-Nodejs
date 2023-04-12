const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) =>{
    res.send('Hello, I am Aleksander. Nice to meet you!') 
});

app.listen(3000, () =>{
    console.log('Server is running on Port 3000');
});
