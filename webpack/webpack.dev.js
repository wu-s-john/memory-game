/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const projectPaths = require('./webpack.project.paths');
const merge = require('webpack-merge');
const base = require('./webpack.base');
const styles = require('./webpack.styles');
const util = require('./util');


const TRANSPILED_CSS = 'styles.css';
module.exports = merge(
  util.removeProject(projectPaths.TEMP_DIRECTORY),
  styles.generateDevScssModuleRule(TRANSPILED_CSS),
  base.BASE_CONFIG,
  util.includeVendors(
    path.resolve(projectPaths.ROOT_DIRECTORY, 'node_modules/animate.css/animate.css'),
    path.resolve(projectPaths.ROOT_DIRECTORY, 'node_modules/bootstrap/dist/css/bootstrap.css'),
  ),
  {
    output: {
      path: projectPaths.TEMP_DIRECTORY,
    },
    devServer: {
      contentBase: projectPaths.TEMP_DIRECTORY,
      compress: true,
      port: 3000,
    },
    devtool: 'source-map',
  },
);
