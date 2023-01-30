const Statistics = require("../server/abl/statistics/statistics");
const s = new Statistics();

let arr = [1,2,3,4,5];
test("mean", ()=>{
    expect(Statistics.mean(arr)).toBe(3);
});
test("median", ()=>{
    expect(Statistics.median(arr)).toBe(3); //blbe implementovany median...
});
test("max", ()=>{
    expect(Statistics.max(arr)).toBe(5);
});
test("min", ()=>{
    expect(Statistics.min(arr)).toBe(1);
})