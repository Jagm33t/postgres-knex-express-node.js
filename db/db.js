const knex =require('knex');
const knexfile = require("./knexfile");
// const express = require('express');



const db = knex(knexfile.devlopment);

module.exports = db;