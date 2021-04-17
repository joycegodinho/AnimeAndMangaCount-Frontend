import http from "../http-common";

async function getAll() {
    return http.get("/mangas");
}

async function get(id) {
    return http.get(`/mangas/${id}`);
}

async function del(id) {
    return http.get(`/mangas/${id}`);
}

async function update(id, data) {
    return http.get(`/mangas/${id}`, data);
}

async function create(data) {
    return http.get("/mangas/new", data);
}

export { getAll, get, del, update, create }