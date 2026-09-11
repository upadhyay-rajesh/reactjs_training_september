class EmployeeServiceFetchApi{
    constructor() {
        this.baseUrl = "http://localhost:12000/employee";
    }

    getEmployees() {
        return fetch(this.baseUrl)
            .then(response => response.json())
            .catch(error => console.error('Error fetching employees:', error));
    }

    addEmployee(employee) {
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        })
            .then(response => response.json())
            .catch(error => console.error('Error adding employee:', error));
    }

    updateEmployee(id, updatedEmployee) {
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedEmployee)
        })
            .then(response => response.json())
            .catch(error => console.error('Error updating employee:', error));
    }

    deleteEmployee(id) {
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE'
        })
            .catch(error => console.error('Error deleting employee:', error));
    }
}
export default new EmployeeServiceFetchApi();