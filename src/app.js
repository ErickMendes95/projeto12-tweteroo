import express from "express";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())

const arrayUsuarios = []
const arrayTweet = []

app.post("/sign-up", (req, res) => {
    const {username} = req.body
    const {avatar} = req.body

    if(username === '' || username === null || typeof username !== 'string'){
        res.status(400).send("Preencha o username")
        return
    }

    if(avatar === '' || avatar === null || typeof avatar !== 'string'){
        res.status(400).send("Preencha o avatar")
        return
    }

    const userinfo = req.body
    arrayUsuarios.push(userinfo)

    res.status(201).send("OK")
})

app.post("/tweets", (req, res) => {
    const { username } = req.body
    const { tweet } = req.body

    if(tweet === '' || tweet === null || typeof tweet !== 'string'){
        res.status(400).send("Preencha o tweet")
        return
    }

    const usuario = arrayUsuarios.find(item => item.username === username)
    
    if(!usuario){
        res.status(401).send("UNAUTHORIZED")
    }
    let usertweet = {...usuario,tweet}
    arrayTweet.push(usertweet)
    
    res.status(201).send("OK")
})

app.get("/tweets", (_, res) => {
    const arrayTweetReverse = [...arrayTweet]

    const ultimosTweets = arrayTweetReverse.reverse().slice(0, 10)

    res.status(200).send(ultimosTweets)
})

app.listen(5000)