
// var inputEle = document.querySelector("#input");
// inputEle.addEventListener("click", addNewPicture);


// function addNewPicture(event) {
//     var dog = new XMLHttpRequest();
//     dog.open("GET", "https://dog.ceo/api/breeds/image/random");
//     dog.send();

//     dog.onload = function () {
//         var data = JSON.parse(dog.response);
//         console.log(data);
//         var imgEle = document.createElement("img");
//         imgEle.setAttribute("src", data.message);
//         document.querySelector("body").appendChild(imgEle);
//     }
// }


// var $button = document.querySelector("#input");

// $button.addEventListener("click", fetchDogImage);

// function fetchDogImage() {
//     var dog = new XMLHttpRequest();
//     dog.open("GET", "https://dog.ceo/api/breeds/image/random");
//     dog.send();

//     dog.onload = function () {
//         var data = JSON.parse(dog.response);

//         var imgEle = document.createElement("img");
//         imgEle.setAttribute("src", data.message);

//         document.querySelector("body").appendChild(imgEle);
//     }
// }


const $body = document.querySelector(".container");
const $button = document.querySelector("#button");

$button.addEventListener('click', fetchDogImage);

function fetchDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then((dogData) => renderDogImage(dogData.message))
}

function renderDogImage(imageUrl) {
    $image = document.createElement("img");
    $image.setAttribute("src", imageUrl);

    $body.appendChild($image)
}