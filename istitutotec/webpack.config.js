const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  devServer: {
    historyApiFallback: true
  },
  
  resolve: {
    extensions: [
      ".js",
      ".ts",
      ".tsx"
    ]
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ]

};
