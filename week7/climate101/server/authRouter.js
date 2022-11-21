const express = require("express")
const authRouter = express.Router()
const Auth = require('../models/user.js')

// Get All Auths
authRouter.get("/", (req, res, next) => {
Auth.find((err, auths) => {
    if(err){
    res.status(500)
    return next(err)
    }
    return res.status(200).send(auths)
})
})

// Add new auth
authRouter.post("/", (req, res, next) => {
const newAuth = new Auth(req.body)
newAuth.save((err, savedAuth) => {
    if(err){
    res.status(500)
    return next(err)
    }
    return res.status(201).send(savedAuth)
})
})

// Delete Auth
authRouter.delete("/:authId", (req, res, next) => {
Todo.findOneAndDelete(
    { _id: req.params.authId },
    (err, deletedAuth) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(`Successfully delete auth: ${deletedAuth.title}`)
    }
)
})

// Update Todo
authRouter.put("/:todoId", (req, res, next) => {
Auth.findOneAndUpdate(
    { _id: req.params.todoId },
    req.body,
    { new: true },
    (err, updatedAuth) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(201).send(updatedAuth)
    }
)
})

module.exports = authRouter