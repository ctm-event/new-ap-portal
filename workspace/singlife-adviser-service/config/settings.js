let path = require('path');

module.exports = {
    path: path.normalize(path.join(__dirname, '..')),
    port: 3000,
    db: {
        protocol : "mysql", // or "mysql"
        query    : { pool: true },
        host     : "mysql.dev.php",
        database : "singlife_new_ap_portal",
        user     : "ruser",
        password : "contemivn"
    }
};