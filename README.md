# phonegap-plugin-oauth2

Simple plugin to do OAuth2 authentication within PhoneGap/Cordova apps

### Usage

    document.addEventListener('deviceready', function() {
        var endUrl = "https://phonegap.com/authCallback";
        var startUrl = "http://github.com/login/oauth/authorize/";
        startUrl += "?client_id=89855411f5d2ab238ad2";
        startUrl += "&redirect_uri=" + endUrl;
        // scope
        // state
        // allow_signup

        PG_OAuth2.authenticate(function(url){
            setTimeout(function() {
                alert("Success " + url);
            },0)

        },
        function(err) {
            alert("error " + err);
        },
        startUrl,endUrl);
    });


