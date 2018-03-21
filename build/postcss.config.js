
module.exports = {
    plugins: (loader) => [
        //CSS浏览器兼容
        require('postcss-import'),
        require('autoprefixer')(
            { browsers: ['last 5 versions'] }
        )
    ]
}