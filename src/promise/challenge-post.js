import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

/* Two arguments the url of the API for to connect and the data that we go to save*/
function postData(urlApi, data) {
    const response = fetch(urlApi, {
        // Method POST for to add, have that to go in capital letters
        method: 'POST',
        //cors is the permission it will have, by default it will always be in cors
        mode: 'cors',
        // is optional
        credentials: 'same-origin',
        headers: {
            //necessary to indicate that what is being sent is of type json
            'Content-type': 'application/json'
        },
        // transform info (what is in object) for send in tex
        body: JSON.stringify(data)
    });
    return response;
    // with that we have function postData
}

const data = {
    "title": "New Product TusiSabes",
    "price": 100,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

  //we can use the postData as a promise and with .then get the response as a json object and show it later on the console

  postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))