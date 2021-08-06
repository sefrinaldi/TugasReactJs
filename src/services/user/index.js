import axios from "axios";
const API_BASE_URL = "http://localhost:8080/api/user/";

class userService {

    getAllUser = () => {
        return axios.get(API_BASE_URL + "all");
    };
}

export default new userService();