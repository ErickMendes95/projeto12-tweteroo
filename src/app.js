import express from "express";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())

const arrayUsuarios = []
const arrayTweets = []

app.post("/sign-up", (req, res) => {
    const userinfo = req.body
    arrayUsuarios.push(userinfo)
    console.log(arrayUsuarios)

    res.status(201).send("OK")
})

app.post("/tweets", (req, res) => {
    const { username } = req.body
    const { tweet } = req.body
    
    const usuario = arrayUsuarios.find(item => item.username === username)

    if(!usuario){
        res.status(401).send("UNAUTHORIZED")
    }
    arrayTweets.push(tweet)
    res.status(201).send("OK")
})

app.get("/tweets", (req, res) => {

})

app.listen(5000)