var riot        = require('riot')
var utils       = require('../../../../scripts/utils.js')

var tag = null
module.exports = function(opts) {
    tag = this
    tag.on('mount', function () {
        alert(opts.route.id)
    })
}
