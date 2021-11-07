require('./db/mongoose');
const express = require("express");
const app = express();
const importData = require("./data.json");

let port = process.env.PORT || 5000;

app.get("/", (req, res)=>{
    res.send("I am Nguyen Van Tuan 18521606")
});

app.get("/players", (req,res)=>{
    res.send(importData);
});

app.listen(port, ()=>{
    console.log(`Example app is listening on port http://localhost:${port}`);
});