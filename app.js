const express = require('express');
const app = express();


app.get("/home", (req, res) => {
    res.json(moviedata=[{name:"movie1",releaseDate:"jan 2021"},

        {name:"movie2",releaseDate:"march 2021"}]);
   });








app.listen(3000, () => {
    console.log("Server running on port 3000");
   });