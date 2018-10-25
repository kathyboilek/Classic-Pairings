const mongoose = require("mongoose");
const db = require("../models");

// This file empties the wine collection and inserts the wines below


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/classic-pairings"
);

const wineSeed = [
  {
    description:  "This beautifully balanced Pinot Grigio from Italy's Alto Adige region in northern Italy offers bright citrus fruit flavors with underlying mineral notes and a lengthy finish. It's a perfect match for lobster and shellfish.",
    image:"https://image1.totalwine.com/media/sys_master/twmmedia/h65/h39/8796648210462.png",
    label: "Conte Fini",
    countrystate: "Italy",
    region: "Alto-Adige",
    winetype: "White Wine",
    varietal: "Pinot Grigio/Pinot Gris",
    style: "Crisp",
    taste: "Citrus, Mineral",
    body: "Full-bodied"
  },
  {
    description:  "Juicy peach and guava notes swirl in the glass of this beautifully aromatic Riesling. Mandarin orange flavors surround the mid-palate with ripe pineapple on the finish. Bright acidity balances the residual sugar leaving a clean finish.",
    image:"https://image1.totalwine.com/media/sys_master/twmmedia/hb9/h59/8803126083614.png",
    label: "Bridgman",
    countrystate:  "Washington",
    region: "Columbia Valley",
    winetype:  "White Wine",
    varietal:  "Riesling",
    style:  "Crisp",
    TASTE:  "Mango, Peach",
    body:  "Light-bodied"
  },
  {
    description:  "Juicy peach and guava notes swirl in the glass of this beautifully aromatic Riesling. Mandarin orange flavors surround the mid-palate with ripe pineapple on the finish. Bright acidity balances the residual sugar leaving a clean finish.",
    image:"https://image1.totalwine.com/media/sys_master/twmmedia/hb9/h59/8803126083614.png",
    label: "Bridgman",
    countrystate:  "Washington",
    region: "Columbia Valley",
    winetype:  "White Wine",
    varietal:  "Riesling",
    style:  "Crisp",
    TASTE:  "Mango, Peach",
    body:  "Light-bodied"
  },
  {
    description:  "This aromatic offering is true to its Alsatian style. It is full of pear, banana and spice notes, and has great balance, weight and substance throughout the palate with appealing acidity and vibrancy displayed on the long finish.",
    image:"https://image1.totalwine.com/media/sys_master/twmmedia/hcf/hbd/10749198630942.png",
    label: "Kudos",
    countrystate: "Oregon",
    winetype: "White Wine",
    varietal: "Pinot Grigio/Pinot Gris",
    style: "Crisp",
    taste: "Melon, Spice",
    body: "Light-bodied"
  },
  {
    description: "This young 100-percent-stainless Chard carries a zesty citrus aroma and pale green hue. Fresh and crisp, it exhibits a slight sweetness, light body, and green apple flavor; a good option for those who shy away from buttery, oaky Chardonnays.",
    image:"https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/he3/h32/8796398452766.png",
    label: "River Road",
    countrystate: "California",
    winetype:  "White Wine",
    varietal: "Chardonnay",
    style: "Crisp",
    taste: "Apple, Pear",
    body: "Light-bodied"
  },
  {
    description:  "Aromas of lime, jasmine and cantaloupe and flavors of grapefruit, passion fruit and limeade. Hints of citrus linger on the bright finish. Pairs well with salads, fish and seafood.",
    image:"https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h05/h49/8802796535838.png",
    label:  "Apex",
    countrystate: "Washington",
    region: "Columbia Valley",
    winetype:  "White Wine",
    varietal: "Sauvignon Blanc",
    style:  "Crisp",
    taste: "Citrus, Melon",
    body: "Light-bodied"
  },
  {
    description:  "Aromas of lime, jasmine and cantaloupe and flavors of grapefruit, passion fruit and limeade. Hints of citrus linger on the bright finish. Pairs well with salads, fish and seafood.",
    image:"https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h05/h49/8802796535838.png",
    label:  "Apex",
    countrystate: "Washington",
    region: "Columbia Valley",
    winetype:  "White Wine",
    varietal: "Sauvignon Blanc",
    style:  "Crisp",
    taste: "Citrus, Melon",
    body: "Light-bodied"
  },
  {
    description:  "This delicious Cabernet greets you with aromas of red jammy fruits and black cherry. Hints of toasty oak lead to a delightful finish. A true crowd-pleaser, this is great for entertaining and pairs well with hors d'oeuvres.",
    image:"https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h5a/h24/10301735206942.png",
    brand: "Radius",
    countrystate: "Washington",
    winetype: "Red Wine",
    varietal: "Cabernet Sauvignon",
    style: "Fresh",
    taste: "Black Cherry, Chocolate",
    body: "Medium-bodied"
  },
  {
    description:  "Intense fruit aromas and flavors of rhubarb and black cherry that are complemented by hints of mocha and vanilla. The plush, velvety mouthfeel and smooth finish round out this intriguing, full-bodied red blend.",
    image:"https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h7d/hb9/8812342673438.png",
    label: "Apothic",
    countrystate: "California",
    winetype: "Red Wine",
    varietal: "Red Blend"
  },
  {
    description:  "Inky on the glass and satiny on the palate, this concentrated Red Blend shows cherry and dark fruit notes complemented with a soft touch of oak on the finish. Pair this full-bodied wine with grilled meats or BBQ",
    image:"https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h05/h49/8802796535838.png",
    brand:  "Cloud Break",
    countrystate: "California",
    winetype: "Red Wine",
    varietal: "Red Blend",
    style: "Concentrated",
    taste: "Cherry, Berry",
    body: "Full-bodied"
  },
  {
    description:  "Established in 1848, Ropiteau Freres has a long history of making great Pinot Noir. This super value is proof positive. Bright cherry and berry fruit is complemented by earth tones and a smooth soft finish. Excellent with a lamb stew.",
    image:"https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h28/hf7/8812507037726.png",
    label: "Ropiteau",
    countrystate: "France",
    winetype: "Red Wine",
    varietal: "Pinot Noir",
    style: "Fresh",
    taste: "Cherry, Red Fruit",
    body: "Light-bodied"
  },
  {
    description:  "Oak aging gives this elegant Pinot Noir rich undertones of vanilla and spice, accenting classic notes of cherry and cassis. The big brother of our most popular Pinot Noir, this reserve bottling shows an amazing richness at an incredible value.",
    image:"https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/hea/hb0/8815523692574.png",
    label: "D'Autrefois",
    countrystate: "France",
    region: "Vins de Pays d'Oc",
    winetype: "Red Wine",
    varietal: "Pinot Noir",
    style: "Elegant",
    taste: "Cherry, Spice",
    body: "Medium-bodied"
  },
  {
    description:  "This is real wine for the money that shows so much depth of fruit and silky tannins. Full body yet refined and beautiful. Superb length. A wine that you want to try...again and again. A blend of of 60% cabernet sauvignon, 25% malbec and 15% cabernet franc.",
    image:"https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h57/h01/9783988420638.png",
    label: "Mascota Vineyards",
    countrystate: "Argentina",
    region: "Mendoza",
    winetype: "Red Wine",
    varietal: "Cabernet Sauvignon",
    style: "Intense",
    taste: "Blackberry, Chocolate",
    body: "Full-bodied"
  },
  {
    description:  "This old vine Zinfandel is a blend of five different old vine vineyards, resulting in a classic fruit-forward wine that is the centerpiece of all great Lodi wines. The rich, ripe berry flavors are highlighted with a subtle hint of soft vanilla-oak. Pair with veal or red meat.",
    image:"https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/hf0/hf7/11452223225886.png",
    label: "Macchia",
    countrystate: "California",
    region: "Lodi",
    winetype: "Red Wine",
    varietal: "Zinfandel",
    style: "Intense",
    taste: "Blackberry, Raspberry, Vanilla",
    body: "Full-bodied"
  },
  {
    description:  "On the nose, a bouquet of citrus and tropical fruits backed by characteristic herbaceous notes. An exuberant wine brimming with flavors of pineapple and stone fruit with a hint of herbaceousness on the palate.",
    image:"https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/hfd/h1c/11436734873630.png",
    label: "Kim Crawford",
    countrystate: "New Zealand",
    region: "Marlborough",
    winetype: "White Wine",
    varietal: "Sauvignon Blanc",
    style: "Crisp",
    taste: "Citrus, Pineapple",
    body: "Medium-bodied"
  },
  {
    description:  "Produced primarily from the Brachetto grape, this sweet yet crisp red wine has fresh strawberry and red berry flavors with a light, natural carbonation. A refreshing red wine to be served chilled and accompanied by fresh fruit and cheese.",
    image:"https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h00/h59/9496602148894.png",
    label: "Il Duca",
    countrystate: "Italy",
    region: "Piedmont",
    winetype: "Champagne & Sparkling Wine",
    varietal: "Sparkling Red Wine",
    style: "Sweet",
    taste: "Red Berry, Strawberry",
    body: "Light-bodied"
  }
];

db.Pairings
  .remove({})
  .then(() => db.Pairings.collection.insertMany(wineSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });