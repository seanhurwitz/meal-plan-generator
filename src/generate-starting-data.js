const foods = {
  breakfast: [
    "Bran Flakes and Milo",
    "Eggs and Toast",
    "Toast and Avo",
    "Nutella Toast",
    "Chocolate Muesli",
    "Berry Muesli",
    "Yoghurt",
  ],
  lunch: [
    "Peanut Butter sandwich",
    "fruit",
    "vegetables",
    "greek salad",
    "pasta and sauce",
    "halloumi wraps",
    "cereal",
  ],
  supper: [
    "ribs",
    "boerewors and pap",
    "mushroom pasta",
    "tuna lasagne",
    "meatballs and rice",
    "spaghetti bolognaise",
    "cereal",
    "curry chicken",
    "fried chicken and spanish rice",
    "zucchini soup",
    "chicken soup",
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
