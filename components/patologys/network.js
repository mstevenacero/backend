import express from 'express';
const route = express.Router();

import controller from './controller.js'


route.post('/', controller.add)
route.get('/', controller.list)
route.get('/:id', controller.show)
route.post('/alerts_types', controller.symptomsUsers)
route.put('/:id', controller.update)

export default route