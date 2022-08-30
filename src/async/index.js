const fnAsync = () => {
    return new Promise((resolve, reject) => {
        // validation: ternary if
        (true)
            ? setTimeout(() => resolve('Async!'), 2000)
            : reject(new Error('Error'));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('HI');
}

console.log('Before');
anotherFn();
console.log('After');