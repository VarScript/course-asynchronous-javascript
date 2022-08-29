const promise = new Promise ((resolve, reject) => {
    resolve('hey');
});


/* Program for count cows */
const cows = 11;
const countCows = new Promise ((resolve, reject) => {
    if (cows > 10) {
        resolve(`If we have ${cows} cows on the farm`)
    } else {
        reject(`There is no cows on the farm`)
    }
});

countCows.then ((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
}).finally(() => console.log('Finally'));