const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

class UserAchievement extends Model {}

UserAchievement.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    achievementId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Achievements',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    dateEarned: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'UserAchievement',
    tableName: 'UserAchievements',
    timestamps: false
});

module.exports = UserAchievement;