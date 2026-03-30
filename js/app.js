// ── MENU DATA (Pacific Rim Bistro — Official Menu)
const IMG = 'https://static.spotapps.co/spots/';
const menuData = {
  lunch: [
    // ── LUNCH SPECIALS (served w/ Miso Soup or Ginger Salad)
    { e:'🍱', n:'Special Roll Combination',       d:'Choose 1 Special Roll & 1 Appetizer · w/ Miso Soup or Ginger Salad', p:19.50, img:IMG+'6e/a7c6b20e0744248b539d357183e0ef/medium' },
    { e:'🍣', n:'Sushi Roll Combination',          d:'Choose any 2 House Roll · w/ Miso Soup or Ginger Salad',            p:16.50, img:null },
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
    // ── NIGIRI SUSHI
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
    // ── SASHIMI
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
    { e:'🌿', n:'Spicy Basil',       d:'Stir fried w/ red onion, bell peppers, Thai basil',      p:22, img:IMG+'02/9f23f4e30542bd9cee0b177e2df87b/medium',
      options:[{n:'Chicken',p:22},{n:'Shrimp',p:24},{n:'Tofu',p:20},{n:'Vegetable',p:20}] },
    { e:'🍜', n:'Pad Thai',          d:'Rice noodles, egg, tamarind sauce, peanuts',              p:20, img:null,
      options:[{n:'Chicken',p:20},{n:'Shrimp',p:22},{n:'Tofu',p:18}] },
    { e:'🍛', n:'Panang Curry',      d:'Red & green bell peppers, asparagus, Thai basil',         p:22, img:null,
      options:[{n:'Chicken',p:22},{n:'Shrimp',p:24},{n:'Tofu',p:20},{n:'Vegetable',p:20}] },
    { e:'🍛', n:'Thai Yellow Curry', d:'Potatoes, carrot, cashew nut, cucumber pickle',           p:22, img:IMG+'de/1f1b7af5d041faaa101ef30d17df03/medium',
      options:[{n:'Chicken',p:22},{n:'Shrimp',p:24},{n:'Tofu',p:20},{n:'Vegetable',p:20}] },
    { e:'🍚', n:'Fried Rice',        d:'Wok fried rice, egg, vegetables',                         p:18, img:IMG+'f9/a2fd50a52c41a09a925a6432ae875d/medium',
      options:[{n:'Vegetable',p:16},{n:'Chicken',p:18},{n:'Shrimp',p:20},{n:'House',p:22}] },
    { e:'🦐', n:'Wanchi Shrimp',          d:'Crispy shrimp, candied walnuts, honey lemon aioli',      p:26, img:IMG+'96/5948743df54c53bf4c721be7e8201f/medium' },
    { e:'🍗', n:'Grilled Teriyaki Chicken',d:'Homemade teriyaki sauce, vegetable medley, steamed rice',p:23, img:IMG+'62/7c1d78736a46c09244f755ddb1d5ef/medium' },
    { e:'🍗', n:'Grilled Bangkok Chicken',d:'Lemongrass, ginger & honey marinade, sweet chili sauce', p:23, img:IMG+'b8/8cef530dec4752a2047ac9be284efe/medium' },
    { e:'🦐', n:'Grilled Shrimp & Veggies',d:'Zucchini, bell pepper, asparagus, miso aioli',         p:26, img:IMG+'2c/66fb80e5d34ed59f9eac0f6eb453fd/medium' },
    { e:'🐟', n:'Grilled Teriyaki Salmon',d:'Salmon w/ vegetable medley, teriyaki, mashed potatoes',  p:30, img:IMG+'d3/6ced2d1ddc4c84bb599d31fff9296f/medium' },
    { e:'🥑', n:'Shrimp & Scallop Curry', d:'Green avocado curry, asparagus, bell peppers, basil',   p:35, img:IMG+'cc/53b8ab220540f398ad7bfe24e9b2dd/medium' },
    { e:'🥩', n:'Spicy Seven Flavor Beef',d:'Tender beef in seven spices, Thai basil, peanuts',       p:26, img:null },
  ],
  rolls: [
    { e:'🍣', n:'California Roll',        d:'Crabmeat salad, avocado, cucumber',                      p:10, img:IMG+'dd/d3c4601a0246d1b961c683225dac52/medium' },
    { e:'🍣', n:'Spicy Crab Roll',        d:'Crabmeat salad, avocado, cucumber w/ spicy sauce',       p:10, img:null },
    { e:'🍣', n:'Spicy Tuna Roll',        d:'Spicy tuna, cucumber',                                   p:12, img:null },
    { e:'🍣', n:'Philadelphia Roll',      d:'Smoked salmon, cream cheese, avocado',                   p:12, img:null },
    { e:'🍣', n:'Eel Roll',               d:'Eel, avocado, cucumber',                                 p:12, img:null },
    { e:'🍣', n:'Shrimp Tempura Roll',    d:'Shrimp tempura, avocado w/ eel sauce',                   p:12, img:IMG+'15/b5750194f843e39fcd1f43c685dbdf/medium' },
    { e:'🍣', n:'Alaska Roll',            d:'Salmon, cream cheese, avocado',                          p:12, img:null },
    { e:'🍣', n:'TNT Roll',               d:'Assorted sashimi mix with wasabi mayo',                  p:12, img:null },
    { e:'🥦', n:'Vegetable Roll',         d:'Avocado, asparagus, cucumber, pickled daikon',            p:9,  img:null },
    { e:'🍣', n:'Rainbow Roll',           d:'Assorted sashimi over California roll',                  p:14, img:IMG+'33/5073ffd23341bdbb4d03b7c4ed9f04/medium' },
    { e:'🍣', n:'Dragon Roll',            d:'Eel, cucumber, avocado on top',                          p:16, img:IMG+'7f/03274fd9cc4b849179b85bc37d7228/medium' },
    { e:'🍣', n:'Volcano Roll',           d:'Baked spicy seafood on top of California roll',          p:16, img:IMG+'c7/12bd646cff4052ad7cf5878c2bac4c/medium' },
    { e:'🍣', n:'Spider Roll',            d:'Soft shell crab, avocado, cucumber',                     p:16, img:IMG+'61/49b264f1ce436582cbfb6d231f24b0/medium' },
    { e:'🍣', n:'Lobster Tempura Roll',   d:'Lobster tempura, avocado, spicy mayo',                   p:18, img:IMG+'44/b12fbcd2c94fa4baaa9bdf1f31c144/medium' },
    { e:'🍣', n:'Mango Crunch Roll',      d:'Mango, crunchy topping, sweet sauce',                    p:14, img:IMG+'df/93b5fede0f445aa354e3cd7064b02b/medium' },
    { e:'🍣', n:'Fire Bomber Roll',       d:'Spicy tuna, jalapeño, sriracha',                        p:14, img:IMG+'ec/62caa05ac740c288efbe376f55fe5a/medium' },
    { e:'🍣', n:'Super Crunch Roll',      d:'Crispy tempura flakes, spicy mayo',                      p:14, img:IMG+'6b/f24944672f4524a827fded007abff7/medium' },
    { e:'🍣', n:'Atlanta Roll',           d:'House signature roll',                                   p:14, img:IMG+'52/7d63536c954aa29e8de98b95fccd27/medium' },
    { e:'🍣', n:'Ocean\'s Three',         d:'Tuna, salmon, yellowtail combination',                   p:18, img:IMG+'40/5c4be3b4bf442a91dfaf1b9ea4d344/medium' },
    { e:'🍣', n:'Sumo Roll',              d:'Jumbo roll with premium ingredients',                    p:18, img:IMG+'2e/b82ea006644bc8886f0d24a12f3df2/medium' },
    { e:'🍣', n:'King Kamehameha Roll',   d:'King-size premium roll',                                 p:18, img:IMG+'b2/8f1fc872e94402aca5eb993dd19717/medium' },
    { e:'🍣', n:'Snow White Roll',        d:'White fish, light sauce, elegant presentation',          p:16, img:IMG+'c3/64d9dede574596b6a6c98bc1d5f011/medium' },
    { e:'🍣', n:'Caterpillar Roll',       d:'Eel, avocado on top, eel sauce',                        p:16, img:IMG+'bf/d0174fab004d069673b27e57c5794f/medium' },
  ],
};

