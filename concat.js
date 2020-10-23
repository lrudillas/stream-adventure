const concat = require('concat-stream')

process.stdin.pipe(concat(function (src) {
    const str = src.toString().split('').reverse().join('')
    process.stdout.write(str)
}))