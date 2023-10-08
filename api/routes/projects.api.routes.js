import { Router } from 'express';
import * as controllers from '../controllers/controller.api.projects.js';

const route = Router();

/* API PROYECTOS */
//Obtener todos los proyectos
route.get('/projects', controllers.getProjects);

//Obtener un proyecto en especifico
route.get('/projects/:id', controllers.getProjectById)

//Agregar un nuevo proyecto
route.post('/projects', controllers.createProject);

//Editar un proyecto
route.patch('/projects/:id', controllers.editProject);

export default route;

// {
//     "type": "personal",
//     "status": "open",
//     "name": "Landin Page bonita",
//     "about": "Buscando gente para agregar una landing a nuestros portfolios.",
//     "img": "https://picsum.photos/400/225",
//     "required_availability": "Alta",
//     "link": "davinci.edu.ar"
//   }