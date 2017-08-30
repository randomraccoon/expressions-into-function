// Clean up the code below with a single function called `personalIntroduction`
// The new code should have the exact same functionality and output.

const createPerson = (name, height, favoriteColor) {
  return {"name":name, "height":height, "favoriteColor":favoriteColor};
}

const bob = createPerson("Bob","72","red");
const samantha = createPerson("Samantha","65","orange");
const christopher = createPerson("Christopher","69","green");
const tamera = createPerson("Tamera","63","blue");


const personalIntroduction = (p) => {
  return `My name is ${p.name}, and my height is ${p.height}, and my favorite color is ${p.favoriteColor}`;
}

console.log(personalIntroduction(bob));
console.log(personalIntroduction(samantha));
console.log(personalIntroduction(christopher));
console.log(personalIntroduction(tamera));
