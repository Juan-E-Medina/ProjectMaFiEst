const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { tokenExtractor, userExtractor } = require('../utils/middleware');

const router = express.Router();

// Registro de usuarios independientes
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password || password.length < 8) {
        return res.status(400).json({ error: 'Email y contraseña son requeridos, y la contraseña debe tener al menos 8 caracteres.' });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        return res.status(400).json({ error: 'El email ya está en uso.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword, role: 'independent' });

    res.status(201).json({ message: 'Usuario registrado exitosamente.', userId: newUser.id });
});

// Inicio de sesión
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Credenciales inválidas.' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, userId: user.id, role: user.role });
});

// Cierre de sesión (opcional, solo para eliminar el token del cliente)
router.post('/logout', (req, res) => {
    res.status(200).json({ message: 'Sesión cerrada exitosamente.' });
});

// Refresh de token (opcional, si se implementa)
router.post('/refresh', tokenExtractor, (req, res) => {
    const user = req.user;
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;