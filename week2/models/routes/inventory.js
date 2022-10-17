const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('./inventory')

// Create the router
inventoryRouter

// GET
inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, inventories) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(inventories)
    })
})

// POST
inventoryRouter.post("/", (req, res, next) => {
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedInventory) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(201).send(savedInventory)
    })
})

// DELETE
inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndDelete(
    {_id: req.params.inventoryId}, 
    (err, deletedItem) => {
        if(err){
        res.status(500)
        return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
    }
    )
})

// PUT
inventoryRouter.put("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndUpdate(
    { _id: req.params.inventoryID},
    req.body,
    {new: true},
    (err, updatedInventory) => {
        if(err){
        res.status(500)
        return next(err)
        }
        return res.status(201).send(updatedInventory)
    }
    )  
})

module.exports = movieRouter