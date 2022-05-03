// import functions and grab DOM elements

const foodInput = document.getElementById('food-input');

const removeLastItem = document.getElementById('remove-last-item');


// let state

let totalIngredients = [];
let meals = [];

// set event listeners 

// Add Ingredient Button
foodInput.addEventListener('submit', (e) => {
    e.preventDefault();
    const foodData = new FormData(foodInput);
    let ingredients = {
        ingredient: foodData.get('ingredient-input'),
        quantity: foodData.get('quantity'),
        measurement: foodData.get('measurement'),
    };
    totalIngredients.push(ingredients);  
});
// Remove Last Ingredient Button
removeLastItem.addEventListener('click', () => {
    totalIngredients.pop();
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
