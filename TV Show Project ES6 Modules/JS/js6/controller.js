import * as ui from "./ui.js";
import * as data from "./data.js";

function init() {
  data
    .getPopShows()
    .then(ui.renderShows)
    .then(setupListenersOnShowClick);

  //ovde ide ono sto poslednji then iz date-e vraca kao promise
}

function goToShowPage(event) {
  event.preventDefault();
  const showId = $(this).attr("data-show-id");

  data.getSingleShow(showId).then(function(showData) {
    ui.renderSingleShow(showData);
  });
}

function setupListenersOnShowClick() {
  $(".tv-show").on("click", goToShowPage);
}

function setupListenersOnKeybord() {
  $(".input").on("keypress", function(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      const inputValue = $(this).val();
      data.getSearch(inputValue).then(inputValue => {
        ui.renderList(inputValue);
        setupListenersOnShowClick();
      });
    } else {
      const inputValue = $(this).val();
      data.getSearch(inputValue, 10).then(inputValue => {
        ui.dropDownList(inputValue);
        setupListenersOnShowClick();
      });
    }
  });
}

function clickOnShowInList() {
  $("ul").on("click", "a", goToShowPage);
}

setupListenersOnKeybord();
clickOnShowInList();

export { init, setupListenersOnShowClick, setupListenersOnKeybord };
