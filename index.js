const express = require("express");
const app = express();
app.listen(3000, ()=>{
    console.log("Server running on port 3000...");
});

app.get("/", (req, res) => {
    res.send("go to link /data.txt");
});

app.get("/data", (req, res) =>{
    res.download("proba.txt");
});

app.get("/data2", (req, res) =>{
    res.send("otvorili ste stranicu");
});