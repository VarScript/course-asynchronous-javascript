// variable in capital letter is a valor no change in our files
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

// callback is info return the elements or error
function fetchData(urlAPI, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlAPI, true);
    xhttp.onreadystatechange  = (event) => {
        if (xhttp.readyState === 4) { // 4 is a state - 0 is not initial - 1 - loading - 2 execute send - 3 interacting - 4 completed call
            if (xhttp.status === 200) { // 200 is request is correct
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('ERROR' + urlApi);
                return callback(error, null);
            }
        } 
    }
    xhttp.send();
}

// Principal function for do the call

// --

// pass him the variable base the we API
// (/) for go to the products petition
// anonymous function  
fetchData(`${API}/products`, (error1, data1) =>  {
    // if send error for logic stop 
    if ( error1 ) return console.error(error1);
    // is invoked fetchData() for access a punctual object the array data1 
    fetchData (`${API}/products/${data1[0].id}`, (error2, data2) => {
        if( error2 ) return console.error(error2);
        fetchData (`${API}/categories/${data2?.category?.id}`, (error3, data3) => { // nest levels
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});