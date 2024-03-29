import express from 'express';
const route = express.Router();

import controller from './controller.js'


route.post('/', controller.add)
route.get('/', controller.list)
route.get('/:user_id', controller.show)
route.put('/:id', controller.update)

export default route