import { Author } from "../entities/Author";

export const fetchAuthors = () => {
    let url = "https://jsonplaceholder.typicode.com/users/";

    return fetch(url)
        .then(response => response.json())
        .then(apiAuthors => {
            return apiAuthors.map(apiAuthor => {
                return new Author(apiAuthor.id, apiAuthor.name)
            })
        })
}


export const fetchAuthor = (id) => {
    let url = "https://jsonplaceholder.typicode.com/users/" + id;

    return fetch(url)
        .then(response => response.json())
        .then(apiAuthor => {
            return new Author(apiAuthor.id, apiAuthor.name)
        })
}