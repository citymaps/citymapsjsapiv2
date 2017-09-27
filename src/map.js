'use strict';

const devHost  = "http://raster.citymaps.svc.kube.cm.dev.tripadvisor.com";
const prodHost = "";

const CITYMAPS_DEFAULTS = {
  keepBuffer: 5,
  updateWhenIdle: false
};

let Citymap = L.Map.extend({

  initialize: function(element, _, options) {
    L.Map.prototype.initialize.call(this, element, Object.assign(CITYMAPS_DEFAULTS, L.Map.prototype.options, options));

    let tileLayerOptions = {};

    // add Citymaps layers
    if (!this.options.tileLayer) {
      switch(this.options.citymapsTileLayer) {
        case 'prod':
          tileLayerOptions = { host: prodHost };
          break;
        default:
          tileLayerOptions = { host: devHost };
      }
      this.tileLayer = L.tileLayer('{host}/tile/global/{z}/{x}/{y}', tileLayerOptions);
      this.addLayer(this.tileLayer);
    }
  }

});

module.exports.map = (element, _, options) => {
  return new Citymap(element, _, options);
};
