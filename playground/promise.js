var asyncAdd = (a, b) => {
    // plutôt que de faire un "return a+b" retour immédiat synchrone
    return new Promise((resolve, reject) => {
        resolve(a+b);
    })
};

var promise = asyncAdd(5, 5);

promise
    .then(res => console.log(res));