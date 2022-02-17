// const titre = document.querySelector("#titre");
const ingredients = ['pates', 'lardons', 'oignons', 'crème fraîche'];
const listeTriee = ingredients.sort();
// const image = document.createElement('img');
// image.src = "https://miro.medium.com/max/1056/1*SYMeMxSK_Sg9n5AD4mhqpQ.jpeg";
// document.body.append(image);

const orderedList = document.createElement("OL");
const tata = document.body.append(orderedList);

for (let i = 0; i < listeTriee.length; i++) {
    const list = document.createElement('Li');
    const ajout = list.textContent = `${listeTriee[i]}`;
    const listATrier = orderedList.append(list);
    list.style.border = "1em solid beige";
    list.style.width = "25%";
    list.style.padding = "1.5em";
}