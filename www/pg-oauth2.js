/* global cordova:false */
/* globals window */

var exec = cordova.require('cordova/exec'),
    utils = cordova.require('cordova/utils');

var PG_OAuth2 = {
    authenticate: function(successCallback, errorCallback, startURL, endURL) {
        // TODO: verify args
        var browser = cordova.InAppBrowser.open(startURL, '_blank', 'location=yes');
        browser.addEventListener('loadstart', function(evt){
            console.log('evt.url = ' + evt.url);
            if(evt.url.indexOf(endURL) == 0) {
                successCallback(evt.url);
                browser.close();
            }
        });

        //browser.addEventListener('loadstop', loadStopCallBack);

        browser.addEventListener('loaderror', function(err) {
            console.log("error " + err)
            errorCallback(err);
        });

    }
};

module.exports = PG_OAuth2;
