// ── MENU DATA (Pacific Rim Bistro — Official Menu)
const IMG = 'https://static.spotapps.co/spots/';
const menuData = {
  lunch: [
    // ── LUNCH SPECIALS (served w/ Miso Soup or Ginger Salad)
    { e:'🍱', n:'Special Roll Combination', d:'Choose 1 Special Roll & 1 Appetizer · w/ Miso Soup or Ginger Salad', p:19.50, img:IMG+'6e/a7c6b20e0744248b539d357183e0ef/medium',
      multiSelect: [
        { label:'Special Roll', required:true, max:1, choices:[
          'Rainbow Roll','Firecracker Roll','I Love Tuna Roll','I Love Salmon Roll',
          'Spider Roll','Dragon Roll','French Kiss Roll','Red Dragon Roll','Green Roll'
        ]},
        { label:'Appetizer', required:true, max:1, choices:[
          'Edamame','Fried Pork Gyoza','Spring Roll','Coconut Shrimp',
          'Spicy Calamari','Chicken Satay','Seaweed Salad','Fried Oyster','Cucumber Kani Salad'
        ]},
        { label:'Soup or Salad', required:false, max:1, choices:[
          'Miso Soup','Ginger Salad','No Soup or Salad'
        ]},
      ]
    },
    { e:'🍣', n:'Sushi Roll Combination', d:'Choose any 2 House Roll · w/ Miso Soup or Ginger Salad', p:16.50, img:null,
      multiSelect: [
        { label:'House Roll', required:true, max:2, choices:[
          'California Roll','Spicy Crab Roll','Spicy Tuna Roll','Philadelphia Roll',
          'Shrimp Tempura Roll','Eel Roll','Alaska Roll','TNT Roll',
          'Vegetable Roll','Salmon Avocado Roll','Tuna Avocado Roll'
        ]},
        { label:'Soup or Salad', required:true, max:1, choices:[
          'Miso Soup','Ginger Salad','No Soup or Salad'
        ]},
      ]
    },
    // ── LUNCH APPETIZERS
    { e:'🫘', n:'Lunch Edamame',                  d:'Boiled soy bean',                                                    p:6,     img:null },
    { e:'🌶️', n:'Lunch Spicy Edamame',             d:'Boiled soy bean tossed w/ chili oil',                               p:6,     img:null },
    { e:'🥟', n:'Lunch Fried Pork Gyoza',          d:'Pork dumplings w/ soy ginger vinaigrette dipping sauce · 4pcs',     p:6,     img:IMG+'f8/1e3df482d04efbaf58eb60ccae671b/medium' },
    { e:'🌯', n:'Lunch Vietnamese Spring Roll',    d:'Fresh vegetables, Vietnamese style dipping sauce · 2pcs',           p:6,     img:IMG+'a8/b7e106058c49d2b955a4177e3daf4c/medium' },
    { e:'🦑', n:'Lunch Spicy Calamari',            d:'Tempura battered calamari w/ fresh basil · 4oz',                   p:8,     img:IMG+'c4/9954966bae449e861bfdc68fd74e6d/medium' },
    { e:'🍢', n:'Lunch Chicken Satay',             d:'Marinated in curry, served w/ peanut sauce · 2 skewers',            p:6,     img:null },
    { e:'🍚', n:'Lunch Side Fried Rice',           d:'',                                                                  p:6,     img:null },
    { e:'🍤', n:'Lunch Tempura Combo',             d:'Shrimp & vegetables',                                               p:8,     img:IMG+'75/4e19225e3e4365bebc7066bcbc2970/medium' },
    { e:'🦑', n:'Lunch Ika Sansai',               d:'Seasoned squid salad',                                              p:8,     img:null },
    { e:'🐟', n:'Lunch Tuna Tataki',               d:'Seared tuna, scallion w/ ponzu sauce',                              p:14,    img:IMG+'11/975ab3b86c4a1484156fa080a8986d/medium' },
    { e:'🐠', n:'Lunch Yellowtail Carpaccio',      d:'Yellowtail, jalapeño w/ ponzu sauce',                              p:14,    img:IMG+'ce/253330e12d4314b1edcf92150ab29c/medium' },
    { e:'🥑', n:'Lunch Ahi Poke',                 d:'Tuna, avocado w/ house special sauce',                             p:14,    img:IMG+'ab/42d9e32f3548dfaa591096965bd88c/medium' },
    { e:'🥒', n:'Lunch Cu Kani',                  d:'Salmon, kani, avocado, wrapped in cucumber w/ ponzu sauce',         p:14,    img:IMG+'4b/f2b4b05fc648deb95aa15bf7e30b9b/medium' },
    { e:'🌿', n:'Lunch Spicy Sashimi',             d:'Assorted sashimi w/ Korean spicy sauce',                           p:14,    img:IMG+'8c/971daa082b42a181c1d37222bdbed8/medium' },
    { e:'🦪', n:'Lunch Fried Oyster',              d:'Panko breaded fried oyster',                                       p:8,     img:IMG+'dc/5cfebe7ff04b54b9a6f24f46564691/medium' },
    { e:'🍤', n:'Lunch Crispy Coconut Shrimp',     d:'',                                                                 p:8,     img:IMG+'f4/cc75da111b431ea23fccacb3cbdb99/medium' },
    // ── SOUPS & SALADS
    { e:'🍵', n:'Lunch Miso Soup',                d:'',                                                                  p:4,     img:null },
    { e:'🥗', n:'Lunch Mixed Green Salad',         d:'Asian balsamic vinaigrette or ginger dressing',                    p:5,     img:null },
    { e:'🌊', n:'Lunch Seaweed Salad',             d:'',                                                                 p:8,     img:null },
    { e:'🥒', n:'Lunch Cucumber Kani Salad',       d:'Cucumber, kani, masago, scallion w/ sunomono sauce',               p:6,     img:null },
    // ── KITCHEN ENTREES
    { e:'🌿', n:'Spicy Basil — Tofu',              d:'Stir fried w/ red onion, bell peppers, Thai basil',                p:14,    img:null },
    { e:'🌿', n:'Spicy Basil — Chicken',           d:'Stir fried w/ red onion, bell peppers, Thai basil',                p:15,    img:IMG+'02/9f23f4e30542bd9cee0b177e2df87b/medium' },
    { e:'🌿', n:'Spicy Basil — Shrimp',            d:'Stir fried w/ red onion, bell peppers, Thai basil',                p:16,    img:null },
    { e:'🌿', n:'Spicy Basil — Mixed Seafood',     d:'Stir fried w/ red onion, bell peppers, Thai basil',                p:18,    img:null },
    { e:'🍜', n:'Pad Thai — Chicken',              d:'Rice noodles, egg, tamarind sauce, bean sprouts, peanuts',         p:15,    img:null },
    { e:'🍜', n:'Pad Thai — Shrimp',               d:'Rice noodles, egg, tamarind sauce, bean sprouts, peanuts',         p:16,    img:null },
    { e:'🍚', n:'Fried Rice — Chicken',            d:'',                                                                 p:15,    img:IMG+'f9/a2fd50a52c41a09a925a6432ae875d/medium' },
    { e:'🍚', n:'Fried Rice — Shrimp',             d:'',                                                                 p:16,    img:null },
    { e:'🍜', n:'Thai Basil Noodles — Chicken',    d:'Wide rice noodle, Thai basil, bell pepper, bean sprout, green onion', p:15, img:null },
    { e:'🍜', n:'Thai Basil Noodles — Shrimp',     d:'Wide rice noodle, Thai basil, bell pepper, bean sprout, green onion', p:16, img:null },
    { e:'🦐', n:'Lunch Wanchi Shrimp',             d:'Crispy shrimp, candied walnuts, honey lemon aioli',                p:16,    img:IMG+'96/5948743df54c53bf4c721be7e8201f/medium' },
    { e:'🦐', n:'Lunch Grilled Shrimp & Veggies',  d:'Zucchini, red bell pepper, asparagus, miso aioli',                p:16,    img:IMG+'2c/66fb80e5d34ed59f9eac0f6eb453fd/medium' },
    { e:'🍛', n:'Panang Curry — Chicken',          d:'Red & green bell peppers, asparagus, Thai basil',                 p:15,    img:null },
    { e:'🍛', n:'Panang Curry — Shrimp',           d:'Red & green bell peppers, asparagus, Thai basil',                 p:16,    img:null },
    { e:'🥑', n:'Green Avocado Curry — Chicken',   d:'Asparagus, bell peppers, onion, basil leaf & avocado',            p:15,    img:null },
    { e:'🥑', n:'Green Avocado Curry — Shrimp',    d:'Asparagus, bell peppers, onion, basil leaf & avocado',            p:16,    img:IMG+'cc/53b8ab220540f398ad7bfe24e9b2dd/medium' },
    { e:'🍛', n:'Thai Yellow Curry — Chicken',     d:'Potato, carrot, cashew nut, cucumber pickle',                     p:15,    img:IMG+'de/1f1b7af5d041faaa101ef30d17df03/medium' },
    { e:'🍛', n:'Thai Yellow Curry — Shrimp',      d:'Potato, carrot, cashew nut, cucumber pickle',                     p:16,    img:null },
    { e:'🥩', n:'Spicy Seven Flavored Beef',       d:'Tender beef in seven spices, Thai basil, peanuts, bean sprouts',  p:16,    img:null },
    { e:'🐟', n:'Lunch Grilled Teriyaki Salmon',   d:'Grilled salmon, vegetable medley, teriyaki sauce, rice',          p:18,    img:IMG+'d3/6ced2d1ddc4c84bb599d31fff9296f/medium' },
    { e:'🍗', n:'Lunch Grilled Teriyaki Chicken',  d:'Homemade teriyaki sauce, vegetable medley, steamed rice',         p:15,    img:IMG+'62/7c1d78736a46c09244f755ddb1d5ef/medium' },
    { e:'🍗', n:'Lunch Grilled Bangkok Chicken',   d:'Lemongrass, ginger & honey, sweet chili sauce, rice',             p:15,    img:IMG+'b8/8cef530dec4752a2047ac9be284efe/medium' },
    { e:'🍗', n:'Fresh Ginger Chicken',            d:'Stir fried chicken, red onion, carrot, mushroom, ginger sauce',   p:15,    img:null },
    { e:'🥜', n:'Cashew Nut — Chicken',            d:'Stir fried w/ bell peppers, red onion, celery, cashew nut',       p:15,    img:null },
    { e:'🥜', n:'Cashew Nut — Shrimp',             d:'Stir fried w/ bell peppers, red onion, celery, cashew nut',       p:16,    img:null },
    { e:'🦐', n:'Garlic Shrimp',                   d:'Fresh garlic, garlic brown sauce, steamed broccoli',              p:16,    img:null },
    { e:'🍲', n:'Tom Yum Noodle Soup',             d:'Lemongrass, wild ginger, kaffir lime, calamari, shrimp in spicy broth', p:16, img:null },
    { e:'🍜', n:'Tonkotsu Ramen',             d:'Ramen noodle soup with roasted pork and boiled egg',         p:14, img:null,
      options:[{n:'Regular',p:14},{n:'Spicy',p:14}] },
    { e:'🍜', n:'Chashu Tonkotsu Ramen',      d:'Ramen noodle soup with extra roasted pork and boiled egg',   p:16, img:null,
      options:[{n:'Regular',p:16},{n:'Spicy',p:16}] },
    { e:'🍜', n:'Seafood Tonkotsu Ramen',     d:'Ramen noodle soup with mixed seafood and boiled egg',        p:16, img:null,
      options:[{n:'Regular',p:16},{n:'Spicy',p:16}] },
    { e:'🍜', n:'Chicken Tonkotsu Ramen',     d:'Ramen noodle soup with chicken and boiled egg',              p:14, img:null,
      options:[{n:'Regular',p:14},{n:'Spicy',p:14}] },
    // ── HOUSE CLASSIC ROLL
    { e:'🍣', n:'Lunch California Roll',           d:'Crabmeat salad, avocado, cucumber',                               p:10,    img:IMG+'dd/d3c4601a0246d1b961c683225dac52/medium' },
    { e:'🍣', n:'Lunch Spicy Crab Roll',           d:'',                                                                p:10,    img:null },
    { e:'🍣', n:'Lunch Spicy Tuna Roll',           d:'',                                                                p:12,    img:null },
    { e:'🍣', n:'Lunch Philadelphia Roll',         d:'Smoked salmon, cream cheese, avocado',                           p:12,    img:null },
    { e:'🍣', n:'Lunch Eel Roll',                  d:'',                                                                p:12,    img:null },
    { e:'🍣', n:'Lunch Shrimp Tempura Roll',       d:'',                                                                p:12,    img:IMG+'15/b5750194f843e39fcd1f43c685dbdf/medium' },
    { e:'🍣', n:'Lunch Alaska Roll',               d:'Salmon, cream cheese, avocado',                                  p:12,    img:null },
    { e:'🍣', n:'Lunch TNT Roll',                  d:'Assorted sashimi mix w/ wasabi mayo',                            p:12,    img:null },
    { e:'🥦', n:'Lunch Vegetable Roll',            d:'',                                                                p:9,     img:null },
    { e:'🍣', n:'Lunch Salmon Avocado Roll',       d:'',                                                                p:12,    img:null },
    { e:'🍣', n:'Lunch Tuna Avocado Roll',         d:'',                                                                p:12,    img:null },
    { e:'🍣', n:'Lunch Tuna Roll',                 d:'6pcs',                                                            p:9,     img:null },
    { e:'🍣', n:'Lunch Salmon Roll',               d:'6pcs',                                                            p:9,     img:null },
    { e:'🍣', n:'Lunch Avocado Roll',              d:'6pcs',                                                            p:6,     img:null },
    { e:'🍣', n:'Lunch Cucumber Roll',             d:'6pcs',                                                            p:6,     img:null },
    { e:'🍣', n:'Lunch Negihama Roll',             d:'6pcs',                                                            p:9,     img:null },
    // ── HOUSE SPECIAL ROLL
    { e:'🍣', n:'Lunch Firecracker Roll',          d:'Spicy tuna, tempura flakes, firecracker mix, jalapeño',          p:16,    img:IMG+'b4/3e9e3dde74486b9bf775e29bba9c09/medium' },
    { e:'🍣', n:'Lunch I Love Tuna Roll',          d:'Crab, avocado, cucumber, tuna, crunch, masago, scallion, eel sauce', p:16, img:IMG+'96/5ed39382604badb64137818a87c075/medium' },
    { e:'🍣', n:'Lunch I Love Salmon Roll',        d:'Crab, avocado, cucumber, salmon, crunch, masago, scallion, eel sauce', p:16, img:IMG+'b2/f5c201de7f4a4a8118203c8694457a/medium' },
    { e:'🍣', n:'Lunch Spider Roll',               d:'Softshell crab, avocado, kani, asparagus, masago, eel sauce · 6pcs', p:16, img:IMG+'61/49b264f1ce436582cbfb6d231f24b0/medium' },
    { e:'🍣', n:'Lunch Lobster Tempura Roll',      d:'Lobster tempura, kani, asparagus, avocado, eel sauce',           p:20,    img:IMG+'44/b12fbcd2c94fa4baaa9bdf1f31c144/medium' },
    { e:'🍣', n:'Lunch Volcano Roll',              d:'Crabmeat, avocado, cucumber, baked spicy seafood, dynamite sauce', p:18,  img:IMG+'c7/12bd646cff4052ad7cf5878c2bac4c/medium' },
    { e:'🍣', n:'Lunch Dragon Roll',               d:'Crabmeat, avocado, cucumber, eel, eel sauce',                   p:16,    img:IMG+'7f/03274fd9cc4b849179b85bc37d7228/medium' },
    { e:'🍣', n:'Lunch Rainbow Roll',              d:'Crabmeat, avocado, cucumber, sliced fish & avocado',            p:16,    img:IMG+'33/5073ffd23341bdbb4d03b7c4ed9f04/medium' },
    { e:'🍣', n:'Lunch Caterpillar Roll',          d:'Eel, cucumber, cream cheese, avocado, eel sauce',               p:16,    img:IMG+'bf/d0174fab004d069673b27e57c5794f/medium' },
    { e:'🍣', n:'Lunch Red Dragon Roll',           d:'Eel, avocado, cucumber, spicy tuna, jalapeño, hot sauce',       p:16,    img:IMG+'db/6797cee9e543dd91ef0efe34171b23/medium' },
    { e:'🍣', n:'Lunch Green Roll',                d:'Avocado, cucumber, asparagus, gobo, kampo w/ avocado',          p:14,    img:IMG+'b3/34fbf67e95412db08ae9ebd780f2bb/medium' },
    { e:'🍣', n:'Lunch Atlanta Roll',              d:'Crabmeat, cream cheese, avocado, cucumber, deep fried, yum yum sauce', p:16, img:IMG+'52/7d63536c954aa29e8de98b95fccd27/medium' },
    { e:'🍣', n:'Lunch Phoenix Roll',              d:'Spicy tuna, cream cheese, deep fried, spicy mayo',              p:16,    img:IMG+'dc/97e062d88a439bbfc1c084b4aa7e0f/medium' },
    { e:'🍣', n:'Lunch Yum Yum Roll',              d:'Spicy tuna, crab, cream cheese, cucumber, deep fried, masago, yum yum sauce · 6pcs', p:16, img:IMG+'bd/62549c2f9e4d83954ec0265a69989a/medium' },
    { e:'🍣', n:'Lunch Hamachi Twist Roll',        d:'Spicy tuna, cucumber, asparagus, yellowtail, lime, cilantro, ponzu sauce', p:18, img:IMG+'71/70f6a4e4ea46a1828c3cc44e06cdd7/medium' },
    { e:'🍣', n:'Lunch Kiss of Fire Roll',         d:'Spicy crab, cucumber, avocado, tuna, salmon, sriracha sara sauce', p:16,  img:IMG+'c5/5cb8e126104721a823e692529ec578/medium' },
    { e:'🍣', n:'Lunch California Dream Roll',     d:'Crab, cream cheese, shrimp tempura, avocado, spicy mayo, eel sauce', p:16, img:IMG+'aa/281eef96bb4c0facffe0eeb68bbfce/medium' },
    { e:'🍣', n:'Lunch Black Pink Roll',           d:'Spicy crab, shrimp tempura, eel, avocado, salmon, sara sauce',  p:16,    img:IMG+'57/dd8dcdeb654e048f427e386995080a/medium' },
    { e:'🍣', n:'Lunch Oishi Roll',                d:'Spicy tuna, crab stick, avocado, firecracker mix, salmon, eel sauce', p:18, img:IMG+'21/be2f332f7b4291a588fab699f1d407/medium' },
    { e:'🍣', n:'Lunch Sex in the City Roll',      d:'Shrimp tempura, cucumber, cream cheese, shrimp, avocado, crab, masago, eel sauce', p:18, img:IMG+'2b/11caa195434ab2b7e3875df9feca86/medium' },
    // ── CHEF SPECIAL ROLL
    { e:'🍣', n:'Lunch Playboy on Fire Roll',      d:'Spicy tuna roll, salmon, spicy mayo, eel sauce',                p:20,    img:IMG+'91/1bb3a923c642efb067340ee1d52bfe/medium' },
    { e:'🍣', n:'Lunch Incredible Hulk Roll',      d:'Shrimp tempura, asparagus, blue crab, spicy tuna, avocado, creamy ponzu · 10pcs', p:22, img:IMG+'b1/a4535f2bbc4f499c0b5856377f658d/medium' },
    { e:'🍣', n:'Lunch Sumo Roll',                 d:'Lump crab, spicy tuna, avocado, cucumber, tuna, salmon, eel, spicy mayo · 10pcs', p:24, img:IMG+'2e/b82ea006644bc8886f0d24a12f3df2/medium' },
    { e:'🍣', n:'Lunch King Kamehameha Roll',      d:'Tempura lobster, kani, cream cheese, masago, tuna, salmon · 10pcs', p:24, img:IMG+'b2/8f1fc872e94402aca5eb993dd19717/medium' },
    { e:'🍣', n:"Lunch Ocean's Three",             d:'Tuna, salmon, escolar, tamago, avocado, scallion, masago · 10pcs', p:20,  img:IMG+'40/5c4be3b4bf442a91dfaf1b9ea4d344/medium' },
    { e:'🍣', n:'Lunch Snow White Roll',           d:'Spicy tuna, shrimp tempura, cucumber, avocado, crab salad, yum yum sauce · 10pcs', p:20, img:IMG+'c3/64d9dede574596b6a6c98bc1d5f011/medium' },
    { e:'🍣', n:'Lunch Crunch Chef Roll',          d:'Crab, avocado, cucumber, chopped lobster & shrimp tempura, masago, eel sauce', p:24, img:IMG+'b4/6fe3b4de4a420f81d6eb9b0af0f97e/medium' },
    { e:'🍣', n:'Lunch Big Mama Roll',             d:'Soft shell crab, shrimp tempura, spicy crab, asparagus, cream cheese, spicy tuna on top', p:24, img:IMG+'75/429b9973c646d5be1850fb1ae80201/medium' },
  ],
  drinks: [
    { e:'🥤', n:'Coke',            d:'',                p:3.50, img:null },
    { e:'🥤', n:'Coke Zero',       d:'',                p:3.50, img:null },
    { e:'🥤', n:'Sprite',          d:'',                p:3.50, img:null },
    { e:'💧', n:'Sparkling Water', d:'',                p:5.50, img:null },
    { e:'🧋', n:'Thai Tea',        d:'',                p:5.50, img:null },
  ],
  nigiri: [
    { e:'🍤', n:'Ebi (Shrimp) Nigiri',          d:'Steamed Shrimp · 2pcs',       p:6,  img:null },
    { e:'🐟', n:'Ikura (Salmon Roe) Nigiri',     d:'Salmon Roe · 2pcs',           p:8,  img:null },
    { e:'🐟', n:'Izumidai (Tilapia) Nigiri',     d:'Tilapia · 2pcs',              p:6,  img:null },
    { e:'🐟', n:'Saba (Mackerel) Nigiri',        d:'Mackerel · 2pcs',             p:6,  img:null },
    { e:'🥚', n:'Tamago (Egg) Nigiri',           d:'Egg Cake · 2pcs',             p:6,  img:null },
    { e:'🐠', n:'Hamachi (Yellowtail) Nigiri',   d:'Yellowtail · 2pcs',           p:9,  img:null },
    { e:'🐟', n:'Maguro (Tuna) Nigiri',          d:'Tuna · 2pcs',                 p:9,  img:null },
    { e:'🐟', n:'Shiro (White Tuna) Nigiri',     d:'White Tuna · 2pcs',           p:8,  img:null },
    { e:'🍣', n:'Unagi (Eel) Nigiri',            d:'Fresh Water Eel · 2pcs',      p:8,  img:null },
    { e:'🦑', n:'Ika (Squid) Nigiri',            d:'Squid · 2pcs',                p:6,  img:null },
    { e:'🫘', n:'Inari (Tofu) Nigiri',           d:'Cooked Tofu · 2pcs',          p:5,  img:null },
    { e:'🟠', n:'Masago (Smelt Roe) Nigiri',     d:'Smelt Roe · 2pcs',            p:6,  img:null },
    { e:'🐙', n:'Tako (Octopus) Nigiri',         d:'Octopus · 2pcs',              p:6,  img:null },
    { e:'🦐', n:'Amaebi (Sweet Shrimp) Nigiri',  d:'Sweet Shrimp · 2pcs',         p:12, img:null },
    { e:'🦪', n:'Hotate (Scallop) Nigiri',       d:'Scallop · 2pcs',              p:8,  img:null },
    { e:'🐟', n:'Sake (Salmon) Nigiri',          d:'Salmon · 2pcs',               p:8,  img:null },
    { e:'🟠', n:'Tobiko (Flying Fish Roe) Nigiri',d:'Flying Fish Roe · 2pcs',     p:8,  img:null },
    { e:'🍣', n:'Salmon Sashimi (3pcs)',         d:'Fresh salmon sashimi',         p:9,  img:null },
    { e:'🍣', n:'Tuna Sashimi (3pcs)',           d:'Fresh tuna sashimi',           p:10, img:null },
    { e:'🍣', n:'Yellowtail Sashimi (3pcs)',     d:'Fresh yellowtail sashimi',     p:10, img:null },
    { e:'🦪', n:'Scallop Sashimi (2pcs)',        d:'Fresh scallop sashimi',        p:8,  img:null },
    { e:'🦐', n:'Sweet Shrimp Sashimi (2pcs)',   d:'Fresh sweet shrimp sashimi',   p:10, img:null },
    { e:'🐟', n:'Mackerel Sashimi (3pcs)',       d:'Fresh mackerel sashimi',       p:8,  img:null },
    { e:'🐙', n:'Octopus Sashimi (3pcs)',        d:'Fresh octopus sashimi',        p:8,  img:null },
    { e:'🐟', n:'Tilapia Sashimi (3pcs)',        d:'Fresh tilapia sashimi',        p:6,  img:null },
    { e:'🍤', n:'Ebi Sashimi (3pcs)',            d:'Steamed shrimp sashimi',       p:6,  img:null },
    { e:'🦑', n:'Ika Sashimi',                  d:'Squid sashimi',                p:6,  img:null },
    { e:'🟠', n:'Masago Sashimi',               d:'Smelt roe sashimi',            p:6,  img:null },
    { e:'🥚', n:'Tamago Sashimi (2pcs)',         d:'Egg cake sashimi',             p:5,  img:null },
    { e:'🟠', n:'Tobiko Sashimi',               d:'Flying fish roe sashimi',      p:8,  img:null },
  ],
  appetizers: [
    { e:'🫘', n:'Edamame',               d:'Boiled soy bean',                                          p:6,  img:null },
    { e:'🌶️', n:'Spicy Edamame',          d:'Boiled soy bean tossed w/ chili oil',                     p:6,  img:null },
    { e:'🥟', n:'Fried Pork Gyoza',       d:'4 pieces',                                                p:7,  img:IMG+'f8/1e3df482d04efbaf58eb60ccae671b/medium' },
    { e:'🌯', n:'Vietnamese Spring Roll', d:'2 pieces',                                                p:7,  img:IMG+'a8/b7e106058c49d2b955a4177e3daf4c/medium' },
    { e:'🦑', n:'Spicy Calamari',         d:'Tempura battered calamari w/ fresh basil (4oz)',          p:9,  img:IMG+'c4/9954966bae449e861bfdc68fd74e6d/medium' },
    { e:'🍢', n:'Chicken Satay',          d:'Marinated in curry, served w/ peanut sauce (2 skewers)',  p:7,  img:null },
    { e:'🍤', n:'Tempura Combo',          d:'Shrimp & vegetables',                                     p:9,  img:IMG+'75/4e19225e3e4365bebc7066bcbc2970/medium' },
    { e:'🐟', n:'Tuna Tataki',            d:'Seared tuna, scallion, ponzu sauce',                      p:14, img:IMG+'11/975ab3b86c4a1484156fa080a8986d/medium' },
    { e:'🐠', n:'Yellowtail Carpaccio',   d:'Yellowtail, jalapeño w/ ponzu sauce',                    p:14, img:IMG+'ce/253330e12d4314b1edcf92150ab29c/medium' },
    { e:'🥑', n:'Ahi Poke',              d:'Tuna, avocado w/ house special sauce',                    p:14, img:IMG+'ab/42d9e32f3548dfaa591096965bd88c/medium' },
    { e:'🥒', n:'Cu Kani',               d:'Salmon, kani, avocado wrapped in cucumber w/ sunomono',   p:14, img:IMG+'4b/f2b4b05fc648deb95aa15bf7e30b9b/medium' },
    { e:'🌿', n:'Spicy Sashimi',          d:'Assorted sashimi w/ Korean spicy sauce',                  p:14, img:IMG+'8c/971daa082b42a181c1d37222bdbed8/medium' },
    { e:'🦪', n:'Fried Oyster',           d:'Panko breaded fried oyster',                              p:9,  img:IMG+'dc/5cfebe7ff04b54b9a6f24f46564691/medium' },
    { e:'🍤', n:'Crispy Coconut Shrimp',  d:'Coconut battered shrimp',                                p:9,  img:IMG+'f4/cc75da111b431ea23fccacb3cbdb99/medium' },
    { e:'🥦', n:'Brussels Sprouts',       d:'Sautéed in Thai lime chili sauce',                       p:10, img:null },
    { e:'🍖', n:'Japanese Pork Ribs',     d:'Braised pork ribs tossed in teriyaki glaze',              p:12, img:null },
  ],
  soups: [
    { e:'🍵', n:'Miso Soup',             d:'Classic Japanese miso',                                   p:5,  img:null },
    { e:'🥗', n:'Mixed Green Salad',      d:'Fresh garden greens',                                     p:6,  img:null },
    { e:'🌊', n:'Seaweed Salad',          d:'Fresh seaweed salad',                                     p:8,  img:null },
    { e:'🥒', n:'Cucumber Kani Salad',    d:'Cucumber, kani, masago, scallion w/ ponzu sauce',         p:6,  img:null },
  ],
  entrees: [
    { e:'🌿', n:'Spicy Basil',           d:'Stir fried w/ red onion, bell peppers, Thai basil leaves',                    p:22, img:IMG+'02/9f23f4e30542bd9cee0b177e2df87b/medium',
      options:[{n:'Tofu',p:20},{n:'Chicken',p:22},{n:'Shrimp',p:24},{n:'Mixed Seafood',p:30}] },
    { e:'🍜', n:'Pad Thai Noodles',       d:'Rice noodles, egg, tamarind sauce, bean sprouts, turnip, cilantro, peanuts',  p:20, img:null,
      options:[{n:'Tofu',p:18},{n:'Chicken',p:20},{n:'Shrimp',p:22}] },
    { e:'🍜', n:'Thai Basil Noodles',     d:'Wide rice noodle, Thai basil, bell pepper, bean sprout, green onion, spicy sauce', p:20, img:null,
      options:[{n:'Tofu',p:18},{n:'Vegetable',p:18},{n:'Chicken',p:20},{n:'Shrimp',p:22}] },
    { e:'🍚', n:'Fried Rice',             d:'Wok fried rice, egg, vegetables',                                             p:18, img:IMG+'f9/a2fd50a52c41a09a925a6432ae875d/medium',
      options:[{n:'Vegetable',p:16},{n:'Chicken',p:18},{n:'Shrimp',p:20},{n:'House',p:22}] },
    { e:'🍛', n:'Panang Curry',           d:'Red & green bell peppers, asparagus, Thai basil leaves',                      p:22, img:null,
      options:[{n:'Tofu',p:20},{n:'Chicken',p:22},{n:'Shrimp',p:24}] },
    { e:'🍛', n:'Thai Yellow Curry',      d:'Potatoes, carrot, cashew nut, cucumber pickle, steamed rice',                 p:22, img:IMG+'de/1f1b7af5d041faaa101ef30d17df03/medium',
      options:[{n:'Tofu',p:20},{n:'Chicken',p:22},{n:'Shrimp',p:24}] },
    { e:'🦐', n:'Wanchi Shrimp',          d:'Crispy large shrimp wok tossed with candied walnuts in honey lemon aioli',    p:26, img:IMG+'96/5948743df54c53bf4c721be7e8201f/medium' },
    { e:'🍗', n:'Grilled Teriyaki Chicken',d:'Pan grilled chicken, homemade teriyaki sauce, vegetable medley, steamed rice',p:23, img:IMG+'62/7c1d78736a46c09244f755ddb1d5ef/medium' },
    { e:'🍗', n:'Grilled Bangkok Chicken', d:'Lemongrass, ginger & honey marinade, sweet chili sauce, vegetable medley, rice',p:23, img:IMG+'b8/8cef530dec4752a2047ac9be284efe/medium' },
    { e:'🦐', n:'Grilled Shrimp & Roasted Vegetables', d:'Grilled shrimp over zucchini, red bell pepper, asparagus, miso aioli', p:26, img:IMG+'2c/66fb80e5d34ed59f9eac0f6eb453fd/medium' },
    { e:'🐟', n:'Grilled Teriyaki Salmon', d:'Grilled salmon, vegetable medley, teriyaki sauce, mashed potatoes',          p:30, img:IMG+'d3/6ced2d1ddc4c84bb599d31fff9296f/medium' },
    { e:'🥑', n:'Jumbo Shrimp & Scallop Green Avocado Curry', d:'Asparagus, bell peppers, basil leaf, avocado, pan seared jumbo shrimp & scallop', p:35, img:IMG+'cc/53b8ab220540f398ad7bfe24e9b2dd/medium' },
    { e:'🥩', n:'Spicy Seven Flavored Beef', d:'Tender beef in seven spices, Thai basil, crushed peanuts, bean sprouts',   p:26, img:null },
    { e:'🍜', n:'Tonkotsu Ramen',            d:'Ramen noodle soup with roasted pork and boiled egg',                       p:20, img:null,
      options:[{n:'Regular',p:20},{n:'Spicy',p:20}] },
    { e:'🍜', n:'Chashu Tonkotsu Ramen',     d:'Ramen noodle soup with extra roasted pork and boiled egg',                 p:22, img:null,
      options:[{n:'Regular',p:22},{n:'Spicy',p:22}] },
    { e:'🍜', n:'Seafood Tonkotsu Ramen',    d:'Ramen noodle soup with mixed seafood and boiled egg',                      p:22, img:null,
      options:[{n:'Regular',p:22},{n:'Spicy',p:22}] },
    { e:'🍜', n:'Chicken Tonkotsu Ramen',    d:'Ramen noodle soup with chicken and boiled egg',                            p:20, img:null,
      options:[{n:'Regular',p:20},{n:'Spicy',p:20}] },
  ],
  rolls: [
    // ── HOUSE CLASSIC ROLL
    { e:'🍣', n:'California Roll',           d:'Crabmeat salad, avocado, cucumber',                               p:10,    img:IMG+'dd/d3c4601a0246d1b961c683225dac52/medium' },
    { e:'🍣', n:'Spicy Crab Roll',           d:'',                                                                p:10,    img:null },
    { e:'🍣', n:'Spicy Tuna Roll',           d:'',                                                                p:12,    img:null },
    { e:'🍣', n:'Philadelphia Roll',         d:'Smoked salmon, cream cheese, avocado',                           p:12,    img:null },
    { e:'🍣', n:'Eel Roll',                  d:'',                                                                p:12,    img:null },
    { e:'🍣', n:'Shrimp Tempura Roll',       d:'',                                                                p:12,    img:IMG+'15/b5750194f843e39fcd1f43c685dbdf/medium' },
    { e:'🍣', n:'Alaska Roll',               d:'Salmon, cream cheese, avocado',                                  p:12,    img:null },
    { e:'🍣', n:'TNT Roll',                  d:'Assorted sashimi mix w/ wasabi mayo',                            p:12,    img:null },
    { e:'🥦', n:'Vegetable Roll',            d:'',                                                                p:9,     img:null },
    { e:'🍣', n:'Salmon Avocado Roll',       d:'',                                                                p:12,    img:null },
    { e:'🍣', n:'Tuna Avocado Roll',         d:'',                                                                p:12,    img:null },
    { e:'🍣', n:'Tuna Roll',                 d:'6pcs',                                                            p:9,     img:null },
    { e:'🍣', n:'Salmon Roll',               d:'6pcs',                                                            p:9,     img:null },
    { e:'🍣', n:'Avocado Roll',              d:'6pcs',                                                            p:6,     img:null },
    { e:'🍣', n:'Cucumber Roll',             d:'6pcs',                                                            p:6,     img:null },
    { e:'🍣', n:'Negihama Roll',             d:'6pcs',                                                            p:9,     img:null },
    // ── HOUSE SPECIAL ROLL
    { e:'🍣', n:'Firecracker Roll',          d:'Spicy tuna, tempura flakes, firecracker mix, jalapeño',          p:16,    img:IMG+'b4/3e9e3dde74486b9bf775e29bba9c09/medium' },
    { e:'🍣', n:'I Love Tuna Roll',          d:'Crab, avocado, cucumber, tuna, crunch, masago, scallion, eel sauce', p:16, img:IMG+'96/5ed39382604badb64137818a87c075/medium' },
    { e:'🍣', n:'I Love Salmon Roll',        d:'Crab, avocado, cucumber, salmon, crunch, masago, scallion, eel sauce', p:16, img:IMG+'b2/f5c201de7f4a4a8118203c8694457a/medium' },
    { e:'🍣', n:'Spider Roll',               d:'Softshell crab, avocado, kani, asparagus, masago, eel sauce · 6pcs', p:16, img:IMG+'61/49b264f1ce436582cbfb6d231f24b0/medium' },
    { e:'🍣', n:'Lobster Tempura Roll',      d:'Lobster tempura, kani, asparagus, avocado, eel sauce',           p:20,    img:IMG+'44/b12fbcd2c94fa4baaa9bdf1f31c144/medium' },
    { e:'🍣', n:'Volcano Roll',              d:'Crabmeat, avocado, cucumber, baked spicy seafood, dynamite sauce', p:18,  img:IMG+'c7/12bd646cff4052ad7cf5878c2bac4c/medium' },
    { e:'🍣', n:'Dragon Roll',               d:'Crabmeat, avocado, cucumber, eel, eel sauce',                   p:16,    img:IMG+'7f/03274fd9cc4b849179b85bc37d7228/medium' },
    { e:'🍣', n:'Rainbow Roll',              d:'Crabmeat, avocado, cucumber, sliced fish & avocado',            p:16,    img:IMG+'33/5073ffd23341bdbb4d03b7c4ed9f04/medium' },
    { e:'🍣', n:'Caterpillar Roll',          d:'Eel, cucumber, cream cheese, avocado, eel sauce',               p:16,    img:IMG+'bf/d0174fab004d069673b27e57c5794f/medium' },
    { e:'🍣', n:'Red Dragon Roll',           d:'Eel, avocado, cucumber, spicy tuna, jalapeño, hot sauce',       p:16,    img:IMG+'db/6797cee9e543dd91ef0efe34171b23/medium' },
    { e:'🍣', n:'Green Roll',                d:'Avocado, cucumber, asparagus, gobo, kampo w/ avocado',          p:14,    img:IMG+'b3/34fbf67e95412db08ae9ebd780f2bb/medium' },
    { e:'🍣', n:'Atlanta Roll',              d:'Crabmeat, cream cheese, avocado, cucumber, deep fried, yum yum sauce', p:16, img:IMG+'52/7d63536c954aa29e8de98b95fccd27/medium' },
    { e:'🍣', n:'Phoenix Roll',              d:'Spicy tuna, cream cheese, deep fried, spicy mayo',              p:16,    img:IMG+'dc/97e062d88a439bbfc1c084b4aa7e0f/medium' },
    { e:'🍣', n:'Yum Yum Roll',              d:'Spicy tuna, crab, cream cheese, cucumber, deep fried, masago, yum yum sauce · 6pcs', p:16, img:IMG+'bd/62549c2f9e4d83954ec0265a69989a/medium' },
    { e:'🍣', n:'Hamachi Twist Roll',        d:'Spicy tuna, cucumber, asparagus, yellowtail, lime, cilantro, ponzu sauce', p:18, img:IMG+'71/70f6a4e4ea46a1828c3cc44e06cdd7/medium' },
    { e:'🍣', n:'Kiss of Fire Roll',         d:'Spicy crab, cucumber, avocado, tuna, salmon, sriracha sara sauce', p:16,  img:IMG+'c5/5cb8e126104721a823e692529ec578/medium' },
    { e:'🍣', n:'California Dream Roll',     d:'Crab, cream cheese, shrimp tempura, avocado, spicy mayo, eel sauce', p:16, img:IMG+'aa/281eef96bb4c0facffe0eeb68bbfce/medium' },
    { e:'🍣', n:'Black Pink Roll',           d:'Spicy crab, shrimp tempura, eel, avocado, salmon, sara sauce',  p:16,    img:IMG+'57/dd8dcdeb654e048f427e386995080a/medium' },
    { e:'🍣', n:'Oishi Roll',                d:'Spicy tuna, crab stick, avocado, firecracker mix, salmon, eel sauce', p:18, img:IMG+'21/be2f332f7b4291a588fab699f1d407/medium' },
    { e:'🍣', n:'Sex in the City Roll',      d:'Shrimp tempura, cucumber, cream cheese, shrimp, avocado, crab, masago, eel sauce', p:18, img:IMG+'2b/11caa195434ab2b7e3875df9feca86/medium' },
    // ── CHEF SPECIAL ROLL
    { e:'🍣', n:'Playboy on Fire Roll',      d:'Spicy tuna roll, salmon, spicy mayo, eel sauce',                p:20,    img:IMG+'91/1bb3a923c642efb067340ee1d52bfe/medium' },
    { e:'🍣', n:'Incredible Hulk Roll',      d:'Shrimp tempura, asparagus, blue crab, spicy tuna, avocado, creamy ponzu · 10pcs', p:22, img:IMG+'b1/a4535f2bbc4f499c0b5856377f658d/medium' },
    { e:'🍣', n:'Sumo Roll',                 d:'Lump crab, spicy tuna, avocado, cucumber, tuna, salmon, eel, spicy mayo · 10pcs', p:24, img:IMG+'2e/b82ea006644bc8886f0d24a12f3df2/medium' },
    { e:'🍣', n:'King Kamehameha Roll',      d:'Tempura lobster, kani, cream cheese, masago, tuna, salmon · 10pcs', p:24, img:IMG+'b2/8f1fc872e94402aca5eb993dd19717/medium' },
    { e:'🍣', n:'Snow White Roll',           d:'Spicy tuna, shrimp tempura, cucumber, avocado, crab salad, yum yum sauce · 10pcs', p:20, img:IMG+'c3/64d9dede574596b6a6c98bc1d5f011/medium' },
    { e:'🍣', n:'Crunch Chef Roll',          d:'Crab, avocado, cucumber, chopped lobster & shrimp tempura, masago, eel sauce', p:24, img:IMG+'b4/6fe3b4de4a420f81d6eb9b0af0f97e/medium' },
    { e:'🍣', n:'Big Mama Roll',             d:'Soft shell crab, shrimp tempura, spicy crab, asparagus, cream cheese, spicy tuna on top', p:24, img:IMG+'75/429b9973c646d5be1850fb1ae80201/medium' }
  ],
};

