const {DataTypes} = require('sequelize')
const sequelize = require ('../config/connection')


const workouts = sequelize.define('Workouts', {
    category: {
        type: DataTypes.STRING,
        allowNull: false
    
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }


})
module.exports = {
workouts
}