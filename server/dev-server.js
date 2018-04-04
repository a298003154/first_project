var path = require('path'),
    http = require('http'),
    Koa = require('koa'),
    app = new Koa(),
    opn = require('opn'),
    webpack = require('webpack'),
    webpackConfig = require('../build/webpack.config'),
    compiler = webpack(webpackConfig),
    koaMiddleware = require('koa-webpack-middleware'),
    // devMiddleware = require('webpack-dev-middleware'),
    devMiddleware = koaMiddleware.devMiddleware,
    // hotMiddleware = require('webpack-hot-middleware');
    hotMiddleware = koaMiddleware.hotMiddleware;


var devMiddlewareInstance = devMiddleware(compiler, {
    publicPath: '/',
    stats: {
        colors: true
    }
})

var hotMiddlewareInstance = hotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
})

app.use(devMiddlewareInstance)
app.use(hotMiddlewareInstance)

app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// error logger
app.on('error', function (err, ctx) {
    console.log('error occured:', err.stack)
})

var server = http.createServer(app.callback())

server.listen(3000, function() {
    opn('http://localhost:3000');
})
