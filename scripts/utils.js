var riot = require('riot')

module.exports = {

    montarTagLoading: function(elemento) {
        var tag_loading = require('../content/tags/components/loading.tag')
        riot.mount(elemento, tag_loading)
    },

    erroAjax: function (xhr, status, error) {
        toastr.error(error)
    }

}
