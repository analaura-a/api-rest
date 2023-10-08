import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://alumnos:alumnos@cluster0.rufodhz.mongodb.net");
const db = client.db("AH20232CP1");


//Obtener todos los proyectos
async function getProjects(filter = {}) {

    const filterMongo = { deleted: { $ne: true } }

    if (filter.name) {
        filterMongo.$text = { $search: filter.name }
    }

    return db
        .collection("projects")
        .find(filterMongo)
        .toArray();
}

//Obtener todos los proyectos de tipo personal
async function getProjectsPersonal(filter = {}) {

    const filterMongo = {
        $and: [
            { deleted: { $ne: true } },
            { type: "personal" }
        ]
    }

    return db
        .collection("projects")
        .find(filterMongo)
        .toArray();
}

//Obtener todos los proyectos de tipo open-source
async function getProjectsOpenSource(filter = {}) {

    const filterMongo = {
        $and: [
            { deleted: { $ne: true } },
            { type: "open-source" }
        ]
    }

    return db
        .collection("projects")
        .find(filterMongo)
        .toArray();
}


export {
    getProjects,
    getProjectsPersonal,
    getProjectsOpenSource
}