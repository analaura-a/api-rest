import * as service from "../../services/users.services.js";

//Traer todos los usuarios
const getUsers = (req, res) => {

    service.getUsers().then((users) => {
        res.status(200).json(users);
    });

};

//Traer un usuario en particular
const getUserById = (req, res) => {

    const id = req.params.id;

    service.getUserById(id).then((user) => {
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json();
        }
    });

};

export {
    getUsers,
    getUserById
}