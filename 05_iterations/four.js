const myObj = {
    cpp: 'c++',
    js: 'javascript',
    rd: "ruby",
    swift: "swift by apply"
}
for (const key in myObj) {
   //console.log(`${key} shortcut is for ${myObj[key]}`);
}

const progaraming = ["js", "rb", "py","java", "cpp"]
for (const key in progaraming) {
   //console.log(progaraming[key]);
}
const map = new Map()
map.set('IN', "India")
map.set('Fr', "France")
map.set('Pak', "Pakistan")
map.set('IN', "India")
//console.log(map);

// for (const key in map) {
//     console.log(map[key]);
// }

for (const i of map) {
    console.log(i);
}