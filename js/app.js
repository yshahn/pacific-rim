// ── MENU DATA (Pacific Rim Bistro — Official Menu)
const IMG = 'https://static.spotapps.co/spots/';
const menuData = {
  lunch: [
    // ── BENTO SPECIALS
    { e:'🍱', n:'Sweet and Sour Fish', d:'Stir fried crispy tilapia with red bell pepper, yellow onion, and grape tomatoes with sweet & sour sauce · Served with Miso Soup, House Salad, Spring Roll and Steamed Rice', p:18, img:null,},
    { e:'🥩', n:'Black Pepper Beef', d:'Stir fried beef with black, red and green bell pepper, onion and touch of home made brown sauce · Served with Miso Soup, House Salad, Spring Roll and Steamed Rice', p:18, img:null,},
    { e:'🌿', n:'Fresh Ginger Chicken', d:'Stir fried chicken, red onion, carrot, mushroom over ginger sauce · Served with Miso Soup, House Salad, Spring Roll and Steamed Rice', p:17, img:null,},
    { e:'🧄', n:'Garlic Shrimp', d:'Fresh garlic, garlic brown sauce and steamed broccoli · Served with Miso Soup, House Salad, Spring Roll and Steamed Rice', p:18, img:null,},
    { e:'🥩', n:'Mongolian Beef', d:'Sauteed beef, onion, tomatoes, broccoli, mushroom with oyster sauce · Served with Miso Soup, House Salad, Spring Roll and Steamed Rice', p:18, img:null,},
    { e:'🍛', n:'Thai Yellow Curry (Bento)', d:'Potato, carrot, cashew nut, cucumber pickle · Served with Miso Soup, House Salad, Spring Roll and Steamed Rice · Choose your protein', p:18, img:null,
      options:[{n:'Shrimp $18',p:18},{n:'Chicken $17',p:17},{n:'Tofu $16',p:16}] },
    { e:'🥑', n:'Green Avocado Curry (Bento)', d:'Asparagus, bell peppers, basil leaf & avocado · Served with Miso Soup, House Salad, Spring Roll and Steamed Rice · Choose your protein', p:18, img:null,
      options:[{n:'Shrimp $18',p:18},{n:'Chicken $17',p:17},{n:'Tofu $16',p:16}] },
    { e:'🍛', n:'Panang Curry (Bento)', d:'Red and green bell peppers, asparagus, Thai basil leaves · Served with Miso Soup, House Salad, Spring Roll and Steamed Rice · Choose your protein', p:18, img:null,
      options:[{n:'Shrimp $18',p:18},{n:'Chicken $17',p:17},{n:'Tofu $16',p:16}] },
    { e:'🌿', n:'Spicy Thai Basil (Bento)', d:'Bell peppers, onions & Thai basil leaves · Served with Miso Soup, House Salad, Spring Roll and Steamed Rice · Choose your protein', p:18, img:null,
      options:[{n:'Shrimp $18',p:18},{n:'Chicken $17',p:17},{n:'Tofu $16',p:16}] },
    { e:'🥩', n:'Spicy Seven Flavored Beef (Bento)', d:'Strips of tender beef marinated in seven spices, wok tossed with fresh Thai basil leaves topped with crushed roasted peanuts, served over bean sprouts · Served with Miso Soup, House Salad, Spring Roll and Steamed Rice', p:18, img:null,},
    { e:'🍤', n:'Wanchi Shrimp (Bento)', d:'Crispy large shrimp wok tossed with candied walnuts in a honey lemon aioli · Served with Miso Soup, House Salad, Spring Roll and Steamed Rice', p:18, img:null,},
    { e:'🍗', n:'Grilled Teriyaki Chicken (Bento)', d:'Pan grilled chicken breasts w/ homemade teriyaki sauce served w/ vegetables medley · Served with Miso Soup, House Salad, Spring Roll and Steamed Rice', p:17, img:null,},
    { e:'🍗', n:'Grilled Bangkok Chicken (Bento)', d:'Pan grilled chicken breasts marinated w/ lemongrass ginger & honey, w/ homemade sweet chili sauce, served w/ vegetables medley · Served with Miso Soup, House Salad, Spring Roll and Steamed Rice', p:17, img:null,},

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
    { e:'🍣', n:'Sushi Roll Combination - Pick 2', d:'Choose any 2 rolls + 1 Appetizer · w/ Miso Soup or Ginger Salad', p:16.50, img:null,
      multiSelect: [
        { label:'Sushi Rolls (Choose 2)', required:true, max:2, choices:['California Roll', 'Spicy Crab Roll', 'Spicy Tuna Roll', 'Philadelphia Roll', 'Eel Roll', 'Shrimp Tempura Roll', 'Alaska Roll', 'TNT Roll', 'Crunch Shrimp Roll', 'Vegetable Roll', 'Salmon Avocado Roll', 'Tuna Avocado Roll', 'Negi Hamachi Roll (6pcs)', 'Tuna Roll (6pcs)', 'Salmon Roll (6pcs)', 'Avocado Roll (6pcs)', 'Cucumber Roll (6pcs)'] },
        { label:'Appetizer', required:true, max:1, choices:['Edamame', 'Spicy Edamame', 'Fried Pork Gyoza (4pcs)', 'Spring Roll (2pcs)', 'Crispy Coconut Shrimp (4pcs)', 'Spicy Calamari', 'Chicken Satay (2 Skewers)', 'Seaweed Salad', 'Cucumber Kani Salad', 'Ika Sansai', 'Fried Oyster (4pcs)', 'Crab Rangoon (4pcs)'] },
        { label:'Soup or Salad', required:true, max:1, choices:['Miso Soup', 'Ginger Salad', 'No Soup or Salad'] },
      ]
    },
    { e:'🍣', n:'Sushi Roll Combination - Pick 3', d:'Choose any 3 rolls + 1 Appetizer · w/ Miso Soup or Ginger Salad', p:20, img:null,
      multiSelect: [
        { label:'Sushi Rolls (Choose 3)', required:true, max:3, choices:['California Roll', 'Spicy Crab Roll', 'Spicy Tuna Roll', 'Philadelphia Roll', 'Eel Roll', 'Shrimp Tempura Roll', 'Alaska Roll', 'TNT Roll', 'Crunch Shrimp Roll', 'Vegetable Roll', 'Salmon Avocado Roll', 'Tuna Avocado Roll', 'Negi Hamachi Roll (6pcs)', 'Tuna Roll (6pcs)', 'Salmon Roll (6pcs)', 'Avocado Roll (6pcs)', 'Cucumber Roll (6pcs)'] },
        { label:'Appetizer', required:true, max:1, choices:['Edamame', 'Spicy Edamame', 'Fried Pork Gyoza (4pcs)', 'Spring Roll (2pcs)', 'Crispy Coconut Shrimp (4pcs)', 'Spicy Calamari', 'Chicken Satay (2 Skewers)', 'Seaweed Salad', 'Cucumber Kani Salad', 'Ika Sansai', 'Fried Oyster (4pcs)', 'Crab Rangoon (4pcs)'] },
        { label:'Soup or Salad', required:true, max:1, choices:['Miso Soup', 'Ginger Salad', 'No Soup or Salad'] },
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
  sides: [
    { e:'🌶️', n:'Sriracha Sauce',   d:'', p:1.00, img:null },
    { e:'🍯', n:'Sweet Chili Sauce', d:'', p:1.00, img:null },
    { e:'🥢', n:'Eel Sauce',         d:'', p:1.00, img:null },
    { e:'🌶️', n:'Spicy Mayo',        d:'', p:1.00, img:null },
    { e:'🍋', n:'Ponzu Sauce',       d:'', p:1.00, img:null },
    { e:'🍚', n:'Steamed Rice',      d:'', p:3.00, img:null },
    { e:'🍣', n:'Sushi Rice',        d:'', p:3.00, img:null },
    { e:'🌿', n:'Fresh Wasabi',      d:'', p:3.00, img:null },
    { e:'🧄', n:'Yum Yum Sauce',     d:'', p:1.00, img:null },
    { e:'🍗', n:'Teriyaki Sauce',    d:'', p:1.00, img:null },
  ]
};

// ── CART STATE
let cart = [];
let guestCount = 2;
let usePoints = false;
let pickupType = 'instore'; // 'instore' or 'curbside'

function openDoorDash() {
  // DoorDash link - to be updated
  const url = 'https://www.doordash.com/store/pacific-rim-bistro-atlanta-1023076/1530764/?event_type=autocomplete&pickup=false';
  window.open(url, '_blank');
}

function toggleCurbside(checked) {
  pickupType = checked ? 'curbside' : 'instore';
  const info = document.getElementById('curbside-info');
  if (info) info.style.display = checked ? 'block' : 'none';
  if (checked) document.getElementById('car-model')?.focus();
}

function selectPickupType(type) {
  pickupType = type;
  const cb = document.getElementById('curbside-checkbox');
  if (cb) cb.checked = type === 'curbside';
  toggleCurbside(type === 'curbside');
}
let selectedPointsDiscount = 0;
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

async function signOut() {
  localStorage.removeItem(USER_KEY);
  // Also sign out from Firebase Auth
  try {
    const { getAuth, signOut: fbSignOut } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js');
    const auth = getAuth();
    await fbSignOut(auth);
  } catch(e) {}
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
      ptLabel.textContent = 'Redeem Points';
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
function goTo(id, pushState = true) {
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
  if (id === 'home') buildHomeScreen();
  // Android back button support
  if (pushState && id !== 'home') {
    history.pushState({ screen: id }, '', location.pathname + location.search);
  } else if (id === 'home' && pushState) {
    history.replaceState({ screen: 'home' }, '', location.pathname + location.search);
  }
  if (id === 'home') {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    import(fbUrl + '?v=' + Date.now()).then(({ loadPicksFromFirebase }) => {
      loadPicksFromFirebase().then(picks => {
        if (picks) {
          localStorage.setItem('prb_picks', JSON.stringify(picks));
          loadTodaysPicks();
        }
      }).catch(() => {});
    }).catch(() => {});
  }
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
  // Default to Sushi Rolls tab when entering order screen
  const rollsTab = [...document.querySelectorAll('.menu-tab')].find(t => t.getAttribute('onclick')?.includes("'rolls'"));
  if (rollsTab) {
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    rollsTab.classList.add('active');
    buildMenu('rolls');
    const notice = document.getElementById('lunch-notice');
    if (notice) notice.style.display = 'none';
  }
}

function showArrivedScreen(orderId) {
  // Navigate to order-history and show arrived UI
  goTo('home');
  // Show a modal/overlay to confirm arrival
  const overlay = document.createElement('div');
  overlay.id = 'arrived-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:99999;display:flex;align-items:center;justify-content:center;padding:24px;';
  overlay.innerHTML = `
    <div style="background:#faf7f2;border-radius:20px;padding:32px 24px;width:100%;max-width:360px;text-align:center;">
      <div style="font-size:48px;margin-bottom:12px;">🚗</div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:24px;margin-bottom:8px;">Let us know you're here!</div>
      <div style="font-size:13px;color:#888;margin-bottom:24px;">Tap the button below and we'll bring your order out.</div>
      <button onclick="sendArrivedMessage('${orderId}')" id="arrived-confirm-btn"
        style="width:100%;padding:16px;background:#1a1410;color:#c8a96e;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:15px;font-weight:600;cursor:pointer;letter-spacing:0.03em;">
        🚗 I Have Arrived!
      </button>
      <button onclick="document.getElementById('arrived-overlay').remove()"
        style="width:100%;padding:12px;background:none;border:1px solid #ddd;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:13px;color:#888;cursor:pointer;margin-top:10px;">
        Not yet
      </button>
    </div>`;
  document.body.appendChild(overlay);
}

async function sendArrivedMessage(passedOrderId) {
  const order = window._lastOrder || {};
  const user = getUser();
  const btn = document.getElementById('arrived-confirm-btn') || document.querySelector('[onclick="sendArrivedMessage()"]');
  const statusEl = document.getElementById('arrived-status');
  if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }

  // Get car info from URL params (when opened from SMS link) or from last order
  const urlParams = new URLSearchParams(location.search);
  const carModel = order.carModel || urlParams.get('carModel') || '';
  const carColor = order.carColor || urlParams.get('carColor') || '';
  const orderId  = passedOrderId || order.orderId || urlParams.get('order') || '';

  try {
    const res = await fetch('/api/notify-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        isArrived: true,
        orderId,
        customer: order.customer || { name: user?.name || '', phone: user?.phone || '' },
        carModel,
        carColor,
        pickupTime: order.pickupTime || '',
        notifEmails: getNotifEmails(),
        notifPhones: getNotifPhones(),
      }),
    });

    // Success — show confirmation overlay
    const overlay = document.getElementById('arrived-overlay');
    if (overlay) {
      overlay.innerHTML = `<div style="background:#faf7f2;border-radius:20px;padding:32px 24px;width:100%;max-width:360px;text-align:center;">
        <div style="font-size:48px;margin-bottom:12px;">✅</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:24px;margin-bottom:8px;">We know you're here!</div>
        <div style="font-size:13px;color:#888;margin-bottom:24px;">We'll bring your order out shortly. Thank you!</div>
        <button onclick="document.getElementById('arrived-overlay').remove()" style="width:100%;padding:14px;background:#1a1410;color:#c8a96e;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;cursor:pointer;">OK</button>
      </div>`;
    }
    if (btn) { btn.textContent = '✅ Restaurant Notified!'; }
    if (statusEl) statusEl.textContent = 'We will bring your order right out!';
  } catch(e) {
    if (btn) { btn.disabled = false; btn.textContent = '🚗 I Have Arrived!'; }
    if (statusEl) statusEl.textContent = 'Please try again or call us at (404) 893-0018';
    console.error('Arrived error:', e);
  }
}

