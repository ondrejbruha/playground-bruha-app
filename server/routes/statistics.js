const express = require('express');
const router = express.Router();
const Abl = require("../abl/statistics/statisticsAbl");
const abl = new Abl();

/* GET home page. */
router.post('/max', (req,res)=>{
    abl.max(req,res);
});
router.post('/min', (req,res)=>{
    abl.min(req,res);
});
router.post('/mean', (req,res)=>{
    abl.mean(req,res);
});
router.post('/median', (req,res)=>{
    abl.median(req,res);
});

module.exports = router;
