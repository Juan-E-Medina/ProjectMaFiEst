module.exports = (sequelize, DataTypes) => {
    const Achievement = sequelize.define('Achievement', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        icon: {
            type: DataTypes.STRING(255)
        },
        type: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                isIn: [['progress', 'exam', 'constancy', 'participation']]
            }
        },
        points: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        tableName: 'Achievements',
        timestamps: false
    });

    Achievement.associate = (models) => {
        Achievement.belongsToMany(models.User, {
            through: 'UserAchievements',
            foreignKey: 'achievementId',
            otherKey: 'userId'
        });
    };

    return Achievement;
};