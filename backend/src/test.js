fs = require('fs')
fs.readFile('src/data.json', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(JSON.parse(data));
});