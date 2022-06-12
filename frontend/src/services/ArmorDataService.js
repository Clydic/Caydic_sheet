import http from "../http-common";
const path = "/character/armors"
class ArmorDataService {
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
    findByName(name_armor) {
        return http.get(`${path}/?name=${name_armor}`);
    }
}
export default new ArmorDataService();
