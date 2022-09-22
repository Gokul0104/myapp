
const { response } = require('express');
const express = require('express');
const bodyparser = require('body-parser');
const myObj = require('./userss');
const app = express();
const port = process.env.PORT || 8080;
app.use(bodyparser.urlencoded({
    extended: true
}))

console.log(myObj);
console.log(myObj.userss.some((ele) => ele.id == 1));
app.get('/userss/:id', (req, res) => {
    console.log(req.params);
    let myJson = [];
    if (myObj.userss.some((ele) => ele.id === parseInt(req.params.id))) {
        myJson = myObj.userss.filter((ele) => ele.id === parseInt(req.params.id))
    }
    res.json(myJson);
})


app.get('/user', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/users', (req, res) => {
    console.clear();
    console.log(req.body);
    res.send(`DONE:User ${req.body.user} ID ${req.body.id}`);
})

app.listen(port, () => {
    console.log(`Ready Listening on ${port}`);
})