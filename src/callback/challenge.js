// variable in capital letter is a valor no change in our files
const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

// callback is info return the elements or error
function fetchData(urlAPI, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlAPI, true);
    xhttp.onreadystatechange  = (event) => {
        if(xhttp.readyState === 4) { // 4 is a state - 0 is not initial - 1 - loading - 2 execute send - 3 interacting - 4 completed call
            if(xhttp.status === 200) { // 200 is request is correct
                callback(null, JSON.parse(xhttp.responseText));
            }
        } else {
            const error = new Error('ERROR' + urlApi);
            return callback(error, null);
        }
    }
    xhttp.send();
}

// Principal function for do the call