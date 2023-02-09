// Write your code here...
let menuDisplay = document.querySelector('#dish')
let menuName = document.querySelector('#dish-name')
let menuPic = document.querySelector('#dish-image')
let menuDescript = document.querySelector('#dish-description')
let menuPrice = document.querySelector('#dish-price')
let menuText = document. querySelector('#dish-text')
let numberInBag = document.querySelector('#number-in-cart')
let currentFood;
fetch('http://localhost:3000/menu')
    .then((res => res.json()))
    .then((data) => {
        console.log(data);
        menus = data;

        menus.forEach(items => {
            menuBoard(items)
        })
        menuDetail(menus[0]);


    })

function menuBoard(items) {
    let menuItems = document.querySelector('#menu-items'); 
    let createDiv = document.createElement('div');

    createDiv.textContent = items.name
    menuItems.append(createDiv)

    createDiv.addEventListener('click', () => {
        menuDetail(items)
    })
}

function menuDetail(items) {
    currentFood = items;
    // let menuDisplay = document.querySelector('#dish')
    // let menuName = document.querySelector('#dish-name')
    // let menuPic = document.querySelector('#dish-image')
    // let menuDescript = document.querySelector('#dish-description')
    // let menuPrice = document.querySelector('#dish-price')
    // let menuText = document. querySelector('#dish-text')
    // let numberInBag = document.querySelector('#number-in-cart')

    menuName.textContent = items.name
    menuPic.src = items.image
    menuDescript.textContent = items.description
    menuPrice.textContent = items.price
    numberInBag.textContent = items.number_in_bag
}
let addCartForm = document.querySelector('#cart-form')
let cartAmount = document.querySelector('#cart-amount')

addCartForm.addEventListener('submit', (e) => {
    e.preventDefault()

    currentFood.number_in_bag += parseInt(e.target['cart-amount'].value)
    menuDetail(currentFood)
    
})