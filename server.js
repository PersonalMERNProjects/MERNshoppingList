const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const path = require('path')



const app = express(); 

//Body MiddleWare 

app.use(express.json());

//DB config
const DbConfig = require('./config/keys').uri
const uri= process.env.MONGODB_URI || "mongodb+srv://Emik:Test1234@cluster0-tipko.mongodb.net/test?retryWrites=true&w=majority" 
//connect DB config
mongoose.connect(DbConfig, { useNewUrlParser: true, useUnifiedTopology: true, })
    .then(() => {
        console.log('mongoDB connected')
    })
    .catch(err => {
        console.log("operation failed", err)
    })

    
//use route   
app.use('/api/items', items)

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


