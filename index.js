const express = require("express");
const bodyParser = require("body-parser");
const port =3000;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req ,res){
    res.sendFile(__dirname + "/swan.html");
});


app.post("/biswa", function(req ,res){
    res.sendFile(__dirname + "/swan2.html");
});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);

});
