import createPDF from "./src/pdf-generator";

const settings = {
  filename: 'output',
  phamtomSettings: {
    url: 'http://localhost/loremp'
  }
}

createPDF(settings)
.then(filename => {
  console.log(`${filename} fue generado`);
})
.catch(error => {
  console.log('Error en generacion del archivo', error);
});
