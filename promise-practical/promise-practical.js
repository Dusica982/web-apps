// 1. Create a sample promise that:
// Resolves to current time
// Prints received time in console when resolved (in then())




const currentTime = new Promise((resolve, reject) => {
    const newDate = new Date();
    resolve(newDate);
}).then(newDate => {
    console.log(newDate);
    return newDate;
})



// 2. Create a console app that:
// Creates 100 promises;
// Each promise has its own ID (0..99);
// Each promise is resolved after a random time interval (up to 500ms);
// After being resolved, each promise will log its id in the console.

for (let id = 0; id <= 99; id++) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id);

        }, (Math.random() * 500));
    }).then(data => {
        console.log(data);
    })
}



// 3. Modify the app so it prints an ID of the promise that is completed first.



const arrOfPromises = [];
for (let id = 0; id <= 99; id++) {
    const delay = Math.random() * 500;
    const promises = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`id ${id}, time:${delay}`);

        }, delay);
    }).then(data => {
        // console.log(data);
        return data;
    })
    arrOfPromises.push(promises)
}

Promise.race(arrOfPromises)
    .then((data) => {
        console.log(data, "this is first");

    })
