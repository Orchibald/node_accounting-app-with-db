'use strict';

const { Sequelize } = require('sequelize');

// const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize('postgres', 'postgres', 'Football03Orest', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
