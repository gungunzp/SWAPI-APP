https://www.youtube.com/watch?v=MRlBKfGktwI
https://www.valentinog.com/blog/webpack-tutorial/



`npm init -y`

`npm i webpack webpack-cli -D`

`mkdir src`
`cd src`
`touch index.js`
`cd ..`

***********************************************
`explorer package.json`
**************

"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
}

or

"scripts": {
  "dev": "webpack --mode development ./foo/src/js/index.js --output ./foo/main.js",
  "build": "webpack --mode production ./foo/src/js/index.js --output ./foo/main.js"
}

**************************************


`npm i babel-core babel-loader babel-preset-env -D`


add if you want to use ES experimental features:

`npm i babel-preset-stage-0 -D`


///////////////////////////////////////////////
`touch webpack.config.js`
`explorer webpack.config.js`
///////////////////////////
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
***************
in package.json
******************
"scripts": {
    "dev": "webpack --mode development --module-bind js=babel-loader",
    "build": "webpack --mode production --module-bind js=babel-loader"
  }
******************
///////////////////////////////////////////////



`npm i webpack-dev-server -D`

***************
in package.json
******************
"scripts": {
  "start": "webpack-dev-server --mode development --open",
  "build": "webpack --mode production"
}

or

"scripts": {
  "build": "webpack --mode production --progress --colors",
  "dev": "webpack-dev-server --mode development --progress --colors"
},

******************


`touch src/index.html`


`npm i html-webpack-plugin -D`

// to minify html while building
`npm i html-loader -D`

///////////////////////////////////////////////
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
///////////////////////////////////////////////

`npm i node-sass -D`

`npm i css-loader style-loader sass-loader -D`


!!!with @next
`npm i extract-text-webpack-plugin@next -D`


`npm i react react-dom -S`

`npm i babel-preset-react -D`

// `npm i react-hot-loader -D`


// for fonts
`npm i copy-webpack-plugin -D`


`npm i normalize.css -S`
///////////////////////////////////////////////
    require('copy-webpack-plugin')([
      { from: 'node_modules/normalize.css/normalize.css', to: 'css/normalize.css' },
      // { from: 'src/fonts', to: 'fonts' }
    ]),
///////////////////////////////////////////////


// for async await
`npm i babel-polyfill -D`


// from Den Kuzn `file-loader style-loader`
// for images/svg/...
`npm i file-loader -D`
///////////////////////////////////////////////
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/,
        exclude: /node_modules/,
        use: 'file?limit=10000&name=img/[name]-[hash].[ext]'
      }
///////////////////////////////////////////////


`npm i react-router-dom -S`


`npm i redux react-redux -S`

`npm i redux-thunk -S`

**********************************
https://www.codecademy.com/articles/react-setup-v
```
npm init
npm i -S {react,react-dom}
npm i -D babel-{core,loader} babel-preset-react
npm i -D webpack webpack-dev-server html-webpack-plugin
```