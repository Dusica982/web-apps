const controllerModule = (function (data, ui) {

    function setupListenersOnShowClick() {
        $('.tv-show').on('click', function () {
            const showId = $(this).attr('data-show-id');

            data.getSingleShow(showId, function (showData) {
                ui.renderSingleShow(showData);
            });
        })
    };

    function init() {
        data.getPopShows(function (shows) {
            ui.renderShows(shows);
            setupListenersOnShowClick();
        });

    }

    return {
        init
    }

})(dataModule, uiModule);