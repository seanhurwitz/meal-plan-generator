const foods = {
  breakfast: [
    ['Bran Flakes and Milo', 'Dairy'],
    ['Eggs and Toast', 'Parev'],
    ['Toast and Avo', 'Parev'],
    ['Nutella Toast', 'Dairy'],
    ['Chocolate Muesli', 'Dairy'],
    ['Berry Muesli', 'Dairy'],
    ['Yoghurt', 'Dairy'],
  ],
  lunch: [
    ['Peanut Butter sandwich', 'Parev'],
    ['fruit', 'Parev'],
    ['vegetables', 'Parev'],
    ['greek salad', 'Dairy'],
    ['pasta and sauce', 'Parev'],
    ['halloumi wraps', 'Dairy'],
    ['cereal', 'Dairy'],
  ],
  supper: [
    ['ribs', 'Meat'],
    ['boerewors and pap', 'Meat'],
    ['mushroom pasta', 'Dairy'],
    ['tuna lasagne', 'Dairy'],
    ['meatballs and rice', 'Meat'],
    ['spaghetti bolognaise', 'Meat'],
    ['cereal', 'Dairy'],
    ['curry chicken', 'Meat'],
    ['fried chicken and spanish rice', 'Meat'],
    ['zucchini soup', 'Parev'],
    ['chicken soup', 'Meat'],
  ],
};
const generateUniqueArray = (dataArray, newArraySize) => {
  const newArray = [];
  while (newArray.length < newArraySize) {
    const data = dataArray[Math.floor(Math.random() * dataArray.length)];
    if (newArray.indexOf(data) === -1) {
      newArray.push(data);
    }
  }
  return newArray;
};
const generateMealsObject = (arraySize) => ({
  breakfast: generateUniqueArray(foods.breakfast, 5),
  lunch: generateUniqueArray(foods.lunch, 5),
  supper: generateUniqueArray(foods.supper, 5),
});

const generateStartingData = () => {
  const days = {
    monday: generateMealsObject(5),
    tuesday: generateMealsObject(5),
    wednesday: generateMealsObject(5),
    thursday: generateMealsObject(5),
    friday: generateMealsObject(5),
    saturday: generateMealsObject(5),
    sunday: generateMealsObject(5),
  };
  return days;
};

export default generateStartingData;
