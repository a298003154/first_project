module.exports = {
  plugins: [
    //CSS浏览器兼容
    require("postcss-import"),
    require("autoprefixer")({ browsers: ["last 10 versions"] })
  ]
};
