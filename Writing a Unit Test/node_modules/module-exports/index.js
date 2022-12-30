var through = require('through2')

var buffer = Buffer('module.exports = ')
var semicolon = Buffer(';')

module.exports = function(opt) {
    var stream = through(write, end)
    stream.push(buffer)
    return stream

    function write (buf, enc, next) {
        this.push(buf)
        next()
    }
    function end (next) {
        if (!opt || opt.semicolon !== false)
            this.push(semicolon)
        this.push(null)
        next()
    }
}