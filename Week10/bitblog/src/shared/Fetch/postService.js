import { Post } from '../entities/Post'


export const fetchPosts = () => {
    let url = "https://jsonplaceholder.typicode.com/posts/";

    return fetch(url)
        .then(response => response.json())
        .then(apiPosts => {
            return apiPosts.map(apiPost => {
                return new Post(apiPost.title, apiPost.body, apiPost.id, apiPost.userId)
            })
        })
}
export const fetchPost = (id) => {
    let url = "https://jsonplaceholder.typicode.com/posts/" + id;

    return fetch(url)
        .then(response => response.json())
        .then(apiPost => {
            return new Post(apiPost.title, apiPost.body, apiPost.id, apiPost.userId)
        })
}
export const fetchSingleAuthorPosts = (userId) => {
    let url = "https://jsonplaceholder.typicode.com/posts?userId=" + userId;

    return fetch(url)
        .then(response => response.json())
        .then(apiPost => {
            return apiPost.map((onePost) => {
                return new Post(onePost.title, onePost.body, onePost.id)
            })
        })
}

