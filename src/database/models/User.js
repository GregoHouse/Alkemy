module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        }  
    };

    let config = {
        timestamps: true,
        createdAt: 'create_date',
        updatedAt: 'update_date',
        deletedAt: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = models => {
        User.hasMany(models.Operation, {
            as: "operations",
            foreignKey: "user_id"
            // onDelete: "CASCADE"
        }) 
    }

    return User
}