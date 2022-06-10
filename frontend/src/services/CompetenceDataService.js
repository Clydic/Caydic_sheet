import http from "../http-common";
const path = "/character/competences";

class CompetenceDataService {
    getAll() {
        return http.get(path);
    }
    get(id) {
        return http.get(`${path}/${id}`);
    }
    create(data) {
        return http.post(path + "/", data);
    }
    update(id, data) {
        return http.put(`${path}/${id}`, data);
    }
    delete(id) {
        return http.delete(`${path}/${id}`);
    }
    deleteAll() {
        return http.delete(path + "/");
    }
    findByName(name_competence) {
        return http.get(`${path}/?name=${name_competence}`);
    }

}
export default new CompetenceDataService();
