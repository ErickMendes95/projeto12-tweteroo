import express from "express";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())

app.post("/sign-up", (req, res) => {

})

app.post("/tweets", (req, res) => {

})

app.get("/tweets", (req, res) => {

})

app.listen(5000)