function initPointsRedeem() {
  const user = getUser();
  const pts = user ? (user.points || 0) : 0;
  const section = document.getElementById('points-redeem-section');
  const btnsEl  = document.getElementById('points-redeem-btns');
  const subEl   = document.getElementById('pt-sub');
  if (!section || !btnsEl) return;
  const maxDiscount = Math.floor(pts / 500) * 5;
  if (maxDiscount <= 0) { section.style.display = 'none'; return; }
  section.style.display = 'block';
  if (subEl) subEl.textContent = pts.toLocaleString() + ' pts available';
  btnsEl.innerHTML = '';
  // No discount button
  const noneBtn = document.createElement('button');
  noneBtn.innerHTML = '<div>No discount</div>';
  noneBtn.style.cssText = 'padding:8px 14px;border:1.5px solid var(--ink);border-radius:20px;font-family:DM Sans,sans-serif;font-size:12px;cursor:pointer;background:var(--ink);color:var(--gold);transition:all 0.15s;';
  noneBtn.addEventListener('click', () => selectPointsDiscount(0, btnsEl));
  btnsEl.appendChild(noneBtn);
  // $5 increment buttons
  for (let d = 5; d <= maxDiscount; d += 5) {
    const btn = document.createElement('button');
    btn.innerHTML = '<div>$' + d + ' off</div><div style="font-size:10px;opacity:0.7;">' + (d * 100) + ' pts</div>';
    btn.dataset.discount = d;
    btn.style.cssText = 'padding:8px 14px;border:1.5px solid var(--border);border-radius:20px;font-family:DM Sans,sans-serif;font-size:12px;cursor:pointer;background:var(--card-bg);color:var(--ink);transition:all 0.15s;';
    btn.addEventListener('click', () => selectPointsDiscount(d, btnsEl));
    btnsEl.appendChild(btn);
  }
  selectedPointsDiscount = 0;
  usePoints = false;
}

function selectPointsDiscount(amount, btnsEl) {
  selectedPointsDiscount = amount;
  usePoints = amount > 0;
  const btns = btnsEl.querySelectorAll('button');
  btns.forEach(btn => {
    const isSelected = (amount === 0 && btn.textContent.includes('No discount')) ||
                       (btn.dataset.discount && parseInt(btn.dataset.discount) === amount);
    btn.style.background = isSelected ? 'var(--ink)' : 'var(--card-bg)';
    btn.style.color = isSelected ? 'var(--gold)' : 'var(--ink)';
    btn.style.borderColor = isSelected ? 'var(--ink)' : 'var(--border)';
  });
  buildCheckoutSummary();
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
  initPointsRedeem();
  document.getElementById('screen-order').scrollTop = 0;
}

function backToMenu() { showMenuStep(); }

