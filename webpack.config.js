// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

// const webpack = require('atool-build/lib/webpack');

const path = require('path');
// const glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = function (webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', { //默认导入antd样式 ps:zxy/2017-08-03
    style: true,
    libraryName: 'antd'
  }]);
  webpackConfig.plugins.unshift(
    new CopyWebpackPlugin([
        {
          from: './favicon.ico'
        },
        {
          from: './static/css',
          to: './css'
        },
        {
            from: './static/js',
            to: './js'
        }, {
          from: './static/img',
          to: './images'
        }, {
          from: './static/iconfont',
          to: './iconfont'
        }, {
          from: './static/plugin',
          to: './static/plugin'
        }, {
          from: './dlls',
          to: './dlls'
        }])
  );

  const widthDoc = process.argv[process.argv.length - 1] === 'doc'

  webpackConfig.plugins.push(
    new webpack.DefinePlugin({
 
        __CONTEXT__: JSON.stringify(process.env.CONTEXT_PATH),

    })
  );



  // Enable this if you have to support IE8.
  webpackConfig.module.loaders.unshift({
    test: /\.js[x]?$/,
    loader: 'es3ify-loader'
  });
  //加上markdown的解析
  webpackConfig.module.loaders.push({
    test: /\.md$/,
    loader: 'html!markdown'
  });
  webpackConfig.plugins.find((item) => {
    if (item.chunkNames === 'common') {
      // item.names = ['common', 'manifest'];
      item.filenameTemplate = 'js/common.js';
      return true;
    }
    return false;
  })
  webpackConfig.output.filename = '[name].[chunkHash:8].js';
  webpackConfig.output.chunkFilename = 'chunks/[name]_[chunkhash:8].js';


  // Support CSS Modules
 // Parse all less files as css module.
 webpackConfig.module.loaders.forEach((loader, index) => {
   if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
     loader.include = /node_modules/;
     loader.test = /\.less$/;
   }
   if (loader.test.toString() === '/\\.module\\.less$/') {
     loader.exclude = /node_modules/;
     loader.test = /\.less$/;
   }
   if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.css$') > -1) {
     loader.include = /node_modules/;
     loader.test = /\.css$/;
   }
   if (loader.test.toString() === '/\\.module\\.css$/') {
     loader.exclude = /node_modules/;
     loader.test = /\.css$/;
   }
   if (loader.test.toString().includes('(png|jpg|jpeg|gif)')) {
      // loader.loader = 'url?limit=8192&name=images/[name]_[hash:8].[ext]';
      loader.loader = 'file?name=images/[name]_[hash:8].[ext]';
      loader.include = [
        path.join(process.cwd(), './src'),
        path.join(process.cwd(), './static/img')
      ]
   }
  
 });

  // Load src/entries/*.js as entry automatically.
//   const files = glob.sync('./src/entries/*.js');
//   const newEntries = files.reduce((memo, file) => {
//     const name = path.basename(file, '.js');
//     memo[name] = file;
//     return memo;
//   }, {});
//   webpackConfig.entry = Object.assign({}, webpackConfig.entry, newEntries);
  webpackConfig.resolve.alias = webpackConfig.resolve.alias || require('./alias')

  return webpackConfig;
};
