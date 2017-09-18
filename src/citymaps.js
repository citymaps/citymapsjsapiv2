'use strict';

let map = require('./map');

L.citymaps = module.exports = {
  VERSION: require('../package.json').version,
  map: map.map
};
