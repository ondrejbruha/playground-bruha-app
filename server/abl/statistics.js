class Statistics{
    static max(data) {
        return Math.max(...data);
    }
    static min(data){
        return Math.min(...data);
    }
    static mean(data){
        let sum = 0;
        for(let d of data){
            sum = sum + d;
        }
        sum = sum / data.length;
        return sum;
    }
    static median(data){
        data = data.sort();
        if(data.length%2){
            return (data[(data.length-1)/2] + data[(data.length-1)/2 + 1])/2
        }
        return data[data.length / 2];
    }
}
module.exports = Statistics;