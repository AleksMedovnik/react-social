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

export const getPosts = () => {
    return instance.get('posts');
}

export const addPosts = (id, newPostText) => {
    return instance.post('posts', {
        body: JSON.stringify({
            title: newPostText,
            body: newPostText,
            userId: 1,
            id,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

}

export const deletePost = (id) => {
    return instance.delete(`posts/${id}`);
}
