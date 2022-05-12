import http from "../http-common";

class MissionCommanderService{
  getAll() {
    return http.get("/mcx");
  }
  get(id) {
    return http.get(`/mcx/${id}`);
  }
  create(data) {
    return http.post("/mcx", data);
  }
  update(id, data) {
    return http.put(`/mcx/${id}`, data);
  }
  delete(id) {
    return http.delete(`/mcx/${id}`);
  }
}

export default new MissionCommanderService();
