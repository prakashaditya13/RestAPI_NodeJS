const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const Cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const postsRouter = require('./routes/posts');
//add middlewares
 
app.use('/posts',postsRouter);

app.get('/home', (req, res) => {
    res.send("We are at home");
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => { console.log("connected to DB"); })

app.listen(3000);