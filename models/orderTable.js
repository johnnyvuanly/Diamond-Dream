// Defines DB columns and types

module.exports = (sequelize, DataTypes) => {

    let OrderInfo = sequelize.define('Order', { // the model's name is 'Order'
        customerName: {
            type: DataTypes.STRING,
            allowNull: false
        }, productID: {
            type: DataTypes.NUMBER,
            allowNull: false
        }, quantity: {
            type: DataTypes.NUMBER,
            allowNull: false
        }, customerAddress: {
            type: DataTypes.ADDRESS,
            allowNull: false 
        }
    })

    OrderInfo.sync({force: true}).then( () => {
        console.log('synced order table')
    })

    return OrderInfo
}