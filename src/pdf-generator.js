import fs from 'fs';
import config from './config';

var conversion = require("phantom-html-to-pdf")({
  phantomPath: require("phantomjs-prebuilt").path
});

const createPDF = settings => {
  return new Promise((resolve, reject) => {
    try {
      const { phamtomSettings, filename } = settings; 
      conversion(phamtomSettings , function(error, pdf) {
        if(error) {
          console.log('Error in pdf conversion', error);
          reject(error);
        } else {
          const output = fs.createWriteStream(`${config.TMP_DIR}/${filename}.pdf`);
          pdf.stream.pipe(output);
          console.log('Phantom PDF creation success');
          resolve(filename);
        }
      });
    } catch (e) {
      console.log('Phantom PDF creation error', e);
      reject(e);
    }
  });
}

export default createPDF;