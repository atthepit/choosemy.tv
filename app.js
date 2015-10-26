/**
 * Created by Pedro on 26/10/2015.
 */
(function () {
    var express = require('express');
    var app = express();
    app.use(express.static(__dirname + '/app'));
    app.listen(process.env.PORT || 3000);
})();