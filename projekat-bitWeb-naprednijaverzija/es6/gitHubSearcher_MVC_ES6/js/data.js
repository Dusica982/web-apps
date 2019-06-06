const dataModel = (function () {

    function getUsers(userName, onSuccess) {
        const requestURL = "https://api.github.com/search/users?q=" + userName;

        $.get(requestURL, function (data) {
            console.log(data);
            onSuccess(data);
        })
    }



    return {
        getUsers
    }




})();