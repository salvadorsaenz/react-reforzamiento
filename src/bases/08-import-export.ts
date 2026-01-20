import { heroes, Owner, type Hero } from "../data/heroes.data";


const getHeroById = (id: number) : Hero | undefined => {
    
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    if (!hero) {
        throw new Error(`No existe un héroe con el id ${id}`);
    }

    return hero;
}

const miHero = getHeroById(1);
console.log(miHero);

export const getHeroByOwner = ( owner : Owner) : Hero[] | undefined => {
    const herosByOwner = heroes.filter(
        hero => hero.owner === owner
    );


    return herosByOwner;
}

const miHeroes = getHeroByOwner(Owner.DC);
console.log(miHeroes);