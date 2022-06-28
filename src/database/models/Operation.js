module.exports = (sequelize, dataTypes) => {
    let alias = 'Operation';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        concept:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        amount:{
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        user_id: dataTypes.BIGINT(10),
        category_id: dataTypes.BIGINT(10)
         
    };

    let config = {
        timestamps: true,
        createdAt: 'create_date',
        updatedAt: 'update_date',
        deletedAt: false
    };

    const Operation = sequelize.define(alias, cols, config);

    Operation.associate = models => {
        Operation.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id"
            // timestamps: true
        }),
        Operation.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
            // timestamps: true
        }),
        Operation.belongsTo(models.Type, {
            as: "type",
            foreignKey: "type_id"
            // timestamps: true
        })  
    }
    return Operation
}