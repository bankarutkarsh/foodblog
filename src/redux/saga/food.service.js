import axios from "axios";

 function foodService() {
    return axios.get('http://localhost:3001/foodItems');
}

export default foodService;