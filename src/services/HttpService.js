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
        const res = await axios.get(`/memo${id}`);
        return res.data;
    }
    async put(bodyJson) {

    }
    async delete(params) {

    }
}
export default HttpService;