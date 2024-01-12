import axios from "axios";

export const callAPI = async (method, slug, params) => {
    const host = 'https://192.168.29.220:8081'

    if (method === 'GET') {
        try {
            const res = await axios.get(`${host}${slug}`)
            console.log(`${res.status}: ${res.data.message}`)

            return res.data

        } catch (err) {
            console.error(`${err.response.status}: ${err.response.data.message}`)

            let data = err.response.data
            data["status"] = err.response.status

            return data
        }

    } else if (method === 'POST') {
        try {
            const res = await axios.post(`${host}${slug}`, params)
            console.log(`${res.status}: ${res.data.message}`)

            return res.data

        } catch (err) {
            console.error(`${err.response.status}: ${err.response.data.message}`)

            let data = err.response.data
            data["status"] = err.response.status

            return data
        }
    }
}

/*
import {callAPI} from './utils'

const [hello, setHello] = useState();

    useEffect(() => {
        callAPI('GET', '/hello').then(setHello).catch(console.error)
    }, []);
 */