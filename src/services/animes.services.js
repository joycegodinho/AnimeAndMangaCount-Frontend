import http from "../http-common";

async function getAll() {
    return http.get("/animes");
}

async function get(id) {
    return http.get(`/animes/${id}`);
}

async function del(id) {
    return http.get(`/animes/${id}`);
}

async function update(id, data) {
    return http.get(`/animes/${id}`, data);
}

async function create(data) {
    return http.get("/animes/new", data);
}

export { getAll, get, del, update, create }