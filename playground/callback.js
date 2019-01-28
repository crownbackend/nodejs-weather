// exemple illustrant le mécanique du caalback

var getUser = (id, callback, callback2) => {
    var user = {
      id: id,
      name: 'Massimiliano Allegri'
    };

    // exécution synchrone, immédiate
    // callback(user);

    // exécution asynchrone, remis a plus trad
    setTimeout(() => {
        callback(user);
    }, 3000)
};

var err = () => console.log('error');

getUser(5, (userObject) => [
    console.log(userObject)
]);

console.log('fini merci ');