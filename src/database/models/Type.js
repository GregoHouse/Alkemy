module.exports = (sequelize, dataTypes) => {
    let alias = 'Type';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        } 
    };

    let config = {
        timestamps: false 
    };

    const Type = sequelize.define(alias, cols, config);

    Type.associate = models => {
        Type.hasMany(models.Category, {
            as: "categories",
            foreignKey: "type_id"
        })
    }

    return Type
}