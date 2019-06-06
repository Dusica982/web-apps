const dataModule = (function () {

    function getPopShows(callback) {
        const popShowsUrl = 'http://api.tvmaze.com/shows';

        $.get(popShowsUrl, function (data) {
            callback(data.slice(0, 50));
        })
    };

    function getSingleShow(showId, callback) {
        const singleShowUrl = `http://api.tvmaze.com/shows/${showId}?embed[]=seasons&embed[]=cast`;

        $.get(singleShowUrl, function (data) {
            callback(data);

        })
    }


    return {
        // getShows: getShows,
        getPopShows,
        getSingleShow
    }


})();