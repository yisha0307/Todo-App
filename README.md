# Todo-App

几个tips:
###1、 安装font-awesome:    
在webpack.config.js里：
```
  {
      test: /\.css$/,
      loader: 'style-loader!css-loader?sourceMap'
    },{
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader'
      }
```    
需要安装url-loader；
