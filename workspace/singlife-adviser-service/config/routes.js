let controllers = require('../app/controllers');

module.exports = function (app) {
    app.get('/', controllers.home);
    app.get('/test', controllers.test.list);
    app.get('/test/:id', controllers.test.get);
};
