import createPDF from "./src/pdf-generator"; // importamos el generador

const HTML_TEMP = `
<h1>HorchataJS El Salvador</h1>
<p>Ladies and gentlemen, get up on your feet and make some noise because <strong>masmerino</strong> is in the house.</p>
`;

// Agregar settings de PhantomJS segun sea necesario
/**
 {
   url: '', URL a ser generada, esta debe ser accesible, algunos servidores bloquean la request
   html: '<p>Ladies and gentlemen, get up on your feet and make some noise because masmerino is in the house.</p>'
 }
 ver documentacion de la libreria para mas settings
 https://www.npmjs.com/package/phantom-html-to-pdf
*/
const settings = {
  filename: 'output',
  phamtomSettings: {
    html: HTML_TEMP
  }
}

createPDF(settings)
.then(filename => {
  console.log(`${filename} fue generado`);
  console.log('CTR + C para finalizar');
})
.catch(error => {
  console.log('Error en generacion del archivo', error);
  console.log('CTR + C para finalizar');
});
