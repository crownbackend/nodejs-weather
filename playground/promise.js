var asyncAdd = (a, b) => {
    // plutôt que de faire un "return a+b" retour immédiat synchrone
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            } else {
                reject('Les arguments doivent être des nombres');
            }
            resolve(a+b);
        }, 3000);
    })
};

var promise1 = asyncAdd(5, 5);
var promise2 = asyncAdd(47, 25);

promise2
    .then(res => console.log(res))
    .catch(err => console.log(err));