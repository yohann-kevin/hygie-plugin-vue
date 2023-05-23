const util = require('utilitylib-js');
const pino = require("pino")();

const HygieVue = {
  install(Vue, options) {

    Vue.prototype.$hygie = {
      util: util,
      logger: pino,
    };

    // util method
    Vue.prototype.util = util;
    Vue.util = util;

    // logger
    Vue.prototype.logger = pino;
    Vue.logger = pino;
  }
};
  
module.exports = HygieVue;
