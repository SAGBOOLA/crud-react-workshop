import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/person';


class PersonApiAction {
    getAll = async () => {
        return await axios.get(API_URL).then(response => response);
    };

    getPersonById = async (id) => {
        return await axios.get(API_URL + '/' + id).then(response => response);
    };

    postData = async (data) => {
        return await axios.post(API_URL, data).then(response => response);
    };

    putData = async (data) => {
        return await axios.put(API_URL, data).then(response => response);
    };

    deleteDetailsById = async (id) => {
        return await axios.delete(API_URL + '/' + id).then(response => response);
    };
}



export default PersonApiAction;