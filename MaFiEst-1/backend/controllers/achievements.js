// controllers/achievements.js
const { Achievement, UserAchievement } = require('../models');

// Obtener todos los logros
const getAchievements = async (req, res) => {
    try {
        const achievements = await Achievement.findAll();
        res.status(200).json(achievements);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener logros', error });
    }
};

// Registrar un logro para un usuario
const registerAchievement = async (req, res) => {
    const { userId, achievementId } = req.body;

    try {
        const userAchievement = await UserAchievement.create({ userId, achievementId });
        res.status(201).json(userAchievement);
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar logro', error });
    }
};

// Exportar funciones
module.exports = {
    getAchievements,
    registerAchievement,
};