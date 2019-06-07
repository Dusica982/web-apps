function initialLoading() {
    return fetch("http://127.0.0.1:4001/")
        .then(response => response.json())
}


export { initialLoading };



