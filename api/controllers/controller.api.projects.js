import * as service from "../../services/projects.services.js";

//Traer todos los proyectos
const getProjects = (req, res) => {

    const filter = req.query;

    service.getProjects(filter).then((projects) => {
        res.status(200).json(projects);
    });

};

//Crear un nuevo proyecto
const createProject = (req, res) => {

    const project = {
        type: req.body.type,
        status: req.body.status,
        name: req.body.name,
        about: req.body.about,
        img: "https://picsum.photos/400/225",
        required_availability: req.body.required_availability,
        link: req.body.link
    };

    service
        .createProject(project)
        .then((newProject) => {
            res.status(201).json(newProject);
        })
        .catch((error) => {
            res.status(500).json();
        });
};


export {
    getProjects,
    createProject
}
