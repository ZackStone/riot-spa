var riot_routes = require('./riot-routes')

var routes = [
    {
        id: 'page1',
        tag: require('../../content/tags/routes/page-one/page-one.tag'),
        js: require('../../content/tags/routes/page-one/page-one.js')
    },
    {
        id: 'page2',
        tag: require('../../content/tags/routes/page-two/page-two.tag'),
        js: require('../../content/tags/routes/page-two/page-two.js')
    }
]

riot_routes.createRoutes(routes)
