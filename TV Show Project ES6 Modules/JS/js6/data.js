// import { log } from "winjs";



function getPopShows() {
    return fetch('http://api.tvmaze.com/shows')
        .then(function (response) {
            return response.json();
        })
        .then(function (shows) {
            shows.slice(0, 50);
            return shows;
        })
}


function getSingleShow(showId) {
    return fetch(`http://api.tvmaze.com/shows/${showId}?embed[]=seasons&embed[]=cast`)
        .then(function (response) {
            return response.json();
        })

}






export {
    // getShows: getShows,
    getPopShows,
    getSingleShow
}

