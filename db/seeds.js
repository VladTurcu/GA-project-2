const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const Recipe = require('../models/recipe');
const Post = require('../models/posts');

Recipe.collection.drop();
Post.collection.drop();


Post
  .create([{
    title: 'Benefits Of Pre-Workout',
    subtitle: 'Benefits Of Pre-Workout Nutrition',
    content: 'Around 30 minutes to an hour before your workout, it is wise to think about a pre-workout snack or supplement – the aim of pre-workout nutrition is to provide your muscles with the required energy supplies and support for your workout. It normally comprises of protein and simple carbs so that it can be easily digested and put to good work. Energy supplies decline rapidly during exercise, pre-workout nutrition helps support your workout plan and goals. Here, we explore the ',
    image: 'https://www.maxinutrition.com/Images/Article/large/Benefits-Of-Pre-Workout.jpg'
  }])
  .then((posts) => {
    console.log(`${posts.length} posts created!`);
    return Recipe
      .create([{
        name: 'Simple houmous',
        description: 'Houmous is proof that some of the best tasting things in life are the simplest to make. It can be rustled up with just six ingredients and requires no cooking – only a food processor. The houmous recipe below will give you perfect basic houmous, and also a solid base from which to work in terms of experimenting with flavours.',
        preparation: 'Drain and tip the chickpeas into a food processor. Peel and add the garlic, then add the tahini, a good squeeze of lemon juice and 1 tablespoon of oil. Season with a pinch of sea salt, then pop the lid on and blitz. Use a spatula to scrape the houmous down the sides of the bowl, then blitz again until smooth. Have a taste and add more lemon juice or a splash of water to loosen, if needed, then transfer to a serving bowl. Serve with sliced crunchy veg, ',
        image: 'http://cdn.jamieoliver.com/recipe-database/430_575/46287939.jpg',
        ingredients: [
          { name: 'chickpeas', qty: 10 },
          { name: 'olive oil', qty: 10 },
          { name: 'pepper', qty: 10 }]
      },
      {
        name: 'Thai coconut soup',
        description: 'Delicious as a soup but you could also try this as a curry sauce. Simply make it a bit thicker, add some fresh veggies and serve over rice. Two recipes for the price of one! Serves 6.',
        preparation: 'In a large, heavy-based saucepan, heat the oil over a medium–high heat. Add the onion and ginger and cook, stirring, for about 5 minutes or until soft.  Add the curry paste and salt and cook, stirring, for a further minute or so. Add the sweet potatoes, coconut milk and stock and bring to the boil. Reduce the heat to medium and simmer, uncovered, for about 20 minutes or until the sweet potatoes are soft. Purée the soup, either in batches in a blender or food processor or usin',
        image: 'https://www.vegansociety.com/sites/default/files/uploads/Thai%20Coconut%20Soup2_0.jpg',
        ingredients: [
          { name: 'lentils', qty: 10 },
          { name: 'fresh mint', qty: 10 },
          { name: 'olive oil', qty: 10 },
          { name: 'lemon', qty: 10 },
          { name: 'parsley', qty: 10 },
          { name: 'spring onion', qty: 10 },
          { name: 'pepper', qty: 10 }]
      },
      {
        name: 'Lentil tabbouleh',
        description: 'These vegan lentil tabboulet cant be simpler. They re perfect for a brunch with family and friends',
        preparation: 'Rinse the lentils, then cook in plenty of salted water until tender. Drain and set aside to cool. Trim and finely slice the spring onions, halve the tomatoes, then pick and finely chop the herb leaves. Mix the cooled lentils with the spring onions, tomatoes, herbs and 4 tablespoons of oil. Add the lemon juice to taste, season with sea salt and black pepper, then serve.',
        image: 'http://cdn.jamieoliver.com/recipe-database/430_575/DJQZvZOuKerAfB3t-lTl9N.jpg',
        ingredients: [
          { name: 'lentils', qty: 10 },
          { name: 'fresh mint', qty: 10 },
          { name: 'olive oil', qty: 10 },
          { name: 'lemon', qty: 10 },
          { name: 'parsley', qty: 10 },
          { name: 'spring onion', qty: 10 },
          { name: 'cherry tomatoes', qty: 10 }]
      },
      {
        name: 'Sweet potato soup',
        description: 'Delicious as a soup but you could also try this as a curry sauce. Simply make it a bit thicker, add some fresh veggies and serve over rice. Two recipes for the price of one! Serves 6.',
        preparation: 'In a large, heavy-based saucepan, heat the oil over a medium–high heat. Add the onion and ginger and cook, stirring, for about 5 minutes or until soft.  Add the curry paste and salt and cook, stirring, for a further minute or so. Add the sweet potatoes, coconut milk and stock and bring to the boil. Reduce the heat to medium and simmer, uncovered, for about 20 minutes or until the sweet potatoes are soft. Purée the soup, either in batches in a blender or food processor or usin',
        image: 'https://www.vegansociety.com/sites/default/files/uploads/Sweet%20Potato%20Soup.jpg',
        ingredients: [
          { name: 'lentils', qty: 10 },
          { name: 'fresh mint', qty: 10 },
          { name: 'olive oil', qty: 10 },
          { name: 'lemon', qty: 10 },
          { name: 'parsley', qty: 10 },
          { name: 'spring onion', qty: 10 },
          { name: 'cherry tomatoes', qty: 10 }]
      },
      {
        name: 'Simple houmous',
        description: 'Houmous is proof that some of the best tasting things in life are the simplest to make. It can be rustled up with just six ingredients and requires no cooking – only a food processor. The houmous recipe below will give you perfect basic houmous, and also a solid base from which to work in terms of experimenting with flavours.',
        preparation: 'Drain and tip the chickpeas into a food processor. Peel and add the garlic, then add the tahini, a good squeeze of lemon juice and 1 tablespoon of oil. Season with a pinch of sea salt, then pop the lid on and blitz. Use a spatula to scrape the houmous down the sides of the bowl, then blitz again until smooth. Have a taste and add more lemon juice or a splash of water to loosen, if needed, then transfer to a serving bowl. Serve with sliced crunchy veg, ',
        image: 'http://cdn.jamieoliver.com/recipe-database/430_575/46287939.jpg',
        ingredients: [
          { name: 'lentils', qty: 10 },
          { name: 'fresh mint', qty: 10 },
          { name: 'olive oil', qty: 10 },
          { name: 'lemon', qty: 10 },
          { name: 'parsley', qty: 10 },
          { name: 'spring onion', qty: 10 },
          { name: 'cherry tomatoes', qty: 10 }]
      },
      {
        name: 'Lentil tabbouleh',
        description: 'These vegan lentil tabboulet cant be simpler. They re perfect for a brunch with family and friends',
        preparation: 'Rinse the lentils, then cook in plenty of salted water until tender. Drain and set aside to cool. Trim and finely slice the spring onions, halve the tomatoes, then pick and finely chop the herb leaves. Mix the cooled lentils with the spring onions, tomatoes, herbs and 4 tablespoons of oil. Add the lemon juice to taste, season with sea salt and black pepper, then serve.',
        image: 'http://cdn.jamieoliver.com/recipe-database/430_575/DJQZvZOuKerAfB3t-lTl9N.jpg',
        ingredients: [
          { name: 'lentils', qty: 10 },
          { name: 'fresh mint', qty: 10 },
          { name: 'olive oil', qty: 10 },
          { name: 'lemon', qty: 10 },
          { name: 'parsley', qty: 10 },
          { name: 'spring onion', qty: 10 },
          { name: 'cherry tomatoes', qty: 10 }]
      },
      {
        name: 'Simple houmous',
        description: 'Houmous is proof that some of the best tasting things in life are the simplest to make. It can be rustled up with just six ingredients and requires no cooking – only a food processor. The houmous recipe below will give you perfect basic houmous, and also a solid base from which to work in terms of experimenting with flavours.',
        preparation: 'Drain and tip the chickpeas into a food processor. Peel and add the garlic, then add the tahini, a good squeeze of lemon juice and 1 tablespoon of oil. Season with a pinch of sea salt, then pop the lid on and blitz. Use a spatula to scrape the houmous down the sides of the bowl, then blitz again until smooth. Have a taste and add more lemon juice or a splash of water to loosen, if needed, then transfer to a serving bowl. Serve with sliced crunchy veg, ',
        image: 'http://cdn.jamieoliver.com/recipe-database/430_575/46287939.jpg',
        ingredients: [
          { name: 'lentils', qty: 10 },
          { name: 'fresh mint', qty: 10 },
          { name: 'olive oil', qty: 10 },
          { name: 'lemon', qty: 10 },
          { name: 'parsley', qty: 10 },
          { name: 'spring onion', qty: 10 },
          { name: 'cherry tomatoes', qty: 10 }]
      },
      {
        name: 'Sweet potato soup',
        description: 'Delicious as a soup but you could also try this as a curry sauce. Simply make it a bit thicker, add some fresh veggies and serve over rice. Two recipes for the price of one! Serves 6.',
        preparation: 'In a large, heavy-based saucepan, heat the oil over a medium–high heat. Add the onion and ginger and cook, stirring, for about 5 minutes or until soft.  Add the curry paste and salt and cook, stirring, for a further minute or so. Add the sweet potatoes, coconut milk and stock and bring to the boil. Reduce the heat to medium and simmer, uncovered, for about 20 minutes or until the sweet potatoes are soft. Purée the soup, either in batches in a blender or food processor or usin',
        image: 'https://www.vegansociety.com/sites/default/files/uploads/Sweet%20Potato%20Soup.jpg',
        ingredients: [
          { name: 'lentils', qty: 10 },
          { name: 'fresh mint', qty: 10 },
          { name: 'olive oil', qty: 10 },
          { name: 'lemon', qty: 10 },
          { name: 'parsley', qty: 10 },
          { name: 'spring onion', qty: 10 },
          { name: 'cherry tomatoes', qty: 10 }]
      },
      {
        name: 'Lentil tabbouleh',
        description: 'These vegan lentil tabboulet cant be simpler. They re perfect for a brunch with family and friends',
        preparation: 'Rinse the lentils, then cook in plenty of salted water until tender. Drain and set aside to cool. Trim and finely slice the spring onions, halve the tomatoes, then pick and finely chop the herb leaves. Mix the cooled lentils with the spring onions, tomatoes, herbs and 4 tablespoons of oil. Add the lemon juice to taste, season with sea salt and black pepper, then serve.',
        image: 'http://cdn.jamieoliver.com/recipe-database/430_575/DJQZvZOuKerAfB3t-lTl9N.jpg',
        ingredients: [
          { name: 'lentils', qty: 10 },
          { name: 'fresh mint', qty: 10 },
          { name: 'olive oil', qty: 10 },
          { name: 'lemon', qty: 10 },
          { name: 'parsley', qty: 10 },
          { name: 'spring onion', qty: 10 },
          { name: 'cherry tomatoes', qty: 10 }]
      }]);
  })
  .then((recipe) => console.log(`${recipe.length} recipes created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
