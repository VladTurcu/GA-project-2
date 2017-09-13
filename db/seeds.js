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
  title: 'Is a vegan diet healthy?',
  subtitle: 'WHAT ARE THE BENEFITS OF GOING VEGAN?',
  content: 'WHAT IS A VEGAN DIET? A vegan diet consists of vegetables, grains, nuts, fruits and other foods made only from plants. Many argue that we should all be making a conscious effort to reduce consumption of animals and animal products for the sake of our health and for the planet.. Vegan or not, a diet high in fruit and veg, and plant-based food is a good starting point for a healthy lifestyle. WHAT ARE THE BENEFITS OF GOING VEGAN? The answer depends as much on what you eat as with any other diet. Someone living purely on crisps or chips, for example, would be technically following a vegan diet, but it would in no way be healthy. Research has shown that the average vegan diet is higher in vitamin C and fibre, and lower in saturated fat than one containing meat, all of which are beneficial. In addition, statistics show that vegans have a lower BMI (height-to-weight ratio) than meat eaters – in other words, they are skinnier. A diet without any meat or dairy products is likely to contain a lot less saturated fat, which is related to increased cholesterol levels and increased risk of heart disease. We also know that fat contains more calories per gram than other foods, and so vegans may consume fewer calories as a result. Finally, a vegan diet is generally thought to contain more cereals, fruits, vegetables, nuts and seeds than a non-vegan diet.',
  image: 'http://cdn.jamieoliver.com/news-and-features/features/wp-content/uploads/sites/2/2014/09/feature-header171.jpg'
},
{
  title: 'Diet Tips for Workaholics Who Don’t Have Time to Read This',
  subtitle: 'The Workaholics Diet for those that are Busy, busy, busy. No time to cook at home or think about eating. And, there is no time to exercise either!',
  content: 'Does this sound like you? This lifestyle seems to be a common theme among my weight loss patients. So, what are we to do?Here are some of my tips to getting out of workaholic mode and into a mindful, healthy lifestyle mode. Prioritize and Make Lists to do list The first step is to figure out what is most important to you. Create a list of your top 3 most important things for the day. Do this for the week, and every day. For example, number 1 may be eating dinner as a family, number 2 may be getting a work project done, and number 3 may be exercising. Focus on doing the 3 things first and foremost. Do the top ranking things on your list first. Do not let yourself do the lesser ranking items first. Making a list is the key to success. It helps us improve our productivity, decrease forgetfulness, and make the most out of every day. Bring Healthy Food to Work turkey-sandwichThis is one of the most important rules for keeping weight off. Bring a lunch, and if for some reason you can not bring a lunch, at least bring a supply of snacks (or keep them at work). This helps prevent you from skipping meals, keeps energy levels maintained, and helps you avoid fast food and poor restaurant choices. Always keep nuts with you so that if you know you can’t get to lunch until the late afternoon, you have a back-up snack to hold you over. Bring other snacks like fresh fruits, raw veggies, hummus, boiled eggs, yogurts, and non-candy trail mixes.',
  image: 'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2014/04/balanced-diet-vegetarians-guide-image-700-350.jpg'
},
{
  title: 'How to Change Habits for Good',
  subtitle: 'Good health habits and behaviors are the key to a long term healthy weight. Do you ever feel that bad habits are holding you back from your goal? It is not too late to change. Practice these few tips and you will be on your way to long term health.',
  content: 'Determine what’s holding you back. Are you making excuses? Do you lack planning for your grocery shopping and meals? Make a list of the habits you want to change and the reason why you have been unsuccessful in the past. Prepare to change. In a journal, write down how you are going to change that habit. Have you been drinking a lot of soda without thinking about it–out of habit? Maybe you have grabbed a snack without even thinking if you are biologically hungry. Prepare to become mindful about your choices. Set a timeline and begin those new habits! Create a goal with a start date and a realistic deadline. Set timers for your eating. Set forks down between bites. Rate your hunger on a scale of one to ten before eating. Find another stress, emotion, or boredom outlet like walking, a craft, or reading a book. Seek support for your changing habits. Find a friend who is working on similar behaviors, or join a support group (no matter if it is in-person or online). Food logs on phone applications or websites can help you stick with your behavior change. Journal and re-evaluate your progress. It helps to write down your progress–something that holds you accountable and keeps you mindful. If you have completed you goal, great, but you are not done! It takes continued repetition to create a new habit. Continue to revisit your goals to make sure you are staying on track and that your habit change worked. Have you tried to change your behaviors? What have you found helpful?',
  image: 'http://ruckusnow.com/wp-content/uploads/2017/02/junk_food_crop.jpg'
},
{
  title: 'Is a vegan diet healthy?',
  subtitle: 'When anyone mentions fermented food, it makes me want to cringe. Perhaps this is because the first fermented food I think of is sauerkraut—a food I despise.',
  content: 'Fermentation turns sugars or carbohydrates into alcohol and carbon dioxide as a byproduct. Yeast and bacteria are used to perform this process. We do this to preserve foods, or to create a unique flavor or texture. So, why are these fermented foods so nutritious? Healthy Bacteria (Probiotics) Our intestines are incredibly long–about 7.5 to 8.5 meters (or about 25 to 28 feet). The intestines are home base for where the majority of bacteria populate.  This is where our immune system begins and many other bodily processes. large intestineSo, if we can continue to put healthy bacteria from fermented foods into the body, we can continue to support a healthy intestinal system. Yes, there are often living bacteria cultures found in these fermented foods. But, don’t be scared! Think of how many bacteria we come into contact with everyday. You can not see them, but most are microorganisms that work harmoniously with the human body!Other Health Benefits For all of you gluten-free fans, fermentation can reduce the gluten found in gluten-containing foods. Fermentation often makes foods easier to digest. Fermentation also breaks down lactose in yogurt making it easier to digest for those who do not tolerate lactose as well. They help neutralize and destroy harmful toxins, abnormal cells, and harmful bacteria Overall reduction in inflammation. May help prevent colon cancer. May help reduce IBS. 10 Types of Fermented Foods kefirKefir: A fermented yogurt drink and one of my favorites for a potent dose of probiotics Fermented yogurt with live and active culturesFermented soy such as miso, tempeh, tofu, and fermented soy sauce Kombucha: A tangy and slightly bubbly probiotic drink Vinegar (unpasteurized) Fermented coconut milk. Fermented and pickled vegetables like olives, sauerkraut, pickles, and kimchi Fermented bread such as sourdough Fermented cheese such as swiss cheese. However, it is important to eat these in moderation.',
  image: 'https://cdn1.dailyhealthpost.com/wp-content/uploads/2015-01-27-fermented-food-health-benefits-2-fb-2.jpg'
}])
.then((posts) => {
  console.log(`${posts.length} posts created!`);
  return Recipe
  .create([{
    name: 'Baked squash',
    description: '“Based on a beloved old recipe of mine, this method really takes advantage of stuffing and slow-roasting the sweet, versatile squash. You get wonderful flavours exchanging in the centre, great textures, and the slices look amazing. ”',
    preparation: 'Preheat the oven to 180°C/350°F/gas 4. Wash the squash, carefully cut it in half lengthways, then remove and reserve the seeds. Use a spoon to score and scoop some flesh out, making a gully for the stuffing all along the length of the squash. Finely chop the scooped-out flesh with the seeds and put into a frying pan on a medium heat with 2 tablespoons of oil. Peel, finely chop and add the onion and garlic, stirring regularly while you pick the sage leaves and finely chop them with the sun-dried tomatoes and chestnuts. Stir into the pan with the rice, cranberries and allspice, add a good pinch of sea salt and black pepper and a swig of red wine, and mix well. Fry for 10 minutes, or until softened, stirring occasionally.Pack the mixture tightly into the gully in the two squash halves, then press the halves firmly back together. Rub the skin of the squash with a little oil, salt and pepper, and if you’ve got them, pat on any extra herb leaves you have to hand. Place the squash in the centre of a double layer of tin foil, then tightly wrap it up. Bake for around 2 hours, or until soft and cooked through.Once ready, take the squash to the table and open up the foil in front of everyone, then carve into nice thick slices and serve with all the usual trimmings.Let’s build a healthier, happier world through the joy of food! Join the Food Revolution for the latest on sustainable food, farming and cooking projects across the globe. Join our Food Revolution!',
    image: 'http://cdn.jamieoliver.com/recipe-database/430_575/51137672.jpg',
    ingredients: [
      { name: 'butternut squash ', qty: '1.2 kg' },
      { name: 'olive oil', qty: '150 g' },
      { name: 'red onion', qty: '1' },
      { name: 'garlic', qty: '1 clove'},
      { name: 'fresh sage', qty: '30 g' },
      { name: 'sun-dried tomatoes', qty: '10 '},
      { name: 'vac-packed chestnuts', qty: '75 g'},
      { name: 'basmati rice', qty: '75 g'},
      { name: 'dried cranberries', qty: '75 g'},
      { name: 'dried cranberries', qty: '75 g'},
      { name: 'ground allspice', qty: '1 pinch'}]
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
              name: 'Miso-grilled aubergine & cucumber pickle rice bowl',
              description: '“A delicious meat-free meal heroing grilled aubergine – just the ticket when time is short. ”',
              preparation: 'Slice the cucumber into thin rounds and place in a bowl. Add 1 large pinch each of sea salt and sugar, 2 tablespoons of the rice vinegar, and massage it into the cucumber.Place a dish on top inside the bowl and weigh it down with something heavy. Set aside to allow the excess water to drain out. Rinse the rice well, until the water runs almost clear. Drain and place in a small saucepan along with 375ml of water. Pop a glass lid on, bring to the boil, then cook over a low heat for 25 minutes, or until you can see holes in the surface of the rice (don’t be tempted to lift the lid). Take off the heat and leave, covered, for 20 minutes.Fold 4 tablespoons of rice vinegar, the tablespoons of sugar and 1 pinch of salt into the rice.Set the grill to high. Quarter the aubergine lengthways and score the flesh. Place flesh-side up on a foil-lined baking tray and grill for 15 minutes, or until almost tender. Mix the miso and mirin with the remaining tablespoon of rice vinegar and 1 tablespoon of water. Brush half the glaze over the aubergine; grill for a further 8 to 10 minutes, brushing with the remaining glaze halfway, until tender. Meanwhile, toast the sesame seeds (if using) in a dry frying pan until golden.Place the aubergine on a bed of sticky rice. Trim and finely slice the spring onions, scatter over the aubergine with the sesame seeds (if using) and serve with cucumber pickle on the side.',
              image: 'http://cdn.jamieoliver.com/recipe-database/430_575/54038966.jpg',
              ingredients: [
                { name: 'caster sugar ', qty: '1 tbs' },
                { name: 'Japanese rice vinegar', qty: '7 tbs' },
                { name: 'sushi rice', qty: '300 g' },
                { name: 'aubergines', qty: 3 },
                { name: 'sweet white (shiro) miso', qty: '750 g' },
                { name: 'mirin rice wine', qty: '1 tbs' },
                { name: ' spring onions', qty: 4 }]
              },
              {
                name: 'Spicy cucumber pickle',
                description: 'Houmous is proof that some of the best tasting things in life are the simplest to make. It can be rustled up with just six ingredients and requires no cooking – only a food processor. The houmous recipe below will give you perfect basic houmous, and also a solid base from which to work in terms of experimenting with flavours.',
                preparation: 'Cut the pickling cucumbers in half lengthways, and slice regular ones through the middle, then into fingers. Peel and finely slice the shallots. Put the cucumbers and shallots in a colander. Sprinkle over 2 teaspoons of sea salt. After 45 minutes, rinse well. Combine all the other ingredients in a pan and bring to the boil. Stir until the sugar dissolves Fit the cucumbers snugly into a Kilner jar, then pour over the liquid. Seal and leave for at least 24 hours.',
                image: 'http://cdn.jamieoliver.com/recipe-database/430_575/6KPZ51KNqAv9GsPOJymjV9.jpg',
                ingredients: [
                  { name: 'pickling cucumbers', qty: 6 },
                  { name: 'banana shallots', qty: 2 },
                  { name: 'mustard seeds', qty: '2 tbs' },
                  { name: 'turmeric', qty: '1 tbs'},
                  { name: 'star anise', qty: 2 },
                  { name: 'caster sugar', qty: '75 g' },
                  { name: 'vinegar', qty: '150 ml' }]
                },
                {
                  name: 'Aubergine dip',
                  description: 'Delicious dip but you could also try this as a curry sauce. Simply make it a bit thicker, add some fresh crisp veggies and serve over rice.',
                  preparation: 'Preheat the oven to 180ºC/gas 4. Pierce the aubergine a couple of times with a knife, then roast for 45 minutes until blackened, softened and collapsing. Leave to cool. Peel and crush the garlic, deseed and finely chop the chilli and pick and finely chop the parsley. Scoop the cooled insides from the aubergine into a food processor. Blitz with the garlic, chilli, oil, a good squeeze of lemon juice, the parsley and a pinch of sea salt and black pepper. Taste and adjust the seasoning, oil and lemon as needed. Place in a dish and sprinkle with paprika. Serve with flatbreads.',
                  image: 'http://cdn.jamieoliver.com/recipe-database/430_575/46256344.jpg',
                  ingredients: [
                    { name: 'aubergine', qty: 1 },
                    { name: 'garlic', qty: '1 clove' },
                    { name: 'chilly', qty: 1 },
                    { name: 'flat-leaf parsley', qty: '1 bunch' },
                    { name: 'extra virgin olive oil', qty: '1 tbs'},
                    { name: 'lemon', qty: 10 },
                    { name: 'cherry tomatoes', qty: 10 }]
                  },
                  {
                    name: 'Wholewheat maple cinnamon buns',
                    description: 'These vegan lentil tabboulet cant be simpler. They re perfect for a brunch with family and friends',
                    preparation: 'To make the dough, gently heat the almond milk until lukewarm, then combine in a small bowl with the yeast and maple syrup. Set aside for about 5 minutes for the yeast to activate. Meanwhile, in a large bowl, stir the flaxseed into 3 tablespoons of water and set aside for 1 to 2 minutes. Melt the coconut oil, then add to the flaxseed mixture along with the flours, cinnamon and ¼ teaspoon of sea salt. Gradually stir in the yeast mixture. Bring everything together with your hands – the dough will feel a bit tacky, but this is fine. Turn out the dough onto a lightly floured surface and knead a couple of times. Place in a greased bowl, cover with a tea towel and leave somewhere warm to prove for 1 hour or until doubled in size. Meanwhile, make the filling. Toast the pecans in a dry frying pan. Peel the bananas and destone the dates. Reserving one-third of the toasted pecans to one side, add all the filling ingredients to a food processor, then blitz until smooth. Preheat the oven to 180ºC/gas 4. Grease a 20cm x 20cm baking dish with a little coconut oil. On a lightly floured surface, roll the dough out to 20cm x 40cm. Blob the nut mixture onto the dough and spread it evenly across to the edges. Roll up widthways (from the shortest edge) tightly into a log, then cut into nine slices. Place the slices in the baking dish, cover with a clean tea towel and allow to prove for another 25 minutes or until doubled in size. Bake for 30 minutes, or until golden and slightly firm to the touch. Leave in the tin to cool. In a small bowl, mix together the almond milk and icing sugar until it’s thick enough to drizzle over the buns. Chop and sprinkle over the reserved toasted pecans and serve.',
                    image: 'http://cdn.jamieoliver.com/recipe-database/430_575/9HC-ehhr4I68-NisFSVilt.jpg',
                    ingredients: [
                      { name: 'almond milk', qty: '185 ml' },
                      { name: 'active yeast', qty: '7 g'},
                      { name: 'maple syrup', qty: '2 tbs' },
                      { name: 'ground flaxseed', qty: '1 tbs' },
                      { name: 'wholegrain flour', qty: '150 g' },
                      { name: 'white flour', qty: '160 g' },
                      { name: 'ground cinnamon', qty: '1 tbs' }]
                    },
                  {
                    name: 'Sweet potato & white bean chilli',
                    description: 'These vegan lentil tabboulet cant be simpler. They re perfect for a brunch with family and friends',
                    preparation: 'Preheat the oven to 180ºC/350ºF/gas 4.Peel and chop the sweet potato, place in a roasting tray, then toss with 1 tablespoon of oil and a pinch each of the cinnamon, cumin and paprika. Spread out in an even layer, then roast in the oven for 35 to 40 minutes. Peel and roughly chop the onion. Pick the coriander leaves, then finely chop the stalks. Roughly chop the chilli, then deseed and chop the peppers. Heat 1 tablespoon of oil in a large pan, then add the onion, coriander stalks, chilli and peppers along with the remaining spices. Cook over a low heat for 15 minutes, stirring regularly. Add the cannellini beans with their liquid, and the tinned tomatoes. Stir, adding a splash of water to loosen, if needed. Simmer for 30 minutes. Stir in the sweet potatoes along with most of the coriander leaves. Season to taste and top with the rest of the coriander leaves. Serve over cooked rice with some guacamole on the side, if you like.',
                    image: 'http://cdn.jamieoliver.com/recipe-database/430_575/DPngvbxJ4oeAaNG92NeNcF.jpg',
                    ingredients: [
                      { name: 'sweet potatoes', qty: 2 },
                      { name: 'olive oil', qty: '70 ml'},
                      { name: 'ground cinnamon', qty: '2 tbs' },
                      { name: 'ground cumin', qty: '1 tbs' },
                      { name: 'smoked paprika', qty: '1 tbs' },
                      { name: 'large onion', qty: 1 },
                      { name: 'fresh red chilli', qty: 1 },
                      { name: 'fresh coriander', qty: '1 bunch' }]
                    },
                  {
                    name: 'Sweetheart slaw with passion fruit dressing',
                    description: 'These vegan lentil tabboulet cant be simpler. They re perfect for a brunch with family and friends',
                    preparation: 'For the dressing, finely grate the orange zest into a bowl and squeeze in all the juice. Halve the passion fruit and scrape in the pulp, then add the oil and mix together. Finely slice the cabbage, discarding the core. Remove the woody ends from the asparagus, then finely slice along with the trimmed spring onions and celery. Peel and coarsely grate the apple and carrot. Pop all the shredded fruit and veg into a large bowl. Pour over the dressing, mix well and season to taste. Enjoy straight away, or better still, cover and refrigerate for 1 to 2 days so the veggies soften slightly and the flavours mingle and develop. Mix well before serving and spoon over a little extra passion-fruit pulp, top with shredded spring onions and sprinkle with poppy seeds.',
                    image: 'http://cdn.jamieoliver.com/recipe-database/430_575/3lOh74sT4j_BU_klbzh_v6.jpg',
                    ingredients: [
                      { name: 'cabbage', qty: 1 },
                      { name: 'asparagus', qty: '300 g'},
                      { name: 'spring onions', qty: 3 },
                      { name: 'celery', qty: '2 stics' }]
                    },
                  {
                    name: 'Easy tomato chutney',
                    description: 'These vegan lentil tabboulet cant be simpler. They re perfect for a brunch with family and friends',
                    preparation: 'Peel and finely slice the onions, roughly chop the tomatoes and deseed and finely slice the chilli. Put everything in a pan, season to taste and stir well to combine. Simmer for 30 to 40 minutes or until jammy. Pour into a sterilised jar and leave to cool. Keeps for up to 4 weeks in the fridge. Perfect on toast with a chunk of cheddar.',
                    image: 'http://cdn.jamieoliver.com/recipe-database/430_575/DQp8Pf7d43_BBMKgqOTB4O.jpg',
                    ingredients: [
                      { name: 'red onions', qty: '250 g' },
                      { name: 'mixed-colour tomatoes', qty: '500 g'},
                      { name: 'red chilli', qty: 2 },
                      { name: 'red wine vinegar', qty: '175 ml' },
                      { name: 'brown sugar', qty: '140 g' }]
                    }]);
                  })
                  .then((recipe) => console.log(`${recipe.length} recipes created!`))
                  .catch((err) => console.log(err))
                  .finally(() => mongoose.connection.close());
