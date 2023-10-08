import { Router } from 'express';
import * as controllers from '../controllers/controller.api.users.js';

const route = Router();

/* API USUARIOS */
//Obtener todos los usuarios
route.get('/users', controllers.getUsers);

//Obtener un usuario en especifico
route.get('/users/:id', controllers.getUserById);

export default route;