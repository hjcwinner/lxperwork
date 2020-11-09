import axios from 'axios'

const makeRequest = (path, params) =>
    axios.get(`https://interview.lxper.ai${path}`, {
        params: {
            ...params
        }
    })

const getAnything = async (path, params = {}) => {
    try {
        const {
            data
        } = await makeRequest(path, params)
        return [data, null]
    }
    catch(e) {
        return [null, e]
    }
}

export const lxperApi = {
    getscreen : () => getAnything("/api/questions"),
    postscreen : () => getAnything("/api/questions"),
    postidget : (id) => getAnything(`/api/questions/${id}`),
    postidfetch : (id) => getAnything(`/api/questions/${id}`),
    postiddel : (id) => getAnything(`/api/questions/${id}`)
}