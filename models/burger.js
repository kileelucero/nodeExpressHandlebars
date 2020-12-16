const orm = require("../config/orm");

const burger = {
    selectAll: function (all) {
        orm.selectAll(function (res) {
            all(res);
        });
    },
    insertOne: function (burgerName, all) {
        orm.insertOne(burgerName, function (res) {
            all(res);
        });
    },
    updateOne: function (burgerDevoured, id, all) {
        orm.updateOne(burgerDevoured, id, function (res) {
            all(res);
        });
    }
};

module.exports = burger;