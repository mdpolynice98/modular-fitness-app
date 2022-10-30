const orm = require('./../config/orm.js');

const registration = {
    insertOne:function(name,email,password,cb){
        orm.insertOneRegistration(name,email,password,function(res){
            cb(res);
        });
    }
}
module.exports = registration;
