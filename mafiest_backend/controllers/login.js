const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (req, res, next) => {
  try {
    const { username, password } = req.body
    if (!username || !password) {
      return res.status(400).json({ error: 'Se requieren username y contraseña' })
    }

    const user = await User.findOne({ username })
    const passwordCorrect = user && await bcrypt.compare(password, user.passwordHash)

    if (!user || !passwordCorrect) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' })
    }

    const userForToken = {
      id: user._id,
      username: user.username,
      rol: user.rol,
    }

    const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 60 * 60 })

    res.status(200).json({
      token,
      username: user.username,
      name: user.name,
      email: user.email,
      rol: user.rol
    })
  } catch (error) {
    next(error)
  }
})

module.exports = loginRouter
