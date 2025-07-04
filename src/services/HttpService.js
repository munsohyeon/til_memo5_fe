import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8080/api'

class HttpService {
    async post(bodyJson) {
        const res = await axios.post('/memo', bodyJson);
        return res.data;
    }
    async getList(params) {
        const res = await axios.get('/memo', { params });
        return res.data;
    }
    async get(id) {
        const res = await axios.get(`/memo/${id}`);
        return res.data;
    }
    async put(bodyJson) {
        const res = await axios.put('/memo', bodyJson);
        return res.data;
    }
    async delete(id) {
        const res = await axios.delete(`/memo?id=${id}`);
        return res.data;
    }
}
export default new HttpService();