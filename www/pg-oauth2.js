/* global cordova:false */
/* globals window */

var exec = cordova.require('cordova/exec'),
    utils = cordova.require('cordova/utils');

var PG_OAuth2 = {
    authenticate: function(successCallback, errorCallback, startURL, endURL) {
        setTimeout(function(){
            if(successCallback) {
                successCallback("PG_OAuth2:authenticate NotImplemented");
            }
            else if(errorCallback){
                errorCallback("PG_OAuth2:authenticate NotImplemented");
            }
            else {
                throw(new Error("PG_OAuth2:authenticate NotImplemented"));
            }
        },10);
    }
};

module.exports = PG_OAuth2;
