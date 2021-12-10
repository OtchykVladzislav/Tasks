//variables for modal
const orderBtn = document.getElementById('ord'),
    modalWindow = document.querySelector('.modal'),
    submitBtn = document.getElementById('byu');
let ordertext = document.getElementById("ordertext");

//Cycle for adding price and calorie, next to the product name
for (let node of document.querySelectorAll('.choose')) {
    let info
    if (node.name == "testo") {
        info = infoBasesPizzas[node.value];
    } else if (node.name == "sause") {
        info = infoSaucesPizzas[node.value];
    } else {
        info = infoIngredientsPizzas[node.value];
    }
    
    let temp = ` (${info.cost} BYN, ${info.calories} kсal)`
    node.parentElement.innerHTML += temp
}

/*The loop will go through all the elements of the choose class 
and with each click on this element an event will be triggered*/
for(let node of document.querySelectorAll('.choose') ) {
    node.addEventListener('click', event => {
        let collectionSauses = []
        let collectionIngrid = []
        let osnova;
        //When you click on a certain checkbox, adding 'active' to the class is triggered and the image appears on the page
        document.getElementsByClassName(node.value)[0].classList.toggle('active');
        //When you click on an item from the list with the name 'testo', an order button appears
        if(node.name == "testo"){
            orderBtn.style.display = "inline-block"
        }
        //When the stem is selected, this element is added to the array.
        const base = document.getElementsByClassName("testos")[0].getElementsByClassName("choose");
        for (let i = 0; i < base.length; i++) {
            if (base.item(i).checked) {
                osnova = new Base(base.item(i).value);
            }
        }
        //When choosing a sauce, this item is added to the array
        const sauses = document.getElementsByClassName("sauces")[0].getElementsByClassName("choose");
        for (let i = 0; i < sauses.length; i++) {
            if (sauses.item(i).checked) {
                collectionSauses.push(new Sauses(sauses.item(i).value));
            }
        }
        //When you select an ingredient, this element is added to the array
        const ingridients = document.getElementsByClassName("ingredients")[0].getElementsByClassName("choose");
        for (let i = 0; i < ingridients.length; i++) {
            if (ingridients.item(i).checked) {
                collectionIngrid.push(new ingredients(ingridients.item(i).value));
            }
        }

        var pizza = new Pizza(osnova, collectionIngrid, collectionSauses)
        //Calculated price and calories. The text that will be in the modal window.
        var price = calcDiffPrice(pizza.getPrice()).toFixed(2)
        var calories = pizza.getCalories()
        let totalText;
        //Outputting text to a page
        document.getElementById("amountBel").innerHTML = price + " <span>BYN</span>";
        document.getElementById("countKk").innerHTML = calories + " <span>kcal.</span>";
        //Outputting text to a modal window
        if(collectionSauses.length == 0 && collectionIngrid.length == 0){
            totalText = `Вы заказали пиццу('${calories} kcal.'), с основой('${osnova.name}'), с Вас ${price}BYN`;
        }
        else if(collectionSauses.length == 0){
            totalText = `Вы заказали пиццу('${calories} kcal.'), с основой('${osnova.name}') и ингридиентами: '${collectionIngrid.join(', ')}', с Вас ${price}BYN`;
        }
        else if(collectionIngrid.length == 0){
            totalText = `Вы заказали пиццу('${calories} kcal.'), с основой('${osnova.name}' и соусами: '${collectionSauses.join(', ')}', с Вас ${price}BYN`;
        }
        else{
            totalText = `Вы заказали пиццу('${calories} kcal.'), с основой('${osnova.name}'),с соусами: '${collectionSauses.join(', ')}' и ингридиентами: '${collectionIngrid.join(', ')}', с Вас ${price}BYN`;
        }
        ordertext.innerHTML = totalText;
    })
}

//The function calculates the price taking into account the pizzeria's markup
function calcDiffPrice(cost){
    if (cost < 10){
        return cost * 0.2 + cost
    }
    else if (cost >10 && cost <= 15){
        return cost * 0.15 + cost
    }
    else{
        return cost * 0.1 + cost
    }
}


//Modal window for displaying information and buying pizza
window.addEventListener('click', event => {
    if(event.target === modalWindow) {
        modalWindow.classList.add('none');
    }
});

submitBtn.addEventListener('click', () => {
    modalWindow.classList.add('none');
    createPizza();
});

orderBtn.addEventListener('click' , () => {
    modalWindow.classList.remove('none');
});

//Sending data to the server
function createPizza(){
    let collectionSauses = []
    let collectionIngrid = []
    let osnova;
    
    const base = document.getElementsByClassName("testos")[0].getElementsByClassName("choose");
    for (let i = 0; i < base.length; i++) {
        if (base.item(i).checked) {
            osnova = new Base(base.item(i).value);
        }
    }
    const sauses = document.getElementsByClassName("sauces")[0].getElementsByClassName("choose");
    for (let i = 0; i < sauses.length; i++) {
        if (sauses.item(i).checked) {
            collectionSauses.push(new Sauses(sauses.item(i).value));
        }
    }
    
    const ingridients = document.getElementsByClassName("ingredients")[0].getElementsByClassName("choose");
    for (let i = 0; i < ingridients.length; i++) {
        if (ingridients.item(i).checked) {
            collectionIngrid.push(new ingredients(ingridients.item(i).value));
        }
    }
    const pizzaJSON = new Pizza(osnova, collectionIngrid, collectionSauses).toJSON()
    console.log(pizzaJSON);
    fetch('http://localhost:3000/order', {
        method: 'POST',
        body: pizzaJSON,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then(result => result.json())
        .then(result => {
            alert('Your order is accepted')
        })
        .catch(error => {
            console.log(`Error: ${error.message}`)
            alert(`Error: ${error.message}`)
        })
}
