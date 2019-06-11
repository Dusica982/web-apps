// import { inputValue } from "./controller";

const $searchInput = $(".input");
const $showArea = $(".shows");
const $ulArea = $("#ul");

function renderShows(shows) {
  $showArea.append('<h1 class="main-title">Popular Shows</h1>');
  shows.forEach(function(show) {
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
  $showArea.html("");
  // $showArea.append('<h1 class="main-title">' + show.name + "</h1>");

  let seasons = "";
  console.log(show);
  show._embedded.seasons.forEach(function(season) {
    console.log(season);
    seasons += "<li>" + season.premiereDate + " - " + season.endDate + "</li>";
  });

  let cast = "";
  console.log(show);
  show._embedded.cast.forEach(function(members) {
    cast += "<li>" + members.person.name + "</li>";
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

function renderList(shows) {
  $showArea.html("");
  shows.forEach(function(show) {
    if (show.show.image === null) {
      $("img").attr("class", "broken-img");
      $("img").attr("src", "https://www.mcbaincamera.com/_toolbox/noImageAvailable.jpg");
    } else {
      const template = `
          <a href="#">
            <div class="col-3 tv-show d-inline-block"  data-show-id="${show.show.id}">
              <img src="${show.show.image.medium}" alt="">
              <h4 class="show-name">${show.show.name}</h4>
            </div>
          </a>`;
      $showArea.append(template);
    }
  });
}

function dropDownList(shows) {
  $ulArea.html("");
  shows.forEach(function(show) {
    const template = `
    <li><a href="${show.show.name}" data-show-id="${show.show.id}">${show.show.name}</a></li>
    `;
    $ulArea.append(template);
  });
}

export { renderShows, renderSingleShow, renderList, dropDownList };
