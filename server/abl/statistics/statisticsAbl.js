let Ajv = require("ajv");
let Statistics = require("./statistics.js");


class StatisticsAbl{
    constructor(){
        this.ajv = new Ajv();
    }
    max(req,res){
        try {
            let schema = {
                type: "array",
                items: {type: "number"}
            }
            let valid = this.ajv.validate(schema, req.body);
            if(!valid){
                res.status(400).send("invalid input");
            }
            res.json(Statistics.max(req.body));
        } catch (e) {
            res.status(500).send(e);
        }
    }
    min(req,res){
        try {
            let schema = {
                type: "array",
                items: {type: "number"}
            }
            let valid = this.ajv.validate(schema, req.body);
            if(!valid){
                res.status(400).send("invalid input");
            }
            res.json(Statistics.min(req.body));
        } catch (e) {
            res.status(500).send(e);
        }
    }
    mean(req,res){
        try {
            let schema = {
                type: "array",
                items: {type: "number"}
            }
            let valid = this.ajv.validate(schema, req.body);
            if(!valid){
                res.status(400).send("invalid input");
            }
            res.json(Statistics.mean(req.body));
        } catch (e) {
            res.status(500).send(e);
        }
    }
    median(req,res){
        try {
            let schema = {
                type: "array",
                items: {type: "number"}
            }
            let valid = this.ajv.validate(schema, req.body);
            if(!valid){
                res.status(400).send("invalid input");
            }
            res.json(Statistics.median(req.body));
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

module.exports = StatisticsAbl;