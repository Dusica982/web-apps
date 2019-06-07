import * as ui from "./ui.js";
import * as data from "./data.js";

function init() {
  data.getPopShows()
    .then(ui.renderShows)
    .then(setupListenersOnShowClick)

  //ovde ide ono sto poslednji then iz date-e vraca kao promise

};


function setupListenersOnShowClick() {
  $(".tv-show").on("click", function () {
    const showId = $(this).attr("data-show-id");

    data.getSingleShow(showId).then(function (showData) {
      ui.renderSingleShow(showData);
    });
  });
}

function setupListenersOnKeybord() {
  $(".input").on("keypress", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      const inputValue = $(this).val();
      data.getDropDownList(inputValue)
        .then((inputValue) => {
          ui.renderList(inputValue);
          setupListenersOnShowClick();
        })
    };
  });
}

setupListenersOnKeybord();

export { init, setupListenersOnShowClick, setupListenersOnKeybord };
