import axios from "axios";

export const callAPI = async (method, slug, params) => {
    const host = 'https://localhost:8082'

    if (method === 'GET') {
        const res = await axios.get(`${host}${slug}`)
        if (res.status !== 200) {
            throw Object.assign(new Error(`${res.status}: ${res.statusText}`))
        }
        return res.data

    } else if (method === 'POST') {
        const res = await axios.post(`${host}${slug}`, params)
        if (res.status !== 200) {
            throw Object.assign(new Error(`${res.status}: ${res.statusText}`))
        }
        return res.data
    }
}

/*
import {callAPI} from './utils'

const [hello, setHello] = useState();

    useEffect(() => {
        callAPI('GET', '/hello').then(setHello).catch(console.error)
    }, []);
 */