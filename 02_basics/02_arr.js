const marvel_hero = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_hero.push(dc_heros)
// console.log(marvel_hero);

//   const newArr = marvel_hero.concat(dc_heros)
// console.log(newArr);
const newHero = [...marvel_hero, ...dc_heros]
// console.log(newHero);

const anotherarr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realArr = anotherarr.flat(Infinity)
// console.log(realArr);

console.log(Array.isArray("ryan"))
console.log(Array.from("ryan"))

