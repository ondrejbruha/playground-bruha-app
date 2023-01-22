const express = require('express');
const router = express.Router();
const Data = require("../abl/template_data/template_data")
const {type} = require("@testing-library/user-event/dist/type");
let data = new Data();

router.get('/random-old', function(req, res, next) {
    res.json(data.generateDataOld());
});
router.post('/nois', (req, res)=>{
    if(!req.body ||  typeof req.body.min !== 'number' || typeof req.body.max !== 'number' || typeof req.body.count !== 'number'){
        const e =  new Error("invalid input type");
        res.status(400).send(e);
        return;
    }
    res.json(data.generateRandomNois(req.body.min, req.body.max, req.body.count));
});
router.post('/constant', (req,res) =>{
    if(!req.body || typeof req.body.const !== 'number' || typeof req.body.count !== 'number'){
        const e =  new Error("invalid input type");
        res.status(400).send(e);
        return;
    }
    res.json(data.generateConstant(req.body.const, req.body.count));
});
router.post('/polynomial', (req, res)=>{
    if(!req.body ||  typeof req.body.min !== 'number' || typeof req.body.max !== 'number' || typeof req.body.count !== 'number' || typeof req.body.exp !== 'number'){
        const e =  new Error("invalid input type");
        res.status(400).send(e);
        return;
    }
    res.json(data.generatePolynomialData(req.body.min, req.body.max,req.body.exp, req.body.count));
});
router.post('/linear', (req, res)=>{
    if(!req.body ||  typeof req.body.min !== 'number' || typeof req.body.max !== 'number' || typeof req.body.count !== 'number'){
        const e =  new Error("invalid input type");
        res.status(400).send(e);
        return;
    }
    res.json(data.generateLinearData(req.body.min, req.body.max, req.body.count));
});

module.exports = router;
