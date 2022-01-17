'use strict'

const express = require('express')
const app = express()
const cors = require("cors");
const jsonParser = express.json()
const fs = require('fs');

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use('/', express.static(__dirname + '/public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/ListStudents.html')
})

//data output
app.post('/getInfo', jsonParser, (req, res) => {
    if (!req.body) res.sendStatus(400)
    fs.readFile('info.json', 'utf8', (err, data) => {
        if (err) console.log(err)
        
        res.send(JSON.stringify({
            'students' : data
        }))
    })
});
//delete by id
app.post('/delete', jsonParser, (req, res) => {
    if (!req.body) res.sendStatus(400)

    fs.readFile('info.json', 'utf-8', (err, data) => {
        let array = JSON.parse(data)
        let filterArray = array.filter((item) => JSON.parse(item).listId !== req.body.listId)
        fs.writeFile('info.json', JSON.stringify(filterArray), (err) => {
            if (err) console.log(err)
        })
    })
    res.send()
})
//editing by id
app.post('/edit', jsonParser, (req, res) => {
    if (!req.body) res.sendStatus(400)

    fs.readFile('info.json', 'utf-8', (err, data) => {
        let array = JSON.parse(data)
        let mapArray = array.map((item) => {
            if (JSON.parse(item).listId == req.body.listId){
                let edit = JSON.parse(item)
                edit.listId = req.body.listId
                edit.firstName = req.body.firstName
                edit.secondName = req.body.secondName
                edit.age = req.body.age
                edit.speciality = req.body.speciality
                return JSON.stringify(edit)
            }
            return item
        })
        fs.writeFile('info.json', JSON.stringify(mapArray), (err) => {
            if (err) console.log(err)
        })
    })
    res.send()
})
//adding to a file
app.post('/files', jsonParser, (req, res) => {
    if (!req.body) res.sendStatus(400)

    fs.readFile('info.json', 'utf-8', (err, data) => {
        if (!data){
            let arrayObjectJSON = []
            arrayObjectJSON.push(JSON.stringify({
                'listId' : req.body.listId,
                'firstName' : req.body.firstName,
                'secondName' : req.body.secondName,
                'age' : req.body.age,
                'speciality' : req.body.speciality
            }))
            fs.writeFile('info.json', JSON.stringify(arrayObjectJSON), (err) => {
                if (err) console.log(err)
            })
        }
        else{
            let array = JSON.parse(data)
            array.push(JSON.stringify({
                'listId' : req.body.listId,
                'firstName' : req.body.firstName,
                'secondName' : req.body.secondName,
                'age' : req.body.age,
                'speciality' : req.body.speciality
            }))
            fs.writeFile('info.json',JSON.stringify(array), (err) => {
                if (err) console.log(err)
            })
        }
    })
    fs.readFile('info.json', 'utf-8', (err, data) => {
        if (err) console.log(`Error: ${err}`)
        res.send(JSON.stringify({
            'students': data
        }))
    })
})


app.listen(3000, () => console.log("Сервер запущен..."))
