const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const path = require('path')
const config = require('config')


const app = express(); 

//Body MiddleWare 

app.use(express.json());

//DB config
const DbConfig = config.get('mongoURI')


//connect DB config
mongoose.connect(DbConfig, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('mongoDB connected')
    })
    .catch(err => {
        console.log("operation failed", err)
    })

     
//use route   
app.use('/api/items', require('./routes/api/items'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))

//serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));


    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
    
const port = process.env.PORT || 5000;
    

// server starting port 
app.listen(port, () => console.log(`server started on port ${port}`));


