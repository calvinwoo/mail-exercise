const noop = () => {};

require('babel-register')();
require.extensions['.css'] = noop;
