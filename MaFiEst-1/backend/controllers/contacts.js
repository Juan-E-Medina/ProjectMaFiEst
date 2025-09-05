const express = require('express');
const { Contact } = require('../models');
const router = express.Router();

// Crear un nuevo contacto
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = await Contact.create({ name, email, message });
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el contacto' });
    }
});

// Obtener todos los contactos
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los contactos' });
    }
});

// Obtener un contacto por ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const contact = await Contact.findByPk(id);
        if (contact) {
            res.status(200).json(contact);
        } else {
            res.status(404).json({ error: 'Contacto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el contacto' });
    }
});

// Eliminar un contacto por ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await Contact.destroy({ where: { id } });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Contacto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el contacto' });
    }
});

module.exports = router;