interface Persona {
    nombre: string;
    paterno: string;
    edad: number;
}

const ironman: Persona = {
    nombre: 'Tony',
    paterno: 'Stark',
    edad: 45,
}

const { nombre: nombreIron, paterno, edad} = ironman;

console.log({ nombreIron, paterno, edad});

interface Hero {
    nombre: string,
    age: number,
    key: string,
    rank?: string,
}

const superman : Hero = {
    nombre: 'Superman',
    age: 50,
    key: 'sp.123',
    rank: 'General',
}

const userContext = ( {key, nombre, age, rank}: Hero) => {

    return {
        keyName: key,
        user: {
            nombre,
            age,
        },
        rank: rank
    }
};

const { keyName, user: { nombre, age } } = userContext(superman);

console.log({ keyName, nombre, age });

