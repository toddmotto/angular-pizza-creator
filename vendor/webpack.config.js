const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const context = path.join(__dirname, '../');

const vendor = [
  '@angular/common',
  '@angular/core',
  '@angular/platform-browser',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  'reflect-metadata',
  'rxjs',
  'zone.js/dist/zone',
  'zone.js/dist/long-stack-trace-zone'
];

const testing = [
  ...vendor,
  '@angular/common/testing',
  '@angular/compiler/testing',
  '@angular/core/testing',
  '@angular/http/testing',
  '@angular/platform-browser/testing',
  '@angular/platform-browser-dynamic/testing',
  '@angular/router/testing',
]

module.exports = {
  cache: true,
  context: context,
  devtool: 'sourcemap',
  entry: {
    vendor,
    testing
  },
  performance: {
    hints: false
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../build'),
    library: '__[name]',
    sourceMapFilename: '[name].js.map'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '[name]-manifest.json'),
      name: '__[name]',
      context: context
    }),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.join(context, 'node_modules')]
  },
  stats: false
};
