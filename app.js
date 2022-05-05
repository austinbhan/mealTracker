// import functions and grab DOM elements
const foodInput = document.getElementById('food-input');
const removeLastItem = document.getElementById('remove-last-item');
const mealHistory = document.getElementById('meal-history');
const saveMealButton = document.getElementById('meal-button');
const mealName = document.getElementById('meal-name');


const listedIngredients = document.getElementById('listed-ingredients');

// let state
let totalIngredients = [];
let meals = [];

// Add Ingredient Form
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

// Remove Last Item Button
removeLastItem.addEventListener('click', () => {
    totalIngredients.pop();
    appendIngredients();
});

// List of Ingredients After addIngredient Button
function appendIngredients() {
    listedIngredients.textContent = '';
    for (let item of totalIngredients) {
        const li = appendIngredient(item);
        listedIngredients.appendChild(li);
    }
}

// Ingredient Text Content Form
function appendIngredient(item) {
    const li = document.createElement('li');
    li.textContent = `${item.quantity} ${item.measurement} of ${item.ingredient}`;
    return li;
}

// List of Meals Form
saveMealButton.addEventListener('click', () => {
    const savedMeal = mealName.value; 
    const count = totalIngredients.length;
    meals.push({ savedMeal, count });
    renderMeals();
    
});

// Create Meal Text Content Form
function mealList(item) {
    const li = document.createElement('li');
    li.textContent = `${item.savedMeal}: ${item.count} ingredients`;
    return li;
}

// Render JS into HTML
function renderMeals() {
    mealHistory.textContent = '';
    for (let meal of meals) {
        const li = mealList(meal);
        mealHistory.append(li);
    }
}


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

// Test Loops
