
module.exports = {
  exit: function () {
    alert('App will be reload');
    window.location.reload();
  }
};

require('cordova/exec/proxy').add('Exit', module.exports);
