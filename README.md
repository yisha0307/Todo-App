# Todo-App

demo:  https://yisha0307.github.io/Todo-App/gh-pages/todo-app.html    

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

###2、mapStateToProps和mapDispatchToProps:    格式：
```
const mapStateToProps = (state,ownProps) =>{
	return {
		active: ownProps.filter === state.visibilityFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {dispatch({type: 'SET_VISIBILITY', filter: ownProps.filter})}
	}
}

const FilterLink = connect(
	mapStateToProps,
  	mapDispatchToProps
)(Link)
```
