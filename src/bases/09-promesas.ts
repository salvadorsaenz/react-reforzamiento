
const myPromise = new Promise<number>( (resolve, reject) => {

    setTimeout(()=> {
        // resolve(100);
        reject(`Mi amigo se perdió`);
    }, 2000);

});

myPromise
    .then((myMoney) => {
    console.log(`then tengo mi dinero ${myMoney}`);
    })
    .catch((reason) => {
        console.warn(reason);
        
    })
    .finally(() => {
        console.log(`A seguir taloneándole`);
        
    })
    ;