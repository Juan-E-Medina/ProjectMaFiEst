const express = require('express');
const { User } = require('../models');
const { userExtractor } = require('../utils/middleware');

const router = express.Router();

// Get all users (admin only)
router.get('/', userExtractor, async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});

// Get a user by ID (admin only)
router.get('/:id', userExtractor, async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user' });
    }
});

// Create a new user (admin only)
router.post('/', userExtractor, async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const newUser = await User.create({ name, email, password, role });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: 'Error creating user' });
    }
});

// Update a user by ID (admin only)
router.put('/:id', userExtractor, async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            user.name = name;
            user.email = email;
            user.password = password;
            user.role = role;
            await user.save();
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error updating user' });
    }
});

// Delete a user by ID (admin only)
router.delete('/:id', userExtractor, async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting user' });
    }
});

module.exports = router;