const axios = require('./axios-instances');

const instantiateDatabase = async () => {
  const data = {
    days: {
      monday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      tuesday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      wednesday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      thursday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      friday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      saturday: {
        breakfast: ['Chocolate Muesli', 'Berry Muesli', 'Biscuits and Nosh'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      sunday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
    },
  };
  await axios.post('/data.json', data);
  console.log('DONE!');
};

const getDatabase = async () => {
  const res = await axios.get('/data.json');
  console.log(res.data);
};

// instantiateDatabase();

getDatabase();

const deleteDatabase = async () => {
  await axios.delete('/days.json');
};

// deleteDatabase();
