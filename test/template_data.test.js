const TemplateData = require("../server/abl/template_data/template_data");

let templateData = new TemplateData();

test("nois data generation", ()=>{
    expect(templateData.generateRandomNois()).toBeInstanceOf(Array);
});
test("linear data", ()=>{
    expect(templateData.generateLinearData()).toBeInstanceOf(Array);
});
test("polynomial data", ()=>{
    expect(templateData.generatePolynomialData()).toBeInstanceOf(Array);
});
test("sinus data", ()=>{
    expect(templateData.generateSin()).toBeInstanceOf(Array);
});
test("const data",()=>{
    expect(templateData.generateConstant()).toBeInstanceOf(Array);
});