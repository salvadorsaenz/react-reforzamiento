function greet( name: string) : string {
    return `Hola ${ name }`;
}

const message = greet('Chalo');
console.log(message);

const greet2 = (name: string) : string => {
    return `Hola ${name}`;
}

const greet3 = (name: string) => `Hola ${name}`;

interface User {
    uid: string,
    username: string,
}

function getUser(): User {
    return {
        uid: 'abc-123',
        username: 'el_patan_123',
    }
}

const getUser2 = () => {
    return {
        uid: 'abc-123',
        username: 'el_patan_123',
    }
}
const getUser3 = () => ({
    uid: 'abc-123',
    username: 'el_patan_123',
});


const user = getUser();
console.log({user});
const user2 = getUser2();
console.log({user2});

const myNumbers : number[] = [1,2,3,4,5];

myNumbers.forEach(function(value) {
    console.log({value});
    
});
