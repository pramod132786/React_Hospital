import axios from 'axios';

const USER_API_URL="http://localhost:8080/api/v1/user"

class UserService{

    userLogin(login){
        return axios.post(USER_API_URL+"/login",login);
    }

}
export default new UserService();