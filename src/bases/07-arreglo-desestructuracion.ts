const charName = ['Goku', 'Vegeta', 'Trunks'];

const [p1, , p3] = charName;

console.log({ p1, p3 });

const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnsArrayFn();

console.log({ letters, numbers });

const useState = (valor: string) => {
    return [valor, (newValue: string) => {
        console.log(newValue);
    }] as const;
}

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"