// ── CART STATE
let cart = [];
let guestCount = 2;
let usePoints = false;
let tipPercent = 20;
let tipCustom  = null;

// ─────────────────────────────────
// AUTH
// ─────────────────────────────────
const USER_KEY = 'prb_user';

function getUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY)); }
  catch(e) { return null; }
}

function signOut() {
  localStorage.removeItem(USER_KEY);
  updateAuthUI();
}

function updateAuthUI() {
  const user      = getUser();
  const signInBtn = document.getElementById('btn-signin');
  const greetEl   = document.getElementById('hero-greeting');
  const ptsEl     = document.getElementById('home-points');
  const ptsSubEl  = document.getElementById('home-points-sub');
  const ptsValEl  = document.getElementById('home-points-value');
  if (!signInBtn) return;

  const ADMIN_EMAILS = ['yshahn@gmail.com', 'ymhahn@gmail.com'];
  const adminBtn = document.getElementById('btn-admin');

  if (user) {
    signInBtn.textContent = 'Sign Out';
    signInBtn.removeAttribute('href');
    signInBtn.onclick = (e) => { e.preventDefault(); signOut(); };
    if (greetEl) {
      greetEl.textContent = 'Welcome back, ' + user.firstName + '!';
      greetEl.style.cssText = 'color:#fff;font-size:13px;opacity:1;font-weight:500;';
    }
    const pts = user.points || 0;
    if (ptsEl)    ptsEl.textContent    = pts.toLocaleString();
    if (ptsValEl) ptsValEl.textContent = '$' + (pts / 100).toFixed(2);
    if (ptsSubEl) ptsSubEl.textContent = 'Welcome back, ' + (user.firstName || '') + '!';
    const ptLabel = document.getElementById('pt-label');
    if (ptLabel) {
      const pts = user.points || 0;
      const maxDiscount = Math.floor(pts / 500) * 5;
      if (pts >= 500) {
        ptLabel.textContent = 'Use Points — Redeem $' + maxDiscount + ' (' + pts.toLocaleString() + ' pts)';
      } else {
        ptLabel.textContent = 'Use Points (' + pts + ' pts — need 500 for $5 off)';
      }
    }
    // Show Admin button only for admin emails
    if (adminBtn) adminBtn.style.display = ADMIN_EMAILS.includes(user.email) ? 'block' : 'none';
  } else {
    signInBtn.textContent = 'Sign In';
    signInBtn.href = 'login.html';
    signInBtn.onclick = null;
    if (greetEl) {
      greetEl.textContent = 'Welcome back';
      greetEl.style.cssText = 'color:#fff;opacity:0.9;';
    }
    if (ptsEl)    ptsEl.textContent    = '0';
    if (ptsValEl) ptsValEl.textContent = '$0.00';
    if (ptsSubEl) ptsSubEl.textContent = 'Sign in to earn points';
    if (adminBtn) adminBtn.style.display = 'none';
  }
}

