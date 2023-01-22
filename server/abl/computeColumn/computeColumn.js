const Ajv = require("ajv").default;
const ajv = new Ajv();

const schema = {
    type: "object",
    properties: {
        a: {type: "array", items: {type: "number"}},
        b: {type: "array", items: {type: "number"}}
    },
    required: ["a", "b"]
}
class ComputeColumn{
    plus(req, res){
        const valid = ajv.validate(schema, req.body);
        if(!valid){
            res.status(400).send("invalid input");
            return;
        }
        let maxLen = Math.max(req.body.a.length, req.body.b.length);
        let output = [];
        for(let i = 0; i < maxLen; i++){
            output.push(req.body.a[i] + req.body.b[i]);
        }
        res.json(output);
    }
    minus(req,res){
        const valid = ajv.validate(schema, req.body);
        if(!valid){
            res.status(400).send("invalid input");
            return;
        }
        let maxLen = Math.max(req.body.a.length, req.body.b.length);
        let output = [];
        for(let i = 0; i < maxLen; i++){
            output.push(req.body.a[i] - req.body.b[i]);
        }
        res.json(output);
    }
    multiply(req,res){
        const valid = ajv.validate(schema, req.body);
        if(!valid){
            res.status(400).send("invalid input");
            return;
        }
        let maxLen = Math.max(req.body.a.length, req.body.b.length);
        let output = [];
        for(let i = 0; i < maxLen; i++){
            output.push(req.body.a[i] * req.body.b[i]);
        }
        res.json(output);
    }
    divide(req,res){
        const valid = ajv.validate(schema, req.body);
        if(!valid){
            res.status(400).send("invalid input");
            return;
        }
        let output = [];
        let maxLen = Math.max(req.body.a.length, req.body.b.length);
        for(let i = 0; i < maxLen; i++){
            output.push(req.body.a[i] / req.body.b[i]);

        }

        res.json(output);

    }
}
module.exports = ComputeColumn;