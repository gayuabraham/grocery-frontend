const products = [
  // Veges
  { id: "1", category: "veges", name: "Mint", description: "The mint plant is a herbaceous perennial widely known", price: 150, image1: "/mint.jpg", image2: "/mint2.jpg" },
  { id: "2", category: "veges", name: "Mushroom", description: "Mushrooms are nutritious and low in calories", price: 200, image1: "/mushroom-1.jpg", image2: "/mushroom-2.jpg" },
  { id: "3", category: "veges", name: "Basil", description: "To keep basil fresh, cut the stem and place it in water", price: 180, image1: "/basil1.jpg", image2: "/basil2.jpg" },
  { id: "102", category: "veges", name: "Onion", description: "Premium quality onions sourced directly from farmers.", price: 120, image1: "/onion-1.jpg", image2: "/onion-2.jpg" },
  { id: "103", category: "veges", name: "Radish", description: "Crisp and fresh radish perfect for salads and cooking.", price: 90, image1: "/raddish-1.jpg", image2: "/raddist-2.jpg" },

  // Fruits
  { id: "4", category: "fruits", name: "Kiwi", description: "Kiwi is a small oval fruit with brown fuzzy exterior and vibrant green inside", price: 500, image1: "/kiwi-1.jpg", image2: "/kiwi-2.jpg" },
  { id: "101", category: "fruits", name: "Green Apple", description: "Fresh farm-picked apples rich in fiber and vitamins.", price: 150, image1: "/fruit.png", image2: "/fresh.jpg" },
  { id: "107", category: "fruits", name: "Fresh Avocado 500g", description: "Creamy avocados packed with healthy nutrients.", price: 200, image1: "/avo-1.jpg", image2: "/avo-2.jpg" },

  // Fish / Seafood
  { id: "104", category: "fish", name: "Salmon 400g", description: "Fresh Atlantic salmon rich in omega-3 fatty acids.", price: 550, image1: "/salmon.jpg", image2: "/salmon.jpg" },
  { id: "105", category: "fish", name: "King Prawns 900g", description: "Large juicy king prawns, perfect for seafood lovers.", price: 750, image1: "/prawn.jpg", image2: "/prawn.jpg" },
  { id: "106", category: "fish", name: "Fresh Lobster 1.7kg", description: "Premium fresh lobster, tender and flavorful.", price: 1200, image1: "/lobster.jpg", image2: "/lobster.jpg" },

  // Meat
  { id: "201", category: "meat", name: "Halal Chuck Steak 500g", description: "Fresh halal-certified chuck steak, perfect for grilling, roasting, or slow cooking.", price: 350, image1: "/halal.jpg", image2: "/halal.jpg" },
  { id: "202", category: "meat", name: "Spiced Beef Pastrami 100g", description: "Hand-trimmed beef pastrami seasoned with aromatic spices and slow cured.", price: 99, image1: "/spiced beef.jpg", image2: "/spiced beef.jpg" },
  { id: "203", category: "meat", name: "Finger Beef Sujuk 1kg", description: "Traditional beef sujuk made with premium halal meat and bold spices.", price: 140, image1: "/fingered-beef.jpg", image2: "/fingered-beef.jpg" },

  // Eggs
  { id: "301", category: "eggs", name: "Free-Range Eggs (6 Pack)", description: "Fresh free-range chicken eggs collected daily from farm-raised hens.", price: 75, image1: "/free-eggs6.jpg", image2: "/free-eggs6.jpg" },
  { id: "302", category: "eggs", name: "Organic Brown Eggs (12 Pack)", description: "Certified organic brown eggs rich in protein and natural nutrients.", price: 160, image1: "/organicEggs.jpg", image2: "/organicEggs.jpg" },
  { id: "303", category: "eggs", name: "Duck Eggs (6 Pack)", description: "Large duck eggs with rich flavor, perfect for baking and special dishes.", price: 120, image1: "/ducksEggs.jpg", image2: "/ducksEggs.jpg" },

  // Milk
  { id: "401", category: "milk", name: "Lacto Milk 1L", description: "Creamy and nutrient-rich milk, perfect for daily consumption.", price: 180, image1: "/lacto-milk.jpg", image2: "/lacto-milk.jpg" },

  // Baking
  { id: "501", category: "baking", name: "Fresh Ciabatta Bread", description: "Soft Italian-style ciabatta bread with a crispy crust and airy texture.", price: 120, image1: "/cibatta-bake.jpg", image2: "./cibatta-bake.jpg" },
  { id: "502", category: "baking", name: "Mini French Rolls (6 pcs)", description: "Freshly baked mini rolls, perfect for sandwiches or breakfast.", price: 95, image1: "/mini-pains.jpg", image2: "/mini-pains.jpg" },
  { id: "503", category: "baking", name: "Triangle Puff Pastry", description: "Flaky golden puff pastry filled with savory or sweet filling.", price: 60, image1: "/triangle-pastry.jpg", image2: "/triangle-pastry.jpg" },

  // Cheese
  { id: "601", category: "cheese", name: "Goat Cheese", description: "Soft and creamy goat cheese, ideal for salads and sandwiches.", price: 180, image1: "/goat-cheese.jpg", image2: "/goat-cheese.jpg" },
  { id: "602", category: "cheese", name: "Sheep Cheese", description: "Rich and flavorful sheep cheese perfect for snacking or cooking.", price: 220, image1: "/sheep-cheese.jpg", image2: "/sheep-cheese.jpg" },

  // Drinks
  { id: "701", category: "drinks", name: "Bene Juice", description: "Refreshing natural juice packed with vitamins.", price: 180, image1: "/benjuice.jpg", image2: "/benjuice.jpg" },
  { id: "702", category: "drinks", name: "Water Bottle 1L", description: "Pure and mineral-rich drinking water.", price: 220, image1: "/water.jpg", image2: "/water.jpg" },
  { id: "703", category: "drinks", name: "Carrot Juice", description: "Fresh carrot juice loaded with beta-carotene and vitamins.", price: 240, image1: "/carrotjuice.jpg", image2: "/carrotjuice.jpg" },
  { id: "704", category: "drinks", name: "Coconut Water", description: "Naturally refreshing coconut water full of electrolytes.", price: 260, image1: "/coconut-water.jpg", image2: "/coconut-water.jpg" },
];

export default products;