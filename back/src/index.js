const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const data = require('./data.json');

//routes
app.get('/api/data/list', (req, res) => {
    res.json(data);
});

//server 
app.listen(3000, () => {console.log("Server running at port 3000") ;});