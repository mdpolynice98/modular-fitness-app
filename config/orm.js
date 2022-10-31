const connection = require('./connection.js');
const bcrypt = require('bcrypt-nodejs');

const orm = {

    insertOneRegistration: function(name,email,password,cb){
        let sql="insert into users(name,email,password) values('"+name+"','"+email+"','"+bcrypt.hashSync(password)+"');";
    },
    
    insertOneUser: function(username,password,cb){
        let sql="insert into users(username,password) values('"+username+"','"+bcrypt.hashSync(password)+"');";

        connection.query(sql,'fitness_db',function(error,result){
            if(error){
                throw error;
            }
            cb(result);
        })
    },

    selectOneRegistration:function(email,cb){
        let sql="select email from users where email = '"+email+"';";
    },

    selectOneUser:function(username,cb){
        let sql="select username from users where username = '"+username+"';";

        connection.query(sql,'fitness_db',function(error,result){
            if(error){
                throw error;
            }
            cb(result);
        });
    }

};

module.exports = orm;


