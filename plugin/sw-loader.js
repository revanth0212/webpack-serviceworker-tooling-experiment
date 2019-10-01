const loaderUtils = require("loader-utils");
function _registerSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      console.log("Service worker registered: ", registration);
    })
    .catch(error => {
      console.log("Service worker registration failed: ", error);
    });
}

module.exports = function(content) {
  const logger = this.getLogger("Deacon");
  const url = loaderUtils.interpolateName(this, "sw-[contenthash].[ext]", {
    context: this.rootContext,
    content
  });
  logger.log(url);
  this.emitFile(url, content);
  return `module.exports = function registerServiceWorker() {
    ${_registerSW.toString()}
    return _registerSW('${url}');
  }`;
};