function fillUserInfo() {
  const user    = getUser();
  const profile = loadProfile();
  const data    = { ...profile, ...(user || {}) };
  const fnEl    = document.getElementById('gi-firstname');
  const lnEl    = document.getElementById('gi-lastname');
  const phoneEl = document.getElementById('gi-phone');
  const emailEl = document.getElementById('gi-email');
  const badge   = document.getElementById('gi-badge');

  if (fnEl)    fnEl.value    = data.firstName || '';
  if (lnEl)    lnEl.value    = data.lastName  || '';
  if (phoneEl) phoneEl.value = data.phone      || '';
  if (emailEl) emailEl.value = data.email      || '';
  if (badge)   badge.style.display = (user || Object.keys(profile).length) ? 'block' : 'none';
}

// ─────────────────────────────────
// NAVIGATION
// ─────────────────────────────────
function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const ss = document.getElementById('success-screen');
  if (ss) ss.classList.remove('active');
  const screen = document.getElementById('screen-' + id);
  if (screen) screen.classList.add('active');
  const nav = document.getElementById('bottom-nav');
  if (nav) nav.style.display = 'flex';
  updateNav(id);
  window.scrollTo(0, 0);
  if (id === 'order') showMenuStep();
  if (id === 'rewards') buildRewardsScreen();
  if (id === 'profile') updateProfileUI();
  if (id === 'reservation') { buildDates(); prefillReservationForm(); buildMyReservations(); }
}

