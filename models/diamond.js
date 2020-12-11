module.exports = (sequelize, DataTypes) => {

    let Diamond = sequelize.define('Diamond', {
        name: {
            type: DataTypes.STRING,
        }, productID: {
            type: DataTypes.NUMBER,
        }, quantity: {
            type: DataTypes.NUMBER,
        }
    })

    Diamond.sync({force: true}).then( () => {
        console.log('synced Diamond table')
    })

    return Diamond
}