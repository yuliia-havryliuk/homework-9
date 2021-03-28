// 1. Створити сайт використовуючи swapi.dev. вибрати 1 з 6 проперті (films, characters etc..)і зробити запит по них, вибрати
// одну з перших проперті що отримаєте і витягнувши з неї "url" - отримати конкретну(планету,фільм, персонажа) з всією
//інформацією про нього. Додати кнопку при натисканні на яку вивести всю наявну інформацію на екран красиво структуровано.
// 2. Використовуючи параметр серч, розробити сайт який буде з допомогою інпута робити пошук за конкретним параметром і
//виводити дані на сторінку. (якщо 1 знахідка - вивести всю інфу про айтем, якщо більше 1 то вивести список по філду).

// 3. Почитати про CRUD, розібратись з роботою https://github.com/arpanpatel/fetch-local-file-using-react

// 4.https://apptractor.ru/info/articles/10-rest-api.html

// 5. https://github.com/axios/axios

let mainUrl = "https://swapi.dev/api/people/";
let node = null;

window.onload = function () {
  node = fetch(mainUrl, {})
    .then((response) => response.json())
    .then((result) => (node = result))
    .then((result) => (node = result))
    .catch((error) => console.log(error));
};

const mainBtnRef = document.querySelector('.main__btn')
mainBtnRef.addEventListener('click', ()=>{
    mainBtnRef.classList.add('hidden')
    const createApiList = item =>{

        const listItemRef = document.createElement('ul')
        listItemRef.classList.add('api__item')

        const listItemTitle =document.createElement('h3')
        listItemTitle.classList.add('api__item-title')
        listItemTitle.textContent = item.name

        const btnRef = document.createElement('button')
        btnRef.classList.add('main__btn')
        btnRef.textContent='Learn more'

        btnRef.addEventListener('click',()=>{

            const listItemNameRef = document.createElement('li')
            listItemNameRef.classList.add('api__item-name')
            listItemNameRef.textContent = `Name: ${item.name}`

            const listItemHeight = document.createElement('li')
            listItemHeight.classList.add('api__item-height')
            listItemHeight.textContent=`Height: ${item.height}`

            const listItemBirthYear= document.createElement('li')
            listItemBirthYear.textContent=`Birth year: ${item.birth_year}`

            const listItemStarships= document.createElement('li')
            listItemStarships.textContent=`Starships: ${item.starships}`

            const listItemMass = document.createElement('li')
            listItemMass.classList.add('api__item-mass')
            listItemMass.textContent=`Mass: ${item.mass}`

            const listItemHairColor= document.createElement('li')
            listItemHairColor.textContent=`Hair color: ${item.hair_color}`

            const listItemSkinColor= document.createElement('li')
            listItemSkinColor.textContent=`Skin color: ${item.skin_color}`

            const listItemEyeColor= document.createElement('li')
            listItemEyeColor.textContent=`Eye color: ${item.eye_color}`

            const listItemGender= document.createElement('li')
            listItemGender.textContent=`Gender: ${item.gender}`

            const listItemHomeworld= document.createElement('li')
            listItemHomeworld.textContent=`Homeworld: ${item.homeworld}`

            listItemRef.append(listItemNameRef, listItemHeight, listItemBirthYear,listItemStarships,
                listItemMass, listItemHairColor, listItemSkinColor, listItemEyeColor,
                listItemGender, listItemHomeworld)

        })

        listItemRef.append(listItemTitle, btnRef)

        return listItemRef
    }

    console.log(node.results);
    node.results.forEach((item) => {
        createApiList(item);
    });

    const allApiItems = node.results.map((item) => createApiList(item));

    const MainRef = document.getElementById("main");
    MainRef.append(...allApiItems);
})


















//function test(){
//   const createApiList = item =>{
//
//       const listItemRef = document.createElement('ul')
//       listItemRef.classList.add('api__item')
//
//       const listItemTitle =document.createElement('h3')
//       listItemTitle.classList.add('api__item-title')
//       listItemTitle.textContent = item.name
//
//       const btnRef = document.createElement('button')
//       btnRef.textContent='Learn more'
//
//       btnRef.addEventListener('click',()=>{
//           const listItemNameRef = document.createElement('li')
//           listItemNameRef.classList.add('api__item-name')
//           listItemNameRef.textContent = `Name: ${item.name}`
//
//           const listItemHeight = document.createElement('li')
//           listItemHeight.classList.add('api__item-height')
//           listItemHeight.textContent=`Height: ${item.height}`
//
//           const listItemBirthYear= document.createElement('li')
//           listItemBirthYear.textContent=`Birth year: ${item.birth_year}`
//
//           const listItemStarships= document.createElement('li')
//           listItemStarships.textContent=`Starships: ${item.starships}`
//
//           const listItemMass = document.createElement('li')
//           listItemMass.classList.add('api__item-mass')
//           listItemMass.textContent=`Mass: ${item.mass}`
//
//           const listItemHairColor= document.createElement('li')
//           listItemHairColor.textContent=`Hair color: ${item.hair_color}`
//
//           const listItemSkinColor= document.createElement('li')
//           listItemSkinColor.textContent=`Skin color: ${item.skin_color}`
//
//           const listItemEyeColor= document.createElement('li')
//           listItemEyeColor.textContent=`Eye color: ${item.eye_color}`
//
//           const listItemGender= document.createElement('li')
//           listItemGender.textContent=`Gender: ${item.gender}`
//
//           const listItemHomeworld= document.createElement('li')
//           listItemHomeworld.textContent=`Homeworld: ${item.homeworld}`
//
//       listItemRef.append(listItemNameRef, listItemHeight, listItemBirthYear,listItemStarships,
//            listItemMass, listItemHairColor, listItemSkinColor, listItemEyeColor,
//           listItemGender, listItemHomeworld)
//
//       })
//
//       listItemRef.append(listItemTitle, btnRef)
//
//       return listItemRef
// }
//   console.log(node.results);
//   node.results.forEach((item) => {
//     createApiList(item);
//   });
//
//   const allApiItems = node.results.map((item) => createApiList(item));
//
//   const MainRef = document.getElementById("main");
//   MainRef.append(...allApiItems);
//}