// ── CART STATE
let cart = []; // [{name, price, emoji}]
let guestCount = 2;
let usePoints = false;
let tipPercent = 20;   // default 20%
let tipCustom  = null; // null = use percent, number = custom $

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
  if (!signInBtn) return;

  if (user) {
    signInBtn.textContent = 'Sign Out';
    signInBtn.removeAttribute('href');
    signInBtn.onclick = (e) => { e.preventDefault(); signOut(); };
    if (greetEl) {
      greetEl.textContent = 'Welcome back, ' + user.firstName + '!';
      greetEl.style.cssText = 'color:#fff;font-size:13px;opacity:1;font-weight:500;';
    }
    if (ptsEl && user.points) {
      ptsEl.textContent = user.points.toLocaleString();
      if (ptsSubEl) ptsSubEl.textContent = (1500 - user.points) + ' pts until next reward';
    }
    // Update points toggle label
    const ptLabel = document.getElementById('pt-label');
    if (ptLabel && user.points) ptLabel.textContent = 'Use Points (' + user.points.toLocaleString() + ' available)';
  } else {
    signInBtn.textContent = 'Sign In';
    signInBtn.href = 'login.html';
    signInBtn.onclick = null;
    if (greetEl) {
      greetEl.textContent = 'Welcome back';
      greetEl.style.cssText = 'color:#fff;opacity:0.9;';
    }
  }
}

