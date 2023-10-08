import * as service from "../../services/projects.services.js";

//Traer todos los proyectos
const getProjects = (req, res) => {

    const filter = req.query;

    service.getProjects(filter).then((projects) => {
        res.status(200).json(projects);
    });

};


export {
    getProjects
}
