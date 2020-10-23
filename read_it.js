const { Readable } = require('stream')

const myStream = new Readable({
	read () {}
})

myStream.push(process.argv[2])
myStream.pipe(process.stdout)
