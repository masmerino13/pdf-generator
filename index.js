import createPDF from "./src/pdf-generator";

const settings = {
  url: 'https://www.google.com.sv',
  waitForJS: true
}

createPDF(settings);
