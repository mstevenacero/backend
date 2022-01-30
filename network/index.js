'use strict'

import express from 'express';
const route = express.Router();

import users from '../components/users/network.js';
route.use('/users', users);

import roles from '../components/roles/network.js';
route.use('/roles', roles);

import symptoms from '../components/symptoms/network.js';
route.use('/symptoms', symptoms);

export default route;