function navGo(id) { goTo(id); }

function updateNav(id) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const item = document.getElementById('nav-' + id);
  if (item) item.classList.add('active');
}

// ─────────────────────────────────
// ORDER STEPS
// ─────────────────────────────────
function showMenuStep() {
  document.getElementById('step-menu').style.display = 'flex';
  document.getElementById('step-checkout').style.display = 'none';
  document.getElementById('order-screen-title').textContent = 'Order';
  document.getElementById('order-screen-sub').textContent = 'Select your items';
}

function goToCheckout() {
  if (cart.length === 0) return;
  document.getElementById('step-menu').style.display = 'none';
  document.getElementById('step-checkout').style.display = 'flex';
  document.getElementById('order-screen-title').textContent = 'Checkout';
  document.getElementById('order-screen-sub').textContent = 'Review & pay';
  tipPercent = 20; tipCustom = null;
  document.querySelectorAll('.tip-btn').forEach(b => b.classList.remove('selected'));
  const def = document.querySelector('.tip-btn[onclick="selectTip(this, 20)"]');
  if (def) def.classList.add('selected');
  const cw = document.getElementById('tip-custom-wrap');
  if (cw) cw.style.display = 'none';
  fillUserInfo();
  buildCheckoutSummary();
  buildPickupSlots();
  document.getElementById('screen-order').scrollTop = 0;
}

function backToMenu() { showMenuStep(); }

