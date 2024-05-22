const {default: axios} = require("axios");

const axiosClient = axios.create({
    baseURL: 'http://172.16.0.121:1337/api',
})

const getCategory = () => axiosClient.get('/categories');

const getSliders = () => axiosClient.get('/sliders?populate=*').then(resp => {
    return resp.data.data
})


/*Show with images
const getCategory = () => axiosClient.get('/categories?populate=*');*/
export default {
    getCategory,
    getSliders
};
