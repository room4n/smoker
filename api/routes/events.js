const express = require('express');
const router = express.Router();
const con = require("../../config/database");

router.get('/', (req, res, next)=>{
    con.query("select * from exampleTable",(err,result)=>{
        if (err) {
            res.send(err.message)
        } else {
            res.send(result)
        }
    })
})

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message: 'Post request handled properly'
    });
});

module.exports = router;