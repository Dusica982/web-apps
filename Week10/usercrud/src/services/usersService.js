import { User } from '../entities/User';

export const getUsers = () => {
    let url = "https://jsonplaceholder.typicode.com/users";

    return fetch(url)
        .then(response => response.json())
        .then((apiUsers) => {
            return apiUsers.map((oneUser) => {
                return new User(oneUser.id, oneUser.name, oneUser.email, oneUser.address.city)
            })
        })
}
