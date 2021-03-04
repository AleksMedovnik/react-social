import * as axios from 'axios';

const setFollowed = (id, followed) => {
    return {
        body: JSON.stringify({
            id,
            userId: id,
            followed: followed,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
}

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const getUsers = () => {
    return instance.get('users')
        .then(response => response.data);
}

export const followAPI = (id, followed) => {
    let obj = setFollowed(id, followed);
    return instance.put(`users/${id}`, obj)
        .then((response) => JSON.parse(response.data.body));
}