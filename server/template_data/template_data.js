function generateData(){
    let array = [];
    array.length = 1000;
    for(let i = 0; i < array.length; i++){
        array[i] = Math.cos(i)*Math.random()*i*i;
    }
    return array;
}
module.exports = generateData;