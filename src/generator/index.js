// The generator it's create with the reserve word function*
function* gen() {
    // yield is a result that it's want have
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
// For get the first value of gen() and follow
console.log(g.next().value); // -> 1
console.log(g.next().value); // -> 2
console.log(g.next().value); // -> 3

console.log(g.next().value); // -> 2


function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Fabio', 'Vargas', 'Federico', 'Marx'])
// Aced of the element
console.log(it.next())