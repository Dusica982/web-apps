const oneUserInfo = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => data)
}

export default oneUserInfo;