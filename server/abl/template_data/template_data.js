
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
        range = Math.pow(range, 1/exp);
        let step = range / count;
        let out = [];
        for(let i = 0; i < count; i++){
            out.push(Math.pow(i*step,exp) + min);
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
            out.push(i*step + min);
        }
        return out;
    }
    generateSin(ampl, freq, count){
        if(freq <= 0) {
            throw new Error("invalid edges");
        }
        let out = [];
        for(let i = 0; i <count; i++){
            out.push(Math.sin(i/freq)*ampl);
        }
        return out;
    }
}
module.exports = TemplateData;