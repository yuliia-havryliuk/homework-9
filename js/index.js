//!1. Створити сторінку на якій будемо відображати базовий текст в span("Очікую на ввід даних").
// При натисканні alt + A, замість спана зявиться інпут з аналогічним текстом, який тепер ви зможете відредагувати. 
//Далі коли ви натисните shift + S дані збережуться і знов будуть відображатись як span. 

const homeworkTaskRef = document.querySelector('.homework__task')
const spanRef = document.querySelector('.homework__task > span')
spanRef.textContent = 'Очікую на ввід данних(Alt+A)'
const inputFirstRef = document.createElement('input')
inputFirstRef.classList.add('js-first__input')
inputFirstRef.maxLength='30'

const pressAltA = document.addEventListener('keyup', event=>{
    if(event.altKey && event.code === 'KeyA'){
        event.preventDefault()
        handlerInputToParent()
    }
})
const pressShiftS = document.addEventListener('keyup', event=>{
    if(event.shiftKey && event.code === 'KeyS'){
        event.preventDefault()
        spanRef.textContent = event.target.value
        handlerPressShiftS()
    } 
})
function handlerInputToParent (){
    inputFirstRef.placeholder = spanRef.textContent
    spanRef.textContent = ''
    homeworkTaskRef.appendChild(inputFirstRef)
}
function handlerPressShiftS(){
    homeworkTaskRef.removeChild(inputFirstRef)
}

//!2. Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде менше 600px ,
// виводити лог ми векористовуємо мобільну версію, при більшому розмірі сторінки - що ми використовуємо десктоп версію.

const windowResize = window.addEventListener('resize', event=>{
    if(event.target.innerWidth>600){
        console.log('WE USE DESKTOP VERSION!')
    }else if(event.target.innerWidth < 600){
        console.log('WE USE MOBILE VERSION!')
    }
})

//!3. Повісити івент на інпут, при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено.
const inputRef = document.querySelector('.js-input')
const parRef = document.querySelector('.js-paragraph >span')

inputRef.addEventListener('input', handleInputChange)

function handleInputChange(event){
    parRef.textContent = event.target.value
}

//4. При натисканні на кнопку альт+ о виводити модальне вікно на екран, альт + с - закривати.

const showModalRef = document.querySelector('.show__modal')


function handelFirstModalWindowShow (){
    document.body.classList.add('show__modal')
    document.body.classList.remove('show__button')
    document.body.classList.add('show__span')
}
function handelFirstModalWindowHide(){
    document.body.classList.remove('show__modal')

}

const pressBtnORef = window.addEventListener('keyup', event=>{

    if(event.altKey && event.code ==='KeyO'){
        handelFirstModalWindowShow()
    } else if(event.altKey && event.code==='KeyC'){
        handelFirstModalWindowHide()
    }
})

//5. Створити модальне відкно аналог Алерта але з гарним дизайном. по кліку на кнопку зявляється
// модальне вікно по центрі екрану(центрування елемента). В модальному вікні має бути текст та кнопка закрити.

const openModalWindowRef = document.querySelector('.btn')
const closeModalWindowRef = document.querySelector('.button[data-action="close-modal"]')

function handelSecondModalWindowShow(){
    document.body.classList.add('show__modal')
    document.body.classList.add('show__button')
    document.body.classList.remove('show__span')
}
function handelSecondModalWindowHide(){
    document.body.classList.remove('show__modal')
}


openModalWindowRef.addEventListener('click', ()=>{
    handelSecondModalWindowShow()
})
closeModalWindowRef.addEventListener('click', ()=>{
    handelSecondModalWindowHide()
})







// const formRef = document.querySelector('.js-registration__form')

// formRef.addEventListener('submit',event=>{

//     const submittedData = {}

//     event.preventDefault()
//     const formData = new FormData(event.target)
//     formData.forEach((value, key) => {
//         console.log(`value: ${value}`)
//         console.log(`key: ${key}`)

//         submittedData[key] = value

//     });
//     console.log(submittedData)
//     // const formElements = event.target.elements
//     // console.dir(formElements.name.value)
//     // console.log(formElements.email.value)
//     // console.log(formElements.password.value)
//     // console.log(event.target)
// })

// const userText = document.querySelector('.js-input')
// const nameLabelRef = document.querySelector('.js-button > span')

// userText.addEventListener('change',(event)=>{
//     nameLabelRef.textContent = event.target.value
// })




// const targetListener = document.querySelector('.js-target__listener')
// const addListener = document.querySelector('.js-add__listener')
// const removeListener = document.querySelector('.js-remove__listener')

// const messageRef =()=>{
//     console.log('Click!!!!')
// }

// addListener.addEventListener('click', ()=>{
//     targetListener.addEventListener('click', messageRef)
// })

// removeListener.addEventListener('click', ()=>{
//     targetListener.removeEventListener('click',messageRef)
// })

// targetListener.addEventListener('click',event=>{
//     console.dir(event.target)
// })