function buildCheckoutSummary() {
  const editList = document.getElementById('cart-edit-list');
  if (editList) {
    const grouped = {};
    cart.forEach((item, idx) => {
      if (!grouped[item.name]) grouped[item.name] = { ...item, qty: 0, indices: [] };
      grouped[item.name].qty++;
      grouped[item.name].indices.push(idx);
    });

    editList.innerHTML = '';
    Object.values(grouped).forEach(item => {
      const row = document.createElement('div');
      row.className = 'cart-edit-row';
      row.innerHTML =
        '<div class="cer-emoji">' + item.emoji + '</div>' +
        '<div class="cer-name">' + item.name + '</div>' +
        '<div class="cer-controls">' +
          '<button class="cer-btn" onclick="cartQty(\'' + item.name + '\',-1)">−</button>' +
          '<span class="cer-qty">' + item.qty + '</span>' +
          '<button class="cer-btn" onclick="cartQty(\'' + item.name + '\',1)">+</button>' +
          '<button class="cer-del" onclick="cartRemove(\'' + item.name + '\')">🗑</button>' +
        '</div>' +
        '<div class="cer-price">$' + (item.price * item.qty).toFixed(2) + '</div>';
      editList.appendChild(row);
    });
  }

  const el = document.getElementById('checkout-summary');
  if (!el) return;
  const subtotal    = cart.reduce((s, i) => s + i.price, 0);
  const platformFee = 1.00;
  const tax         = subtotal * 0.089;
  const tip         = getTipAmount(subtotal);
  const user_pts    = getUser()?.points || 0;
  const maxDiscount = Math.floor(user_pts / 500) * 5; // $5 per 500 pts
  const discount    = usePoints ? Math.min(maxDiscount, subtotal + platformFee + tax + tip) : 0;
  const gcDiscount  = 0;
  const total       = Math.max(subtotal + platformFee + tax + tip - discount, 0.50);

  const tipAmountEl = document.getElementById('tip-amount');
  if (tipAmountEl) tipAmountEl.textContent = 'Tip: $' + tip.toFixed(2);

  el.innerHTML =
    '<div class="os-row os-label"><span>Subtotal</span><span>$' + subtotal.toFixed(2) + '</span></div>' +
    '<div class="os-row os-label"><span>Platform Fee</span><span>$' + platformFee.toFixed(2) + '</span></div>' +
    '<div class="os-row os-label"><span>Tax (8.9%)</span><span>$' + tax.toFixed(2) + '</span></div>' +
    '<div class="os-row os-label"><span>Tip</span><span>$' + tip.toFixed(2) + '</span></div>' +
    (discount ? '<div class="os-row os-label" style="color:var(--gold)"><span>Points Discount</span><span>−$' + discount.toFixed(2) + '</span></div>' : '') +
'<div class="os-row total"><span>Total</span><span>$' + total.toFixed(2) + '</span></div>';

  const payBtn = document.getElementById('pay-btn');
  if (payBtn) payBtn.textContent = 'Pay $' + total.toFixed(2);
  if (payBtn) payBtn.style.display = cart.length > 0 ? 'block' : 'none';
}

function cartQty(name, delta) {
  if (delta === -1) {
    const idx = cart.findLastIndex ? cart.findLastIndex(i => i.name === name)
                                   : [...cart].reverse().findIndex(i => i.name === name);
    if (idx !== -1) {
      const realIdx = cart.findLastIndex ? idx : cart.length - 1 - idx;
      cart.splice(realIdx, 1);
    }
  } else {
    const existing = cart.find(i => i.name === name);
    if (existing) cart.push({ ...existing });
  }
  const total = cart.reduce((s, i) => s + i.price, 0);
  const cc = document.getElementById('cart-count');
  const ct = document.getElementById('cart-total');
  const cb = document.getElementById('cart-bar');
  if (cc) cc.textContent = cart.length + ' item' + (cart.length !== 1 ? 's' : '');
  if (ct) ct.textContent = '$' + total.toFixed(2);
  if (cb) cb.style.display = cart.length > 0 ? 'flex' : 'none';
  if (cart.length === 0) { backToMenu(); return; }
  buildCheckoutSummary();
}

function cartRemove(name) {
  cart = cart.filter(i => i.name !== name);
  const total = cart.reduce((s, i) => s + i.price, 0);
  const cc = document.getElementById('cart-count');
  const ct = document.getElementById('cart-total');
  const cb = document.getElementById('cart-bar');
  if (cc) cc.textContent = cart.length + ' item' + (cart.length !== 1 ? 's' : '');
  if (ct) ct.textContent = '$' + total.toFixed(2);
  if (cb) cb.style.display = cart.length > 0 ? 'flex' : 'none';
  if (cart.length === 0) { backToMenu(); return; }
  buildCheckoutSummary();
}

