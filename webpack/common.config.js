// webpack plugins
const SplitChunksPlugin = require('webpack/lib/optimize/SplitChunksPlugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/bootstrap.js'),
    vendor: path.resolve(__dirname, '../src/vendor.js'),
  },

  output: {
    path: path.resolve(__dirname, '../webpack/build'), // Carpeta de salida (donde se generan los archivos)
    filename: '[name].bundle.js', // Nombre del archivo JavaScript generado
    publicPath: '/', // Ruta pública del servidor
  },  

  resolve: {
    extensions: ['.js', '.scss'],

    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'build/assets/images/',
              publicPath: 'build/assets/images/',
            },
          },
        ],
      },
      {
        test: /\.mp4$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'build/assets/videos/',
              publicPath: 'build/assets/videos/',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new SplitChunksPlugin({
      name: ['bootstrap', 'vendor'],
      minChunks: Infinity,
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'../public/index.html'), // Archivo HTML de plantilla
      filename: './index.html', // Nombre del archivo HTML generado
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, '../webpack/build')}, // Carpeta de contenido estático
    compress: true, // Habilitar compresión gzip para todo el servidor
    port: 3000, // Puerto del servidor de desarrollo
    historyApiFallback: true, // Permitir manejar rutas de React (SPA) en el servidor
  },
};
