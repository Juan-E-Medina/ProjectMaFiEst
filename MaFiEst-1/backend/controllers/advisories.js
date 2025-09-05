// controllers/advisories.js

const { Advisory } = require('../models');

// Crear una nueva solicitud de asesoría
exports.createAdvisory = async (req, res) => {
    try {
        const { userId, message } = req.body;
        const newAdvisory = await Advisory.create({ userId, message });
        res.status(201).json(newAdvisory);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la asesoría' });
    }
};

// Obtener todas las solicitudes de asesoría
exports.getAdvisories = async (req, res) => {
    try {
        const advisories = await Advisory.findAll();
        res.status(200).json(advisories);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las asesorías' });
    }
};

// Obtener una solicitud de asesoría por ID
exports.getAdvisoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const advisory = await Advisory.findByPk(id);
        if (!advisory) {
            return res.status(404).json({ error: 'Asesoría no encontrada' });
        }
        res.status(200).json(advisory);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la asesoría' });
    }
};

// Actualizar una solicitud de asesoría
exports.updateAdvisory = async (req, res) => {
    try {
        const { id } = req.params;
        const { message } = req.body;
        const advisory = await Advisory.findByPk(id);
        if (!advisory) {
            return res.status(404).json({ error: 'Asesoría no encontrada' });
        }
        advisory.message = message;
        await advisory.save();
        res.status(200).json(advisory);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la asesoría' });
    }
};

// Eliminar una solicitud de asesoría
exports.deleteAdvisory = async (req, res) => {
    try {
        const { id } = req.params;
        const advisory = await Advisory.findByPk(id);
        if (!advisory) {
            return res.status(404).json({ error: 'Asesoría no encontrada' });
        }
        await advisory.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la asesoría' });
    }
};