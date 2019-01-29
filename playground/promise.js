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

var promise2 = asyncAdd(47, 25);

promise2
    .then(res => console.log(res))
    .catch(err => console.log(err));

asyncAdd(4, 6).then(result => {
   return asyncAdd(result, 10);
}).then(res => console.log(res))
  .then(err => console.log(err))
  ;