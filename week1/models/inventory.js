const express = require("express");
const app = express();
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Connect to DB
mongoose.connect('mongodb://localhost:27017/inventorydb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("Connected to the DB")
)

app.get('/', (req, res) => {
    res.send("Good Morning, Dave.");
});


// Server Listen
app.listen(3000, () => {
    console.log("The App is listening on port 3000.")
});

// Schema
const inventorySchema = new Schema({
    item: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 1
    }
})

module.exports = mongoose.model('Inventory', inventorySchema)
