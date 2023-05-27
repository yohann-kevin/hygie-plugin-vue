// const util = require('utilitylib-js');
const pino = require("pino")();

const HygieVue = {
  install(Vue, options) {
    Vue.prototype.$hygie = {
      // util: util,
      logger: pino,
    };
  }
};
  
module.exports = HygieVue;
