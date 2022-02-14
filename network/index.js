'use strict'

import express from 'express';
const route = express.Router();

import users from '../components/users/network.js';
route.use('/users', users);

import roles from '../components/roles/network.js';
route.use('/roles', roles);

import symptoms from '../components/symptoms/network.js';
route.use('/symptoms', symptoms);

import symptoms_polls from '../components/symptoms-polls/network.js';
route.use('/symptoms_polls', symptoms_polls);
//alerts_users
import alerts_users from '../components/alerts_users/network.js';
route.use('/alerts_users', alerts_users);

import alerts_types from '../components/alerts_types/network.js';
route.use('/alerts_types', alerts_types);


export default route;
