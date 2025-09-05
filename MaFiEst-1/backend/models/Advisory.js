// Modelo que define la estructura de la tabla de asesorías en PostgreSQL

module.exports = (sequelize, DataTypes) => {
    const Advisory = sequelize.define('Advisory', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id',
            },
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        dateRequested: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        status: {
            type: DataTypes.ENUM('pending', 'completed', 'canceled'),
            defaultValue: 'pending',
        },
    }, {
        tableName: 'Advisories',
        timestamps: true,
    });

    Advisory.associate = (models) => {
        Advisory.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
        });
    };

    return Advisory;
};