// ─────────────────────────────────
// MENU
// ─────────────────────────────────
function buildMenu(tab) {
  const list = document.getElementById('menu-list');
  if (!list) return;
  list.innerHTML = '';

  let items = (window.firebaseMenuData && window.firebaseMenuData[tab])
    ? window.firebaseMenuData[tab].map(savedItem => {
        const builtIn = (menuData[tab] || []).find(m => m.n === savedItem.n);
        // Fix multiSelect choices: convert string to array if needed
        const fixMultiSelect = (ms) => {
          if (!ms) return null;
          return ms.map(g => ({
            ...g,
            choices: Array.isArray(g.choices)
              ? g.choices
              : (typeof g.choices === 'string' ? g.choices.split('\n').map(s=>s.trim()).filter(Boolean) : [])
          }));
        };
        if (builtIn) {
          return {
            ...savedItem,
            options: builtIn.options || null,
            multiSelect: builtIn.multiSelect || fixMultiSelect(savedItem.multiSelect),
          };
        }
        return { ...savedItem, multiSelect: fixMultiSelect(savedItem.multiSelect) };
      })
    : menuData[tab] || [];

  const firstHeaders = {
    nigiri: 'Nigiri Sushi',
    lunch:  '🌞 Lunch Specials · Served w/ Miso Soup or Ginger Salad',
  };
  if (firstHeaders[tab]) {
    const h = document.createElement('div');
    h.className = 'menu-section-header';
    h.textContent = firstHeaders[tab];
    list.appendChild(h);
  }

  items.forEach((item, idx) => {
    const headers = (tab === 'nigiri')
      ? { 'Salmon Sashimi (3pcs)': 'Sashimi' }
      : (tab === 'lunch')
      ? {
          'Lunch Edamame':              'Lunch Appetizers',
          'Lunch Miso Soup':            'Soups & Salads',
          'Spicy Basil — Tofu':         'Kitchen Entrees',
          'Lunch California Roll':      'House Classic Roll',
          'Lunch Firecracker Roll':     'House Special Roll',
          'Lunch Playboy on Fire Roll': 'Chef Special Roll',
        }
      : (tab === 'rolls')
      ? {
          'California Roll':      'House Classic Roll',
          'Firecracker Roll':     'House Special Roll',
          'Playboy on Fire Roll': 'Chef Special Roll',
        }
      : {};

    // Show subcat header for Firebase-added items (not in built-in menu)
    const builtInItem = (menuData[tab] || []).find(m => m.n === item.n);
    if (!builtInItem && item.subcat) {
      const prevItem = items[idx - 1];
      if (!prevItem || prevItem.subcat !== item.subcat) {
        const h = document.createElement('div');
        h.className = 'menu-section-header';
        h.textContent = item.subcat;
        list.appendChild(h);
      }
    } else if (headers[item.n]) {
      const h = document.createElement('div');
      h.className = 'menu-section-header';
      h.textContent = headers[item.n];
      list.appendChild(h);
    }

    const inCart = cart.filter(c => c.name === item.n || c.name.startsWith(item.n + ' — ') || c.name.startsWith(item.n + ' (')).length;
    const div = document.createElement('div');
    div.className = 'menu-item' + (item.options ? ' has-options' : '');

    const thumbHtml = item.img
      ? '<img class="mi-thumb" src="' + item.img + '" alt="' + item.n + '" onerror="this.style.display=\'none\'">'
      : '<div class="mi-emoji">' + item.e + '</div>';

    const priceDisplay = item.options
      ? 'from $' + Math.min(...item.options.map(o => o.p)).toFixed(2)
      : '$' + parseFloat(item.p).toFixed(2);

    const optionsHtml = item.options ? `
      <div class="mi-options" style="display:none;">
        ${item.options.map(opt => {
          const optInCart = cart.filter(c => c.name === item.n + ' — ' + opt.n).length;
          return `<div class="mi-opt-row" data-name="${item.n} — ${opt.n}" data-price="${opt.p}" data-emoji="${item.e}">
            <span class="mi-opt-name">${opt.n}</span>
            <span class="mi-opt-price">$${opt.p.toFixed(2)}</span>
            <button class="mi-opt-btn${optInCart ? ' added' : ''}">${optInCart ? '✓ ' + optInCart : '+'}</button>
          </div>`;
        }).join('')}
      </div>` : '';

    div.innerHTML =
      '<div class="mi-main">' +
        thumbHtml +
        '<div class="mi-info">' +
          '<div class="mi-name">' + item.n + '</div>' +
          '<div class="mi-desc">' + item.d + '</div>' +
          '<div class="mi-price">' + priceDisplay + '</div>' +
        '</div>' +
        (item.options
          ? '<button class="mi-expand-btn">▾</button>'
          : item.multiSelect
            ? inCart
              ? '<div class="mi-qty-ctrl">' +
                  '<button class="mi-qty-btn mi-qty-minus">−</button>' +
                  '<span class="mi-qty-num">' + inCart + '</span>' +
                  '<button class="mi-qty-btn mi-qty-plus">+</button>' +
                '</div>'
              : '<button class="mi-add">+</button>'
            : inCart
              ? '<div class="mi-qty-ctrl">' +
                  '<button class="mi-qty-btn mi-qty-minus">−</button>' +
                  '<span class="mi-qty-num">' + inCart + '</span>' +
                  '<button class="mi-qty-btn mi-qty-plus">+</button>' +
                '</div>'
              : '<button class="mi-add">+</button>'
        ) +
      '</div>' +
      optionsHtml;

    if (item.multiSelect) {
      const addBtn = div.querySelector('.mi-add');
      const qtyCtrl = div.querySelector('.mi-qty-ctrl');
      if (addBtn) addBtn.addEventListener('click', () => openMultiSelectModal(item));
      if (qtyCtrl) {
        qtyCtrl.querySelector('.mi-qty-plus').addEventListener('click', () => openMultiSelectModal(item));
        qtyCtrl.querySelector('.mi-qty-minus').addEventListener('click', () => {
          const idx = cart.findLastIndex
            ? cart.findLastIndex(c => c.name.startsWith(item.n + ' ('))
            : [...cart].map((c,i)=>[c,i]).filter(([c])=>c.name.startsWith(item.n+' (')).pop()?.[1];
          if (idx !== undefined && idx !== -1) cart.splice(idx, 1);
          updateCartBar();
          buildMenu(document.querySelector('.menu-tab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1] || 'lunch');
        });
      }
    } else if (item.options) {
      div.querySelector('.mi-expand-btn').addEventListener('click', function() {
        const opts = div.querySelector('.mi-options');
        const isOpen = opts.style.display === 'block';
        opts.style.display = isOpen ? 'none' : 'block';
        this.textContent = isOpen ? '▾' : '▴';
        this.classList.toggle('active', !isOpen);
      });
      div.querySelectorAll('.mi-opt-row').forEach(row => {
        row.querySelector('.mi-opt-btn').addEventListener('click', function() {
          addToCart(row.dataset.name, parseFloat(row.dataset.price), row.dataset.emoji, null);
          const count = cart.filter(c => c.name === row.dataset.name).length;
          this.textContent = '✓ ' + count;
          this.classList.add('added');
          updateOptRowQty(row, row.dataset.name, parseFloat(row.dataset.price), row.dataset.emoji);
        });
      });
    } else {
      const addBtn = div.querySelector('.mi-add');
      const qtyCtrl = div.querySelector('.mi-qty-ctrl');
      if (addBtn) {
        addBtn.addEventListener('click', function() {
          addToCart(item.n, parseFloat(item.p), item.e, null);
          buildMenu(document.querySelector('.menu-tab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1] || 'appetizers');
        });
      }
      if (qtyCtrl) {
        qtyCtrl.querySelector('.mi-qty-plus').addEventListener('click', () => {
          addToCart(item.n, parseFloat(item.p), item.e, null);
          buildMenu(document.querySelector('.menu-tab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1] || 'appetizers');
        });
        qtyCtrl.querySelector('.mi-qty-minus').addEventListener('click', () => {
          const idx = cart.findLastIndex ? cart.findLastIndex(c => c.name === item.n)
                                         : [...cart].map((c,i)=>[c,i]).filter(([c])=>c.name===item.n).pop()?.[1];
          if (idx !== undefined && idx !== -1) cart.splice(idx, 1);
          updateCartBar();
          buildMenu(document.querySelector('.menu-tab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1] || 'appetizers');
        });
      }
    }
    list.appendChild(div);
  });
}

function updateCartBar() {
  const total = cart.reduce((s, i) => s + i.price, 0);
  const cc = document.getElementById('cart-count');
  const ct = document.getElementById('cart-total');
  const cb = document.getElementById('cart-bar');
  if (cc) cc.textContent = cart.length + ' item' + (cart.length !== 1 ? 's' : '');
  if (ct) ct.textContent = '$' + total.toFixed(2);
  if (cb) cb.style.display = cart.length > 0 ? 'flex' : 'none';
}

function updateOptRowQty(row, name, price, emoji) {
  const count = cart.filter(c => c.name === name).length;
  const ctrl = row.querySelector('.mi-opt-qty-ctrl');
  if (ctrl) {
    ctrl.querySelector('.mi-qty-num').textContent = count;
    if (count === 0) {
      const btn = document.createElement('button');
      btn.className = 'mi-opt-btn';
      btn.textContent = '+';
      btn.addEventListener('click', function() {
        addToCart(name, price, emoji, null);
        updateOptRowQty(row, name, price, emoji);
      });
      ctrl.replaceWith(btn);
    }
  } else {
    const oldBtn = row.querySelector('.mi-opt-btn');
    if (!oldBtn) return;
    const qtyCtrl = document.createElement('div');
    qtyCtrl.className = 'mi-opt-qty-ctrl';
    qtyCtrl.innerHTML =
      '<button class="mi-qty-btn">−</button>' +
      '<span class="mi-qty-num">' + count + '</span>' +
      '<button class="mi-qty-btn">+</button>';
    qtyCtrl.querySelectorAll('.mi-qty-btn')[0].addEventListener('click', () => {
      const idx = cart.findLastIndex ? cart.findLastIndex(c => c.name === name)
                                     : [...cart].map((c,i)=>[c,i]).filter(([c])=>c.name===name).pop()?.[1];
      if (idx !== undefined && idx !== -1) cart.splice(idx, 1);
      updateCartBar();
      updateOptRowQty(row, name, price, emoji);
    });
    qtyCtrl.querySelectorAll('.mi-qty-btn')[1].addEventListener('click', () => {
      addToCart(name, price, emoji, null);
      updateOptRowQty(row, name, price, emoji);
    });
    oldBtn.replaceWith(qtyCtrl);
  }
}

function isLunchHours() { return true; }

function switchTab(el, tab) {
  if (tab === 'lunch' && !isLunchHours()) { showLunchClosedPopup(); return; }
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  buildMenu(tab);
  const notice = document.getElementById('lunch-notice');
  if (notice) notice.style.display = tab === 'lunch' ? 'block' : 'none';
}

function showLunchClosedPopup() {
  const now = new Date();
  const day = now.getDay();
  const isWeekend = day === 0 || day === 6;
  const msg = isWeekend
    ? 'Lunch is served Monday–Friday only.\n\nWe\'re open for dinner tonight!'
    : 'Lunch is served 11:00 AM – 2:00 PM,\nMonday through Friday.\n\nPlease check back during lunch hours!';
  document.getElementById('lunch-closed-msg').textContent = msg;
  const popup = document.getElementById('lunch-closed-popup');
  if (popup) popup.style.display = 'flex';
}

function addToCart(name, price, emoji, btn) {
  cart.push({ name, price, emoji });
  if (btn) {
    const count = cart.filter(c => c.name === name).length;
    btn.classList.add('added');
    btn.textContent = '✓ ' + count;
  }
  updateCartBar();
}

function prefillReservationForm() {
  const user    = getUser();
  const profile = loadProfile();
  const name    = (user ? (user.firstName + ' ' + user.lastName).trim() : '') || (profile.firstName + ' ' + profile.lastName).trim();
  const phone   = user?.phone || profile.phone || '';
  const email   = user?.email || profile.email || '';
  const nameEl  = document.getElementById('res-name');
  const phoneEl = document.getElementById('res-phone');
  const emailEl = document.getElementById('res-email');
  if (nameEl && !nameEl.value)   nameEl.value  = name;
  if (phoneEl && !phoneEl.value) phoneEl.value = phone;
  if (emailEl && !emailEl.value) emailEl.value = email;
}

// ─────────────────────────────────
// PROFILE
// ─────────────────────────────────
const PROFILE_KEY = 'prb_profile';

function loadProfile() {
  try { return JSON.parse(localStorage.getItem(PROFILE_KEY)) || {}; }
  catch(e) { return {}; }
}

function saveProfile() {
  const profile = {
    firstName: document.getElementById('pf-firstname').value.trim(),
    lastName:  document.getElementById('pf-lastname').value.trim(),
    email:     document.getElementById('pf-email').value.trim(),
    phone:     document.getElementById('pf-phone').value.trim(),
    address:   document.getElementById('pf-address').value.trim(),
    city:      document.getElementById('pf-city').value.trim(),
    state:     document.getElementById('pf-state').value.trim(),
    zip:       document.getElementById('pf-zip').value.trim(),
  };
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  const user = JSON.parse(localStorage.getItem('prb_user') || '{}');
  user.firstName = profile.firstName;
  user.lastName  = profile.lastName;
  user.email     = profile.email;
  user.phone     = profile.phone;
  localStorage.setItem('prb_user', JSON.stringify(user));
  updateProfileUI();
  showToastMsg('✅ Profile saved!');
}

function updateProfileUI() {
  const user    = getUser();
  const profile = loadProfile();
  const data = {
    firstName: profile.firstName || user?.firstName || '',
    lastName:  profile.lastName  || user?.lastName  || '',
    email:     profile.email     || user?.email     || '',
    phone:     profile.phone     || user?.phone     || '',
    address:   profile.address   || '',
    city:      profile.city      || '',
    state:     profile.state     || '',
    zip:       profile.zip       || '',
  };
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
  set('pf-firstname', data.firstName);
  set('pf-lastname',  data.lastName);
  set('pf-email',     data.email);
  set('pf-phone',     data.phone);
  set('pf-address',   data.address);
  set('pf-city',      data.city);
  set('pf-state',     data.state);
  set('pf-zip',       data.zip);
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(' ');
  const avatarEl = document.getElementById('profile-avatar');
  const nameEl   = document.getElementById('profile-name-display');
  const emailEl  = document.getElementById('profile-email-display');
  if (avatarEl) avatarEl.textContent = fullName ? fullName.slice(0,1).toUpperCase() : '👤';
  if (nameEl)   nameEl.textContent   = fullName || 'Guest';
  if (emailEl)  emailEl.textContent  = data.email || 'Not signed in';
}

function signOutAndClear() {
  localStorage.removeItem('prb_user');
  updateAuthUI();
  goTo('home');
  showToastMsg('Signed out');
}

function showToastMsg(msg) {
  let t = document.getElementById('app-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'app-toast';
    t.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:var(--ink);color:var(--gold);padding:10px 20px;border-radius:20px;font-size:13px;z-index:9999;transition:opacity 0.3s;';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  setTimeout(() => { t.style.opacity = '0'; }, 2500);
}

// ─────────────────────────────────
// PICKUP TIME
// ─────────────────────────────────
const PICKUP_KEY = 'prb_pickup_settings';
let selectedPickupTime = null;

function getPickupSettings() {
  try { return JSON.parse(localStorage.getItem(PICKUP_KEY)) || { prepTime:30, allowSchedule:true, maxAdvance:4, open:'11:30', close:'21:00' }; }
  catch(e) { return { prepTime:30, allowSchedule:true, maxAdvance:4, open:'11:30', close:'21:00' }; }
}

function buildPickupSlots() {
  const container = document.getElementById('pickup-time-slots');
  if (!container) return;
  container.innerHTML = '';
  const s = getPickupSettings();
  const now = new Date();
  const prepMs = s.prepTime * 60 * 1000;
  const earliest = new Date(now.getTime() + prepMs);
  earliest.setMinutes(Math.ceil(earliest.getMinutes() / 15) * 15, 0, 0);
  const [closeH, closeM] = (s.close || '21:00').split(':').map(Number);
  const closeTime = new Date(now);
  closeTime.setHours(closeH, closeM, 0, 0);
  const wrap = document.createElement('div');
  wrap.style.cssText = 'position:relative;';
  const select = document.createElement('select');
  select.id = 'pickup-time-select';
  select.className = 'form-input';
  select.style.cssText = 'width:100%;appearance:none;-webkit-appearance:none;padding-right:36px;cursor:pointer;';
  const asapOpt = document.createElement('option');
  asapOpt.value = 'ASAP (~' + s.prepTime + ' min)';
  asapOpt.textContent = '⚡ ASAP (~' + s.prepTime + ' min)';
  select.appendChild(asapOpt);
  if (s.allowSchedule !== false) {
    const maxMs = (s.maxAdvance || 4) * 60 * 60 * 1000;
    let t = new Date(earliest.getTime() + 15 * 60 * 1000);
    while (t <= closeTime && t.getTime() - now.getTime() <= maxMs) {
      const opt = document.createElement('option');
      const label = t.toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' });
      opt.value = label;
      opt.textContent = '🕐 ' + label;
      select.appendChild(opt);
      t = new Date(t.getTime() + 15 * 60 * 1000);
    }
  }
  select.addEventListener('change', () => { selectedPickupTime = { label: select.value }; });
  const arrow = document.createElement('div');
  arrow.style.cssText = 'position:absolute;right:12px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--gold);font-size:14px;';
  arrow.textContent = '▾';
  wrap.appendChild(select);
  wrap.appendChild(arrow);
  container.appendChild(wrap);
  selectedPickupTime = { label: asapOpt.value };
}

// ─────────────────────────────────
// RESERVATION
// ─────────────────────────────────
function buildDates() {
  const grid = document.getElementById('date-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const today = new Date();
  for (let i = 0; i < 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const cell = document.createElement('div');
    cell.className = 'date-cell' + (i === 0 ? ' selected' : '');
    cell.dataset.date = d.toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
    cell.innerHTML =
      '<div class="dc-day">' + d.toLocaleDateString('en-US',{weekday:'short'}) + '</div>' +
      '<div class="dc-num">' + d.getDate() + '</div>' +
      '<div class="dc-mon">' + d.toLocaleDateString('en-US',{month:'short'}) + '</div>';
    cell.addEventListener('click', function() {
      document.querySelectorAll('.date-cell').forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
    });
    grid.appendChild(cell);
  }
  buildTimeSlots();
}

function buildTimeSlots() {
  const grid = document.getElementById('time-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const slots = [];
  // Lunch: 11:30 AM – 1:30 PM
  for (let h = 11; h <= 13; h++) {
    for (let m = 0; m < 60; m += 15) {
      if (h === 11 && m < 30) continue;
      if (h === 13 && m > 30) continue;
      slots.push({ h, m, period: 'Lunch' });
    }
  }
  // Dinner: 5:00 PM – 8:30 PM
  for (let h = 17; h <= 20; h++) {
    for (let m = 0; m < 60; m += 15) {
      if (h === 20 && m > 30) continue;
      slots.push({ h, m, period: 'Dinner' });
    }
  }
  let lastPeriod = '';
  let firstChip = true;
  slots.forEach(slot => {
    if (slot.period !== lastPeriod) {
      const header = document.createElement('div');
      header.style.cssText = 'width:100%;font-size:11px;color:var(--muted);letter-spacing:0.08em;text-transform:uppercase;padding:8px 0 4px;flex-basis:100%;';
      header.textContent = slot.period;
      grid.appendChild(header);
      lastPeriod = slot.period;
    }
    const d = new Date();
    d.setHours(slot.h, slot.m);
    const label = d.toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' });
    const chip = document.createElement('div');
    chip.className = 'time-chip' + (firstChip ? ' selected' : '');
    chip.textContent = label;
    chip.addEventListener('click', function() {
      document.querySelectorAll('.time-chip').forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
    });
    grid.appendChild(chip);
    firstChip = false;
  });
}

async function confirmReservation() {
  const user    = getUser();
  const profile = loadProfile();
  const dateEl  = document.querySelector('.date-cell.selected');
  const timeEl  = document.querySelector('.time-chip.selected');
  const guests  = document.getElementById('guest-count')?.textContent || '2';
  const special = document.getElementById('res-special')?.value || '';
  const userFullName = user ? [user.firstName, user.lastName].filter(s => s && s !== 'undefined').join(' ').trim() : '';
  const profileFullName = [profile?.firstName, profile?.lastName].filter(s => s && s !== 'undefined').join(' ').trim();
  const resNameInput = document.getElementById('res-name')?.value.trim() || '';
  const resName = resNameInput || userFullName || profileFullName || '';
  if (!resName) { alert('Please enter your name'); return; }
  const resPhone = document.getElementById('res-phone')?.value.trim() || user?.phone || (profile.phone !== 'undefined' ? profile.phone : '') || '';
  const resEmail = document.getElementById('res-email')?.value.trim() || user?.email || (profile.email !== 'undefined' ? profile.email : '') || '';
  const reservation = {
    id: Date.now().toString(),
    date: dateEl ? dateEl.dataset.date || dateEl.textContent.trim() : new Date().toLocaleDateString(),
    time: timeEl ? timeEl.textContent.trim() : '6:00 PM',
    guests: parseInt(guests),
    special, name: resName, phone: resPhone, email: resEmail,
    status: 'confirmed', createdAt: Date.now(),
  };
  try {
    const existing = JSON.parse(localStorage.getItem('prb_reservations') || '[]');
    existing.unshift(reservation);
    localStorage.setItem('prb_reservations', JSON.stringify(existing));
    console.log('Reservation saved:', reservation);
  } catch(e) { console.error('Reservation save error:', e); }

  // Award 50 points for reservation
  try {
    const u = getUser();
    if (u) {
      u.points = (u.points || 0) + 50;
      u.pointsLog = u.pointsLog || [];
      u.pointsLog.push({ desc: 'Reservation on ' + reservation.date, pts: 50, date: Date.now() });
      localStorage.setItem(USER_KEY, JSON.stringify(u));
      updateAuthUI();
    }
  } catch(e) {}
  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    import(fbUrl).then(({ saveReservationToFirebase }) => {
      saveReservationToFirebase(reservation).catch(e => console.warn('Reservation save failed:', e));
    });
  } catch(e) {}
  fetch('/api/notify-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      orderItems: [{ name: 'Table for ' + reservation.guests + ' guests', price: 0, emoji: '🗓️' }],
      subtotal: 0, tax: 0, tip: 0, total: 0,
      customer: { name: reservation.name, email: reservation.email, phone: reservation.phone },
      orderId: reservation.id,
      pickupTime: reservation.date + ' at ' + reservation.time,
      isReservation: true, special: reservation.special,
      notifEmails: getNotifEmails(), notifPhones: getNotifPhones(),
      guestSmsConsent: document.getElementById('sms-consent-res')?.checked || false,
    }),
  }).then(r => r.json()).then(d => console.log('Reservation notification sent:', d)).catch(e => console.warn(e));
  showSuccess('reservation');
}

function buildMyReservations() {
  const el = document.getElementById('my-reservations-list');
  if (!el) return;
  let reservations = [];
  try { reservations = JSON.parse(localStorage.getItem('prb_reservations') || '[]'); } catch(e) {}

  if (!reservations.length) {
    el.innerHTML = '<div style="font-size:13px;color:var(--muted);padding:12px 0;text-align:center;">No reservations yet.</div>';
    return;
  }

  el.innerHTML = reservations.map(r => {
    const isUpcoming = new Date(r.createdAt) >= (Date.now() - 86400000 * 1);
    return `<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:14px;padding:16px;margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <div>
          <div style="font-size:14px;font-weight:600;">${r.date}</div>
          <div style="font-size:13px;color:var(--gold);margin-top:2px;">${r.time} · ${r.guests} guests</div>
        </div>
        <div style="font-size:11px;padding:4px 10px;border-radius:20px;background:${isUpcoming ? 'rgba(200,169,110,0.12)' : 'var(--bone)'};color:${isUpcoming ? 'var(--gold)' : 'var(--muted)'};">
          ${isUpcoming ? '✦ Upcoming' : 'Past'}
        </div>
      </div>
      ${r.special ? `<div style="font-size:12px;color:var(--muted);">📝 ${r.special}</div>` : ''}
    </div>`;
  }).join('');
}

function changeGuests(delta) {
  guestCount = Math.max(1, Math.min(20, guestCount + delta));
  const el = document.getElementById('guest-count');
  if (el) el.textContent = guestCount;
}

function selectTime(el) {
  document.querySelectorAll('.time-chip').forEach(t => t.classList.remove('selected'));
  el.classList.add('selected');
}

// ─────────────────────────────────
// TIP
// ─────────────────────────────────
function selectTip(el, pct) {
  document.querySelectorAll('.tip-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  const customWrap = document.getElementById('tip-custom-wrap');
  if (el.id === 'tip-custom-btn') {
    tipPercent = 0; tipCustom = 0;
    if (customWrap) customWrap.style.display = 'flex';
    const inp = document.getElementById('tip-custom-input');
    if (inp) { inp.value = ''; inp.focus(); }
  } else {
    tipPercent = pct; tipCustom = null;
    if (customWrap) customWrap.style.display = 'none';
  }
  buildCheckoutSummary();
}

function setCustomTip(val) { tipCustom = parseFloat(val) || 0; buildCheckoutSummary(); }
function getTipAmount(subtotal) { if (tipCustom !== null) return tipCustom; return subtotal * (tipPercent / 100); }

function selectPM(el) {
  document.querySelectorAll('.pm-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

function togglePoints() {
  const user = getUser();
  const pts = user ? (user.points || 0) : 0;
  const needed = 500; // 500 pts = $5
  if (!usePoints && pts < needed) {
    showToastMsg('⚠️ You need 500 pts ($5) minimum to use points');
    return;
  }
  usePoints = !usePoints;
  const t = document.getElementById('pt-toggle');
  if (t) t.classList.toggle('on', usePoints);
  buildCheckoutSummary();
}

// ─────────────────────────────────
// REWARDS
// ─────────────────────────────────
function buildRewardsScreen() {
  const user = getUser();
  const points = user ? (user.points || 0) : 0;

  const rhPoints = document.getElementById('rh-points');
  const rhSub    = document.getElementById('rh-sub');
  if (rhPoints) rhPoints.textContent = points.toLocaleString();
  if (rhSub)    rhSub.textContent    = user ? points.toLocaleString() + ' pts · $' + (points / 100).toFixed(2) + ' value' : 'Sign in to view your points';

  // Points history
  const history = document.getElementById('points-history');
  if (history && user) {
    const log = user.pointsLog || [];
    if (!log.length) {
      history.innerHTML = '<div style="padding:20px;text-align:center;color:var(--muted);font-size:13px;">No activity yet. Place an order to earn points!</div>';
    } else {
      history.innerHTML = log.slice().reverse().map(entry =>
        '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid var(--border);">' +
          '<div>' +
            '<div style="font-size:13px;font-weight:500;">' + entry.desc + '</div>' +
            '<div style="font-size:11px;color:var(--muted);">' + new Date(entry.date).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) + '</div>' +
          '</div>' +
          '<div style="font-size:15px;font-weight:600;color:' + (entry.pts > 0 ? 'var(--gold)' : '#c0392b') + ';">' +
            (entry.pts > 0 ? '+' : '') + entry.pts + ' pts' +
          '</div>' +
        '</div>'
      ).join('');
    }
  }
}

function rateStar(n) { document.querySelectorAll('.star').forEach((s,i) => s.classList.toggle('lit', i < n)); }
function toggleRC(el) { el.classList.toggle('selected'); }

// ─────────────────────────────────
// STRIPE PAYMENT
// ─────────────────────────────────
async function startStripeCheckout() {
  if (cart.length === 0) { alert('Your cart is empty.'); return; }
  const payBtn = document.getElementById('pay-btn');
  if (payBtn) { payBtn.textContent = 'Processing...'; payBtn.disabled = true; }
  const firstName = (document.getElementById('gi-firstname') || {}).value || '';
  const lastName  = (document.getElementById('gi-lastname')  || {}).value || '';
  const email     = (document.getElementById('gi-email')     || {}).value || '';
  const items = cart.map(item => ({ name: item.name, price: item.price, quantity: 1 }));
  const subtotal    = cart.reduce((s, i) => s + i.price, 0);
  const platformFee = 1.00;
  const tax         = subtotal * 0.089;
  const tip         = getTipAmount(subtotal);
  const userPts     = getUser()?.points || 0;
  const maxDisc     = Math.floor(userPts / 500) * 5;
  const discount    = usePoints ? Math.min(maxDisc, subtotal) : 0;
  const total       = Math.max(subtotal + platformFee + tax + tip - discount, 0.50);
  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items, customerEmail: email, customerName: (firstName + ' ' + lastName).trim(), usePoints, tip }),
    });
    const data = await res.json();
    if (data.url) {
      const smsConsent = document.getElementById('sms-consent')?.checked || false;
      const specialRequest = document.getElementById('checkout-special-request')?.value.trim() || '';
      localStorage.setItem('prb_pending_order', JSON.stringify({
        orderItems: cart.map(i => ({ name: i.name, price: i.price, emoji: i.emoji })),
        subtotal, tax, tip, total,
        pickupTime: selectedPickupTime ? selectedPickupTime.label : 'ASAP',
        customer: { name: (firstName + ' ' + lastName).trim(), email, phone: (document.getElementById('gi-phone') || {}).value || '' },
        orderId: Date.now().toString().slice(-6),
        smsConsent,
        specialRequest,
      }));
      window.location.href = data.url;
    } else { throw new Error(data.error || 'Failed to create checkout session'); }
  } catch (err) {
    console.error('Payment error:', err);
    alert('Payment error: ' + err.message);
    if (payBtn) { payBtn.textContent = 'Pay $' + total.toFixed(2); payBtn.disabled = false; }
  }
}

function checkPaymentResult() {

  const params = new URLSearchParams(window.location.search);
  if (params.get('payment') === 'success') {
    cart = [];
    history.replaceState({}, '', '/');
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('success-screen').classList.add('active');
    document.getElementById('bottom-nav').style.display = 'none';
    document.getElementById('success-icon').textContent  = '✅';
    document.getElementById('success-title').textContent = 'Payment Complete!';
    document.getElementById('success-msg').textContent   = 'Thank you for your order!\nWe will have it ready soon.';
    document.getElementById('earned-pts').textContent    = '+pts earned';
    const pendingOrder = localStorage.getItem('prb_pending_order');
    if (pendingOrder) {
      try {
        const orderData = JSON.parse(pendingOrder);
        if (orderData.pickupTime) {
          document.getElementById('success-msg').textContent = 'Thank you for your order!\n🕐 Pickup ready: ' + orderData.pickupTime;
        }
        fetch('/api/notify-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({...orderData, notifEmails: getNotifEmails(), notifPhones: getNotifPhones(), guestSmsConsent: orderData.smsConsent, specialRequest: orderData.specialRequest || ''}),
        }).then(r => r.json()).then(d => console.log('Notification sent:', d)).catch(e => console.warn(e));
        const fbUrl = window.location.origin + '/js/firebase-menu.js';
        import(fbUrl).then(({ saveOrderToFirebase }) => {
          saveOrderToFirebase(orderData).catch(e => console.warn('Order save failed:', e));
        }).catch(e => console.warn('Firebase import failed:', e));

        localStorage.removeItem('prb_pending_order');
      } catch(e) {}
    }
  } else if (params.get('payment') === 'cancel') {
    history.replaceState({}, '', '/');
  }
}

function showSuccess(type) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('success-screen').classList.add('active');
  document.getElementById('bottom-nav').style.display = 'none';
  const total = cart.reduce((s,i) => s+i.price, 0);
  const tax   = total * 0.08;
  const finalTotal = (total + tax - (usePoints ? 5 : 0)).toFixed(2);
  const configs = {
    reservation: { icon:'🎋', title:'Reservation Confirmed!',  msg:'Your table has been reserved.\nA confirmation will be sent to you.', pts:'+50 pts' },
    payment:     { icon:'✅', title:'Payment Complete!',        msg:'$' + finalTotal + ' has been processed.\nThank you for dining with us!', pts:'+' + Math.round(total) + ' pts' },
    review:      { icon:'🌟', title:'Thanks for your Review!', msg:'Your feedback means a lot to us.', pts:'+30 pts' },
  };
  const c = configs[type] || configs.payment;
  document.getElementById('success-icon').textContent  = c.icon;
  document.getElementById('success-title').textContent = c.title;
  document.getElementById('success-msg').textContent   = c.msg;
  document.getElementById('earned-pts').textContent    = c.pts;
  if (type === 'payment') { cart = []; }
}

// ─────────────────────────────────
// MULTI-SELECT MODAL
// ─────────────────────────────────
let _msItem = null;
let _msSelections = {};

function openMultiSelectModal(item) {
  _msItem = item;
  _msSelections = {};
  item.multiSelect.forEach((_, i) => _msSelections[i] = []);
  const modal = document.getElementById('ms-modal');
  document.getElementById('ms-modal-title').textContent = item.e + ' ' + item.n;
  document.getElementById('ms-modal-price').textContent = '$' + item.p.toFixed(2);
  const body = document.getElementById('ms-modal-body');
  body.innerHTML = '';
  item.multiSelect.forEach((group, gi) => {
    const section = document.createElement('div');
    section.style.cssText = 'margin-bottom:20px;';
    section.innerHTML = '<div style="font-size:12px;font-weight:600;color:var(--ink);margin-bottom:4px;">' + group.label +
      '<span style="font-size:11px;color:var(--muted);font-weight:400;"> · Choose up to ' + group.max + ' · ' + (group.required ? 'Required' : 'Optional') + '</span></div>';
    group.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'ms-choice-btn';
      btn.textContent = choice;
      btn.dataset.group = gi;
      btn.dataset.choice = choice;
      btn.addEventListener('click', function() {
        const sel = _msSelections[gi];
        if (this.classList.contains('selected')) {
          this.classList.remove('selected');
          _msSelections[gi] = sel.filter(s => s !== choice);
        } else {
          if (sel.length >= group.max) {
            if (group.max === 1) {
              body.querySelectorAll('.ms-choice-btn[data-group="' + gi + '"].selected').forEach(b => b.classList.remove('selected'));
              _msSelections[gi] = [];
            } else { return; }
          }
          this.classList.add('selected');
          _msSelections[gi] = [..._msSelections[gi], choice];
        }
        updateMsAddBtn();
      });
      section.appendChild(btn);
    });
    body.appendChild(section);
  });
  updateMsAddBtn();
  modal.style.display = 'flex';
}

