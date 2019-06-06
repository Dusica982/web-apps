import * as ui from './ui.js'
import * as data from './data.js'




function init() {
    data.getPopShows()
        .then(function (shows) { //ovde ide ono sto poslednji then iz date-e vraca kao promise
            ui.renderShows(shows);
            setupListenersOnShowClick();
        })

}


function setupListenersOnShowClick() {
    $('.tv-show').on('click', function () {
        const showId = $(this).attr('data-show-id');

        data.getSingleShow(showId)
            .then(function (showData) {
                ui.renderSingleShow(showData);
            })

    })
};


export {
    init
}