// Auto-fill checkout with user info
function fillUserInfo() {
  const user = getUser();
  const fnEl    = document.getElementById('gi-firstname');
  const lnEl    = document.getElementById('gi-lastname');
  const phoneEl = document.getElementById('gi-phone');
  const emailEl = document.getElementById('gi-email');
  const badge   = document.getElementById('gi-badge');

  if (user) {
    if (fnEl)    fnEl.value    = user.firstName || '';
    if (lnEl)    lnEl.value    = user.lastName  || '';
    if (phoneEl) phoneEl.value = user.phone      || '';
    if (emailEl) emailEl.value = user.email      || '';
    if (badge)   badge.style.display = 'block';
  } else {
    if (fnEl)    fnEl.value    = '';
    if (lnEl)    lnEl.value    = '';
    if (phoneEl) phoneEl.value = '';
    if (emailEl) emailEl.value = '';
    if (badge)   badge.style.display = 'none';
  }
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
  // Reset tip to 20% default
  tipPercent = 20; tipCustom = null;
  document.querySelectorAll('.tip-btn').forEach(b => b.classList.remove('selected'));
  const def = document.querySelector('.tip-btn[onclick="selectTip(this, 20)"]');
  if (def) def.classList.add('selected');
  const cw = document.getElementById('tip-custom-wrap');
  if (cw) cw.style.display = 'none';
  fillUserInfo();
  buildCheckoutSummary();
  document.getElementById('screen-order').scrollTop = 0;
}

function backToMenu() {
  showMenuStep();
}

