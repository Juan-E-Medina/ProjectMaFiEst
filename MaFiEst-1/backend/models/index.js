// Este archivo agrupa y exporta todos los modelos de la aplicación.

const User = require('./User');
const Group = require('./Group');
const Progress = require('./Progress');
const Achievement = require('./Achievement');
const UserAchievement = require('./UserAchievement');
const Contact = require('./Contact');
const Advisory = require('./Advisory');

const models = {
    User,
    Group,
    Progress,
    Achievement,
    UserAchievement,
    Contact,
    Advisory
};

// Establecer relaciones entre modelos si es necesario
// Ejemplo: User.hasMany(UserAchievement);

module.exports = models;