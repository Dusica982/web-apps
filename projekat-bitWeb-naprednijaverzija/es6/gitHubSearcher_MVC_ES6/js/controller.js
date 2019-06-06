const controllerModel = (function (ui, data) {

    function setUpEventListener() {
        $("#button").click(function () {

            const getUserData = ui.getSearchInput();

            function onSuccess(data) {
                ui.displayUsers(data);
            }

            data.getUsers(getUserData, onSuccess);
            ui.reset();


        })
    }


    function init() {
        setUpEventListener();
    }

    return {
        init
    }


})(uiModel, dataModel);