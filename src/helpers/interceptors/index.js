import api from 'api';

export default function setup() {
    api.interceptors.request.use((config) => {
        // if (!config.params) {
        //     config.params = {apiKey: API_KEY}
        // } else {
        //     config.params['apiKey'] = API_KEY
        // }
        config.url = `${config.baseURL}${config.url}`
        return config;
    })
}
