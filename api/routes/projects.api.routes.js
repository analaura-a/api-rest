import { Router } from 'express';
import * as controllers from '../controllers/controller.api.projects.js';

const route = Router();

/* API PROYECTOS */
//Obtener todos los proyectos
route.get('/projects', controllers.getProjects);

export default route;