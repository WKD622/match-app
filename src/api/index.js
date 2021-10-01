import axios from 'axios';

const index = axios.create({
    baseURL: 'https://cp.fn.sportradar.com/common/en/Etc:UTC/gismo',
});

export default index;
