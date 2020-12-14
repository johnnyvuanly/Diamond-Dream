// Defines DB columns and types

module.exports = (sequelize, DataTypes) => {

    let OrderInfo = sequelize.define('Order', {
        name: {
            type: DataTypes.STRING,
        }, productID: {
            type: DataTypes.NUMBER,
        }, quantity: {
            type: DataTypes.NUMBER,
        }
    })

    OrderInfo.sync({force: true}).then( () => {
        console.log('synced order table')
    })

    return OrderInfo
}