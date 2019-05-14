var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    create: function(name, cb){
        orm.create("burgers", name, cb)
    },

    update: function(id, cb){
        orm.update("burgers", id, cb);
    }
};

module.exports = burger;