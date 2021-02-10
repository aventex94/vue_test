import http from './apiClient.js';

export default {
    create: async data => {
        return await http.post('/user', data)
    },
    get: async user => {
        return await http.get(`user/${user}`)
    },
    update: async data => {
        return await http.put('/user', data)
    },
    delete: async user => {
        return await http.delete(`user/${user}`)
    }
};