import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://alumnos:alumnos@cluster0.rufodhz.mongodb.net");
const db = client.db("AH20232CP1");


//Obtener todos los proyectos
async function getProjects(filter = {}) {

    const filterMongo = { deleted: { $ne: true } }

    return db
        .collection("projects")
        .find(filterMongo)
        .toArray();
}


export {
    getProjects
}