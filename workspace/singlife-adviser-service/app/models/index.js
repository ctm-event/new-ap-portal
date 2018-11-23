let orm      = require('orm');
let settings = require('../../config/settings');

let connection = null;

function setup(db, cb) {
    require('./test.model')(orm, db);

    return cb(null, db);
}

module.exports = function (cb) {
    if (connection) return cb(null, connection);

    orm.connect(settings.db, function (err, db) {
        if (err) return cb(err);

        connection = db;
        db.settings.set('instance.returnAllErrors', true);
        setup(db, cb);
    });
};
