const express = require('express');
const app = require('./app');
const config = require('./utils/config');

const PORT = config.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});