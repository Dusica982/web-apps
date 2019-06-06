// import { log } from "winjs";

function getPopShows() {
  return fetch("http://api.tvmaze.com/shows")
    .then(function(response) {
      return response.json();
    })
    .then(function(shows) {
      shows.slice(0, 50);
      return shows;
    });
}

function getSingleShow(showId) {
  return fetch(`http://api.tvmaze.com/shows/${showId}?embed[]=seasons&embed[]=cast`).then(function(response) {
    return response.json();
  });
}

function getDropDownList(inputValue) {
  return fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(arr) {
      arr.slice(0, 10);
      return arr;
    });
}

export {
  // getShows: getShows,
  getPopShows,
  getSingleShow,
  getDropDownList
};
