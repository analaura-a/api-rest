import { Router } from 'express';
import * as controllers from '../controllers/controller.api.projects.js';

const route = Router();

/* API PROYECTOS */
//Obtener todos los proyectos
route.get('/projects', controllers.getProjects);

//Obtener todos los proyectos que creó un usuario en particular
route.get('/user/:id/projects', controllers.getProjectsByUser);

//Obtener un proyecto en especifico
route.get('/projects/:id', controllers.getProjectById)

//Agregar un nuevo proyecto
route.post('/projects', controllers.createProject);

//Editar un proyecto
route.patch('/projects/:id', controllers.editProject);

//Eliminar un proyecto
route.delete("/projects/:id", controllers.deleteProject);

export default route;