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
    db.query("select * from root.TakeStudents", (err, data) => {
        if(!err) {
            console.log(data)
        }
        else {
            console.log(err)
        }
        res.send(data)
    })
    //res.send([
        // {
        //     profID: '1234',
        //     studentName: '홍길동',
        //     studentID: '22400012',
        //     isRetake: 0
        //   },
        //   {
        //     profID: '1234',
        //     studentName: '김한동',
        //     studentID: '22400314',
        //     isRetake: 1
        //   },
        //   {
        //     profID: '1234',
        //     studentName: '알라딘',
        //     studentID: '22400001',
        //     isRetake: 1
        //   },
        //   {
        //     profID: '1234',
        //     studentName: '슈렉',
        //     studentID: '22400678',
        //     isRetake: 0
        //   },
        //   {
        //     profID: '1234',
        //     studentName: '모아나',
        //     studentID: '22400205',
        //     isRetake: 0
        //   }
    //]);
})

app.listen(PORT, ()=>{
    console.log(`Server On : http://localhost:${PORT}`)
})