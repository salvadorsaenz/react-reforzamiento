function greet( name: string) : string {
    return `Hola ${ name }`;
}

const message = greet('Chalo');
console.log(message);

const greet2 = (name: string) : string => {
    return `Hola ${name}`;
}

function getUser() {
    return {
        uid: 'abc-123',
        username: 'el_patan_123',
    }
}

const user = getUser();
console.log(user);
