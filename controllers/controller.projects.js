import * as service from "../services/projects.services.js";
import * as view from "../views/projects.views.js";

//Traer todos los proyectos
const getProjects = (req, res) => {

    service.getProjects({ deleted: true }).then((projects) => {
        res.send(view.createProjectsListPage(projects));
    });

};

export {
    getProjects
}
