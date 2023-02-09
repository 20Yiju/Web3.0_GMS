const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const db = require('./config/db')
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(cors());
app.get('/', (req, res)=>{
    console.log('/root');
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/a_dashboard/a_studentlist', (req, res)=>{
    console.log('/a_dashboard/a_studentlist')
    db.query("select * from TakeStudents", (err, data) => {
        if(!err) {
            console.log(data)
        }
        else {
            console.log(err)
        }
        res.send(data)
    })
})

app.get('/dashboard/home', (req, res)=>{
    console.log('/dashboard/home')
    db.query("select * from HomeTest", (err, data) => {
        if(!err) {
            console.log(data)
        }
        else {
            console.log(err)
        }
        res.send(data)
    })
})

app.listen(PORT, ()=>{
    console.log(`Server On : http://localhost:${PORT}`)
})