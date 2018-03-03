import config from './config';

var conversion = require("phantom-html-to-pdf")({
  phantomPath: require("phantomjs-prebuilt").path,
  tmpDir: config.TMP_DIR
});

const createPDF = fileSettings => {
  
}

export default createPDF;