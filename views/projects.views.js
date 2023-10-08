import { createPage } from "../pages/utils.js";

function createProjectsListPage(projects) {
    let html = "";
    html += `<div class="row">`;

    for (let i = 0; i < projects.length; i++) {
        html +=
            `<div class="col-md-6 mt-5">
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${projects[i].img}" class="img-fluid rounded-start h-100" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${projects[i].name}</h5>
                                <p class="card-text">${projects[i].about}</p>
                                <p class="card-text"><small class="text-body-secondary">Nivel de compromiso: ${projects[i].required_availability}</small></p>
                                <p class="card-text"><small class="text-body-secondary">Tipo: ${projects[i].type}</small></p>
                                <a href="${projects[i].link}" target="_blank" class="btn btn-primary">Ver proyecto</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    }

    html += "</div>";
    return createPage("Proyectos", html);
}

export {
    createProjectsListPage
}