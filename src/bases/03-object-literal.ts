interface Persona {
    nombre: string;
    paterno: string;
    edad: number;

    domicilio?: Domicilio
}

interface Domicilio {
    ciudad: string,
    codigoPostal: number,
}

const ironman: Persona = {
    nombre: 'Tony',
    paterno: 'Stark',
    edad: 45,
    // domicilio: {
    //     ciudad: 'New York',
    //     codigoPostal: 90000,
    // }
}

const chalo = structuredClone(ironman);
chalo.nombre = 'Chalo';
chalo.paterno = 'Cast';
// chalo.domicilio.ciudad = 'Toluca';

console.log({ironman, chalo});
