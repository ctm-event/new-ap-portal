let moment = require('moment');

module.exports = function (orm, db) {
    let Test = db.define('test_table', {
            id: {type: 'text', required: true},
            desc: {type: 'text', required: false},
            createdAt: {type: 'date', required: false, time: true}
        },
        {
            hooks: {
                beforeValidation: function () {
                    this.createdAt = new Date();
                }
            },
            validations: {},
            methods: {
                serialize: function () {
                    return {
                        desc: this.desc,
                        createdAt: moment(this.createdAt).fromNow()
                    }
                }
            }
        }
    );
};
