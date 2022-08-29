import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1'



/* Function for receive with argument the URL of the API that want call, this return fetch. */ 

function fetchData(urlApi) {
   return fetch(urlApi);
};

// fetchData(`${API}/products`)
//     // .then(): for know that have in the answered
//     // Response.json: for transform the information of the first called to a json object
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then(() => {
//         console.log('Hi')
//     })
//     .catch(error => console.log(error)) 


fetchData(`${API}/products`) 
    .then(response => response.json ())
    .then(products => {
        console.log(products)
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'))