function updateMsAddBtn() {
  const btn = document.getElementById('ms-add-btn');
  const allRequired = _msItem.multiSelect.every((g, i) => !g.required || _msSelections[i].length >= Math.min(g.max, 1));
  btn.disabled = !allRequired;
  btn.style.opacity = allRequired ? '1' : '0.4';
}

function confirmMultiSelect() {
  if (!_msItem) return;
  const parts = _msItem.multiSelect.flatMap((g, i) => _msSelections[i]).filter(Boolean);
  const name = _msItem.n + ' (' + parts.join(', ') + ')';
  addToCart(name, _msItem.p, _msItem.e, null);
  closeMultiSelectModal();
  buildMenu('lunch');
}

function closeMultiSelectModal() {
  document.getElementById('ms-modal').style.display = 'none';
  _msItem = null;
}

// ─────────────────────────────────
// OPTIONS POPUP
// ─────────────────────────────────
function openOptionsPopup(item) {
  const popup = document.getElementById('options-popup');
  document.getElementById('options-popup-title').textContent = item.e + ' ' + item.n;
  document.getElementById('options-popup-desc').textContent  = item.d;
  const list = document.getElementById('options-popup-list');
  list.innerHTML = '';
  item.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = '<span class="option-name">' + opt.n + '</span><span class="option-price">$' + opt.p.toFixed(2) + '</span>';
    btn.addEventListener('click', () => {
      addToCart(item.n + ' — ' + opt.n, opt.p, item.e, null);
      closeOptionsPopup();
      buildMenu(document.querySelector('.menu-tab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1] || 'entrees');
    });
    list.appendChild(btn);
  });
  popup.style.display = 'flex';
}

