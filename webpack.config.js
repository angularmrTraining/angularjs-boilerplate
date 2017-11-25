const path = require('path');

const dist = path.join(__dirname, 'dist');
const context = path.join(__dirname, 'src');

//console.log(dist);
module.exports = {
  entry: `${context}/app.js`,
  output: {
    path: dist,
    filename: 'blog.bundle.js'
  }
};
