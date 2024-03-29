import express from 'express';
const route = express.Router();

import controller from './controller.js'


route.post('/', controller.add)
route.get('/', controller.list)
route.get('/:clasification', controller.show)
route.post('/symptoms_add', controller.symptoms)
route.put('/:id', controller.update)
route.get('/ubication/:ubication',controller.symptomsListU)
export default route