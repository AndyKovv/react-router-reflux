var fs = require('fs'); //File system nodejs


var babelrc = fs.readFileSync('./.babelrc');
var config;

try{
	config = JSON.parse(babelrc);
} catch (err) {
	console.error('==> ERROR: Error parsing your .babelrc ');
	console.error(err);
}
require('babel-core/register')(config);
require('../server');