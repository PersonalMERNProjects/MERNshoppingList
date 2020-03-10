const express = require('express')
const router = express.Router();


//Item Model
const Item = require('../../models/Item')

//@route GET api/items
//@desc GET All Items
//@access Public

router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then((items) => {
            res.json({
                items: items,
                status: "ok",
                status_code: 200
        })
        })
        .catch((err) => {
            res.status(404).json({
                success: false,
                message: "Query operation failed!"
            })
        })
}) 


//@route Post/ create api/items
//@desc Post/ create an Items
//@access Public

router.post('/', (req, res) => {
    const newItem = new Item({
      name: req.body.name  
    });

    newItem.save()
        .then((item) => {
            res.json({
                item: item,
                message: "Item Created Successfully!",
                status: "Ok",
                status_code: 200
            })
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: "Create operation failed!",
            
            })
        })
    
}) 

//@route Delete api/items
//@desc Delete Item
//@access Public

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then((item) => {
            item.remove()
        })
        .then(() => {
            res.json({
                success: true,
                message: "Item deleted Successfully!"
                
            });
        })
        .catch((err) => {
            res.status(404).json({
                success: false,
                message: "Delete operation failed!",
        })
    })
}) 
 



module.exports = router;