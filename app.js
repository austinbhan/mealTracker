// import functions and grab DOM elements
const foodInput = document.getElementById('food-input');
const removeLastItem = document.getElementById('remove-last-item');

const listedIngredients = document.getElementById('listed-ingredients');

// let state
let totalIngredients = [];
let meals = [];

foodInput.addEventListener('submit', (e) => {
    e.preventDefault();
    const foodData = new FormData(foodInput);
    let ingredients = {
        ingredient: foodData.get('ingredient-input'),
        quantity: foodData.get('quantity'),
        measurement: foodData.get('measurement'),
    };
    totalIngredients.push(ingredients);  
    appendIngredients();
});

function appendIngredient(item) {
    const li = document.createElement('li');
    li.textContent = `${item.quantity} ${item.measurement} of ${item.ingredient}`;
    return li;
}

function appendIngredients() {
    listedIngredients.textContent = '';
    for (let item of totalIngredients) {
        const li = appendIngredient(item);
        listedIngredients.appendChild(li);
    }
}

removeLastItem.addEventListener('click', () => {
    totalIngredients.pop();
    appendIngredients();
});
//

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

// Test Loops
