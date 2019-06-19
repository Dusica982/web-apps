import { Post } from '../entities/Post'


export const fetchPosts = () => {
    let url = "https://jsonplaceholder.typicode.com/posts/";

    return fetch(url)
        .then(response => response.json())
        .then(apiPosts => {
            return apiPosts.map(apiPost => {
                return new Post(apiPost.title, apiPost.body, apiPost.id)
            })
        })
}