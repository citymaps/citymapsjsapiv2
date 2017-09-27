/**
 *
 * Citymaps JS API v2 library
 * Based on Leaflet 1.2
 *
 * @author bgundersen
 * @since 6/2017
 *
 */


'use strict';

var leaflet = require('leaflet/dist/leaflet-src');
require('./src/citymaps');
window.Leaflet = leaflet;

typeof define === 'function' && define.amd ?
  define('maps/lib/citymaps', [], function() {
    return leaflet;
  })
: false;
