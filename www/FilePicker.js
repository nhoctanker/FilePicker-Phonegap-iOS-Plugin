(function(window) {

    var FilePicker = function() {};

    FilePicker.prototype = {

        isAvailable: function(success) {
            cordova.exec(success, null, "FilePicker", "isAvailable", []);
        },

        pickFile: function(success, fail,utis) {
            cordova.exec(success, fail, "FilePicker", "pickFile", [utis]);
        },
        iPadPopupCoordinates : function () {
  // left,top,width,height
            return "-1,-1,-1,-1";
        },
        setIPadPopupCoordinates : function (coords) {
          // left,top,width,height
          cordova.exec(function() {}, this._getErrorCallback(function() {}, "setIPadPopupCoordinates"), "FilePicker", "setIPadPopupCoordinates", [coords]);
        },
        _getErrorCallback : function (ecb, functionName) {
              if (typeof ecb === 'function') {
                return ecb;
              } else {
                return function (result) {
                  console.log("The injected error callback of '" + functionName + "' received: " + JSON.stringify(result));
                }
              }
        }

    };


    cordova.addConstructor(function() {

        window.FilePicker = new FilePicker();

    });

})(window);