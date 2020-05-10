const fs = require('fs');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/variables.scss', 'utf-8'),
      },
    },
  },
};
