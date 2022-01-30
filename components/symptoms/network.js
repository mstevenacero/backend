import express from 'express';
const route = express.Router();

import controller from './controller.js'


route.post('/', controller.add)
route.get('/', controller.list)
route.get('/:flag', controller.show)
route.post('/symptoms', controller.symptomsUsers)
route.put('/:id', controller.update)

export default route