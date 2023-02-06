const TemplateData = require("../server/abl/template_data/template_data");

let templateData = new TemplateData();

test("nois data generation", ()=>{
    expect(templateData.generateRandomNois(0,1,100)).toBeInstanceOf(Array);
    expect(templateData.generateRandomNois(0,1,100)[2]).toBeGreaterThanOrEqual(0);
});
test("linear data", ()=>{
    expect(templateData.generateLinearData(0, 10,100)).toBeInstanceOf(Array);
    expect(templateData.generateLinearData(0, 10,100)[2]).toBeGreaterThanOrEqual(0);
});
test("polynomial data", ()=>{
    expect(templateData.generatePolynomialData(0,3,2,100)).toBeInstanceOf(Array);
});
test("sinus data", ()=>{
    expect(templateData.generateSin(1,20,100)).toBeInstanceOf(Array)
    expect(templateData.generateSin(1,20,100)[2]).toBeGreaterThanOrEqual(-1);
});
test("const data",()=>{
    expect(templateData.generateConstant(6,100)).toBeInstanceOf(Array);
    expect(templateData.generateConstant(6,100)[2]).toBe(6);
});