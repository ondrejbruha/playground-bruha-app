const TemplateData = require("../server/abl/template_data/template_data");

let templateData = new TemplateData();

test("nois data generation", ()=>{
    expect(templateData.generateRandomNois(0,1,100)).toBeInstanceOf(Array);
});
test("linear data", ()=>{
    expect(templateData.generateLinearData(0, 10,100)).toBeInstanceOf(Array);
});
test("polynomial data", ()=>{
    expect(templateData.generatePolynomialData(0,3,2,100)).toBeInstanceOf(Array);
});
test("sinus data", ()=>{
    expect(templateData.generateSin(1,20,100)).toBeInstanceOf(Array);
});
test("const data",()=>{
    expect(templateData.generateConstant(6,100)).toBeInstanceOf(Array);
});