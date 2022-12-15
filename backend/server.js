import express from "express";
import data from './data.js'
import getFetch from './API.js'

const app = express()

app.get("/api/allquestions", (req, res) => {
    res.send(data.questions)
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    getFetch()
    console.log(`server is ready! http://localhost:${port}`)
})