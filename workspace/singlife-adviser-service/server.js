let express = require('express');
let settings = require('./config/settings');
let routes = require('./config/routes');
let environment = require('./config/environment');
let models = require('./app/models/');
let colors = require('colors');
let path = require('path');

module.exports.start = function (done) {
    let app = express();

    environment(app);
    routes(app);

    app.listen(settings.port, function () {
        console.log(("Listening on port " + settings.port).green);

        if (done) {
            return done(null, app, server);
        }
    }).on('error', function (e) {
        if (e.code === 'EADDRINUSE') {
            console.log('Address in use. Is the server already running?'.red);
        }
        if (done) {
            return done(e);
        }
    });
};

// module.exports.start();

// If someone ran: "node server.js" then automatically start the server
if (path.basename(process.argv[1], '.js') == path.basename(__filename, '.js')) {
    console.log('asdasd');
    module.exports.start();
}
