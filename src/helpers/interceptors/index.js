import api from 'api';

export default function setup() {
    api.interceptors.request.use((config) => {
        config.url = `${config.baseURL}${config.url}`
        return config;
    })
}
