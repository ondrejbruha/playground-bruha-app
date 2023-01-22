
class TemplateData {
    generateDataOld(){
        let array = [];
        array.length = 1000;
        for(let i = 0; i < array.length; i++){
            array[i] = Math.cos(i)*Math.random()*i*i;
        }
        return array;
    }
    generateRandomNois(min, max, count){
        if(max < min) {
            throw new Error("invalid edges");
        }
        let range = Math.abs(max - min);
        let out = [];
        for(let i = 0; i <count; i++){
            let random = Math.random();
            random = random * range;
            random = random + min;
            out.push(random);
        }
        return out;
    }
    generateConstant(val, count){
        let out = [];
        for(let i = 0; i < count; i++){
            out.push(val);
        }
        return out;
    }
    generatePolynomialData(min,max,exp, count){
        if(max < min) {
            throw new Error("invalid edges");
        }
        let range = max - min;
        let step = range / count;
        let out = [];
        for(let i = 0; i < count; i++){
            out.push(Math.pow(i*step,exp));
        }
        return out;
    }
    generateLinearData(min, max, count){
        if(max < min) {
            throw new Error("invalid edges");
        }
        let range = Math.abs(max - min);
        let step = range / count;
        let out = [];
        for(let i = 0; i <count; i++){
            out.push(i*step);
        }
        return out;
    }
}
module.exports = TemplateData;