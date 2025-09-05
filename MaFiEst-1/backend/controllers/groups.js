const express = require('express');
const { Group } = require('../models');
const router = express.Router();

// Crear un nuevo grupo
router.post('/', async (req, res) => {
    try {
        const { name, description } = req.body;
        const newGroup = await Group.create({ name, description });
        res.status(201).json(newGroup);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el grupo' });
    }
});

// Obtener todos los grupos
router.get('/', async (req, res) => {
    try {
        const groups = await Group.findAll();
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los grupos' });
    }
});

// Obtener un grupo por ID
router.get('/:id', async (req, res) => {
    try {
        const group = await Group.findByPk(req.params.id);
        if (group) {
            res.status(200).json(group);
        } else {
            res.status(404).json({ error: 'Grupo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el grupo' });
    }
});

// Actualizar un grupo
router.put('/:id', async (req, res) => {
    try {
        const { name, description } = req.body;
        const [updated] = await Group.update({ name, description }, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedGroup = await Group.findByPk(req.params.id);
            res.status(200).json(updatedGroup);
        } else {
            res.status(404).json({ error: 'Grupo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el grupo' });
    }
});

// Eliminar un grupo
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Group.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Grupo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el grupo' });
    }
});

module.exports = router;