function buildCheckoutSummary() {
  // ── Editable cart items
  const editList = document.getElementById('cart-edit-list');
  if (editList) {
    // Group cart items by name
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

  // ── Totals
  const el = document.getElementById('checkout-summary');
  if (!el) return;
  const subtotal    = cart.reduce((s, i) => s + i.price, 0);
  const platformFee = 1.00;
  const tax         = subtotal * 0.089;
  const tip         = getTipAmount(subtotal);
  const discount    = usePoints ? 5 : 0;
  const total       = Math.max(subtotal + platformFee + tax + tip - discount, 0.50);

  // Update tip amount label
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

// Adjust quantity of item in cart
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
  // Update cart bar count
  const total = cart.reduce((s, i) => s + i.price, 0);
  const cc = document.getElementById('cart-count');
  const ct = document.getElementById('cart-total');
  const cb = document.getElementById('cart-bar');
  if (cc) cc.textContent = cart.length + ' item' + (cart.length !== 1 ? 's' : '');
  if (ct) ct.textContent = '$' + total.toFixed(2);
  if (cb) cb.style.display = cart.length > 0 ? 'flex' : 'none';
  // If cart empty go back to menu
  if (cart.length === 0) { backToMenu(); return; }
  buildCheckoutSummary();
}

// Remove all of an item from cart
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

  // Check if Admin has saved a custom menu
  let items = null;
  try {
    const saved = localStorage.getItem('prb_menu_data');
    if (saved) {
      const savedMenu = JSON.parse(saved);
      if (savedMenu[tab]) items = savedMenu[tab];
    }
  } catch(e) {}

  // Fall back to built-in menuData
  if (!items) items = menuData[tab] || [];

  // First section header
  const firstHeaders = {
    nigiri:    'Nigiri Sushi',
    lunch:     '🌞 Lunch Specials · Served w/ Miso Soup or Ginger Salad',
  };
  if (firstHeaders[tab]) {
    const h = document.createElement('div');
    h.className = 'menu-section-header';
    h.textContent = firstHeaders[tab];
    list.appendChild(h);
  }

  items.forEach((item, idx) => {
    // Mid-section headers
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
      : {};
    if (headers[item.n]) {
      const h = document.createElement('div');
      h.className = 'menu-section-header';
      h.textContent = headers[item.n];
      list.appendChild(h);
    }

    const inCart = cart.filter(c => c.name === item.n || c.name.startsWith(item.n + ' — ')).length;
    const div = document.createElement('div');
    div.className = 'menu-item';
    const thumbHtml = item.img
      ? '<img class="mi-thumb" src="' + item.img + '" alt="' + item.n + '" onerror="this.style.display=\'none\'">'
      : '<div class="mi-emoji">' + item.e + '</div>';

    // Price display — show range if options
    const priceDisplay = item.options
      ? '$' + Math.min(...item.options.map(o=>o.p)).toFixed(2) + ' ~'
      : '$' + parseFloat(item.p).toFixed(2);

    div.innerHTML =
      thumbHtml +
      '<div class="mi-info">' +
        '<div class="mi-name">' + item.n + '</div>' +
        '<div class="mi-desc">' + item.d + '</div>' +
        '<div class="mi-price">' + priceDisplay + '</div>' +
      '</div>' +
      '<button class="mi-add' + (inCart ? ' added' : '') + '">' +
        (inCart ? '✓ ' + inCart : '+') +
      '</button>';

    div.querySelector('.mi-add').addEventListener('click', function() {
      if (item.options) {
        openOptionsPopup(item);
      } else {
        addToCart(item.n, parseFloat(item.p), item.e, this);
      }
    });
    list.appendChild(div);
  });
}

function isLunchHours() {
  const now  = new Date();
  const day  = now.getDay(); // 0=Sun, 6=Sat
  const hour = now.getHours();
  const min  = now.getMinutes();
  const time = hour * 60 + min;
  const open  = 11 * 60;      // 11:00 AM
  const close = 14 * 60;      // 2:00 PM
  return day >= 1 && day <= 5 && time >= open && time < close;
}

function switchTab(el, tab) {
  if (tab === 'lunch' && !isLunchHours()) {
    showLunchClosedPopup();
    return;
  }
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  buildMenu(tab);
  const notice = document.getElementById('lunch-notice');
  if (notice) notice.style.display = tab === 'lunch' ? 'block' : 'none';
}

