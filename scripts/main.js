$ = jQuery = require("jquery")
require('bootstrap')
toastr = require('toastr')

require('./routes/config-routes')

$(function () {
	var riot = require('riot')
	var tagSiteVersion = require('../Content/tags/components/site-version/site-version.tag')
	riot.mount('#divSiteVersion', tagSiteVersion)
})

toastr.options = {
    positionClass: "toast-top-right",
    showDuration: 300,
    hideDuration: 300,
    timeOut: 5000,
    extendedTimeOut: 5000,
    showMethod: "slideDown",
    hideMethod: "slideUp",
    closeMethod: "slideUp",
}
