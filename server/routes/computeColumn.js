const express = require('express');
const router = express.Router();
const Abl =  require("../abl/computeColumn/computeColumn")
const abl = new Abl();


/* GET home page. */
router.post('/plus', (req,res)=>{
    abl.plus(req,res);
});
router.post('/minus', (req,res)=>{
    abl.minus(req,res);
});
router.post('/multiply', (req,res)=>{
    abl.multiply(req,res);
});
router.post('/divide', (req,res)=>{
    abl.divide(req,res);
});
router.post('/spectrum', (req,res)=>{
    abl.spectrum(req,res);
});
router.post('/fourier-filter', (req,res)=>{
    abl.fourierFilter(req,res);
});

module.exports = router;