function showLunchClosedPopup() {
  const now  = new Date();
  const day  = now.getDay();
  const isWeekend = day === 0 || day === 6;
  const msg  = isWeekend
    ? 'Lunch is served Monday–Friday only.\n\nWe\'re open for dinner tonight!'
    : 'Lunch is served 11:00 AM – 2:00 PM,\nMonday through Friday.\n\nPlease check back during lunch hours!';

  const popup = document.getElementById('lunch-closed-popup');
  document.getElementById('lunch-closed-msg').textContent = msg;
  if (popup) popup.style.display = 'flex';
}

function addToCart(name, price, emoji, btn) {
  cart.push({ name, price, emoji });

  // Update button
  const count = cart.filter(c => c.name === name).length;
  btn.classList.add('added');
  btn.textContent = '✓ ' + count;

  // Update cart bar
  const total = cart.reduce((s, i) => s + i.price, 0);
  const cc = document.getElementById('cart-count');
  const ct = document.getElementById('cart-total');
  const cb = document.getElementById('cart-bar');
  if (cc) cc.textContent = cart.length + ' item' + (cart.length !== 1 ? 's' : '');
  if (ct) ct.textContent = '$' + total.toFixed(2);
  if (cb) cb.style.display = 'flex';
}

// ─────────────────────────────────
// RESERVATION
// ─────────────────────────────────
function buildDates() {
  const grid = document.getElementById('date-grid');
  if (!grid) return;
  const days = ['Su','Mo','Tu','We','Th','Fr','Sa'];
  const now  = new Date();
  grid.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    const cell = document.createElement('div');
    cell.className = 'date-cell' + (i===0?' today':'') + (i===1?' selected':'');
    cell.innerHTML = '<span class="day-name">' + days[d.getDay()] + '</span>' + d.getDate();
    cell.addEventListener('click', () => {
      document.querySelectorAll('.date-cell').forEach(c => c.classList.remove('selected'));
      cell.classList.add('selected');
    });
    grid.appendChild(cell);
  }
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
    tipPercent = 0;
    tipCustom  = 0;
    if (customWrap) customWrap.style.display = 'flex';
    const inp = document.getElementById('tip-custom-input');
    if (inp) { inp.value = ''; inp.focus(); }
  } else {
    tipPercent = pct;
    tipCustom  = null;
    if (customWrap) customWrap.style.display = 'none';
  }
  buildCheckoutSummary();
}

function setCustomTip(val) {
  tipCustom = parseFloat(val) || 0;
  buildCheckoutSummary();
}

function getTipAmount(subtotal) {
  if (tipCustom !== null) return tipCustom;
  return subtotal * (tipPercent / 100);
}

