const path = require('path');

module.exports = {
    modulePaths: ['/shared/vendor/modules'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules', 'bower_components', 'shared'],
    moduleNameMapper: {
        '^config$': '<rootDir>/configs/app-config.js',
    },
    
    entry: './src/index.js',
    output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development'
};
