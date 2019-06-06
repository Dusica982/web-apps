const uiModule = (function () {
  const $searchInput = $(".input");
  const $showArea = $(".shows");

  function renderShows(shows) {
    $showArea.append('<h1 class="main-title">Popular Shows</h1>')
    shows.forEach(function (show) {

      const template = `
        <a href="#">
          <div class="col-3 tv-show d-inline-block m-0 p-0"  data-show-id="${show.id}">
            <img src="${show.image.medium}" alt="">
            <h4 class="show-name">${show.name}</h4>
          </div>
        </a>`;

      $showArea.append(template);
    });

  }

  function renderSingleShow(show) {
    $showArea.html('');
    $showArea.append('<h1 class="main-title">' + show.name + '</h1>')

    let seasons = '';
    console.log(show);
    show._embedded.seasons.forEach(function (season) {
      console.log(season);
      seasons += '<li>' + season.premiereDate + ' - ' + season.endDate + '</li>';
    });

    let cast = '';
    console.log(show);
    show._embedded.cast.forEach(function (members) {
      cast += '<li>' + members.person.name + '</li>';
    });

    console.log(seasons);

    const templateString = `
    <div class="single-show">
      <h1>${show.name}</h1>
      <img src="${show.image.medium}" alt="" class="col-6">
      <ul>Seasons
      ${seasons}
      </ul>
      <ul>Cast
      </ul>
      ${cast}
      <h3>Show Details</h3>
      <p>${show.summary}</p>
    </div>`;




    $showArea.append(templateString);
  }

  // function getSearchInput() {
  //   return $searchInput.val();
  // }

  return {
    renderShows,
    renderSingleShow
  };
})();