function closeOptionsPopup() { document.getElementById('options-popup').style.display = 'none'; }

// ─────────────────────────────────
// MENU STORAGE INIT
// ─────────────────────────────────
function initMenuStorage() {
  localStorage.removeItem('prb_menu_data');
  localStorage.removeItem('prb_menu_version');
}

// ─────────────────────────────────
// TODAY'S PICKS
// ─────────────────────────────────
const PICKS_KEY = 'prb_picks';

function getDefaultPicks() {
  return [
    { name:'Tuna Tataki', emoji:'🐟', label:"Chef's Special", origPrice:14, salePrice:null },
    { name:'Miso Soup',   emoji:'🍵', label:'Guest Favorite',  origPrice:5,  salePrice:null },
  ];
}

function loadTodaysPicks() {
  let picks;
  try {
    const raw = localStorage.getItem(PICKS_KEY);
    picks = raw ? JSON.parse(raw) : null;
    if (!picks || !Array.isArray(picks) || picks.length === 0) picks = getDefaultPicks();
  } catch(e) { picks = getDefaultPicks(); }

  const container = document.getElementById('todays-picks-container');
  if (!container) return;
  container.innerHTML = '';

  picks.forEach(pick => {
    const hasDiscount = pick.salePrice !== null && pick.salePrice !== undefined && pick.salePrice < pick.origPrice;
    const div = document.createElement('div');
    div.className = 'featured-item';
    div.style.cursor = 'pointer';
    div.innerHTML =
      '<div>' +
        '<div class="fi-label">' + pick.label + '</div>' +
        '<div class="fi-name">' + pick.name + '</div>' +
        (hasDiscount
          ? '<div class="fi-price"><span class="fi-orig-price">$' + pick.origPrice.toFixed(2) + '</span> <span class="fi-sale-price">$' + pick.salePrice.toFixed(2) + '</span></div>'
          : '<div class="fi-price">$' + pick.origPrice.toFixed(2) + '</div>'
        ) +
      '</div>' +
      '<div class="fi-emoji">' + pick.emoji + '</div>';

    // Click → add to cart and go to checkout
    div.addEventListener('click', () => {
      addToCart(pick.name, pick.salePrice || pick.origPrice, pick.emoji, null);
      goTo('order');
      setTimeout(() => goToCheckout(), 300);
    });

    container.appendChild(div);
  });
}

// ─────────────────────────────────
// INIT
// ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initMenuStorage();
  buildMenu('appetizers');
  updateAuthUI();
  checkPaymentResult();
  loadTodaysPicks();

  const tabs = document.querySelector('.menu-tabs');
  if (tabs) {
    let isDown = false, startX, scrollLeft;
    tabs.addEventListener('mousedown', e => {
      isDown = true;
      startX = e.pageX - tabs.getBoundingClientRect().left;
      scrollLeft = tabs.scrollLeft;
      tabs.style.cursor = 'grabbing';
      tabs.style.userSelect = 'none';
      e.preventDefault();
    });
    document.addEventListener('mouseup', () => {
      isDown = false;
      tabs.style.cursor = 'grab';
      tabs.style.userSelect = '';
    });
    document.addEventListener('mousemove', e => {
      if (!isDown) return;
      const x = e.pageX - tabs.getBoundingClientRect().left;
      const walk = (x - startX) * 1.5;
      tabs.scrollLeft = scrollLeft - walk;
    });
  }
});

// ─────────────────────────────────
// ORDER HISTORY
// ─────────────────────────────────
function showOrderHistory() {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-order-history').classList.add('active');
  document.getElementById('bottom-nav').style.display = 'none';
  loadOrderHistory();
}

async function loadOrderHistory() {
  const list = document.getElementById('order-history-list');
  if (!list) return;
  list.innerHTML = '<div style="text-align:center;color:var(--muted);padding:40px;">Loading...</div>';
  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    const { loadOrdersFromFirebase } = await import(fbUrl);
    const user = getUser();
    if (!user?.email) {
      list.innerHTML = '<div style="text-align:center;padding:40px;"><div style="font-size:40px;margin-bottom:12px;">👤</div><div style="font-family:\'Cormorant Garamond\',serif;font-size:20px;margin-bottom:8px;">Sign in to view history</div><div style="font-size:13px;color:var(--muted);">Your past orders will appear here after signing in.</div></div>';
      return;
    }
    const allOrders = await loadOrdersFromFirebase(200);
    const myOrders  = allOrders.filter(o => o.customer?.email === user.email);
    if (!myOrders.length) {
      list.innerHTML = '<div style="text-align:center;padding:40px;"><div style="font-size:40px;margin-bottom:12px;">🍣</div><div style="font-family:\'Cormorant Garamond\',serif;font-size:20px;margin-bottom:8px;">No orders yet</div><div style="font-size:13px;color:var(--muted);">Your order history will appear here.</div></div>';
      return;
    }
    list.innerHTML = '';
    myOrders.forEach(order => {
      const date = new Date(order.createdAt).toLocaleString('en-US', { month:'short', day:'numeric', year:'numeric', hour:'numeric', minute:'2-digit' });
      const items = order.orderItems || [];
      const card  = document.createElement('div');
      card.style.cssText = 'border:1px solid var(--border);border-radius:14px;padding:16px;background:var(--warm-white);';
      card.innerHTML =
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">' +
          '<div>' +
            '<div style="font-size:12px;color:var(--muted);">' + date + '</div>' +
            '<div style="font-size:12px;color:var(--gold);margin-top:2px;">📦 ' + (order.pickupTime||'ASAP') + ' · #' + (order.orderId||'—') + '</div>' +
          '</div>' +
          '<div style="font-family:\'Cormorant Garamond\',serif;font-size:22px;font-weight:600;color:var(--gold);">$' + (order.total||0).toFixed(2) + '</div>' +
        '</div>' +
        '<div style="margin-bottom:12px;border-radius:8px;overflow:hidden;border:1px solid var(--border);">' +
          items.map((it,i) =>
            '<div style="padding:8px 12px;font-size:13px;display:flex;justify-content:space-between;align-items:center;' + (i<items.length-1?'border-bottom:1px solid var(--border);':'') + 'background:var(--bone);">' +
              '<span>' + (it.emoji||'🍽️') + ' ' + it.name + '</span>' +
              '<span style="color:var(--muted);font-size:12px;">$' + it.price.toFixed(2) + '</span>' +
            '</div>'
          ).join('') +
        '</div>' +
        '<button onclick=\'reorder(' + JSON.stringify(items) + ')\'' +
          ' style="width:100%;padding:13px;background:var(--ink);color:var(--gold);border:none;border-radius:10px;font-family:\'DM Sans\',sans-serif;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;">' +
          '🔄 Reorder' +
        '</button>';
      list.appendChild(card);
    });
  } catch(e) {
    list.innerHTML = '<div style="text-align:center;color:var(--muted);padding:40px;">Could not load order history.</div>';
  }
}

function reorder(items) {
  items.forEach(item => { addToCart(item.name, item.price, item.emoji || '🍽️', null); });
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-order').classList.add('active');
  document.getElementById('bottom-nav').style.display = 'flex';
  setTimeout(() => goToCheckout(), 200);
}

function getNotifEmails() {
  try {
    const s = JSON.parse(localStorage.getItem('prb_notif_settings') || '{}');
    return s.emails && s.emails.length ? s.emails : ['yshahn@gmail.com', 'pacificrimbistro@gmail.com'];
  } catch(e) { return ['yshahn@gmail.com', 'pacificrimbistro@gmail.com']; }
}

function getNotifPhones() {
  try {
    const s = JSON.parse(localStorage.getItem('prb_notif_settings') || '{}');
    return s.phones && s.phones.length ? s.phones : ['7705008420', '6788629389'];
  } catch(e) { return ['7705008420', '6788629389']; }
}

