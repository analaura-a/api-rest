import { Router } from 'express';
import * as controllers from '../controllers/controller.projects.js';

const route = Router();

/* PROYECTOS */
//Traer todos los proyectos
route.get('/projects', controllers.getProjects)

//Traer los proyectos de tipo personal
route.get('/projects/personal', controllers.getProjectsPersonal)

//Traer los proyectos de tipo open-source
route.get('/projects/open-source', controllers.getProjectsOpenSource)

//Crear un nuevo proyecto
// route.get("/projects/new", controllers.);
// route.post("/projects/new", controllers.);

export default route;