function buildCheckoutSummary() {
  const editList = document.getElementById('cart-edit-list');
  if (editList) {
    // Build groups: each main item + its immediately following toppings
    // Items with same name but different toppings appear as SEPARATE rows
    const groups = [];
    cart.forEach(item => {
      const lastGroup = groups[groups.length - 1];
      const isTopping = lastGroup && item.name.startsWith(lastGroup.name + ' + ');
      if (isTopping) {
        lastGroup.toppings.push(item);
      } else {
        groups.push({ ...item, toppings: [] });
      }
    });

    window._cartGroups = groups;
    editList.innerHTML = '';

    groups.forEach((item, gi) => {
      const toppingHtml = item.toppings.map(t =>
        `<div style="display:flex;align-items:center;gap:6px;padding:3px 0 0 36px;font-size:12px;color:var(--muted);">
          <span>${t.emoji || '🧂'}</span>
          <span style="flex:1;">${t.name.replace(item.name + ' + ', '')}</span>
          <span style="color:var(--gold);">+$${parseFloat(t.price).toFixed(2)}</span>
        </div>`
      ).join('');

      const itemTotal = parseFloat(item.price) + item.toppings.reduce((s,t) => s + parseFloat(t.price), 0);
      const row = document.createElement('div');
      row.className = 'cart-edit-row';
      row.style.alignItems = 'flex-start';
      row.innerHTML = `
        <div class="cer-emoji" style="margin-top:2px;">${item.emoji}</div>
        <div class="cer-name" style="flex:1;min-width:0;">
          <div>${item.name}</div>
          ${toppingHtml}
        </div>
        <div class="cer-controls">
          <button class="cer-del" onclick="removeCartGroup(${gi})" style="padding:6px 10px;border:1px solid #fde8e8;border-radius:8px;background:#fff;cursor:pointer;font-size:13px;">🗑</button>
        </div>
        <div class="cer-price">$${itemTotal.toFixed(2)}</div>`;
      editList.appendChild(row);
    });
  }

  const el = document.getElementById('checkout-summary');
  if (!el) return;
  const subtotal    = cart.reduce((s, i) => s + i.price, 0);
  const platformFee = 1.00;
  const tax         = subtotal * 0.089;
  const tip         = getTipAmount(subtotal);
  const discount = selectedPointsDiscount || 0;
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

function removeCartGroup(gi) {
  const groups = window._cartGroups || [];
  const group = groups[gi];
  if (!group) return;
  // Find and remove the main item + its toppings from cart
  // They appear consecutively — find first occurrence of main item name
  const mainIdx = cart.findIndex(c => c.name === group.name);
  if (mainIdx === -1) return;
  // Remove main + following toppings
  const removeCount = 1 + group.toppings.length;
  cart.splice(mainIdx, removeCount);
  updateCartBar();
  buildCheckoutSummary();
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
            ...builtIn,           // start with built-in defaults (price, emoji, desc, etc.)
            ...savedItem,         // Firebase data overrides everything (name, price, desc, img)
            // For multiSelect + options: Firebase (Admin-edited) takes priority over hardcoded
            multiSelect: fixMultiSelect(savedItem.multiSelect) || builtIn.multiSelect || null,
            options:     savedItem.options || builtIn.options || null,
          };
        }
        return { ...savedItem, multiSelect: fixMultiSelect(savedItem.multiSelect) };
      })
    : menuData[tab] || [];

  // ── Infer subcat from item name if not set (fallback for data saved before subcat support) ──
  const SUBCAT_MAP = {
    lunch: {
      bento:   ['Sweet and Sour Fish','Black Pepper Beef','Fresh Ginger Chicken','Garlic Shrimp','Mongolian Beef','Thai Yellow Curry (Bento)','Green Avocado Curry (Bento)','Panang Curry (Bento)','Spicy Thai Basil (Bento)','Spicy Seven Flavored Beef (Bento)','Wanchi Shrimp (Bento)','Grilled Teriyaki Chicken (Bento)','Grilled Bangkok Chicken (Bento)'],
      specials:['Special Roll Combination','Sushi Roll Combination - Pick 2','Sushi Roll Combination - Pick 3','Creamy Shrimp'],
      apps:    ['Lunch Edamame','Lunch Spicy Edamame','Lunch Fried Pork Gyoza','Lunch Vietnamese Spring Roll','Lunch Spicy Calamari','Lunch Chicken Satay','Lunch Side Fried Rice','Lunch Tempura Combo','Lunch Ika Sansai','Lunch Tuna Tataki','Lunch Yellowtail Carpaccio','Lunch Ahi Poke','Lunch Cu Kani'],
      soups:   ['Lunch Miso Soup','Lunch Ginger Salad','Lunch Seaweed Salad','Lunch Cucumber Kani'],
      entrees: ['Spicy Basil — Tofu','Pad Thai — Shrimp','Panang Curry — Chicken','Yellow Curry — Chicken'],
      classic: ['Lunch California Roll','Lunch Spicy Crab Roll','Lunch Spicy Tuna Roll','Lunch Philadelphia Roll','Lunch Eel Roll','Lunch Shrimp Tempura Roll','Lunch Alaska Roll','Lunch TNT Roll','Lunch Crunch Shrimp Roll','Lunch Vegetable Roll','Lunch Salmon Avocado Roll','Lunch Tuna Avocado Roll','Lunch Tuna Roll','Lunch Salmon Roll','Lunch Avocado Roll','Lunch Cucumber Roll','Lunch Negihama Roll'],
      special: ['Lunch Firecracker Roll','Lunch I Love Tuna Roll','Lunch I Love Salmon Roll','Lunch Spider Roll','Lunch Dragon Roll','Lunch Rainbow Roll','Lunch French Kiss Roll','Lunch Red Dragon Roll','Lunch Green Roll'],
      chef:    ['Lunch Playboy on Fire Roll','Lunch Incredible Hulk Roll','Lunch Sumo Roll','Lunch King Kamehameha Roll','Lunch Snow White Roll'],
    },
    rolls: {
      classic: ['California Roll','Spicy Crab Roll','Spicy Tuna Roll','Philadelphia Roll','Eel Roll','Shrimp Tempura Roll','Alaska Roll','TNT Roll','Crunch Shrimp Roll','Vegetable Roll','Salmon Avocado Roll','Tuna Avocado Roll','Tuna Roll','Salmon Roll','Avocado Roll','Cucumber Roll','Negihama Roll'],
      special: ['Firecracker Roll','I Love Tuna Roll','I Love Salmon Roll','Spider Roll','Lobster Tempura Roll','Volcano Roll','Dragon Roll','Rainbow Roll','Caterpillar Roll','Red Dragon Roll','Green Roll','Atlanta Roll','Phoenix Roll','Yum Yum Roll','Hamachi Twist Roll','Kiss of Fire Roll','California Dream Roll','Black Pink Roll','Oishi Roll','Sex in the City Roll','French Kiss Roll'],
      chef:    ['Playboy on Fire Roll','Incredible Hulk Roll','Sumo Roll','King Kamehameha Roll','Snow White Roll','Crunch Chef Roll','Big Mama Roll'],
    },
    nigiri: {
      sashimi: ['Salmon Sashimi (3pcs)','Tuna Sashimi (3pcs)','Yellowtail Sashimi (3pcs)'],
    },
  };
  if (SUBCAT_MAP[tab]) {
    items = items.map(item => {
      if (item.subcat) return item; // already has subcat, keep it
      for (const [key, names] of Object.entries(SUBCAT_MAP[tab])) {
        if (names.includes(item.n)) return { ...item, subcat: key };
      }
      return item;
    });
  }

  // ── Sort items by section order (from Firebase sections config) ──
  // This ensures Admin's drag-reordered sections appear in correct order for guests
  const _sectionConfig =
    (window._firebaseSections && window._firebaseSections[tab]) ||
    JSON.parse(localStorage.getItem('prb_menu_sections') || 'null')?.[tab] ||
    null;

  if (_sectionConfig && _sectionConfig.length > 0) {
    const _sectionOrder = _sectionConfig.map(s => s.key);
    items = items.slice().sort((a, b) => {
      const ai = a.subcat ? _sectionOrder.indexOf(a.subcat) : 9999;
      const bi = b.subcat ? _sectionOrder.indexOf(b.subcat) : 9999;
      if (ai !== bi) return ai - bi;
      return 0; // keep original order within same section
    });
  }

  // Accordion sections for Lunch tab (Bento Box only)
  if (tab === 'lunch' && !window._lunchAccordion) {
    window._lunchAccordion = {};
  }

  items.forEach((item, idx) => {
    const headers = (tab === 'nigiri')
      ? { 'Salmon Sashimi (3pcs)': 'Sashimi' }
      : (tab === 'lunch')
      ? {
          'Lunch Edamame':              'Lunch Appetizers',
          'Lunch Miso Soup':            'Soups & Salads',
          'Spicy Basil — Tofu':         'Kitchen Entrees',
        }
      : (tab === 'rolls')
      ? {
          'California Roll':      'House Classic Roll',
          'Firecracker Roll':     'House Special Roll',
          'Playboy on Fire Roll': 'Chef Special Roll',
        }
      : {};

    // ── Section header: use subcat field (from Firebase/Admin) ──
    if (item.subcat) {
      const prevItem = items[idx - 1];
      const prevSubcat = prevItem ? prevItem.subcat : null;
      if (item.subcat !== prevSubcat) {
        // Find section label from ACCORDION_CONFIG or fallback headers
        let secLabel = item.subcat;
        let secEmoji = null;
        let secSub = null;
        // Look up section label from Firebase sections (Admin-editable) first
        // Fallback to hardcoded defaults if Firebase sections not loaded yet
        const _fbSecs = (window._firebaseSections && window._firebaseSections[tab])
          || JSON.parse(localStorage.getItem('prb_menu_sections') || 'null')?.[tab]
          || null;
        const DEFAULT_SEC_CONFIG = {
          lunch: [
            { key:'bento',   emoji:'🍱', label:'Bento Box Specials', sub:'Served with Miso Soup, House Salad, Spring Roll and Steamed Rice' },
            { key:'specials',emoji:'🍱', label:'Lunch Specials',     sub:'' },
            { key:'apps',    emoji:'🥢', label:'Lunch Appetizers',   sub:'' },
            { key:'soups',   emoji:'🥗', label:'Soups & Salads',     sub:'' },
            { key:'entrees', emoji:'🍛', label:'Kitchen Entrees',    sub:'' },
            { key:'classic', emoji:'🍣', label:'House Classic Roll', sub:'' },
            { key:'special', emoji:'🍣', label:'House Special Roll', sub:'' },
            { key:'chef',    emoji:'🍣', label:'Chef Special Roll',  sub:'' },
          ],
          rolls: [
            { key:'classic', emoji:'🍣', label:'House Classic Roll', sub:'' },
            { key:'special', emoji:'🍣', label:'House Special Roll', sub:'' },
            { key:'chef',    emoji:'🍣', label:'Chef Special Roll',  sub:'' },
          ],
          nigiri: [{ key:'sashimi', emoji:'🍙', label:'Sashimi', sub:'' }],
        };
        const secList = _fbSecs || DEFAULT_SEC_CONFIG[tab] || [];
        const accSec = secList.find(s => s.key === item.subcat);
        if (accSec) { secLabel = accSec.label; secEmoji = accSec.emoji; secSub = accSec.sub; }
        // Check fallback name-based headers
        else if (headers[item.n]) { secLabel = headers[item.n]; }

        // Accordion sections (bento, classic, special, chef for lunch)
        const ACCORDION_KEYS = ['bento','classic','special','chef'];
        if (tab === 'lunch' && ACCORDION_KEYS.includes(item.subcat)) {
          const key = item.subcat;
          const isOpen = window._lunchAccordion[key] || false;
          const accHeader = document.createElement('div');
          accHeader.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid var(--border);cursor:pointer;';
          accHeader.innerHTML =
            '<div class="mi-main" style="width:100%;pointer-events:none;">' +
              '<div class="mi-emoji">' + (secEmoji||'🍱') + '</div>' +
              '<div class="mi-info">' +
                '<div class="mi-name">' + secLabel + ' <span style="color:var(--gold);">→</span></div>' +
                (secSub ? '<div class="mi-desc">' + secSub + '</div>' : '') +
              '</div>' +
              '<div style="padding:6px 14px;border-radius:20px;background:var(--gold);color:var(--ink);font-size:12px;font-weight:700;letter-spacing:0.05em;flex-shrink:0;">' + (isOpen ? 'Hide ▲' : 'View ▼') + '</div>' +
            '</div>';
          accHeader.addEventListener('click', () => {
            window._lunchAccordion[key] = !window._lunchAccordion[key];
            buildMenu('lunch');
          });
          list.appendChild(accHeader);
          if (!isOpen) { return; } // skip items when collapsed
        } else {
          // Normal flat header
          const h = document.createElement('div');
          h.className = 'menu-section-header';
          h.textContent = secLabel;
          list.appendChild(h);
        }
      } else if (tab === 'lunch' && ['bento','classic','special','chef'].includes(item.subcat)) {
        // Same section, accordion — check if collapsed
        if (!window._lunchAccordion[item.subcat]) return;
      }
    } else if (headers[item.n]) {
      // Fallback: name-based headers for items without subcat
      const h = document.createElement('div');
      h.className = 'menu-section-header';
      h.textContent = headers[item.n];
      list.appendChild(h);
    }

    // Section accordion/header logic handled above via subcat field

    const inCart = cart.filter(c => c.name === item.n || c.name.startsWith(item.n + ' — ') || c.name.startsWith(item.n + ' (')).length;
    const isSoldOut = item.soldOut === true;
    const div = document.createElement('div');
    if (isSoldOut) div.style.opacity = '0.55';

    const thumbHtml = item.img
      ? '<img class="mi-thumb" src="' + item.img + '" alt="' + item.n + '" onerror="this.style.display=\'none\'">'
      : '<div class="mi-emoji">' + item.e + '</div>';

    const priceDisplay = isSoldOut
      ? 'SOLD OUT'
      : item.options
        ? 'from $' + Math.min(...item.options.map(o => o.p)).toFixed(2)
        : '$' + parseFloat(item.p).toFixed(2);

    const optionsHtml = item.options ? `
      <div class="mi-options" style="display:none;">
        ${item.options.map(opt =>
          `<div class="mi-opt-row" data-name="${item.n} — ${opt.n}" data-price="${opt.p}" data-emoji="${item.e}">
            <span class="mi-opt-name">${opt.n}</span>
            <span class="mi-opt-price">$${opt.p.toFixed(2)}</span>
            <button class="mi-opt-btn">+</button>
          </div>`
        ).join('')}
      </div>` : '';

    div.innerHTML =
      '<div class="mi-main">' +
        thumbHtml +
        '<div class="mi-info">' +
          '<div class="mi-name">' + item.n + '</div>' +
          '<div class="mi-desc">' + (item.d ? item.d.replace(' · Choose your protein', '') : '') + '</div>' +
          (item.d && item.d.includes('Choose your protein') ? '<div style="font-size:11px;color:var(--gold);font-weight:500;margin-top:2px;letter-spacing:0.03em;">Choose your protein →</div>' : '') +
          (isSoldOut ? '<div style="font-size:12px;font-weight:700;color:#e74c3c;letter-spacing:0.05em;">SOLD OUT</div>' : '<div class="mi-price">' + priceDisplay + '</div>') +
        '</div>' +
        (isSoldOut
          ? '<button class="mi-add" disabled style="opacity:0.3;cursor:not-allowed;pointer-events:none;">✕</button>'
          : item.options
          ? '<button class="mi-expand-btn">▾</button>'
          : inCart
            ? '<button class="mi-add" style="position:relative;">' +
                '+' +
                '<span style="position:absolute;top:-6px;right:-6px;background:var(--gold);color:var(--ink);border-radius:50%;width:16px;height:16px;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;line-height:1;">' + inCart + '</span>' +
              '</button>'
            : '<button class="mi-add">+</button>'
        ) +
      '</div>' +
      optionsHtml;

    if (isSoldOut) {
      // No interaction for sold out items
    } else if (item.toppings && item.toppings.length && !item.options) {
      // Toppings only (no options) — + button opens topping modal
      const addBtn = div.querySelector('.mi-add');
      if (addBtn) addBtn.addEventListener('click', () => openToppingModal(item));
    } else if (item.multiSelect) {
      const addBtn = div.querySelector('.mi-add');
      if (addBtn) addBtn.addEventListener('click', () => openMultiSelectModal(item));
    } else if (item.options) {
      // Options expand button
      const expandBtn = div.querySelector('.mi-expand-btn');
      if (expandBtn) expandBtn.addEventListener('click', function() {
        const opts = div.querySelector('.mi-options');
        const isOpen = opts.style.display === 'block';
        opts.style.display = isOpen ? 'none' : 'block';
        this.textContent = isOpen ? '▾' : '▴';
        this.classList.toggle('active', !isOpen);
      });
      div.querySelectorAll('.mi-opt-row').forEach(row => {
        row.querySelector('.mi-opt-btn').addEventListener('click', function() {
          if (item.toppings && item.toppings.length) {
            // Has both options AND toppings — open topping modal with selected option pre-filled
            const optItem = { ...item, n: row.dataset.name, p: parseFloat(row.dataset.price), e: row.dataset.emoji };
            openToppingModal(optItem);
          } else {
            addToCart(row.dataset.name, parseFloat(row.dataset.price), row.dataset.emoji, null);
            this.textContent = '✓';
            this.classList.add('added');
            setTimeout(() => { this.textContent = '+'; this.classList.remove('added'); }, 800);
            updateCartBar();
          }
        });
      });
    } else {
      const addBtn = div.querySelector('.mi-add');
      if (addBtn) {
        addBtn.addEventListener('click', () => {
          addToCart(item.n, parseFloat(item.p), item.e, null);
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

function isLunchHours() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 6=Sat
  if (day === 0 || day === 6) return false; // No lunch on weekends
  const mins = now.getHours() * 60 + now.getMinutes();
  // Block ONLY after 2:00PM — morning orders are fine
  return mins < 14 * 60; // Allow before 2:00PM (includes morning)
}

// ── Build guest menu tabs from Firebase categories ──
window.buildGuestMenuTabs = function(cats) {
  const container = document.getElementById('menu-tabs-container');
  if (!container || !cats || !cats.length) return;
  container.innerHTML = cats.map((cat, i) =>
    `<div class="menu-tab${i===0?' active':''}" onclick="switchTab(this,'${cat.key}')">${cat.emoji} ${cat.name}</div>`
  ).join('');
  if (cats.length > 0) buildMenu(cats[0].key);
};

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
    : 'Lunch is served 11:30 AM – 2:00 PM,\nMonday through Friday.\n\nPlease check back during lunch hours!';
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
  const user = getUser();
  const profile = {
    firstName: document.getElementById('pf-firstname').value.trim(),
    lastName:  document.getElementById('pf-lastname').value.trim(),
    email:     document.getElementById('pf-email').value.trim() || user?.email || '',
    phone:     document.getElementById('pf-phone').value.trim(),
    address:   document.getElementById('pf-address').value.trim(),
    city:      document.getElementById('pf-city').value.trim(),
    state:     document.getElementById('pf-state').value.trim(),
    zip:       document.getElementById('pf-zip').value.trim(),
  };
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  // Update user key too
  const updated = { ...(user || {}), ...profile };
  localStorage.setItem('prb_user', JSON.stringify(updated));
  updateProfileUI();
  updateAuthUI();
  showToastMsg('✅ Profile saved!');
  // Sync to Firebase
  const fbUrl = window.location.origin + '/js/firebase-menu.js';
  import(fbUrl).then(({ saveProfileToFirebase, savePointsToFirebase }) => {
    saveProfileToFirebase(profile).then(ok => {
      if (ok) showToastMsg('✅ Profile saved & synced!');
    }).catch(() => {});
    // Also sync points
    const u = getUser();
    if (u?.email) {
      savePointsToFirebase(u.email, u.points || 0, u.pointsLog || [], u.tierPoints || 0).catch(() => {});
    }
  }).catch(() => {});
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
    // Pickup windows: 11:00AM–2:30PM and 5:00PM–9:15PM (15-min intervals)
    const windows = [
      { open: 11 * 60 + 30, close: 14 * 60 },        // 11:30AM – 2:00PM
      { open: 17 * 60,      close: 21 * 60 + 15 },   // 5:00PM – 9:15PM
    ];

    const nowMins = now.getHours() * 60 + now.getMinutes();
    const isMorning  = nowMins < 11 * 60;          // Before 11:00AM
    const isBreakTime = nowMins >= 14 * 60 && nowMins < 17 * 60; // 2PM–5PM

    if (isBreakTime) {
      // During break: remove ASAP, start from 5PM
      select.innerHTML = '';
      const noAsap = document.createElement('option');
      noAsap.value = '';
      noAsap.textContent = '🕐 Select pickup time';
      noAsap.disabled = true;
      noAsap.selected = true;
      select.appendChild(noAsap);
    }

    // Start time logic:
    // - Morning (before 11AM): start from 11:00AM
    // - Break time (2PM-5PM): start from 5:00PM
    // - Otherwise: start from earliest (now + prepTime)
    let t;
    if (isMorning) {
      t = (() => { const d = new Date(now); d.setHours(11, 30, 0, 0); return d; })();
    } else if (isBreakTime) {
      t = (() => { const d = new Date(now); d.setHours(17, 0, 0, 0); return d; })();
    } else {
      t = new Date(earliest.getTime() + 15 * 60 * 1000);
    }

    while (true) {
      const totalMins = t.getHours() * 60 + t.getMinutes();
      const inWindow = windows.some(w => totalMins >= w.open && totalMins <= w.close);
      if (inWindow) {
        const opt = document.createElement('option');
        const tEnd = new Date(t.getTime() + 15 * 60 * 1000);
        const labelStart = t.toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' });
        const labelEnd   = tEnd.toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' });
        const label = labelStart + ' – ' + labelEnd;
        opt.value = label;
        opt.textContent = '🕐 ' + label;
        select.appendChild(opt);
      }
      t = new Date(t.getTime() + 15 * 60 * 1000);
      // Stop after 9:15PM
      if (t.getHours() >= 22) break;
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
  } else if (el.id === 'tip-no-btn') {
    tipPercent = 0; tipCustom = null;
    if (customWrap) customWrap.style.display = 'none';
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

const TIERS = [
  { name:'Bronze',   icon:'🥉', min:0,    max:999,  rate:2,   color:'#cd7f32' },
  { name:'Silver',   icon:'🥈', min:1000, max:1999, rate:2.5, color:'#a8a9ad' },
  { name:'Gold',     icon:'🥇', min:2000, max:2999, rate:3,   color:'#c8a96e' },
  { name:'Platinum', icon:'💎', min:3000, max:99999,rate:4,   color:'#5c6bc0' },
];

// Notification recipients for restaurant alerts
function getNotifEmails() {
  try {
    const s = JSON.parse(localStorage.getItem('prb_notif_settings') || '{}');
    if (s.emails && s.emails.length) return s.emails;
  } catch(e) {}
  // Check window cache (loaded from Firebase at startup)
  if (window._notifSettings?.emails?.length) return window._notifSettings.emails;
  return ['yshahn@gmail.com', 'ymhahn@gmail.com']; // fallback
}
function getNotifPhones() {
  try {
    const s = JSON.parse(localStorage.getItem('prb_notif_settings') || '{}');
    if (s.phones && s.phones.length) return s.phones;
  } catch(e) {}
  // Check window cache (loaded from Firebase at startup)
  if (window._notifSettings?.phones?.length) return window._notifSettings.phones;
  return ['7705008420', '6788629389']; // fallback
}

function getTierPoints(user) {
  // tierPoints = cumulative points EARNED this year (never deducted)
  // Used only for tier calculation. Resets Jan 1.
  return user?.tierPoints !== undefined ? user.tierPoints : (user?.points || 0);
}

function getTier(points) {
  return TIERS.slice().reverse().find(t => points >= t.min) || TIERS[0];
}

function getEarnRate(user) {
  const tp = getTierPoints(user);
  return getTier(tp).rate;
}

// Check yearly reset (Jan 1) — tierPoints resets, actual points balance is kept
// Called on every app load and before any tier-sensitive operation
function checkYearlyReset() {
  const user = getUser();
  if (!user) return;
  const now = new Date();
  const lastReset = user.lastReset ? new Date(user.lastReset) : null;
  // Reset if we've never reset, or if last reset was in a prior year
  const needsReset = !lastReset || lastReset.getFullYear() < now.getFullYear();
  if (needsReset) {
    const prevTier = getTier(user.tierPoints || 0).name;
    user.tierPoints = 0; // reset annual tier tracker only — points balance untouched
    user.lastReset = now.toISOString();
    user.pointsLog = user.pointsLog || [];
    user.pointsLog.push({
      desc: 'Annual Tier Reset (was ' + prevTier + ') \u2192 Bronze',
      pts: 0,
      date: Date.now()
    });
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    // Sync reset to Firebase
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    import(fbUrl).then(({ savePointsToFirebase }) => {
      savePointsToFirebase(user.email, user.points, user.pointsLog, user.tierPoints).catch(() => {});
    }).catch(() => {});
  }
}

function buildRewardsScreen() {
  checkYearlyReset();
  const user = getUser();
  const points = user ? (user.points || 0) : 0;
  const tierPts = user?.tierPoints !== undefined ? user.tierPoints : points;
  const tier = getTier(tierPts);
  const nextTier = TIERS.find(t => t.min > tierPts);

  const rhPoints    = document.getElementById('rh-points');
  const rhSub       = document.getElementById('rh-sub');
  const rhCashValue = document.getElementById('rh-cash-value');
  if (rhPoints)    rhPoints.textContent    = points.toLocaleString();
  if (rhSub)       rhSub.textContent       = user ? tier.icon + ' ' + tier.name + ' · ' + tier.rate + '% earn rate' : 'Sign in to view your points';
  if (rhCashValue) rhCashValue.textContent = '$' + (points / 100).toFixed(2);

  // Tier progress bar
  const tiersEl = document.getElementById('rewards-tiers');
  if (tiersEl) {
    tiersEl.innerHTML = TIERS.map(t => {
      const isActive = getTier(tierPts).name === t.name;
      const pct = t.name === 'Platinum' ? 100
        : Math.min(100, ((tierPts - t.min) / (t.max - t.min + 1)) * 100);
      return '<div style="background:' + (isActive ? 'var(--ink)' : 'var(--card-bg)') + ';border:1px solid ' + (isActive ? 'var(--gold)' : 'var(--border)') + ';border-radius:12px;padding:14px 16px;margin-bottom:8px;">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:' + (isActive ? '8' : '0') + 'px;">' +
          '<div style="display:flex;align-items:center;gap:8px;">' +
            '<div style="font-size:20px;">' + t.icon + '</div>' +
            '<div>' +
              '<div style="font-size:13px;font-weight:600;color:' + (isActive ? '#fff' : 'var(--ink)') + ';">' + t.name + '</div>' +
              '<div style="font-size:11px;color:' + (isActive ? 'rgba(255,255,255,0.6)' : 'var(--muted)') + ';">' + (t.min === 0 ? '0' : t.min.toLocaleString()) + (t.name === 'Platinum' ? '+' : '–' + t.max.toLocaleString()) + ' pts</div>' +
            '</div>' +
          '</div>' +
          '<div style="font-size:15px;font-weight:700;color:var(--gold);">' + t.rate + '%</div>' +
        '</div>' +
        (isActive && nextTier ? '<div style="background:rgba(255,255,255,0.1);border-radius:4px;height:4px;overflow:hidden;"><div style="width:' + pct + '%;height:100%;background:var(--gold);border-radius:4px;"></div></div><div style="font-size:10px;color:rgba(255,255,255,0.5);margin-top:4px;">' + (nextTier.min - tierPts) + ' pts to ' + nextTier.name + '</div>' : '') +
      '</div>';
    }).join('');
  }

  // Reset notice
  const resetEl = document.getElementById('rewards-reset');
  if (resetEl) {
    const now = new Date();
    const nextJan = new Date(now.getFullYear() + 1, 0, 1);
    const daysLeft = Math.ceil((nextJan - now) / 86400000);
    resetEl.textContent = '⏱ Tier resets to Bronze on Jan 1 · ' + daysLeft + ' days remaining';
  }

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

  // Validate pickup time selected during break time
  const nowMins = new Date().getHours() * 60 + new Date().getMinutes();
  const isBreakTime = nowMins >= 14 * 60 && nowMins < 17 * 60;
  const select = document.getElementById('pickup-time-select');
  if (isBreakTime && select && (!select.value || select.value === '')) {
    alert('Please select a pickup time to continue.');
    select.focus();
    return;
  }

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
  const discount = selectedPointsDiscount || 0;
  const total       = Math.max(subtotal + platformFee + tax + tip - discount, 0.50);
  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items, customerEmail: email, customerName: (firstName + ' ' + lastName).trim(), usePoints, pointsDiscount: selectedPointsDiscount || 0, tip }),
    });
    const data = await res.json();
    if (data.url) {
      const smsConsent = document.getElementById('sms-consent')?.checked || false;
      const specialRequest = document.getElementById('checkout-special-request')?.value.trim() || '';
      const carModel = document.getElementById('car-model')?.value.trim() || '';
      const carColor = document.getElementById('car-color')?.value.trim() || '';
      localStorage.setItem('prb_pending_order', JSON.stringify({
        orderItems: cart.map(i => ({ name: i.name, price: i.price, emoji: i.emoji })),
        subtotal, tax, tip, total,
        pickupTime: selectedPickupTime ? selectedPickupTime.label : 'ASAP',
        customer: { name: (firstName + ' ' + lastName).trim(), email, phone: (document.getElementById('gi-phone') || {}).value || '' },
        orderId: Date.now().toString().slice(-6),
        smsConsent,
        specialRequest,
        pointsDiscount: selectedPointsDiscount || 0,
        pickupType: pickupType || 'instore',
        carModel,
        carColor,
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
    // Don't replaceState yet - do it after points update
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('success-screen').classList.add('active');
    document.getElementById('bottom-nav').style.display = 'none';
    document.getElementById('success-icon').textContent  = '✅';
    document.getElementById('success-title').textContent = 'Payment Complete!';
    document.getElementById('success-msg').textContent   = 'Thank you for your order!\nWe will have it ready soon.';
    document.getElementById('earned-pts').textContent    = '+pts earned';
    const pendingOrder = localStorage.getItem('prb_pending_order');
    console.log('🔍 pending order exists:', !!pendingOrder);
    if (pendingOrder) {
      try {
        const orderData = JSON.parse(pendingOrder);
        console.log('🔍 orderData.pointsDiscount:', orderData.pointsDiscount);
        console.log('🔍 orderData.subtotal:', orderData.subtotal);
        if (orderData.pickupTime) {
          document.getElementById('success-msg').textContent = 'Thank you for your order!\n🕐 Pickup ready: ' + orderData.pickupTime;
        }
        // 1. Send notification email + SMS
        fetch('/api/notify-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...orderData,
            notifEmails: getNotifEmails(),
            notifPhones: getNotifPhones(),
            guestSmsConsent: orderData.smsConsent,
            specialRequest: orderData.specialRequest || '',
            pickupType: orderData.pickupType || 'instore',
            carModel: orderData.carModel || '',
            carColor: orderData.carColor || '',
          }),
        }).then(r => r.json()).then(d => console.log('Notification sent:', d)).catch(e => console.warn('Notify error:', e));

        // 2 & 3. Update points first, then save to Firebase
        checkYearlyReset(); // Ensure tier reset before earning new points
        const _user = getUser();
        const _subtotal = parseFloat(orderData.subtotal) || 0;
        if (_user && _user.email) {
          const _earnRate = getEarnRate(_user);
          const _earned = Math.floor(_subtotal * _earnRate);
          const _used = orderData.pointsDiscount ? Math.round(parseFloat(orderData.pointsDiscount) * 100) : 0;
          _user.points = Math.max(0, (_user.points || 0) - _used + _earned);
          _user.tierPoints = (_user.tierPoints || 0) + _earned; // tierPoints only goes UP (annual earn tracker)
          _user.pointsLog = _user.pointsLog || [];
          if (_used > 0) _user.pointsLog.push({ desc: 'Points redeemed ($' + parseFloat(orderData.pointsDiscount).toFixed(2) + ' off)', pts: -_used, date: Date.now() });
          if (_earned > 0) _user.pointsLog.push({ desc: 'Order #' + (orderData.orderId || ''), pts: _earned, date: Date.now() });
          localStorage.setItem(USER_KEY, JSON.stringify(_user));
          console.log('✅ Points updated! earned:', _earned, 'used:', _used, 'new total:', _user.points);

          // Show earned points on success screen
          const _earnedEl = document.getElementById('earned-pts');
          if (_earnedEl) {
            if (_earned > 0 && _used > 0) {
              _earnedEl.textContent = '+' + _earned + ' pts earned · −' + _used + ' pts used';
            } else if (_earned > 0) {
              _earnedEl.textContent = '+' + _earned + ' pts earned';
            } else {
              _earnedEl.textContent = '−' + _used + ' pts used';
            }
          }
          const _earnedBadge = document.querySelector('.earned-badge');
          if (_earnedBadge) _earnedBadge.style.display = 'block';
          updateAuthUI();

          // Save to Firebase — retry up to 3 times to ensure it persists
          const _fbUrl = window.location.origin + '/js/firebase-menu.js';
          const _savedPoints = _user.points;
          const _savedLog    = [...(_user.pointsLog || [])];
          const _savedTier   = _user.tierPoints;
          const _saveWithRetry = (attempt) => {
            import(_fbUrl).then(({ saveOrderToFirebase, savePointsToFirebase }) => {
              saveOrderToFirebase(orderData).catch(() => {});
              savePointsToFirebase(_user.email, _savedPoints, _savedLog, _savedTier)
                .then(ok => {
                  if (ok) {
                    console.log('✅ Points saved to Firebase:', _savedPoints);
                  } else if (attempt < 3) {
                    console.warn('⚠️ Firebase points save failed, retrying... attempt', attempt);
                    setTimeout(() => _saveWithRetry(attempt + 1), 1000 * attempt);
                  } else {
                    console.error('❌ Firebase points save failed after 3 attempts');
                  }
                })
                .catch(e => {
                  if (attempt < 3) setTimeout(() => _saveWithRetry(attempt + 1), 1000 * attempt);
                });
            }).catch(e => console.warn('Firebase import error:', e));
          };
          setTimeout(() => _saveWithRetry(1), 300);
        } else {
          // Guest user — still show a generic message
          const _earnedEl = document.getElementById('earned-pts');
          if (_earnedEl) _earnedEl.textContent = 'Sign in to earn points!';
          const _earnedBadge = document.querySelector('.earned-badge');
          if (_earnedBadge) _earnedBadge.style.display = 'block';
        }

        localStorage.removeItem('prb_pending_order');
        history.replaceState({}, '', '/');

        // 4. Show curbside arrived button if curbside
        const arrivedSection = document.getElementById('arrived-section');
        if (arrivedSection) {
          arrivedSection.style.display = orderData.pickupType === 'curbside' ? 'block' : 'none';
          window._lastOrder = orderData;
        }
      } catch(e) { console.error('Payment result error:', e); }
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
    reservation: { icon:'🎋', title:'Reservation Confirmed!',  msg:'Your table has been reserved.\nA confirmation will be sent to you.', pts:'' }, // no points for reservation
    payment:     { icon:'✅', title:'Payment Complete!',        msg:'$' + finalTotal + ' has been processed.\nThank you for dining with us!', pts:'+' + Math.round(total) + ' pts' },
    review:      { icon:'🌟', title:'Thanks for your Review!', msg:'Your feedback means a lot to us.', pts:'+30 pts' },
  };
  const c = configs[type] || configs.payment;
  document.getElementById('success-icon').textContent  = c.icon;
  document.getElementById('success-title').textContent = c.title;
  document.getElementById('success-msg').textContent   = c.msg;
  document.getElementById('earned-pts').textContent = c.pts;
  const earnedBadge = document.querySelector('.earned-badge');
  if (earnedBadge) earnedBadge.style.display = (type === 'reservation' || !c.pts) ? 'none' : 'block';
  if (type === 'payment') { cart = []; }
}

// ─────────────────────────────────
// MULTI-SELECT MODAL
// ─────────────────────────────────
// ── TOPPINGS MODAL ──
let _toppingItem = null;
let _toppingQty  = 1;

function openToppingModal(item) {
  _toppingItem = item;
  document.getElementById('topping-modal-title').textContent = item.e + ' ' + item.n;
  document.getElementById('topping-modal-price').textContent = '$' + parseFloat(item.p).toFixed(2);
  updateToppingConfirmBtn();
  const body = document.getElementById('topping-modal-body');
  body.innerHTML =
    `<label style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #f0ebe2;cursor:pointer;">
      <input type="radio" name="topping-choice" value="none" checked style="width:20px;height:20px;accent-color:var(--gold);cursor:pointer;flex-shrink:0;"/>
      <span style="font-size:18px;">🚫</span>
      <span style="flex:1;font-size:14px;font-weight:500;">No Topping</span>
    </label>` +
    item.toppings.map((t, ti) =>
      `<label style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #f0ebe2;cursor:pointer;">
        <input type="checkbox" data-idx="${ti}" style="width:20px;height:20px;accent-color:var(--gold);cursor:pointer;flex-shrink:0;"/>
        <span style="font-size:18px;">${t.e || '🧂'}</span>
        <span style="flex:1;font-size:14px;">${t.n}</span>
        <span style="font-size:14px;font-weight:600;color:var(--gold);">${parseFloat(t.p) > 0 ? '+$' + parseFloat(t.p).toFixed(2) : 'Free'}</span>
      </label>`
    ).join('');
  // Checkbox <-> radio logic
  body.querySelectorAll('input[type="checkbox"]').forEach(chk => {
    chk.addEventListener('change', () => {
      const radio = body.querySelector('input[type="radio"]');
      const anyChecked = [...body.querySelectorAll('input[type="checkbox"]')].some(c => c.checked);
      if (radio) radio.checked = !anyChecked;
      updateToppingConfirmBtn();
    });
  });
  const radio = body.querySelector('input[type="radio"]');
  if (radio) radio.addEventListener('change', () => {
    body.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
    updateToppingConfirmBtn();
  });
  document.getElementById('topping-modal').style.display = 'flex';
}

function toppingQtyChange(delta) {
  _toppingQty = Math.max(1, (_toppingQty || 1) + delta);
  document.getElementById('topping-qty').textContent = _toppingQty;
  updateToppingConfirmBtn();
}

function updateToppingConfirmBtn() {
  const btn = document.getElementById('topping-confirm-btn');
  if (!btn || !_toppingItem) return;
  const checks = [...document.querySelectorAll('#topping-modal-body input[type="checkbox"]:checked')];
  const toppingTotal = checks.reduce((sum, chk) => {
    const t = _toppingItem.toppings[parseInt(chk.dataset.idx)];
    return sum + (t ? parseFloat(t.p) || 0 : 0);
  }, 0);
  const total = parseFloat(_toppingItem.p) + toppingTotal;
  btn.textContent = `Add to Cart — $${total.toFixed(2)}`;
}

function closeToppingModal() {
  document.getElementById('topping-modal').style.display = 'none';
  _toppingItem = null;
}

function confirmToppingCart() {
  if (!_toppingItem) return;
  const checks = [...document.querySelectorAll('#topping-modal-body input[type="checkbox"]:checked')];
  addToCart(_toppingItem.n, parseFloat(_toppingItem.p), _toppingItem.e, null);
  checks.forEach(chk => {
    const t = _toppingItem.toppings[parseInt(chk.dataset.idx)];
    if (t) addToCart(_toppingItem.n + ' + ' + t.n, parseFloat(t.p) || 0, t.e || '🧂', null);
  });
  closeToppingModal();
  updateCartBar();
  buildMenu(document.querySelector('.menu-tab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1] || 'appetizers');
}

// ──────────────────────────────────
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
// HOME BANNER
// ─────────────────────────────────
function buildHomeScreen() {
  const user = getUser();
  const pts = user ? (user.points || 0) : 0;
  const tier = user ? getTier(user.tierPoints !== undefined ? user.tierPoints : pts) : null;

  // Update MY POINTS card on home screen
  const homePoints = document.getElementById('home-points');
  const homeSub    = document.getElementById('home-points-sub');
  const homeValue  = document.getElementById('home-points-value');

  if (homePoints) homePoints.textContent = pts.toLocaleString();
  if (homeValue)  homeValue.textContent  = '$' + (pts / 100).toFixed(2);
  if (homeSub) {
    homeSub.textContent = user
      ? (tier.icon + ' ' + tier.name + ' · ' + tier.rate + '% earn rate')
      : 'Sign in to earn points';
  }
}

// ─────────────────────────────────
// ORDER HISTORY
// ─────────────────────────────────
function reorderItems(orderIdx) {
  const o = window._orderHistory?.[orderIdx];
  if (!o) return;
  const orderItems = o.orderItems || o.items || [];
  if (!orderItems.length) { alert('No items found in this order.'); return; }

  // Clear cart and add items from this order
  cart = [];
  orderItems.forEach(i => {
    const name  = i.name || i.n || '';
    const price = parseFloat(i.price || i.p) || 0;
    const emoji = i.emoji || i.e || '🍽️';
    if (name) addToCart(name, price, emoji, null);
  });

  updateCartBar();
  goTo('order');
  goToCheckout();
}

function showOrderHistory() {
  goTo('order-history');
  const user = getUser();
  const histEl = document.getElementById('order-history-list');
  if (!histEl) return;
  histEl.innerHTML = '<div style="padding:24px;text-align:center;color:var(--muted);font-size:13px;">Loading...</div>';
  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    import(fbUrl).then(({ loadOrdersFromFirebase }) => {
      loadOrdersFromFirebase(20).then(orders => {
        const myOrders = user?.email
          ? orders.filter(o => o.customer?.email === user.email || o.customerEmail === user.email)
          : [];
        if (!myOrders.length) {
          histEl.innerHTML = '<div style="padding:32px;text-align:center;color:var(--muted);">No orders yet.</div>';
          return;
        }
        // Store orders for reorder function
        window._orderHistory = myOrders;

        histEl.innerHTML = myOrders.map((o, oi) => {
          const date  = o.createdAt ? new Date(o.createdAt).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) : '';
          const orderItems = o.orderItems || o.items || [];
          const itemNames  = orderItems.map(i => (i.emoji || i.e || '') + ' ' + (i.name || i.n)).join(', ');
          const total = o.total ? '$' + parseFloat(o.total).toFixed(2) : '';
          return `<div style="padding:14px 16px;border-bottom:1px solid var(--border);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
              <div style="font-size:13px;font-weight:600;">${date}</div>
              <div style="font-size:13px;font-weight:600;color:var(--gold);">${total}</div>
            </div>
            <div style="font-size:12px;color:var(--muted);margin-bottom:10px;line-height:1.5;">${itemNames}</div>
            <button onclick="reorderItems(${oi})"
              style="width:100%;padding:10px;background:var(--ink);color:var(--gold);border:1px solid rgba(200,169,110,0.4);border-radius:10px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;cursor:pointer;letter-spacing:0.03em;">
              🔁 Reorder
            </button>
          </div>`;
        }).join('');
      }).catch(() => { histEl.innerHTML = '<div style="padding:24px;text-align:center;color:var(--muted);">Could not load orders.</div>'; });
    }).catch(() => {});
  } catch(e) {}
}

// ─────────────────────────────────
// INIT
// ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  checkYearlyReset(); // Reset tierPoints on Jan 1 every year
  updateAuthUI();
  loadTodaysPicks();
  buildHomeScreen();

  // ── Handle ?arrived=1 from curbside SMS link ──
  const _arrivedParam = new URLSearchParams(location.search).get('arrived');
  if (_arrivedParam === '1') {
    // Show arrived confirmation screen
    setTimeout(() => {
      const orderId = new URLSearchParams(location.search).get('order') || '';
      showArrivedScreen(orderId);
    }, 1500); // wait for app to initialize
  }

  // Android back button support
  history.replaceState({ screen: 'home' }, '', location.pathname + location.search);
  window.addEventListener('popstate', (e) => {
    const screen = e.state?.screen || 'home';
    goTo(screen, false);
  });

  // Run checkPaymentResult FIRST before Firebase loads (avoids overwrite)
  const _isPaymentReturn = new URLSearchParams(window.location.search).get('payment') === 'success';
  if (_isPaymentReturn) {
    checkPaymentResult();
    // Don't call goTo('home') - checkPaymentResult shows success screen
  } else {
    goTo('home');
  }

  // Load profile + points from Firebase
  // On payment return: skip points load entirely (Firebase hasn't been updated yet)
  // Instead, load points from Firebase after a longer delay to ensure our save completed first
  const _initUser = getUser();
  if (_initUser?.email) {
    const fbUrl2 = window.location.origin + '/js/firebase-menu.js';

    if (_isPaymentReturn) {
      // Payment just completed — our points save fires at 500ms
      // Wait 3s to load from Firebase so we don't overwrite the fresh local calculation
      setTimeout(() => {
        import(fbUrl2).then(({ loadPointsFromFirebase }) => {
          loadPointsFromFirebase(_initUser.email).then(fbPts => {
            if (fbPts && fbPts.points !== undefined) {
              const user = getUser();
              if (user) {
                // Only update if Firebase value matches what we expect (our save succeeded)
                // Use whichever is more recent — local is fresher here
                const localPts = user.points || 0;
                if (fbPts.points === localPts) {
                  console.log('✅ Firebase points confirmed:', fbPts.points);
                } else {
                  // Firebase has different value — keep the local (just-calculated) value
                  console.log('ℹ️ Keeping local points:', localPts, '(Firebase had:', fbPts.points, ')');
                }
              }
            }
          }).catch(() => {});
        }).catch(() => {});
      }, 3000);

    } else {
      // Normal app load — load points from Firebase immediately
      import(fbUrl2).then(({ loadPointsFromFirebase, loadProfileFromFirebase }) => {
        loadPointsFromFirebase(_initUser.email).then(fbPts => {
          if (fbPts && fbPts.points !== undefined) {
            const user = getUser();
            if (user) {
              user.points     = fbPts.points;
              user.pointsLog  = fbPts.pointsLog || [];
              user.tierPoints = fbPts.tierPoints || 0;
              delete user._needsFirebaseSync;
              localStorage.setItem('prb_user', JSON.stringify(user));
              updateAuthUI();
              buildHomeScreen();
              // Refresh rewards screen if it's currently active
              if (document.getElementById('screen-rewards')?.classList.contains('active')) {
                buildRewardsScreen();
              }
              console.log('✅ Points loaded from Firebase:', fbPts.points);
            }
          } else {
            const user = getUser();
            if (user?.email && user.points >= 0) {
              import(fbUrl2).then(({ savePointsToFirebase }) => {
                savePointsToFirebase(user.email, user.points, user.pointsLog || [], user.tierPoints || 0);
              }).catch(() => {});
            }
          }
        }).catch(e => console.warn('Points load failed:', e));

        // Load profile info
        loadProfileFromFirebase(_initUser.email).then(fbProfile => {
          if (fbProfile) {
            const user = getUser();
            if (user) {
              // Merge profile fields only — never overwrite points/tierPoints from profile doc
              // Points are managed exclusively by savePointsToFirebase/loadPointsFromFirebase
              const merged = {
                ...user,
                firstName: fbProfile.firstName || user.firstName || '',
                lastName:  fbProfile.lastName  || user.lastName  || '',
                phone:     fbProfile.phone     || user.phone     || '',
                address:   fbProfile.address   || '',
                city:      fbProfile.city      || '',
                state:     fbProfile.state     || '',
                zip:       fbProfile.zip       || '',
                // Explicitly keep local points — do NOT use fbProfile.points
                points:    user.points,
                pointsLog: user.pointsLog,
                tierPoints: user.tierPoints,
              };
              localStorage.setItem('prb_user', JSON.stringify(merged));
              localStorage.setItem('prb_profile', JSON.stringify(merged));
              updateAuthUI();
              buildHomeScreen();
            }
          }
        }).catch(() => {});
      }).catch(() => {});
    }
  }

  // Drag-to-scroll for menu tabs
  const tabs = document.querySelector('.menu-tabs');
  if (tabs) {
    let isDown = false, startX, scrollLeft;
    tabs.addEventListener('mousedown', e => { isDown = true; startX = e.pageX - tabs.offsetLeft; scrollLeft = tabs.scrollLeft; });
    tabs.addEventListener('mouseleave', () => { isDown = false; });
    tabs.addEventListener('mouseup', () => { isDown = false; });
    tabs.addEventListener('mousemove', e => { if (!isDown) return; e.preventDefault(); const x = e.pageX - tabs.offsetLeft; tabs.scrollLeft = scrollLeft - (x - startX); });
  }
});
