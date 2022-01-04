
module.exports = {
  exit: function () {
    window.history.back();
  }
};

require('cordova/exec/proxy').add('Exit', module.exports);
