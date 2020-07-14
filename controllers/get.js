const express = require('express');
const router = express.Router();

const Product = require('../models/getme.js');

// Routes

// Index
router.get('/', (req, res) => {
    Product.find({}, (err, allProducts) => {
    if (err) {
        console.log(err)
    } else {
        res.render('index.ejs', {
        products: allProducts
        })
    }
    })
})

// new
router.get('/new', (req, res) => {
    res.render('new.ejs')
})


// create 
router.post('/', (req, res) => {
    Product.create(req.body, (err, createdItem) =>{
    if (err){
        console.log(err)
    } else {
        console.log(createdItem)
        res.redirect('/getme')
    }
    } )
})


// show
router.get('/:id', (req, res) =>{
    Product.findById(req.params.id, (err, foundItem)=>{
    res.render('show.ejs', {
        item: foundItem,
    })
    })
})

// delete
router.delete('/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, { useFindAndModify: false }, (err, data)=>{
    res.redirect('/getme') 
    })
})


// edit
router.get('/:id/edit', (req, res)=>{
    Product.findById(req.params.id, (err, foundItem)=>{ 
        res.render('edit.ejs', 
        { item: foundItem,
    })
    })
})

// update
router.put('/:id', (req, res) =>{
    Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedItem)=>{
    res.redirect('/getme')
    })
}
)



module.exports = router;