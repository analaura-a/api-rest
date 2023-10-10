import * as service from "../services/projects.services.js";
import * as view from "../views/projects.views.js";

//Traer todos los proyectos
const getProjects = (req, res) => {

    service.getProjects({ deleted: true }).then((projects) => {
        res.send(view.createProjectsListPage(projects));
    });

};

//Traer todos los proyectos de tipo personal
const getProjectsPersonal = (req, res) => {

    service.getProjectsPersonal({ deleted: true }).then((projects) => {
        res.send(view.createProjectsListPage(projects));
    });

};

//Traer todos los proyectos de tipo open-source
const getProjectsOpenSource = (req, res) => {

    service.getProjectsOpenSource({ deleted: true }).then((projects) => {
        res.send(view.createProjectsListPage(projects));
    });

};

export {
    getProjects,
    getProjectsPersonal,
    getProjectsOpenSource
}