// ─────────────────────────────────
// PAYMENT
// ─────────────────────────────────
function selectPM(el) {
  document.querySelectorAll('.pm-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

function togglePoints() {
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

  // Update balance
  const rhPoints = document.getElementById('rh-points');
  const rhSub    = document.getElementById('rh-sub');
  const rhTier   = document.getElementById('rh-tier');
  const rpFill   = document.getElementById('rp-fill');

  if (rhPoints) rhPoints.textContent = points.toLocaleString();

  // Tier logic
  let tier, tierIcon, nextTier, nextPts, pct;
  if (points < 500)       { tier='Bronze'; tierIcon='🥉'; nextTier='Silver'; nextPts=500;  pct=Math.min(points/500*25, 25); }
  else if (points < 1000) { tier='Silver'; tierIcon='🥈'; nextTier='Gold';   nextPts=1000; pct=25+Math.min((points-500)/500*25, 25); }
  else if (points < 2000) { tier='Gold';   tierIcon='🥇'; nextTier='Platinum';nextPts=2000;pct=50+Math.min((points-1000)/1000*50, 50); }
  else                    { tier='Platinum';tierIcon='💎'; nextTier=null;    nextPts=null; pct=100; }

  if (rhTier) rhTier.textContent = tierIcon + ' ' + tier + ' Member';
  if (rhSub)  rhSub.textContent  = nextPts ? (nextPts - points) + ' pts until ' + nextTier : 'Maximum tier reached! 🎉';
  if (rpFill) rpFill.style.width = pct + '%';

  // Update active tier highlight
  document.querySelectorAll('.tier-item').forEach(t => t.classList.remove('active-tier'));
  const activeTier = document.querySelector('.tier-item.' + tier.toLowerCase());
  if (activeTier) activeTier.classList.add('active-tier');

  // Build stamps grid (4 filled, 6 empty = 10 total)
  const stampsGrid = document.getElementById('stamps-grid');
  if (stampsGrid) {
    const visits = user ? Math.min(user.visits || 4, 10) : 4;
    stampsGrid.innerHTML = '';
    for (let i = 0; i < 10; i++) {
      const s = document.createElement('div');
      s.className = 'stamp-dot' + (i < visits ? ' filled' : '');
      s.innerHTML = i < visits ? '✦' : '';
      stampsGrid.appendChild(s);
    }
  }

  // Lock/unlock redeem buttons based on points
  document.querySelectorAll('.redeem-item').forEach(item => {
    const costEl = item.querySelector('.redeem-cost');
    const btn    = item.querySelector('.redeem-btn');
    if (!costEl || !btn) return;
    const needed = parseInt(costEl.textContent.replace(/\D/g, ''));
    if (points >= needed) {
      btn.classList.remove('locked');
      btn.textContent = 'Use';
      btn.onclick = () => goTo('order');
    } else {
      btn.classList.add('locked');
      btn.textContent = '🔒';
      btn.onclick = null;
    }
  });
}

// ─────────────────────────────────
// REVIEW
// ─────────────────────────────────
function rateStar(n) {
  document.querySelectorAll('.star').forEach((s,i) => s.classList.toggle('lit', i < n));
}

function toggleRC(el) { el.classList.toggle('selected'); }

// ─────────────────────────────────
// STRIPE PAYMENT
// ─────────────────────────────────
async function startStripeCheckout() {
  if (cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }

  const payBtn = document.getElementById('pay-btn');
  if (payBtn) {
    payBtn.textContent = 'Processing...';
    payBtn.disabled = true;
  }

  const firstName = (document.getElementById('gi-firstname') || {}).value || '';
  const lastName  = (document.getElementById('gi-lastname')  || {}).value || '';
  const email     = (document.getElementById('gi-email')     || {}).value || '';

  // Build items for Stripe
  const items = cart.map(item => ({
    name:  item.name,
    price: item.price,
    quantity: 1,
  }));

  const subtotal = cart.reduce((s, i) => s + i.price, 0);
  const tip = getTipAmount(subtotal);

  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items,
        customerEmail: email,
        customerName:  (firstName + ' ' + lastName).trim(),
        usePoints,
        tip,
      }),
    });

    const data = await res.json();

    if (data.url) {
      // Redirect to Stripe checkout page
      window.location.href = data.url;
    } else {
      throw new Error(data.error || 'Failed to create checkout session');
    }
  } catch (err) {
    console.error('Payment error:', err);
    alert('Payment error: ' + err.message);
    if (payBtn) {
      payBtn.textContent = 'Pay $' + cart.reduce((s,i) => s+i.price, 0).toFixed(2);
      payBtn.disabled = false;
    }
  }
}

