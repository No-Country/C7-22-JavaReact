import axios from 'axios';

export default axios.create({
    baseURL: "https://cripto-algo-backend.herokuapp.com/"
})