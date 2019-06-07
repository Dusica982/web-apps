var figlet = require('figlet');

// figlet('FrontendBootcamp!!', function (err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });

function getText() {
    return figlet.textSync('FrontendBootcamp!', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    });
}

module.exports = { getText }

