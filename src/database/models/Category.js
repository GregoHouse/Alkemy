module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
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
        },
        type_id:{
            type: dataTypes.BIGINT(10),
            references: {
                model: 'Type'
            }
        } 
    };

    let config = {
        timestamps: false 
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = models => {
        Category.belongsTo(models.Type, {
            as: "type",
            foreignKey: "type_id"
        })
    }

    return Category
}