// 1. Створити сайт використовуючи swapi.dev. вибрати 1 з 6 проперті (films, characters etc..)і зробити запит по них, вибрати
// одну з перших проперті що отримаєте і витягнувши з неї "url" - отримати конкретну(планету,фільм, персонажа) з всією 
//інформацією про нього. Додати кнопку при натисканні на яку вивести всю наявну інформацію на екран красиво структуровано. 
// 2. Використовуючи параметр серч, розробити сайт який буде з допомогою інпута робити пошук за конкретним параметром і 
//виводити дані на сторінку. (якщо 1 знахідка - вивести всю інфу про айтем, якщо більше 1 то вивести список по філду).

// 3. Почитати про CRUD, розібратись з роботою https://github.com/arpanpatel/fetch-local-file-using-react

// 4.https://apptractor.ru/info/articles/10-rest-api.html

// 5. https://github.com/axios/axios


// let node = null;
// let mainUrl = "http://swapi.dev/api/vehicles/?page=2";
// let input =
// window.onload = function () {
//     node = fetch(mainUrl, {
//         // headers: {
//         //     'Content-Type': 'application/json;charset=utf-8'
//         // },
//         // Authentication: 'secret'
//     })
//         .then(response => response.json())
//         .then(result => node = result );
// };

// function test() {
//     console.log(node);
//     // for(let i= 0; i < node.bodies.length; i++) {
//     //     if(node.bodies[i].name === "Callisto") {
//     //         console.log(node.bodies[i]);
//     //     }
//     // }
//     // let countries = document.getElementById('main');
//     // for (let i = 0; i < node.bodies.length; i++){
//     //     let li = document.createElement('li');
//     //     li.innerText = node.bodies[i].name;
//     //     countries.appendChild(li);
//     // }
// }

// let MainRef;
// function test(){
//     console.log(node.results)

//     MainRef = document.getElementById('main')
//     for(let i =0; i<node.results.length; i++){
//         console.log(node.results[i])

//         const listRef = document.createElement('ul')
//         const btnRef = document.createElement('button')

//         listRef.textContent = node.results[i].name
//         btnRef.textContent = 'Learn more!'

//         btnRef.addEventListener('click', event =>{
//                 const listItemRef = document.createElement('li')
//                 listItemRef.textContent=node.results[i]
//                 console.log(node.results[i])
//                 listRef.appendChild(listItemRef)
            
//         })
//         MainRef.append(listRef, btnRef)
//     }
// }
let mainUrl = "https://swapi.dev/api/people/"
let node = null

window.onload = function () {
node = fetch(mainUrl,{

})
.then(response=>response.json())
.then(result => node = result)
.then(result => node = result)
.catch(error=>console.log(error))
//.catch(console.log)
}

function test(){

    const createApiList = item =>{

        const listItemRef = document.createElement('ul')
        listItemRef.classList.add('api__item')

        const listItemTitle =document.createElement('h3')
        listItemTitle.classList.add('api__item-title')
        listItemTitle.textContent = item.name

        const btnRef = document.createElement('button')
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
    console.log(node.results)
    node.results.forEach(item => {
        createApiList(item)
    });

    const allApiItems = node.results.map(item=>createApiList(item))

    const MainRef = document.getElementById('main')
    MainRef.append(...allApiItems)
}
// const fetchPlanet = id =>{
//     return fetch(`http://swapi.dev/api/planets/${id}`)
//     .then(res=>res.json())
// }
// fetchPlanet(5)
// .then(console.log)
// .catch(console.log)





// const fetchUser = userName =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const success = Math.random()>0.5

//             if(success){
//                 const user = {name:userName, age:19, hobby:'skiing'}
//                 resolve(user)
//             }

//             const error = 'Произошла ошибка'
//             reject(error)
//         }, 1000)
//     })
// }

//fetchUser('Jules').then(user=>console.log(user)).catch(error=>console.log(error))
//        АБО
// fetchUser('Jules').then(onSuccess).catch(onError)

// function onSuccess(user){
//     (console.log(user))
// }
// function onError(error){
//     (console.log(error))
// }

// const promise = new Promise((resolve, reject)=>{
//     const success = Math.random()>0.5

//     setTimeout(() => {
        
    
//     if(success){
//         resolve('YES!!')
//     }
//     reject('NOOO!')
// }, 2000);
// })

// promise
// .then(result=>{console.log(result)})
// .catch(error=>{console.log(error)})

// const promise = new Promise((resolve)=>{
//     resolve(5)
// })

// promise
// .then(x=>{
//     console.log(`x: ${x}`)
//     return 45
// })
// .then(y=>{
//     console.log(`y: ${y}`)
//     return y+3
// })
// .then(z=>{
//     console.log(`z: ${z}`)
// })
