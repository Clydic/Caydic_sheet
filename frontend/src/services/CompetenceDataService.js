import http from "../http-common";
class CompetenceDataService {
    getAll() {
        return http.get("/competences");
    }
    get(id) {
        return http.get(`/competences/${id}`);
    }
    create(data) {
        return http.post("/competences", data);
    }
    update(id, data) {
        return http.put(`/competences/${id}`, data);
    }
    delete(id) {
        return http.delete(`/competences/${id}`);
    }
    deleteAll() {
        return http.delete(`/competences`);
    }
    findByName(name_competence) {
        return http.get(`/competences?name_competence=${name_competence}`);
    }
}
export default new CompetenceDataService();