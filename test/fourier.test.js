const Fourier = require("../server/abl/computeColumn/fourier");
const ComplexNumber = require("../server/abl/computeColumn/complexNumber");
let randomData = Fourier.randomData();
let spectrum = Fourier.dft(randomData);
let amplSpectrum = Fourier.amplSpectrum(spectrum);
let idft = Fourier.idft(spectrum, 0);

test("discrete fourier transform",()=>{
    expect(spectrum).toBeInstanceOf(Array);
    expect(spectrum[2]).toBeInstanceOf(ComplexNumber);
});
test("compute spectrum in real numbers",()=>{
    expect(amplSpectrum).toBeInstanceOf(Array);
    expect(amplSpectrum[2]).toBeGreaterThanOrEqual(0);
});
test("fourier filter",()=>{
    expect(idft).toBeInstanceOf(Array);
    expect(idft[2]).toBeInstanceOf(ComplexNumber);
});