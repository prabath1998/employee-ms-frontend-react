import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService{
    saveEmployee(employee){
        return axios.post(API_BASE_URL,employee);
    }

}

export default new EmployeeService()