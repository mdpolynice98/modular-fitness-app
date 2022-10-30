const connection = require('./connection.js');
const bcrypt = require('bcrypt-nodejs');

const orm = {

    insertOneUser: function(username,password,cb){
        let sql="insert into users(username,password) values('"+username+"','"+bcrypt.hashSync(password)+"');";
        connection.query(sql,'fitness_db',function(error,result){
            if(error){
                throw error;
            }
            cb(result);
        })
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
