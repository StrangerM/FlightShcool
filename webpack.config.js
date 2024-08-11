const path = require('path');

module.exports = {
   entry: {
      main: './html/js/scripts.js',  
      class: './html/js/classie.js', 
      user: './html/js/hippo-offcanvas.js',
      select: './html/js/selectFX.js',
      scroll: './html/js/smoothscroll.js',
      scrollJS: './html/js/jquery.stellar.js',
      scrollJSS: './html/owl.carousel/owl.carousel.js'
    },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'), // output directory
  },
  mode: 'production', // or 'development' depending on your needs
};
