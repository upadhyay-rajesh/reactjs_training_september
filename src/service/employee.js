import axios from "axios";
class EmployeeService {
    constructor() {
        this.baseUrl = "http://localhost:12000/employee";
    }

    getEmployees() {
        return axios.get(this.baseUrl);
    }

    getEmployeeById(id) {
        return axios.get(`${this.baseUrl}/${id}`);
    }

    addEmployee(employee) {
        return axios.post(this.baseUrl, employee);
    }

    updateEmployee(id, employee) {
        return axios.put(`${this.baseUrl}/${id}`, employee);
    }

    deleteEmployee(id) {
        return axios.delete(`${this.baseUrl}/${id}`);
    }
}

export default new EmployeeService();
