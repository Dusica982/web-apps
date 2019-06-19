const getUserInfo = (id) => {
    let url = "https://jsonplaceholder.typicode.com/users/";

    return url + { id };
}

export default getUserInfo;