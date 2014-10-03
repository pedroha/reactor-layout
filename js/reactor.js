
var getCookieValue = function(key) {
    var value = '';

    var vals = document.cookie.split(';');
    // console.log("---", key, "---");

var getCookieValue = function(key) {
    var value = '';

    var vals = document.cookie.split(';');
    // console.log("---", key, "---");

    for (var i = 0; i < vals.length; i++) {
        var pair = vals[i].trim();

        if (pair.indexOf(key) === 0) {
            value = pair.substring(key.length+1);
            break;
        }
    }
    return value;
};

var getTornadoToken = function() {
    return getCookieValue('_xsrf');
};

var insertPost = function(data) {
    // TODO: Check required fields and format using the Utilities library.
    var validData = true;

    if (validData) {
        var userPostUrl = '/a/posts';

        data._xsrf = getTornadoToken();

        var insert = $.post(userPostUrl, data);

        insert.then(function(data) {
            console.log(data);
        });

        insert.fail(function(err) {
            console.error(err.statusText);
            console.error(err.status);

            // TODO: show some error status message
        });     
    }
};


var data = {
    title: "CD Copying"
  , body: "http://www.wired.co.uk/news/archive/2014-10/01/cd-copying-legal"
};

insertPost(data);



// 2|c79a6c5e|40bfcca5cf15a654d7f47de8059ea2d2|1412172593


    for (var i = 0; i < vals.length; i++) {
        var pair = vals[i].trim();

        if (pair.indexOf(key) === 0) {
            value = pair.substring(key.length+1);
            break;
        }
    }
    return value;
};

var getTornadoToken = function() {
    return getCookieValue('_xsrf');
};

var insertPost = function(data) {
    // TODO: Check required fields and format using the Utilities library.
    var validData = true;

    if (validData) {
        var userPostUrl = '/a/posts';

        data._xsrf = getTornadoToken();

        var insert = $.post(userPostUrl, data);

        insert.then(function(data) {
            console.log(data);
        });

        insert.fail(function(err) {
            console.error(err.statusText);
            console.error(err.status);

            // TODO: show some error status message
        });     
    }
};

/*

var data = {
    title: "CD Copying"
  , body: "http://www.wired.co.uk/news/archive/2014-10/01/cd-copying-legal"
};

insertPost(data);

*/


// 2|c79a6c5e|40bfcca5cf15a654d7f47de8059ea2d2|1412172593

