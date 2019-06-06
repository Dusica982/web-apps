const uiModel = (function () {

    const inputData = $("#input");
    const $main = $(".main");

    function getSearchInput() {
        return inputData.val();
    }

    function displayUsers(data) {

        const users = data.items;


        users.forEach(function (user) {
            const photo = user.avatar_url;
            const username = user.login;

            const container = $(`<div></div>`);
            const img = $(`<img></img>`).attr(`src`, photo);

            const all = container.append(img);

            $main.prepend(all);
            $main.append(`<p>${username}</p>`);


        })


    }

    function reset() {
        inputData.text("");
    }


    return {
        getSearchInput,
        displayUsers,
        reset
    }





})();



