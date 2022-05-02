"use strict"
import express from "express"

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())

app.post("/random_element", (req, res)=>{
    postList = req.body.list
    postLength = postList.length
    return postList[between(0, postLength)]
})

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }

app.listen(PORt, ()=>{
    console.log(`Server listening on port: ${PORT}`)
})