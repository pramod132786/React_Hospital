import axios from 'axios';

const USER_API_URL="http://localhost:9008/login"

class PatientService{

    userLogin(login){
        return axios.post(USER_API_URL);
    }

}
export default new PatientService();