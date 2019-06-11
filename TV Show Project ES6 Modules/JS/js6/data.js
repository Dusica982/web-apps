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

function getSearch(inputValue, limit) {
  return fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(arr) {
      if (limit) arr.slice(0, limit);
      return arr;
    });
}

export { getPopShows, getSingleShow, getSearch };
