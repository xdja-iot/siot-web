const path = require('path')

function resolve (dir) {
	console.log(path.join(__dirname, dir));
}

resolve('aaaa');