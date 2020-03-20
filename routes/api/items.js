const express = require('express')
const router = express.Router();
const auth = require('../../middleware/auth')

//Item Model
const Item = require('../../models/Item')

//@route GET api/items
//@desc GET All Items
//@access Private

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
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
                message: "Query operation failed!",
                status_code: 404
            })
        })
})


//@route Post/ create api/items
//@desc Post/ create an Item
//@access Private

router.post('/', auth, (req, res) => {

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
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: "Create operation failed!",
                status_code: 500,
                error: error

            })
        })

})

//@route Delete api/items
//@desc Delete Item
//@access Private

router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
        .then((item) => {
            item.remove()
        })
        .then(() => {
            res.json({
                success: true,
                message: "Item deleted Successfully!",
                status_code: 200


            });
        })
        .catch((err) => {
            res.status(404).json({
                success: false,
                message: "Delete operation failed!",
                status_code: 404

            })
        })
})

//@route get single item api/items
//@desc get single Item
//@access Private

router.get('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
        .then((item) => {
            res.json({
                item: item,
                success: true,
                message: "Item retrieved Successfully!",
                status_code: 200
            });
        })
        .catch((err) => {
            res.status(404).json({
                success: false,
                message: "retrieve operation failed!",
                status_code: 404

            })
        })
})




module.exports = router;