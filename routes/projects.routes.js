import { Router } from 'express';
import * as controllers from '../controllers/controller.projects.js';

const route = Router();

/* PROYECTOS */
//Traer todos los proyectos
route.get('/projects', controllers.getProjects)

//Crear un nuevo proyecto
// route.get("/productos/nuevo", controllers.);
// route.post("/productos/nuevo", controllers.);


export default route;