// Check for payment result on page load
function checkPaymentResult() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('payment') === 'success') {
    cart = [];
    history.replaceState({}, '', '/');
    // Show success screen
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('success-screen').classList.add('active');
    document.getElementById('bottom-nav').style.display = 'none';
    document.getElementById('success-icon').textContent  = '✅';
    document.getElementById('success-title').textContent = 'Payment Complete!';
    document.getElementById('success-msg').textContent   = 'Thank you for your order!\nWe will have it ready soon.';
    document.getElementById('earned-pts').textContent    = '+pts earned';
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
    payment:     { icon:'✅', title:'Payment Complete!',        msg:'$' + finalTotal + ' has been processed.\nThank you for dining with us!',       pts:'+' + Math.round(total) + ' pts' },
    review:      { icon:'🌟', title:'Thanks for your Review!', msg:'Your feedback means a lot to us.',                                              pts:'+30 pts' },
  };
  const c = configs[type] || configs.payment;
  document.getElementById('success-icon').textContent  = c.icon;
  document.getElementById('success-title').textContent = c.title;
  document.getElementById('success-msg').textContent   = c.msg;
  document.getElementById('earned-pts').textContent    = c.pts;

  // Reset cart after payment
  if (type === 'payment') { cart = []; }
}

// ─────────────────────────────────
// OPTIONS POPUP
// ─────────────────────────────────
function openOptionsPopup(item) {
  const popup = document.getElementById('options-popup');
  const title = document.getElementById('options-popup-title');
  const desc  = document.getElementById('options-popup-desc');
  const list  = document.getElementById('options-popup-list');

  title.textContent = item.e + ' ' + item.n;
  desc.textContent  = item.d;
  list.innerHTML    = '';

  item.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML =
      '<span class="option-name">' + opt.n + '</span>' +
      '<span class="option-price">$' + opt.p.toFixed(2) + '</span>';
    btn.addEventListener('click', () => {
      addToCart(item.n + ' — ' + opt.n, opt.p, item.e, null);
      closeOptionsPopup();
      buildMenu(document.querySelector('.menu-tab.active')
        ?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1] || 'entrees');
    });
    list.appendChild(btn);
  });

  popup.style.display = 'flex';
}

function closeOptionsPopup() {
  document.getElementById('options-popup').style.display = 'none';
}

// ─────────────────────────────────
// MENU STORAGE INIT
// ─────────────────────────────────
function initMenuStorage() {
  // If Admin has saved a custom menu, use it — otherwise save the default
  const existing = localStorage.getItem('prb_menu_data');
  if (!existing) {
    // First time: save built-in menu to localStorage
    const menuByCategory = {};
    Object.entries(menuData).forEach(([cat, items]) => {
      menuByCategory[cat] = items.map(item => ({
        e: item.e, n: item.n, d: item.d || '', p: item.p, img: item.img || null
      }));
    });
    localStorage.setItem('prb_menu_data', JSON.stringify(menuByCategory));
  }
}

// ─────────────────────────────────
// TODAY'S PICKS (from Admin settings)
// ─────────────────────────────────
const PICKS_KEY = 'prb_picks';

function getDefaultPicks() {
  return [
    { name:'Tuna Tataki',  emoji:'🐟', label:"Chef's Special", origPrice:14, salePrice:null },
    { name:'Miso Soup',    emoji:'🍵', label:'Guest Favorite',  origPrice:5,  salePrice:null },
  ];
}

function loadTodaysPicks() {
  let picks;
  try {
    const raw = localStorage.getItem(PICKS_KEY);
    picks = raw ? JSON.parse(raw) : null;
    if (!picks || !Array.isArray(picks) || picks.length === 0) picks = getDefaultPicks();
  } catch(e) {
    picks = getDefaultPicks();
  }

  const container = document.getElementById('todays-picks-container');
  if (!container) return;
  container.innerHTML = '';

  picks.forEach(pick => {
    const hasDiscount = pick.salePrice !== null && pick.salePrice !== undefined && pick.salePrice < pick.origPrice;
    const div = document.createElement('div');
    div.className = 'featured-item';
    div.onclick = () => goTo('order');
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
    container.appendChild(div);
  });
}

// ─────────────────────────────────
// INIT
// ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildDates();
  // Save full menu to localStorage on first load so Admin can read/edit it
  initMenuStorage();
  buildMenu('appetizers');
  updateAuthUI();
  checkPaymentResult();
  loadTodaysPicks();

  // Drag-to-scroll for menu tabs
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
