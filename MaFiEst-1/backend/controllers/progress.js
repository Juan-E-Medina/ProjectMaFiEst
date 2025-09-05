// controllers/progress.js
const { Progress } = require('../models');

// Obtener el progreso de un estudiante
const getProgress = async (req, res) => {
    try {
        const { userId } = req.params;
        const progress = await Progress.findAll({ where: { userId } });
        res.status(200).json(progress);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el progreso', error });
    }
};

// Actualizar el progreso de un estudiante
const updateProgress = async (req, res) => {
    try {
        const { userId } = req.params;
        const { courseId, progressData } = req.body;
        const progress = await Progress.findOne({ where: { userId, courseId } });

        if (progress) {
            await progress.update(progressData);
            res.status(200).json({ message: 'Progreso actualizado', progress });
        } else {
            res.status(404).json({ message: 'Progreso no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el progreso', error });
    }
};

// Exportar funciones
module.exports = {
    getProgress,
    updateProgress,
};