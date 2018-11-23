let orm     = require('orm');
let _ = require('underscore');

module.exports = {
    list: function (req, res, next) {
        console.log(req.models);
        req.models.test_table.find().limit(4).order('-id').all(function (err, messages) {
            if (err) return next(err);

            let items = messages.map(function (m) {
                return m.serialize();
            });

            res.send({ items: items });
        });
    },
    create: function (req, res, next) {
        let params = _.pick(req.body, 'author', 'body');

        req.models.test.get(req.params.id, function (err, message) {
            if (err) {
                if (err.code === orm.ErrorCodes.NOT_FOUND) {
                    res.send(404, "Message not found");
                } else {
                    return next(err);
                }
            }

            params.message_id = message.id;

            req.models.test.create(params, function (err, message) {
                if(err) {
                    if(Array.isArray(err)) {
                        return res.send(200, { errors: helpers.formatErrors(err) });
                    } else {
                        return next(err);
                    }
                }

                return res.send(200, message.serialize());
            });
        });
    },
    get: function(req, res, next) {

    }
};