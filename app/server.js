import express from "express";
import ProjectsRoute from '../routes/projects.routes.js';
import ApiProjectsRoute from '../api/routes/projects.api.routes.js'

const app = express(); //El servidor
app.listen(3333);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("public"));

app.use(ProjectsRoute);
app.use('/api', ApiProjectsRoute);