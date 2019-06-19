const getUserInfo = () => {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => data)
}

export default getUserInfo;