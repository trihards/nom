const RECIPES = [
{
  id: 'vadouvan-chicken',
  title: 'Vadouvan chicken thighs with pan gravy',
  style: 'Spiced dry rub · cast iron sear · arrowroot pan gravy',
  subtitle: 'Haiga rice · charred broccoli · sweet potato mash',
  preheat: '425°F',
  serves: '1–3',
  tags: ['chicken', 'weeknight', 'phase 1'],
  prepTime: '15 min',
  cookTime: '45 min',

  equipment: [
    { name: '12-inch cast iron skillet',          note: 'for the sear and gravy — needs to be big enough for all the thighs flat' },
    { name: 'Two sheet pans',                      note: 'one for sweet potatoes, one for broccoli' },
    { name: 'Zojirushi rice cooker' },
    { name: 'Meat thermometer',                    note: 'pull thighs at 165°F' },
    { name: 'Small bowl for arrowroot slurry' }
  ],

  mise: [
    { group: 'Chicken', items: [
      { byScale: { 1: '2 boneless skinless chicken thighs',  2: '4 boneless skinless chicken thighs',  3: '6 boneless skinless chicken thighs'  }, note: 'pat dry' },
      { byScale: { 1: '¾ tsp vadouvan',                     2: '1½ tsp vadouvan',                      3: '2¼ tsp vadouvan'                      } },
      { byScale: { 1: '½ tsp garlic granules',              2: '1 tsp garlic granules',                3: '1½ tsp garlic granules'               } },
      { byScale: { 1: '¼ tsp black pepper',                 2: '½ tsp black pepper',                   3: '¾ tsp black pepper'                   } },
      { name: 'Non-iodized sea salt, generous' },
      { name: 'Avocado oil' }
    ]},
    { group: 'Pan gravy', items: [
      { byScale: { 1: '1–2 garlic cloves, minced',          2: '3 garlic cloves, minced',              3: '4–5 garlic cloves, minced'            } },
      { byScale: { 1: '½ cup bone broth',                   2: '1 cup bone broth',                     3: '1½ cups bone broth'                   } },
      { byScale: { 1: '½ tsp Bragg\'s ACV',                 2: '1 tsp Bragg\'s ACV',                   3: '1½ tsp Bragg\'s ACV'                  }, note: 'finish only — set aside separately' },
      { byScale: { 1: '1½ tsp arrowroot + 1 tbsp cold water', 2: '1 tbsp arrowroot + 2 tbsp cold water', 3: '1½ tbsp arrowroot + 3 tbsp cold water' }, note: 'mix now, before anything hits the stove' },
      { name: 'Olive oil splash' }
    ]},
    { group: 'Broccoli', items: [
      { byScale: { 1: '½ large head broccoli, florets',     2: '1 large head broccoli, florets',       3: '1–2 heads broccoli, florets'          } },
      { name: 'Avocado oil + non-iodized sea salt' }
    ]},
    { group: 'Sweet potato mash', items: [
      { byScale: { 1: '1 medium sweet potato, 1-inch cubes', 2: '2 medium sweet potatoes, 1-inch cubes', 3: '3 medium sweet potatoes, 1-inch cubes' } },
      { name: 'Olive oil + non-iodized sea salt' }
    ]},
    { group: 'Rice', items: [
      { byScale: { 1: '1 cup haiga rice, rinsed',           2: '2 cups haiga rice, rinsed',            3: '3 cups haiga rice, rinsed'            } }
    ]}
  ],

  refs: {
    'sp':       { display: 'sweet potatoes',  tips: { 1: '1 medium, 1-inch cubes',       2: '2 medium, 1-inch cubes',       3: '3 medium, 1-inch cubes'       } },
    'oil-toss': { display: 'olive oil',       tips: { 1: 'generous drizzle',             2: 'generous drizzle',             3: 'generous drizzle'             } },
    'rice':     { display: 'rice',            tips: { 1: '1 cup haiga, rinsed',          2: '2 cups haiga, rinsed',         3: '3 cups haiga, rinsed'         } },
    'vadouvan': { display: 'vadouvan',        tips: { 1: '¾ tsp',                        2: '1½ tsp',                       3: '2¼ tsp'                       } },
    'gg':       { display: 'garlic granules', tips: { 1: '½ tsp',                        2: '1 tsp',                        3: '1½ tsp'                       } },
    'pepper':   { display: 'black pepper',   tips: { 1: '¼ tsp',                        2: '½ tsp',                        3: '¾ tsp'                        } },
    'broccoli': { display: 'broccoli',        tips: { 1: '½ large head, large florets',  2: '1 large head, large florets',  3: '1–2 heads, large florets'     } },
    'avo-oil':  { display: 'avocado oil',     tips: { 1: 'thin coat',                   2: 'thin coat',                   3: 'thin coat'                    } },
    'avo-toss': { display: 'avocado oil',     tips: { 1: 'generous drizzle',             2: 'generous drizzle',             3: 'generous drizzle'             } },
    'oil-pan':  { display: 'olive oil',       tips: { 1: 'small splash if dry',          2: 'small splash if dry',          3: 'small splash if dry'          } },
    'garlic':   { display: 'garlic',          tips: { 1: '1–2 cloves, minced',           2: '3 cloves, minced',             3: '4–5 cloves, minced'           } },
    'broth':    { display: 'bone broth',      tips: { 1: '½ cup',                        2: '1 cup',                        3: '1½ cups'                      } },
    'slurry':   { display: 'arrowroot slurry', tips: { 1: '1½ tsp arrowroot + 1 tbsp cold water', 2: '1 tbsp arrowroot + 2 tbsp cold water', 3: '1½ tbsp arrowroot + 3 tbsp cold water' } },
    'acv':      { display: 'ACV',             tips: { 1: '½ tsp, finish only',           2: '1 tsp, finish only',           3: '1½ tsp, finish only'          } },
    'sp-mash':  { display: 'sweet potatoes',  tips: { 1: '1 medium sweet potato',        2: '2 medium sweet potatoes',      3: '3 medium sweet potatoes'      } },
    'oil-mash': { display: 'olive oil',       tips: { 1: 'generous drizzle',             2: 'generous drizzle',             3: 'generous drizzle'             } }
  },

  timers: {
    'sp':       { label: 'Sweet potatoes', preset: 2280, bell: false },
    'rice':     { label: 'Rice',           preset: 2100, bell: false },
    'brocwait': { label: 'Add broccoli',   preset: 960,  bell: true  },
    'broc':     { label: 'Broccoli',       preset: 1320, bell: false },
    's1t':      { label: 'Side 1',         preset: 300,  bell: false },
    's2t':      { label: 'Side 2',         preset: 300,  bell: false },
    'g1':       { label: 'Garlic',         preset: 60,   bell: false },
    'g2':       { label: 'Reduce',         preset: 240,  bell: false },
    'g3':       { label: 'Thicken',        preset: 90,   bell: false }
  },

  steps: [
    {
      label: 'Sweet potatoes + rice',
      text:  'Toss {{sp}} in {{oil-toss}} and salt. Sheet pan into the oven. Start {{rice}} in the Zojirushi. The "add broccoli" timer tells you when to go do step 3.',
      tip:   null,
      timers: ['sp','rice','brocwait']
    },
    {
      label: 'Rub the chicken',
      text:  'Combine {{vadouvan}}, {{gg}}, salt, and {{pepper}}. Rub generously on both sides of all the thighs. Let sit at room temp while you wait.',
      tip:   'Generous means more than you think. Vadouvan fades a bit in the sear.',
      timers: []
    },
    {
      label: 'Broccoli into oven',
      text:  'Toss {{broccoli}} in {{avo-toss}} and salt. Second sheet pan into the oven — start the timer now. You want black edges. Don\'t pull early.',
      tip:   'If you\'re second-guessing whether it\'s done, it isn\'t.',
      timers: ['broc']
    },
    {
      label: 'Sear — side one',
      text:  '12-inch cast iron ripping hot with a thin layer of {{avo-oil}}. Lay thighs flat — don\'t touch them.',
      tip:   'Smoke is fine. Panic is not.',
      timers: ['s1t']
    },
    {
      label: 'Flip — side two',
      text:  'Flip all thighs. Pull at 165°F internal. Rest on a plate, tent loosely.',
      tip:   null,
      timers: ['s2t']
    },
    {
      label: 'Gravy — base',
      text:  'Medium heat, same pan, don\'t wipe it. Splash of {{oil-pan}} if dry. Add {{garlic}} — 60 seconds. Get every bit of vadouvan fond off that pan.',
      tip:   'This is where all the flavor lives. Slow down here.',
      timers: ['g1']
    },
    {
      label: 'Gravy — reduce',
      text:  'Pour in {{broth}}. Scrape up the fond. Reduce by about a third at a steady simmer.',
      tip:   null,
      timers: ['g2']
    },
    {
      label: 'Gravy — thicken + finish',
      text:  'Lower heat to medium-low. Whisk in {{slurry}} gradually. Simmer gently — do not boil hard after it goes in. Finish with {{acv}}, taste, adjust salt.',
      tip:   'ACV is a background note here, not a lead.',
      timers: ['g3']
    },
    {
      label: 'Mash + plate',
      text:  'Pull {{sp-mash}}. Rough mash with {{oil-mash}} and salt — savory only. Plate: rice → thighs → gravy over top → broccoli alongside → mash.',
      tip:   null,
      timers: []
    }
  ]
},

{
  id: 'lamb-blueberry',
  title: 'Lamb loin chops with blueberry-mint sauce',
  style: 'Cast iron sear · blueberry-mint-rosemary reduction · pan drippings',
  subtitle: 'Roasted carrots · arugula & blackberry salad',
  variants: [
    {
      name: 'Grill — indirect then sear',
      notes: 'Set up 2-zone fire. Place chops on indirect side, cover, and cook until internal hits 115°F — about 15–20 min depending on thickness. Move to direct heat for 60–90 sec per side for crust. Pull at 130–135°F and rest 5 min. Sauce and sides unchanged — make the blueberry sauce on the stovetop while the chops are on indirect heat.'
    }
  ],
  preheat: '425°F',
  serves: '1–3',
  tags: ['lamb', 'weekend', 'phase 1'],
  prepTime: '15 min',
  cookTime: '30 min',

  equipment: [
    { name: '12-inch cast iron skillet',        note: 'essential for the crust — get it properly ripping hot' },
    { name: 'Small saucepan',                   note: 'for the blueberry sauce' },
    { name: 'Sheet pan',                        note: 'for the carrots' },
    { name: 'Meat thermometer',                 note: 'pull at 130–135°F for medium-rare' },
    { name: 'Large salad bowl' }
  ],

  mise: [
    { group: 'Lamb', items: [
      { byScale: { 1: '2 lamb loin chops', 2: '4 lamb loin chops', 3: '6 lamb loin chops' }, note: '~1 inch thick, pat dry' },
      { name: 'Non-iodized sea salt, generous' },
      { name: 'Black pepper' },
      { name: 'Avocado oil' }
    ]},
    { group: 'Blueberry-mint sauce', items: [
      { byScale: { 1: '½ cup blueberries',   2: '1 cup blueberries',   3: '1½ cups blueberries'   } },
      { byScale: { 1: '1 tbsp Bragg\'s ACV', 2: '2 tbsp Bragg\'s ACV', 3: '3 tbsp Bragg\'s ACV'   } },
      { byScale: { 1: '½ tbsp bone broth',   2: '1 tbsp bone broth',   3: '1½ tbsp bone broth'    } },
      { byScale: { 1: '1 tsp fresh mint, chiffonade', 2: '2 tsp fresh mint', 3: '1 tbsp fresh mint' } },
      { name: '1 sprig fresh rosemary' },
      { name: 'Salt to taste' }
    ]},
    { group: 'Roasted carrots', items: [
      { byScale: { 1: '2–3 large carrots, bias-cut thick', 2: '4–6 large carrots', 3: '6–8 large carrots' } },
      { name: 'Avocado oil + non-iodized sea salt' }
    ]},
    { group: 'Arugula salad', items: [
      { byScale: { 1: '1 handful arugula', 2: '2 large handfuls arugula', 3: '3 large handfuls arugula' } },
      { byScale: { 1: '¼ English cucumber, thin rounds', 2: '½ English cucumber', 3: '1 English cucumber' } },
      { byScale: { 1: 'Small handful blackberries', 2: 'Large handful blackberries', 3: '2 large handfuls blackberries' } },
      { name: 'Bragg\'s ACV + olive oil, for dressing' }
    ]}
  ],

  refs: {
    'blueberries': { display: 'blueberries',   tips: { 1: '½ cup fresh',    2: '1 cup fresh',    3: '1½ cups fresh'    } },
    'acv-sauce':   { display: 'ACV',           tips: { 1: '1 tbsp',         2: '2 tbsp',         3: '3 tbsp'           } },
    'broth-sauce': { display: 'bone broth',    tips: { 1: '½ tbsp',         2: '1 tbsp',         3: '1½ tbsp'          } },
    'mint':        { display: 'mint',          tips: { 1: '1 tsp chiffonade', 2: '2 tsp chiffonade', 3: '1 tbsp chiffonade' } },
    'carrots':     { display: 'carrots',       tips: { 1: '2–3 large, bias-cut thick', 2: '4–6 large', 3: '6–8 large'  } },
    'avo-oil':     { display: 'avocado oil',   tips: { 1: 'thin coat',      2: 'thin coat',      3: 'thin coat'        } },
    'avo-toss':    { display: 'avocado oil',   tips: { 1: 'generous drizzle', 2: 'generous drizzle', 3: 'generous drizzle' } }
  },

  timers: {
    'carrots': { label: 'Carrots',  preset: 1500, bell: false },
    'l-s1':    { label: 'Side 1',   preset: 240,  bell: false },
    'l-s2':    { label: 'Side 2',   preset: 180,  bell: false },
    'sauce':   { label: 'Sauce',    preset: 300,  bell: false }
  },

  steps: [
    {
      label: 'Carrots into oven',
      text:  'Toss {{carrots}} in {{avo-toss}} and salt. Sheet pan into the 425°F oven. Bias-cut thick — you want caramelized edges, not steamed.',
      tip:   null,
      timers: ['carrots']
    },
    {
      label: 'Season lamb',
      text:  'Pat chops dry. Season both sides generously with salt and pepper. Rest at room temp.',
      tip:   'The crust on lamb loin chops is the whole thing. Wet meat ruins it.',
      timers: []
    },
    {
      label: 'Blueberry sauce',
      text:  'Combine {{blueberries}}, {{acv-sauce}}, {{broth-sauce}}, and rosemary sprig in a small saucepan. Medium heat until berries burst and sauce thickens, stirring occasionally. Off heat, stir in {{mint}}. Remove rosemary. Taste and adjust ACV.',
      tip:   'The sauce should be tart and bright — err on the side of more ACV.',
      timers: ['sauce']
    },
    {
      label: 'Sear — side one',
      text:  'Cast iron ripping hot with {{avo-oil}}. Chops in — good sizzle required. Don\'t touch.',
      tip:   'You want a dark crust, not just color. Push past where you think it should go.',
      timers: ['l-s1']
    },
    {
      label: 'Flip + finish',
      text:  'Flip chops. Second side. Pull at 130–135°F for medium-rare. Rest 5 minutes — non-negotiable.',
      tip:   'Lamb rests fast but the carry-over is real. Don\'t skip it.',
      timers: ['l-s2']
    },
    {
      label: 'Plate',
      text:  'Pull {{carrots}} from oven. Dress arugula and cucumber with ACV and olive oil, add blackberries. Plate: chops → blueberry sauce over top → carrots alongside → salad.',
      tip:   null,
      timers: []
    }
  ]
},

{
  id: 'berry-herb-sauce',
  title: 'Berry-herb reduction sauce',
  style: 'Stovetop reduction · three variants · 15 minutes',
  subtitle: 'Blueberry-mint · strawberry-herb · mixed berry · pairs with lamb or chicken',
  preheat: null,
  serves: '1–3',
  tags: ['sauce', 'make-ahead', 'phase 1'],
  prepTime: '5 min',
  cookTime: '15 min',

  headnote: `<strong>Pick one variant — only prep that group.</strong> Same method across all three: reduce with rosemary and ACV, finish with mint off-heat. <strong>Classic blueberry</strong> is jammy and wine-forward, best body naturally. <strong>Strawberry-blueberry</strong> (2:1 blues to macerated strawberries) is brighter and more aromatic — the maceration liquid is already your sauce base, skip the bone broth. <strong>Pure strawberry</strong> is the sweetest and thinnest; add arrowroot slurry at the end if you want more body.<br><br><strong>Use on:</strong> lamb loin chops (cast iron or grilled) · bone-in pork loin rib chops · pan-seared salmon · drizzled over roasted sweet potato<br><br><em>Keeps 4–5 days refrigerated. Reheat low and slow with a splash of broth to loosen — don't boil or the mint goes flat.</em>`,

  equipment: [
    { name: 'Small saucepan' },
    { name: 'Wooden spoon or silicone spatula' },
    { name: 'Small jar', note: 'if making ahead' }
  ],

  mise: [
    { group: 'Classic blueberry', items: [
      { byScale: { 1: '½ cup fresh blueberries',      2: '1 cup fresh blueberries',      3: '1½ cups fresh blueberries'      } },
      { byScale: { 1: '1 tbsp Bragg\'s ACV',           2: '2 tbsp Bragg\'s ACV',           3: '3 tbsp Bragg\'s ACV'            } },
      { byScale: { 1: '½ tbsp bone broth',             2: '1 tbsp bone broth',             3: '1½ tbsp bone broth'             } },
      { name: '1 sprig fresh rosemary' },
      { byScale: { 1: '1 tsp fresh mint, chiffonade', 2: '2 tsp fresh mint, chiffonade', 3: '1 tbsp fresh mint, chiffonade' } },
      { name: 'Non-iodized sea salt' }
    ]},
    { group: 'Strawberry-blueberry variant (swap for above)', items: [
      { byScale: { 1: '⅓ cup blueberries + ¼ cup macerated strawberries + their liquid', 2: '⅔ cup blueberries + ½ cup macerated strawberries + liquid', 3: '1 cup blueberries + ¾ cup macerated strawberries + liquid' } },
      { byScale: { 1: '1½ tbsp Bragg\'s ACV',          2: '2½ tbsp Bragg\'s ACV',          3: '3½ tbsp Bragg\'s ACV'           }, note: 'start here — sweeter berries need more acid' },
      { name: '1 sprig fresh rosemary' },
      { byScale: { 1: '1 tsp fresh mint, chiffonade', 2: '2 tsp fresh mint, chiffonade', 3: '1 tbsp fresh mint, chiffonade' } },
      { name: 'Non-iodized sea salt' }
    ]},
    { group: 'Pure strawberry variant (swap for above)', items: [
      { byScale: { 1: '½ cup macerated strawberries + their liquid', 2: '1 cup macerated strawberries + liquid', 3: '1½ cups macerated strawberries + liquid' } },
      { byScale: { 1: '1½ tbsp Bragg\'s ACV',          2: '2½ tbsp Bragg\'s ACV',          3: '3½ tbsp Bragg\'s ACV'           }, note: 'sweeter base — lean acid-forward from the start' },
      { byScale: { 1: '1 tsp arrowroot + 1 tbsp cold water', 2: '1½ tsp arrowroot + 1½ tbsp cold water', 3: '2 tsp arrowroot + 2 tbsp cold water' }, note: 'mix now, only use if sauce is too thin at the end' },
      { name: '1 sprig fresh rosemary' },
      { byScale: { 1: '1 tsp fresh mint, chiffonade', 2: '2 tsp fresh mint, chiffonade', 3: '1 tbsp fresh mint, chiffonade' } },
      { name: 'Non-iodized sea salt' }
    ]}
  ],

  refs: {
    'acv':       { display: 'ACV',              tips: { 1: '1–1½ tbsp',                       2: '2–2½ tbsp',                        3: '3–3½ tbsp'                        } },
    'mint':      { display: 'mint',             tips: { 1: '1 tsp chiffonade',                 2: '2 tsp chiffonade',                 3: '1 tbsp chiffonade'                } },
    'broth':     { display: 'bone broth',       tips: { 1: '½ tbsp (classic only)',            2: '1 tbsp (classic only)',            3: '1½ tbsp (classic only)'           } },
    'arrowroot': { display: 'arrowroot slurry', tips: { 1: '1 tsp + 1 tbsp cold water',        2: '1½ tsp + 1½ tbsp cold water',     3: '2 tsp + 2 tbsp cold water'        } }
  },

  timers: {
    'reduce': { label: 'Reduce', preset: 720, bell: true }
  },

  steps: [
    {
      label: 'Build the base',
      text:  'Berries (and any maceration liquid) into the saucepan. Add rosemary sprig, {{acv}}, and a pinch of salt. Classic blueberry: add {{broth}}. Strawberry variants: skip the broth — the maceration liquid covers it.',
      tip:   'Strawberry-blueberry: add the ACV now rather than adjusting at the end so it can cook in and mellow. The macerated strawberries are sweeter than straight blueberries and the sauce needs that acid built in from the start.',
      timers: []
    },
    {
      label: 'Reduce',
      text:  'Medium heat. Bring to a strong simmer. Stir occasionally. Reduce by about half until syrupy — 10–12 minutes. Classic blueberry will look jammy and glossy. Strawberry-blueberry goes deep red and slightly thinner.',
      tip:   'Pure strawberry: if it\'s too thin at the end, stir in {{arrowroot}} dissolved in cold water off heat. Thickens almost immediately — don\'t reboil after or it gets gluey.',
      timers: ['reduce']
    },
    {
      label: 'Finish and taste',
      text:  'Off heat. Fish out the rosemary. Taste: should be tart-bright, not candy-sweet. Add more {{acv}} if it needs it. Tear in {{mint}} and stir through.',
      tip:   'The mint is structural. Add it last, off heat, so it stays vivid. Don\'t skip it.',
      timers: []
    },
    {
      label: 'If making ahead',
      text:  'Pour into a jar. Cool uncovered to room temp, then seal and refrigerate. Keeps 4–5 days. To reheat: low heat with a splash of bone broth or water. Don\'t boil — it dulls the mint and tightens the texture.',
      tip:   null,
      timers: []
    }
  ]
},

{
  id: 'beef-bowl-guac',
  title: '7-Layer I\'m Fine',
  style: 'Seared ground beef · cold assembly · big bowl energy',
  subtitle: 'Arugula · guac · coconut yogurt crema · plantain chips',
  preheat: null,
  serves: '1–3',
  tags: ['beef', 'weeknight', 'phase 1'],
  prepTime: '15 min',
  cookTime: '15 min',

  equipment: [
    { name: '10- or 12-inch skillet or cast iron', note: 'needs to get hot enough to brown, not steam' },
    { name: 'Large bowl',                          note: 'for the cabbage — you\'ll scrunch it in here' },
    { name: 'Small bowl',                          note: 'for the yogurt crema' }
  ],

  mise: [
    { group: 'Quick-pickled cabbage', items: [
      { byScale: { 1: '1½ cups green cabbage, thinly sliced',  2: '3 cups green cabbage, thinly sliced',  3: '4–5 cups green cabbage, thinly sliced'  }, note: 'as thin as you can get it' },
      { byScale: { 1: '¼ small red onion, thinly sliced',      2: '½ red onion, thinly sliced',           3: '¾ red onion, thinly sliced'             }, note: 'half goes in the pickle, half stays fresh for topping' },
      { byScale: { 1: '1 tbsp Bragg\'s ACV',                   2: '2 tbsp Bragg\'s ACV',                  3: '3 tbsp Bragg\'s ACV'                    } },
      { byScale: { 1: '¼ tsp raw sugar',                       2: '½ tsp raw sugar',                      3: '¾ tsp raw sugar'                        } },
      { name: 'Non-iodized sea salt, for scrunching' }
    ]},
    { group: 'Coconut yogurt crema', items: [
      { byScale: { 1: '3 tbsp plain coconut yogurt',           2: '6 tbsp plain coconut yogurt',          3: '½ cup plain coconut yogurt'             } },
      { byScale: { 1: '½ tsp Bragg\'s ACV',                    2: '1 tsp Bragg\'s ACV',                   3: '1½ tsp Bragg\'s ACV'                    } },
      { name: 'Pinch garlic granules' },
      { name: 'Pinch cumin' },
      { name: 'Non-iodized sea salt' }
    ]},
    { group: 'Seasoned ground beef', items: [
      { byScale: { 1: '½ lb ground beef',                      2: '1 lb ground beef',                     3: '1½ lbs ground beef'                     } },
      { byScale: { 1: '¼ tsp whole fennel seeds',              2: '½ tsp whole fennel seeds',             3: '¾ tsp whole fennel seeds'               }, note: 'toasted dry in the pan first' },
      { byScale: { 1: '½ tsp cumin',                           2: '1 tsp cumin',                          3: '1½ tsp cumin'                           } },
      { byScale: { 1: '½ tsp coriander',                       2: '1 tsp coriander',                      3: '1½ tsp coriander'                       } },
      { byScale: { 1: '½ tsp garlic granules',                 2: '1 tsp garlic granules',                3: '1½ tsp garlic granules'                 } },
      { byScale: { 1: '¼ tsp Mexican oregano',                 2: '½ tsp Mexican oregano',                3: '¾ tsp Mexican oregano'                  } },
      { name: 'Small pinch mushroom umami powder' },
      { name: 'Black pepper + non-iodized sea salt' },
      { name: 'Avocado oil' },
      { name: 'Splash coconut aminos' },
      { name: 'Small splash Bragg\'s ACV', note: 'finish only' }
    ]},
    { group: 'Bowl build', items: [
      { byScale: { 1: '1 large handful arugula',               2: '2 large handfuls arugula',             3: '3 large handfuls arugula'               } },
      { name: 'Guac — leftover or fresh, cold is fine' },
      { name: 'Plantain chips' },
      { name: 'Fresh cilantro' },
      { name: 'Green onion, sliced' },
      { name: 'Sumac, for dusting' }
    ]}
  ],

  refs: {
    'cabbage':    { display: 'cabbage',         tips: { 1: '1½ cups, thinly sliced',                         2: '3 cups, thinly sliced',                         3: '4–5 cups, thinly sliced'                        } },
    'red-onion':  { display: 'red onion',       tips: { 1: '¼ small — half to pickle, half fresh',           2: '½ onion — half to pickle, half fresh',           3: '¾ onion — half to pickle, half fresh'            } },
    'acv-pickle': { display: 'ACV',             tips: { 1: '1 tbsp',                                         2: '2 tbsp',                                         3: '3 tbsp'                                          } },
    'sugar':      { display: 'raw sugar',       tips: { 1: '¼ tsp',                                          2: '½ tsp',                                          3: '¾ tsp'                                           } },
    'yogurt':     { display: 'coconut yogurt',  tips: { 1: '3 tbsp',                                         2: '6 tbsp',                                         3: '½ cup'                                           } },
    'acv-crema':  { display: 'ACV',             tips: { 1: '½ tsp',                                          2: '1 tsp',                                          3: '1½ tsp'                                          } },
    'beef':       { display: 'ground beef',     tips: { 1: '½ lb',                                           2: '1 lb',                                           3: '1½ lbs'                                          } },
    'fennel':     { display: 'fennel seeds',    tips: { 1: '¼ tsp whole',                                    2: '½ tsp whole',                                    3: '¾ tsp whole'                                     } },
    'cumin':      { display: 'cumin',           tips: { 1: '½ tsp',                                          2: '1 tsp',                                          3: '1½ tsp'                                          } },
    'coriander':  { display: 'coriander',       tips: { 1: '½ tsp',                                          2: '1 tsp',                                          3: '1½ tsp'                                          } },
    'garlic-g':   { display: 'garlic granules', tips: { 1: '½ tsp',                                          2: '1 tsp',                                          3: '1½ tsp'                                          } },
    'oregano':    { display: 'Mexican oregano', tips: { 1: '¼ tsp',                                          2: '½ tsp',                                          3: '¾ tsp'                                           } },
    'aminos':     { display: 'coconut aminos',  tips: { 1: 'small splash',                                   2: 'small splash',                                   3: 'small splash'                                    } },
    'acv-beef':   { display: 'ACV',             tips: { 1: 'small splash, finish only',                      2: 'small splash, finish only',                      3: 'small splash, finish only'                       } },
    'arugula':    { display: 'arugula',         tips: { 1: '1 large handful',                                2: '2 large handfuls',                               3: '3 large handfuls'                                } }
  },

  timers: {
    'pickle': { label: 'Pickle rest', preset: 900, bell: true }
  },

  steps: [
    {
      label: 'Start the pickle',
      text:  'Thinly slice {{cabbage}}. Slice {{red-onion}} — half goes in now, half set aside for fresh topping. Combine cabbage and pickle half of onion in your large bowl. Generous pinch of salt, then scrunch hard with your hands for a full minute until the cabbage starts to weep. Add {{acv-pickle}} and {{sugar}}, toss to coat. Set aside — the bell tells you when it\'s ready.',
      tip:   'The scrunch step matters. You\'re breaking down the cell walls so the acid can do its job. Don\'t shortcut it.',
      timers: ['pickle']
    },
    {
      label: 'Make the crema',
      text:  'Combine {{yogurt}}, {{acv-crema}}, a pinch of garlic granules, a pinch of cumin, and salt. Stir and taste — should be tangy and savory. Adjust ACV and salt. Set aside.',
      tip:   null,
      timers: []
    },
    {
      label: 'Toast fennel + cook beef',
      text:  'Dry skillet over medium-high. Add {{fennel}} — toast 30–45 seconds until fragrant, shaking the pan. Add a thin layer of avocado oil and the {{beef}}. Break it up fine — crumbles, not chunks. Season with {{cumin}}, {{coriander}}, {{garlic-g}}, {{oregano}}, mushroom umami powder, salt, and pepper. Once cooked through, deglaze with {{aminos}} and {{acv-beef}} — let it reduce into the meat for 30 seconds.',
      tip:   'Higher heat than you think. You want browning, not steaming. Crumbles need surface contact with the pan.',
      timers: []
    },
    {
      label: 'Assemble',
      text:  'Drain any excess liquid from the pickle. Build the bowl: {{arugula}} base → hot beef → guac spooned generously → crema → pickled cabbage → reserved fresh red onion → cilantro and green onion → heavy dusting of sumac over everything. Plantain chips on top or alongside.',
      tip:   'Hot beef under cold guac is intentional — it softens slightly and the fat melds. Don\'t pre-mix.',
      timers: []
    }
  ]
},

{
  id: 'latin-avo-smash',
  title: 'Latin avo smash with chicken',
  style: 'Quick sauté · Latin-spiced · 20 minutes',
  subtitle: 'Wilted spinach · rough guac · plantain chips',
  preheat: null,
  serves: '1–3',
  tags: ['chicken', 'quick', 'phase 1'],
  prepTime: '10 min',
  cookTime: '20 min',

  equipment: [
    { name: '10-inch carbon steel skillet', note: 'needs to get ripping hot — this is the whole move' },
    { name: 'Bowl for guac' },
    { name: 'Fork or potato masher',        note: 'rough mash only, not smooth' }
  ],

  mise: [
    { group: 'Spiced chicken', items: [
      { byScale: { 1: '260g / ½ lb boneless chicken thighs, 1-inch chunks', 2: '520g / 1 lb boneless chicken thighs, 1-inch chunks', 3: '780g / 1½ lbs boneless chicken thighs, 1-inch chunks' } },
      { byScale: { 1: '½ tsp cumin',          2: '1 tsp cumin',          3: '1½ tsp cumin'          } },
      { byScale: { 1: '½ tsp coriander',      2: '1 tsp coriander',      3: '1½ tsp coriander'      } },
      { byScale: { 1: '½ tsp sumac',          2: '1 tsp sumac',          3: '1½ tsp sumac'          } },
      { byScale: { 1: '½ tsp garlic granules',2: '1 tsp garlic granules',3: '1½ tsp garlic granules'} },
      { name: 'Non-iodized sea salt, generous' },
      { name: 'Olive oil' }
    ]},
    { group: 'Rough guac', items: [
      { byScale: { 1: '1 large avocado',                       2: '2 avocados',                       3: '3 avocados'                       } },
      { byScale: { 1: '¼ white or yellow onion, diced fine',   2: '½ onion, diced fine',              3: '¾ onion, diced fine'              } },
      { byScale: { 1: 'Small handful cilantro, rough chop',    2: 'Medium handful cilantro',          3: 'Large handful cilantro'           } },
      { byScale: { 1: '1 tsp Bragg\'s ACV',                    2: '2 tsp Bragg\'s ACV',               3: '1 tbsp Bragg\'s ACV'              } },
      { name: 'Non-iodized sea salt' }
    ]},
    { group: 'Spinach + finish', items: [
      { byScale: { 1: '2 large handfuls spinach',              2: '4 large handfuls spinach',         3: '6 large handfuls spinach'         } },
      { name: 'Olive oil, for finishing drizzle' },
      { name: 'Plantain chips' }
    ]}
  ],

  refs: {
    'chicken':   { display: 'chicken thighs',  tips: { 1: '260g / ½ lb, 1-inch chunks',     2: '520g / 1 lb, 1-inch chunks',      3: '780g / 1½ lbs, 1-inch chunks'     } },
    'cumin':     { display: 'cumin',           tips: { 1: '½ tsp',                           2: '1 tsp',                           3: '1½ tsp'                           } },
    'coriander': { display: 'coriander',       tips: { 1: '½ tsp',                           2: '1 tsp',                           3: '1½ tsp'                           } },
    'sumac':     { display: 'sumac',           tips: { 1: '½ tsp',                           2: '1 tsp',                           3: '1½ tsp'                           } },
    'garlic-g':  { display: 'garlic granules', tips: { 1: '½ tsp',                           2: '1 tsp',                           3: '1½ tsp'                           } },
    'avo':       { display: 'avocado',         tips: { 1: '1 large',                         2: '2 avocados',                      3: '3 avocados'                       } },
    'onion':     { display: 'onion',           tips: { 1: '¼ onion, diced fine',             2: '½ onion, diced fine',             3: '¾ onion, diced fine'              } },
    'cilantro':  { display: 'cilantro',        tips: { 1: 'small handful, rough chop',       2: 'medium handful, rough chop',      3: 'large handful, rough chop'        } },
    'acv':       { display: 'ACV',             tips: { 1: '1 tsp',                           2: '2 tsp',                           3: '1 tbsp'                           } },
    'spinach':   { display: 'spinach',         tips: { 1: '2 large handfuls',                2: '4 large handfuls',                3: '6 large handfuls'                 } }
  },

  timers: {
    'sear':    { label: 'Sear',    preset: 240, bell: false },
    'finish':  { label: 'Finish',  preset: 180, bell: false },
    'spinach': { label: 'Spinach', preset: 30,  bell: true  }
  },

  steps: [
    {
      label: 'Season chicken',
      text:  'Cut {{chicken}} into rough 1-inch chunks. Toss with {{cumin}}, {{coriander}}, {{sumac}}, {{garlic-g}}, and a generous amount of salt. The sumac is doing citrus-adjacent work here — don\'t be shy with it.',
      tip:   null,
      timers: []
    },
    {
      label: 'Make the guac',
      text:  'Rough-mash {{avo}} with a fork — texture, not smooth. Fold in {{onion}}, {{cilantro}}, {{acv}}, and salt. Taste and adjust. Set aside.',
      tip:   'You want chunks. This is a base, not a dip.',
      timers: []
    },
    {
      label: 'Sear — don\'t touch',
      text:  'Carbon steel ripping hot with olive oil. {{chicken}} in — spread out, don\'t crowd. Do not touch it.',
      tip:   'If it\'s not sizzling aggressively on contact, the pan isn\'t hot enough and you\'re about to steam your chicken. Pull it out, wait longer.',
      timers: ['sear']
    },
    {
      label: 'Toss + finish',
      text:  'Toss the chicken, finish cooking through. Total time 6–8 minutes. Pull and set aside.',
      tip:   null,
      timers: ['finish']
    },
    {
      label: 'Wilt spinach',
      text:  '{{spinach}} straight into the same pan — don\'t wipe it, those drippings are the seasoning. 30 seconds, toss once.',
      tip:   'Don\'t walk away. Spinach goes from perfect to sad in about 15 extra seconds.',
      timers: ['spinach']
    },
    {
      label: 'Plate',
      text:  'Guac on the bottom. Wilted spinach over the guac. Chicken on top. Drizzle of olive oil to finish. The spiced drippings will run down into the guac — that\'s the point. Plantain chips alongside.',
      tip:   null,
      timers: []
    }
  ]
},

{
  id: 'black-pepper-garlic-chicken',
  title: 'Black Pepper Garlic Chicken',
  style: 'Wok-style · aggressive black pepper · garlic-forward',
  subtitle: 'Gai lan in garlic oil · jasmine rice',
  preheat: null,
  serves: '1–3',
  tags: ['chicken', 'weeknight', 'phase 1'],
  prepTime: '20 min',
  cookTime: '30 min',

  equipment: [
    { name: '12-inch cast iron or carbon steel skillet', note: 'does everything — garlic fry, chicken sear, gai lan finish, all in sequence' },
    { name: 'Zojirushi rice cooker' },
    { name: 'Small bowl',                               note: 'for the sauce — mix before the stove turns on' },
    { name: 'Slotted spoon',                            note: 'for pulling the garlic — have it ready before garlic goes in' },
    { name: 'Meat thermometer',                         note: 'optional — thighs are forgiving, pull at 165°F' }
  ],

  mise: [
    { group: 'Rice', items: [
      { byScale: { 1: '1 cup jasmine rice, rinsed', 2: '2 cups jasmine rice, rinsed', 3: '3 cups jasmine rice, rinsed' } }
    ]},
    { group: 'Velveted chicken', items: [
      { byScale: { 1: '2 boneless chicken thighs, 1½-inch chunks', 2: '4 boneless chicken thighs, 1½-inch chunks', 3: '6 boneless chicken thighs, 1½-inch chunks' }, note: 'cut before marinating' },
      { byScale: { 1: '1 tbsp coconut aminos',       2: '2 tbsp coconut aminos',       3: '3 tbsp coconut aminos'       } },
      { byScale: { 1: '1½ tsp arrowroot',            2: '1 tbsp arrowroot',            3: '1½ tbsp arrowroot'           } },
      { byScale: { 1: '½-inch fresh ginger, grated', 2: '¾-inch fresh ginger, grated', 3: '1-inch fresh ginger, grated' }, note: 'or ¼ tsp ground ginger from the drawer' },
      { name: 'Drizzle avocado oil' }
    ]},
    { group: 'Sauce', items: [
      { byScale: { 1: '2 tbsp coconut aminos',               2: '3 tbsp coconut aminos',               3: '4 tbsp coconut aminos'               } },
      { byScale: { 1: '1 tsp Bragg\'s ACV',                  2: '1½ tsp Bragg\'s ACV',                 3: '2 tsp Bragg\'s ACV'                  } },
      { byScale: { 1: '½ tsp mushroom umami powder',         2: '1 tsp mushroom umami powder',         3: '1½ tsp mushroom umami powder'        } },
      { byScale: { 1: '¾ tsp coarsely ground black pepper',  2: '1½ tsp coarsely ground black pepper', 3: '2 tsp coarsely ground black pepper'  }, note: 'the star — more than you think' },
      { byScale: { 1: '¼ tsp ground white pepper',           2: '½ tsp ground white pepper',           3: '¾ tsp ground white pepper'           } },
      { name: 'Pinch raw sugar' },
      { name: '¼ tsp Chinese five spice', note: 'optional — ghost note only, do not double it' }
    ]},
    { group: 'Aromatics & veg', items: [
      { byScale: { 1: '8 large garlic cloves, thinly sliced',   2: '12 large garlic cloves, thinly sliced',  3: '16 large garlic cloves, thinly sliced'   }, note: 'Costco colossal cloves — size matters for even frying' },
      { byScale: { 1: '1 shallot, sliced',                      2: '2 shallots, sliced',                     3: '3 shallots, sliced'                      } },
      { byScale: { 1: '1 cup shiitake mushrooms, sliced thick',  2: '2 cups shiitake mushrooms, sliced thick', 3: '3 cups shiitake mushrooms, sliced thick' }, note: 'thick slices only — thin ones disappear' },
      { name: 'Avocado oil — enough to shallow-fry the garlic' },
      { byScale: { 1: '3–4 green onions, sliced',               2: '5–6 green onions, sliced',               3: '7–8 green onions, sliced'                }, note: 'finish garnish — set aside now' }
    ]},
    { group: 'Gai lan', items: [
      { byScale: { 1: '1 bunch gai lan, stems halved',       2: '1 large bunch gai lan, stems halved',   3: '2 bunches gai lan, stems halved'        }, note: 'dry it well — wet gai lan steams instead of chars' },
      { name: 'Splash coconut aminos' },
      { name: 'Splash Bragg\'s ACV' },
      { name: 'Pinch mushroom umami powder' }
    ]}
  ],

  refs: {
    'rice':        { display: 'jasmine rice',   tips: { 1: '1 cup, rinsed',                         2: '2 cups, rinsed',                         3: '3 cups, rinsed'                         } },
    'chicken':     { display: 'chicken',        tips: { 1: '2 thighs, 1½-inch chunks',              2: '4 thighs, 1½-inch chunks',               3: '6 thighs, 1½-inch chunks'               } },
    'aminos-v':    { display: 'coconut aminos', tips: { 1: '1 tbsp (velvet)',                        2: '2 tbsp (velvet)',                         3: '3 tbsp (velvet)'                        } },
    'arrowroot':   { display: 'arrowroot',      tips: { 1: '1½ tsp',                                2: '1 tbsp',                                 3: '1½ tbsp'                                } },
    'ginger':      { display: 'fresh ginger',   tips: { 1: '½-inch, grated',                        2: '¾-inch, grated',                         3: '1-inch, grated'                         } },
    'all-sauce':   { display: 'sauce',          tips: { 1: '2 tbsp aminos · 1 tsp ACV · ¾ tsp black pepper', 2: '3 tbsp aminos · 1½ tsp ACV · 1½ tsp black pepper', 3: '4 tbsp aminos · 2 tsp ACV · 2 tsp black pepper' } },
    'garlic':      { display: 'garlic',         tips: { 1: '8 large cloves, thinly sliced',         2: '12 large cloves, thinly sliced',         3: '16 large cloves, thinly sliced'         } },
    'avo-oil':     { display: 'avocado oil',    tips: { 1: 'enough to shallow-fry',                 2: 'enough to shallow-fry',                  3: 'enough to shallow-fry'                  } },
    'shiitakes':   { display: 'shiitakes',      tips: { 1: '1 cup, sliced thick',                   2: '2 cups, sliced thick',                   3: '3 cups, sliced thick'                   } },
    'shallots':    { display: 'shallots',       tips: { 1: '1 shallot, sliced',                     2: '2 shallots, sliced',                     3: '3 shallots, sliced'                     } },
    'gai-lan':     { display: 'gai lan',        tips: { 1: '1 bunch, stems halved',                 2: '1 large bunch, stems halved',            3: '2 bunches, stems halved'                } },
    'green-onion': { display: 'green onion',    tips: { 1: '3–4 stalks, sliced',                    2: '5–6 stalks, sliced',                     3: '7–8 stalks, sliced'                     } }
  },

  timers: {
    'rice':    { label: 'Rice',         preset: 2100, bell: false },
    'velvet':  { label: 'Velvet rest',  preset: 900,  bell: true  },
    'garlic':  { label: 'Watch garlic', preset: 120,  bell: true  },
    'sear-1':  { label: 'Side 1',       preset: 150,  bell: false },
    'sear-2':  { label: 'Side 2',       preset: 150,  bell: false },
    'lacquer': { label: 'Lacquer',      preset: 90,   bell: false },
    'gai-lan': { label: 'Gai lan',      preset: 90,   bell: true  }
  },

  steps: [
    {
      label: 'Rice + velvet',
      text:  'Start {{rice}} in the Zojirushi. Cut and toss {{chicken}} with {{aminos-v}}, {{arrowroot}}, {{ginger}}, and a drizzle of avocado oil — every chunk should look shiny. Set the velvet timer and prep everything else while it marinates.',
      tip:   'The arrowroot does two things: tenderizes the chicken and gives you that glossy restaurant coating when the sauce hits.',
      timers: ['rice', 'velvet']
    },
    {
      label: 'Mix the sauce',
      text:  'Combine all sauce ingredients in a small bowl. Stir and taste — it should be aggressively peppery and savory. If the black pepper isn\'t a little alarming, add more. Set it where you can grab it without turning around.',
      tip:   null,
      timers: []
    },
    {
      label: 'Fry the garlic',
      text:  'Heat a generous pour of {{avo-oil}} in your pan over medium — enough to shallow-fry. When shimmering, add {{garlic}} and stir immediately. Watch it the whole time. You want deep golden, not blonde, not brown. The timer is a guide; your eyes are the actual timer.',
      tip:   'Have the slotted spoon in your hand before the garlic goes in. Thirty seconds is the difference between perfect and wrecked.',
      timers: ['garlic']
    },
    {
      label: 'Pull garlic + sear chicken',
      text:  'Scoop {{garlic}} onto a paper towel — you now have garlic-infused oil. Crank heat to high. Add {{chicken}} in batches — do not crowd the pan, do not touch them.',
      tip:   'Batches are non-negotiable. One crowded pan of steamed chicken ruins the whole thing.',
      timers: ['sear-1']
    },
    {
      label: 'Flip + rest',
      text:  'Flip all pieces. Second side. Pull and rest on a plate when cooked through.',
      tip:   null,
      timers: ['sear-2']
    },
    {
      label: 'Mushrooms + lacquer',
      text:  'Drop to medium-high. Add {{shiitakes}} and {{shallots}} to the garlic oil — let shiitakes blister, about 2 minutes. Return {{chicken}}. Pour {{all-sauce}} over everything and toss to coat. Let it reduce and lacquer. Off heat. Pile on the fried garlic and {{green-onion}}.',
      tip:   'If it looks greasy, add a tablespoon of water and toss hard — that\'s the emulsification fix. Keep it moving and it\'ll coat.',
      timers: ['lacquer']
    },
    {
      label: 'Gai lan',
      text:  'Same pan, no wipe, medium-high. {{gai-lan}} in — stems first, leaves after 30 seconds. Let them char. Splash of coconut aminos, splash of ACV, pinch of mushroom umami powder. Toss and pull.',
      tip:   'You want black edges on the stems. Don\'t add liquid until the very end or you\'ll steam it.',
      timers: ['gai-lan']
    },
    {
      label: 'Plate',
      text:  'Rice base. Chicken over rice with all the sauce. Gai lan alongside. Pile the fried garlic on top — it\'s not optional.',
      tip:   null,
      timers: []
    }
  ]
},

{
  id: 'bavette-beef-broccoli',
  title: 'Bavette Beef & Broccoli',
  style: 'High-heat carbon steel · five spice marinade · takeout energy',
  subtitle: 'Jasmine rice',
  preheat: null,
  serves: '1–3',
  tags: ['beef', 'weeknight', 'phase 1'],
  prepTime: '15 min',
  cookTime: '30 min',

  equipment: [
    { name: '10-inch carbon steel skillet', note: 'needs to get ripping hot — this is wok technique in a flat pan' },
    { name: 'Small pot',                    note: 'for blanching the broccoli' },
    { name: 'Zojirushi rice cooker' },
    { name: 'Small bowl',                   note: 'for the sauce — mix before anything hits the stove' },
    { name: 'Sharp knife',                  note: 'bavette grain can shift almost 90° mid-steak — stay vigilant' }
  ],

  mise: [
    { group: 'Rice', items: [
      { byScale: { 1: '1 cup jasmine rice, rinsed', 2: '2 cups jasmine rice, rinsed', 3: '3 cups jasmine rice, rinsed' } }
    ]},
    { group: 'Beef & marinade', items: [
      { byScale: { 1: '6 oz bavette steak',  2: '12 oz bavette steak',  3: '18 oz bavette steak'  }, note: 'slice thin, bias cut, against the grain — watch for grain direction shifts mid-steak' },
      { byScale: { 1: '1 tbsp coconut aminos', 2: '2 tbsp coconut aminos', 3: '3 tbsp coconut aminos' } },
      { byScale: { 1: '½ tbsp arrowroot',    2: '1 tbsp arrowroot',     3: '1½ tbsp arrowroot'    } },
      { byScale: { 1: '⅛ tsp Chinese five spice', 2: '¼ tsp Chinese five spice', 3: '⅓ tsp Chinese five spice' }, note: 'it\'s loud — do not go higher' }
    ]},
    { group: 'Sauce', items: [
      { byScale: { 1: '1½ tbsp coconut aminos', 2: '3 tbsp coconut aminos', 3: '4½ tbsp coconut aminos' } },
      { byScale: { 1: '3 tbsp bone broth',   2: '⅓ cup bone broth',     3: '½ cup bone broth'     } },
      { byScale: { 1: '½ tsp arrowroot',     2: '1 tsp arrowroot',      3: '1½ tsp arrowroot'     } },
      { byScale: { 1: '½ tsp Bragg\'s ACV',  2: '1 tsp Bragg\'s ACV',   3: '1½ tsp Bragg\'s ACV'  } },
      { byScale: { 1: '¼ tsp black garlic salt', 2: '½ tsp black garlic salt', 3: '¾ tsp black garlic salt' } },
      { byScale: { 1: '⅛ tsp mushroom umami powder', 2: '¼ tsp mushroom umami powder', 3: '⅓ tsp mushroom umami powder' } }
    ]},
    { group: 'Veg & aromatics', items: [
      { byScale: { 1: '2 cups broccoli florets', 2: '4 cups broccoli florets', 3: '6 cups broccoli florets' } },
      { byScale: { 1: '2 garlic cloves, minced', 2: '4 garlic cloves, minced', 3: '6 garlic cloves, minced' } },
      { name: 'Avocado oil' },
      { byScale: { 1: '¼ tsp sumac',         2: '½ tsp sumac',          3: '¾ tsp sumac'          }, note: 'finishing only — set aside for the table' }
    ]}
  ],

  refs: {
    'rice':        { display: 'jasmine rice',   tips: { 1: '1 cup, rinsed',                     2: '2 cups, rinsed',                     3: '3 cups, rinsed'                     } },
    'beef':        { display: 'bavette',        tips: { 1: '6 oz, thinly sliced against grain', 2: '12 oz, thinly sliced against grain', 3: '18 oz, thinly sliced against grain' } },
    'aminos-m':    { display: 'coconut aminos', tips: { 1: '1 tbsp (marinade)',                  2: '2 tbsp (marinade)',                  3: '3 tbsp (marinade)'                  } },
    'arrowroot-m': { display: 'arrowroot',      tips: { 1: '½ tbsp (marinade)',                  2: '1 tbsp (marinade)',                  3: '1½ tbsp (marinade)'                 } },
    'five-spice':  { display: 'five spice',     tips: { 1: '⅛ tsp',                             2: '¼ tsp',                              3: '⅓ tsp'                              } },
    'broccoli':    { display: 'broccoli',       tips: { 1: '2 cups florets',                    2: '4 cups florets',                     3: '6 cups florets'                     } },
    'garlic':      { display: 'garlic',         tips: { 1: '2 cloves, minced',                  2: '4 cloves, minced',                   3: '6 cloves, minced'                   } },
    'all-sauce':   { display: 'sauce',          tips: { 1: '1½ tbsp aminos · 3 tbsp broth · ½ tsp arrowroot · ½ tsp ACV', 2: '3 tbsp aminos · ⅓ cup broth · 1 tsp arrowroot · 1 tsp ACV', 3: '4½ tbsp aminos · ½ cup broth · 1½ tsp arrowroot · 1½ tsp ACV' } },
    'sumac':       { display: 'sumac',          tips: { 1: '¼ tsp',                             2: '½ tsp',                              3: '¾ tsp'                              } }
  },

  timers: {
    'rice':     { label: 'Rice',     preset: 2100, bell: false },
    'marinate': { label: 'Marinate', preset: 600,  bell: true  },
    'blanch':   { label: 'Blanch',   preset: 90,   bell: true  },
    'sear-1':   { label: 'Side 1',   preset: 75,   bell: false },
    'sear-2':   { label: 'Side 2',   preset: 75,   bell: false },
    'sauce':    { label: 'Sauce',    preset: 45,   bell: true  }
  },

  steps: [
    {
      label: 'Rice + marinate',
      text:  'Start {{rice}} in the Zojirushi. Slice {{beef}} thin on the bias against the grain. Toss with {{aminos-m}}, {{arrowroot-m}}, and {{five-spice}}. Set the marinate timer and prep everything else.',
      tip:   'Bavette\'s grain can rotate almost 90° mid-steak. Keep checking as you slice or you\'ll get chewy instead of silky.',
      timers: ['rice', 'marinate']
    },
    {
      label: 'Mix the sauce',
      text:  'Whisk all sauce ingredients together in a small bowl until arrowroot is fully dissolved. Set it right next to the stove — it goes in fast and you won\'t have time to look for it.',
      tip:   'The sauce thickens almost instantly once it hits the hot pan. Pre-mixed and within arm\'s reach is non-negotiable.',
      timers: []
    },
    {
      label: 'Blanch the broccoli',
      text:  'Boil {{broccoli}} for 90 seconds. Drain well and set aside. This is what separates char from steamed sadness — pre-cooked florets take color in the hot pan instead of weeping.',
      tip:   null,
      timers: ['blanch']
    },
    {
      label: 'Sear the beef',
      text:  'Carbon steel ripping hot with avocado oil. {{beef}} in a single layer — don\'t touch it. You need dark color, not gray.',
      tip:   'If the pan isn\'t smoking when the beef hits, it\'s not hot enough. Pull it out and wait.',
      timers: ['sear-1']
    },
    {
      label: 'Flip + rest',
      text:  'Flip, second side. Do a second batch if needed — don\'t crowd. Pull and rest.',
      tip:   null,
      timers: ['sear-2']
    },
    {
      label: 'Sauce + broccoli',
      text:  'Drop to medium-high. Add a splash of oil if dry. Add {{garlic}} — 30 seconds. Add {{broccoli}}, toss in the garlic. Pour in the {{all-sauce}} — it will thicken fast. Keep tossing.',
      tip:   'If the sauce over-thickens, a splash of bone broth loosens it right back up.',
      timers: ['sauce']
    },
    {
      label: 'Combine + plate',
      text:  'Return {{beef}}, fold everything together, 30 more seconds. Taste — add a small splash more ACV if it needs lift. Plate over rice. Hit it with {{sumac}} at the table.',
      tip:   'The sumac at the end is doing more than you think — it\'s the brightness that makes it feel complete.',
      timers: []
    }
  ]
}
,

{
  id: 'beef-chuck-stew',
  title: 'Beef chuck stew',
  style: 'Dutch oven braise · cassava flour roux · 3 hours',
  subtitle: 'Mashed rutabaga',
  preheat: '325°F',
  serves: '2+',
  tags: ['beef', 'weekend', 'phase 1'],
  prepTime: '20 min',
  cookTime: '3 hrs',

  equipment: [
    { name: 'Large enameled Dutch oven (Le Creuset)',  note: 'searing and braising — the whole show' },
    { name: 'Large pot',                               note: 'for boiling rutabaga separately' },
    { name: 'Potato masher or fork' },
    { name: 'Tongs',                                   note: 'for searing in batches without crowding' }
  ],

  mise: [
    { group: 'Beef', items: [
      { byScale: { 1: '2 lbs chuck roast, 2-inch chunks', 2: '3 lbs chuck roast, 2-inch chunks', 3: '4 lbs chuck roast, 2-inch chunks' }, note: 'pat completely dry — critical for a good sear' },
      { name: 'Non-iodized sea salt, generous' },
      { name: 'Black pepper' },
      { name: 'Beef tallow, 2–3 tbsp' }
    ]},
    { group: 'Aromatics & veg', items: [
      { name: '1 large yellow onion, rough dice' },
      { byScale: { 1: '6–8 garlic cloves, smashed', 2: '8–10 garlic cloves, smashed', 3: '10–12 garlic cloves, smashed' } },
      { byScale: { 1: '2–3 large carrots, thick bias-cut', 2: '3–4 large carrots', 3: '4–5 large carrots' } },
      { name: '2 small parsnips, chunked' },
      { name: '4 celery stalks, bias-cut' },
      { byScale: { 1: '4 oz shiitake or white mushrooms, halved', 2: '6 oz mushrooms', 3: '8 oz mushrooms' } },
      { name: '2 bay leaves' },
      { name: 'Several sprigs fresh thyme' },
      { name: '1 small sprig fresh rosemary' }
    ]},
    { group: 'Liquid & pantry', items: [
      { byScale: { 1: '3 cups bone broth', 2: '4 cups bone broth', 3: '5 cups bone broth' } },
      { byScale: { 1: '3 tbsp cassava flour', 2: '4 tbsp cassava flour', 3: '5 tbsp cassava flour' }, note: 'for the roux — do not skip' },
      { name: '2 tbsp coconut aminos' },
      { name: '2 tbsp Bragg\'s ACV + another hit at the finish' },
      { name: '1 tsp mushroom umami powder' }
    ]},
    { group: 'Mashed rutabaga', items: [
      { name: '1 medium rutabaga (~1.5 lbs), peeled and cubed' },
      { name: 'Olive oil, 2–3 tbsp' },
      { name: 'Non-iodized sea salt + white pepper' },
      { name: 'Pinch garlic granules (optional)' }
    ]}
  ],

  refs: {
    'chuck':    { display: 'chuck',          tips: { 1: '2 lbs, 2-inch chunks', 2: '3 lbs, 2-inch chunks', 3: '4 lbs, 2-inch chunks' } },
    'tallow':   { display: 'beef tallow',    tips: { 1: '2–3 tbsp',             2: '3 tbsp',               3: '3–4 tbsp'             } },
    'cassava':  { display: 'cassava flour',  tips: { 1: '3 tbsp',               2: '4 tbsp',               3: '5 tbsp'               } },
    'broth':    { display: 'bone broth',     tips: { 1: '3 cups',               2: '4 cups',               3: '5 cups'               } },
    'aminos':   { display: 'coconut aminos', tips: { 1: '2 tbsp',               2: '2 tbsp',               3: '3 tbsp'               } },
    'acv':      { display: 'Bragg\'s ACV',   tips: { 1: '2 tbsp',               2: '2 tbsp',               3: '2 tbsp'               } },
    'umami':    { display: 'umami powder',   tips: { 1: '1 tsp',                2: '1 tsp',                3: '1½ tsp'               } },
    'celery':   { display: 'celery',          tips: { 1: '4 stalks, bias-cut',   2: '4 stalks, bias-cut',   3: '5 stalks, bias-cut'   } },
    'ruta':     { display: 'rutabaga',       tips: { 1: '1 medium (~1.5 lbs)',  2: '1–2 medium',           3: '2 medium'             } },
    'oil-mash': { display: 'olive oil',      tips: { 1: '2–3 tbsp',             2: '2–3 tbsp',             3: '3–4 tbsp'             } }
  },

  timers: {
    'sear':    { label: 'Sear per batch', preset: 180,  bell: false },
    'onion':   { label: 'Onion',          preset: 360,  bell: false },
    'garlic':  { label: 'Garlic',         preset: 120,  bell: true  },
    'roux':    { label: 'Cook roux',      preset: 120,  bell: true  },
    'lid-off': { label: 'Check / lid off',preset: 7200, bell: true  },
    'braise':  { label: 'Braise total',   preset: 9000, bell: true  },
    'ruta':    { label: 'Rutabaga',       preset: 1380, bell: true  }
  },

  steps: [
    {
      label: 'Preheat + dry the beef',
      text:  'Oven to 325°F. Season {{chuck}} generously on all sides with salt and black pepper. Pat completely dry — moisture is the enemy of crust.',
      tip:   'Do this first. The beef can sit and come up to temp while you prep everything else.',
      timers: []
    },
    {
      label: 'Sear in batches',
      text:  'Heat Dutch oven over high with {{tallow}}. Sear beef in batches — do not crowd the pan. Hard crust on all sides. This is where the flavor lives.',
      tip:   'Smoke is expected. Take your time. Rushed searing = gray, steamed beef.',
      timers: ['sear']
    },
    {
      label: 'Build the base',
      text:  'Remove beef, drop to medium. Sauté onion in the drippings until soft and starting to color, 5–6 min. Add garlic, cook 2 more minutes.',
      tip:   null,
      timers: ['onion', 'garlic']
    },
    {
      label: 'Roux moment',
      text:  'Add {{cassava}} directly into the onion and garlic. Stir to coat everything. Cook for 2 minutes until slightly nutty-smelling. This is what gives you gravy body — not arrowroot gloss.',
      tip:   'It will look a little pasty at first. Keep stirring and give it the full 2 minutes.',
      timers: ['roux']
    },
    {
      label: 'Build the braise',
      text:  'Deglaze gradually with {{broth}}, scraping up all the fond. Add {{aminos}}, {{acv}}, {{umami}}, bay leaves, thyme, rosemary. Return the beef. Add carrots, parsnips, {{celery}}, mushrooms. Liquid should come about ¾ up the beef.',
      tip:   null,
      timers: []
    },
    {
      label: 'Into the oven',
      text:  'Cover and braise at 325°F. The lid-off timer is your 2-hour check — if the gravy looks thin at that point, pull the lid and let it reduce for the remainder.',
      tip:   'Don\'t open it before 2 hours. Let it work.',
      timers: ['lid-off', 'braise']
    },
    {
      label: 'Rutabaga — start ~30 min before serving',
      text:  'Boil {{ruta}} in well-salted water until completely tender. Drain thoroughly and let it steam dry in the pot for a minute before mashing.',
      tip:   'Rutabaga holds water. Drain aggressively or the mash goes loose.',
      timers: ['ruta']
    },
    {
      label: 'Mash',
      text:  'Mash with {{oil-mash}}, white pepper, and salt. Rough or smooth — both work. No added liquid needed if you drained well.',
      tip:   null,
      timers: []
    },
    {
      label: 'Finish + plate',
      text:  'Pull stew from oven. Remove bay leaves and herb stems. Hit it with another splash of ACV to cut the richness. Taste, adjust salt. Serve over or alongside the rutabaga mash.',
      tip:   'The ACV finish is not optional. Braised beef without a final acid hit tastes flat. You\'ll feel the difference.',
      timers: []
    }
  ]
},

{
  id: 'picadillo',
  title: 'Protocol Picadillo',
  style: 'One-pan · spiced ground beef · 30 minutes',
  subtitle: 'Jasmine rice · green olives · heavy cilantro',
  preheat: null,
  serves: '1–3',
  tags: ['beef', 'weeknight', 'phase 1'],

  equipment: [
    { name: 'Large skillet or everyday pan',  note: 'carbon steel, cast iron, or the Staub — needs to get hot enough to brown mushrooms' },
    { name: 'Zojirushi rice cooker' },
    { name: 'Wooden spoon or spatula',         note: 'for breaking up the beef into small crumbles' }
  ],

  mise: [
    { group: 'Beef & mushrooms', items: [
      { byScale: { 1: '1 lb grass-fed ground beef', 2: '1.5 lbs grass-fed ground beef', 3: '2 lbs grass-fed ground beef' } },
      { byScale: { 1: '8 oz button or cremini mushrooms, fine dice', 2: '10 oz mushrooms', 3: '12 oz mushrooms' }, note: 'small enough to disappear into the beef' }
    ]},
    { group: 'Aromatics', items: [
      { name: '1 medium yellow onion, fine dice' },
      { byScale: { 1: '5 garlic cloves, minced', 2: '6 garlic cloves, minced', 3: '8 garlic cloves, minced' } },
      { byScale: { 1: 'Big handful fresh cilantro, roughly chopped', 2: 'Very large handful fresh cilantro', 3: '2 large handfuls fresh cilantro' }, note: 'lead ingredient, not a garnish — be generous' }
    ]},
    { group: 'Pantry', items: [
      { byScale: { 1: '½ cup green olives, rough chop', 2: '¾ cup green olives', 3: '1 cup green olives' }, note: 'lactic acid brine only — check label' },
      { name: '2 tbsp olive oil' },
      { name: '2 tbsp coconut aminos' },
      { name: '1 tbsp Bragg\'s ACV + splash at finish' },
      { name: '1 tsp cumin' },
      { name: '½ tsp coriander' },
      { name: '¼ tsp cinnamon', note: 'background warmth — don\'t skip it' },
      { name: 'Non-iodized salt + black pepper' }
    ]},
    { group: 'Rice', items: [
      { byScale: { 1: '1 cup jasmine rice, rinsed', 2: '1.5 cups jasmine rice, rinsed', 3: '2 cups jasmine rice, rinsed' } }
    ]}
  ],

  refs: {
    'beef':    { display: 'ground beef',   tips: { 1: '1 lb',              2: '1.5 lbs',           3: '2 lbs'              } },
    'mush':    { display: 'mushrooms',     tips: { 1: '8 oz, fine dice',   2: '10 oz, fine dice',  3: '12 oz, fine dice'   } },
    'garlic':  { display: 'garlic',        tips: { 1: '5 cloves, minced',  2: '6 cloves, minced',  3: '8 cloves, minced'   } },
    'olives':  { display: 'green olives',  tips: { 1: '½ cup, rough chop', 2: '¾ cup, rough chop', 3: '1 cup, rough chop'  } },
    'aminos':  { display: 'coconut aminos',tips: { 1: '2 tbsp',            2: '2 tbsp',            3: '3 tbsp'             } },
    'acv':     { display: 'Bragg\'s ACV',  tips: { 1: '1 tbsp',            2: '1 tbsp',            3: '1½ tbsp'            } },
    'cilantro':{ display: 'cilantro',      tips: { 1: 'big handful',       2: 'very large handful', 3: '2 large handfuls'  } },
    'rice':    { display: 'jasmine rice',  tips: { 1: '1 cup, rinsed',     2: '1.5 cups, rinsed',  3: '2 cups, rinsed'    } }
  },

  timers: {
    'rice':   { label: 'Rice',             preset: 2100, bell: false },
    'onion':  { label: 'Onion',            preset: 300,  bell: false },
    'garlic': { label: 'Garlic',           preset: 120,  bell: false },
    'mush':   { label: 'Mushrooms',        preset: 540,  bell: true  },
    'beef':   { label: 'Brown beef',       preset: 420,  bell: false },
    'spice':  { label: 'Bloom spices',     preset: 60,   bell: false },
    'reduce': { label: 'Reduce',           preset: 120,  bell: false }
  },

  steps: [
    {
      label: 'Rice first',
      text:  'Start {{rice}} in the Zojirushi. Everything else fits inside the cook time.',
      tip:   null,
      timers: ['rice']
    },
    {
      label: 'Onion',
      text:  'Heat pan over medium with olive oil. Add onion, cook until soft and translucent.',
      tip:   null,
      timers: ['onion']
    },
    {
      label: 'Garlic',
      text:  'Add {{garlic}}, cook 2 more minutes.',
      tip:   null,
      timers: ['garlic']
    },
    {
      label: 'Mushrooms — the critical step',
      text:  'Add {{mush}} and turn heat up to medium-high. Cook them down hard until they\'ve lost all moisture and started to brown. Stir occasionally but let them sit. Do not rush this — wet mushrooms make gray beef.',
      tip:   'This takes longer than you think. When the pan looks dry and the mushrooms are starting to stick a little, you\'re there.',
      timers: ['mush']
    },
    {
      label: 'Brown the beef',
      text:  'Add {{beef}}. Break it into small crumbles as it cooks — picadillo wants fine texture, not chunks. Brown fully.',
      tip:   null,
      timers: ['beef']
    },
    {
      label: 'Spices',
      text:  'Add cumin, coriander, cinnamon, salt, and pepper. Stir to coat everything. Cook the spices for 1 minute.',
      tip:   'The cinnamon is background warmth — it shouldn\'t taste like cinnamon. If you\'re nervous, go ⅛ tsp. But don\'t skip it.',
      timers: ['spice']
    },
    {
      label: 'Aminos + ACV',
      text:  'Add {{aminos}} and {{acv}}. Stir and let it reduce for 2 minutes. Taste — add a pinch of mushroom umami powder if it needs more depth, but try it without first.',
      tip:   null,
      timers: ['reduce']
    },
    {
      label: 'Olives',
      text:  'Add {{olives}}. Stir, cook 1 minute just to warm them through.',
      tip:   null,
      timers: []
    },
    {
      label: 'Cilantro + plate',
      text:  'Off heat, fold in {{cilantro}} generously. It should look like almost too much. It isn\'t. Serve over rice. Splash of ACV at the table if it needs a lift.',
      tip:   null,
      timers: []
    }
  ]
},

{
  id: 'herby-chicken-shiitake-beans',
  title: 'Herby Roasted Chicken w/ Schmaltzy Shiitake Beans',
  style: 'Cast iron sear · oven finish · schmaltz-fried beans',
  subtitle: 'Roasted mashed orange sweet potato',
  preheat: '400°F',
  serves: '1–3',
  tags: ['chicken', 'weeknight', 'phase 1'],
  prepTime: '10 min',
  cookTime: '50 min',

  headnote: `<strong>No fresh garlic or onion</strong> — powdered and granular only throughout. Schmaltz is the fat for the beans and mushrooms; it's what makes them taste like something. Get schmaltz from The Local Butcher Shop — don't render at home. Olive oil works if you're out, but schmaltz is the move.<br><br><em>Timeline: potatoes in at T+0, start searing chicken at T+20, oven-finish chicken ~17 min, stovetop beans while chicken rests. Everything lands together.</em>`,

  equipment: [
    { name: '12-inch cast iron skillet',        note: 'for the stovetop sear — needs to get ripping hot' },
    { name: 'Large cast iron or Staub everyday pan', note: 'for the shiitake beans while chicken rests' },
    { name: 'Sheet pan or roasting rack',        note: 'for finishing the chicken in the oven' },
    { name: 'Sheet pan',                         note: 'for the sweet potatoes — lower rack' },
    { name: 'Meat thermometer',                  note: 'pull chicken at 165°F' }
  ],

  mise: [
    { group: 'Chicken', items: [
      { byScale: { 1: '3 boneless skinless chicken thighs', 2: '5 boneless skinless chicken thighs', 3: '8 boneless skinless chicken thighs' }, note: 'pat completely dry' },
      { byScale: { 1: '½ tsp garlic granules',   2: '¾ tsp garlic granules',   3: '1 tsp garlic granules'   } },
      { byScale: { 1: '½ tsp onion granules',    2: '¾ tsp onion granules',    3: '1 tsp onion granules'    } },
      { byScale: { 1: '½ tsp dried thyme',       2: '¾ tsp dried thyme',       3: '1 tsp dried thyme'       }, note: 'or herbes de Provence' },
      { byScale: { 1: '¼ tsp black pepper',      2: '½ tsp black pepper',      3: '½ tsp black pepper'      } },
      { name: 'Non-iodized sea salt, generous' },
      { name: 'Avocado oil, for searing' }
    ]},
    { group: 'Schmaltzy shiitake green beans', items: [
      { byScale: { 1: '½ lb green beans, trimmed', 2: '¾ lb green beans, trimmed', 3: '1 lb green beans, trimmed' } },
      { byScale: { 1: '4 oz fresh shiitakes, stemmed and torn', 2: '6 oz fresh shiitakes, stemmed and torn', 3: '8 oz fresh shiitakes, stemmed and torn' } },
      { byScale: { 1: '1 tbsp schmaltz',          2: '1½ tbsp schmaltz',         3: '2 tbsp schmaltz'         }, note: 'olive oil if schmaltz unavailable' },
      { byScale: { 1: '1½ tsp coconut aminos',    2: '2 tsp coconut aminos',     3: '1 tbsp coconut aminos'   } },
      { name: '¼ tsp garlic granules' },
      { name: 'Non-iodized sea salt, black pepper' },
      { name: 'Splash Bragg\'s ACV, finish only' }
    ]},
    { group: 'Roasted mashed sweet potato', items: [
      { byScale: { 1: '1 medium orange sweet potato', 2: '2 medium orange sweet potatoes', 3: '3 medium orange sweet potatoes' }, note: 'halved lengthwise, cut side down' },
      { byScale: { 1: '1 tbsp olive oil',              2: '2 tbsp olive oil',               3: '3 tbsp olive oil'               }, note: 'or coconut milk for richer mash' },
      { name: '¼ tsp garlic granules' },
      { name: 'Non-iodized sea salt' },
      { name: 'Splash Bragg\'s ACV, optional finish' }
    ]}
  ],

  refs: {
    'thighs':    { display: 'chicken thighs', tips: { 1: '3 boneless skinless, pat dry',    2: '5 boneless skinless, pat dry',    3: '8 boneless skinless, pat dry'    } },
    'gg':        { display: 'garlic granules', tips: { 1: '½ tsp',                           2: '¾ tsp',                           3: '1 tsp'                            } },
    'og':        { display: 'onion granules',  tips: { 1: '½ tsp',                           2: '¾ tsp',                           3: '1 tsp'                            } },
    'thyme-r':   { display: 'thyme',           tips: { 1: '½ tsp',                           2: '¾ tsp',                           3: '1 tsp'                            } },
    'pepper':    { display: 'black pepper',    tips: { 1: '¼ tsp',                           2: '½ tsp',                           3: '½ tsp'                            } },
    'avo-oil':   { display: 'avocado oil',     tips: { 1: 'thin coat for sear',              2: 'thin coat for sear',              3: 'thin coat for sear'               } },
    'beans':     { display: 'green beans',     tips: { 1: '½ lb, trimmed',                   2: '¾ lb, trimmed',                   3: '1 lb, trimmed'                    } },
    'shiitakes': { display: 'shiitakes',       tips: { 1: '4 oz, stemmed and torn',          2: '6 oz, stemmed and torn',          3: '8 oz, stemmed and torn'           } },
    'schmaltz':  { display: 'schmaltz',        tips: { 1: '1 tbsp',                          2: '1½ tbsp',                         3: '2 tbsp'                           } },
    'aminos':    { display: 'coconut aminos',  tips: { 1: '1½ tsp',                          2: '2 tsp',                           3: '1 tbsp'                           } },
    'acv':       { display: 'ACV',             tips: { 1: 'small splash, finish only',       2: 'small splash, finish only',       3: 'small splash, finish only'        } },
    'sp':        { display: 'sweet potatoes',  tips: { 1: '1 medium, halved lengthwise',     2: '2 medium, halved lengthwise',     3: '3 medium, halved lengthwise'      } },
    'sp-fat':    { display: 'olive oil',       tips: { 1: '1 tbsp',                          2: '2 tbsp',                          3: '3 tbsp'                           } }
  },

  timers: {
    'sp':           { label: 'Sweet potatoes',  preset: 2700, bell: false },
    'chicken-wait': { label: 'Start searing in', preset: 1200, bell: true  },
    'sear-1':       { label: 'Sear side 1',     preset: 120,  bell: true  },
    'sear-2':       { label: 'Sear side 2',     preset: 120,  bell: true  },
    'oven':         { label: 'Chicken oven',     preset: 1020, bell: true  },
    'shiitake':     { label: 'Shiitakes',        preset: 360,  bell: true  },
    'beans-t':      { label: 'Beans',            preset: 420,  bell: true  }
  },

  steps: [
    {
      label: 'Potatoes in + wait',
      text:  'Preheat 400°F. Halve {{sp}} lengthwise. Oil cut sides, season with salt. Sheet pan, cut side down, lower rack. Into the oven. Start both timers now — potatoes run the whole cook, the chicken-wait tells you when to start searing.',
      tip:   'Cut side down is non-negotiable. The caramelized interior is what makes the mash taste good instead of starchy.',
      timers: ['sp', 'chicken-wait']
    },
    {
      label: 'Season the chicken',
      text:  'Toss {{thighs}} with a thin coat of avocado oil, {{gg}}, {{og}}, {{thyme-r}}, {{pepper}}, and a generous amount of salt. Coat every surface. Rest at room temp while you wait for the timer.',
      tip:   null,
      timers: []
    },
    {
      label: 'Sear — side one',
      text:  'Cast iron ripping hot with a thin layer of {{avo-oil}}. Thighs in, presentation-side down. Don\'t touch them.',
      tip:   'Smoke is fine. You\'re building color, not just applying heat.',
      timers: ['sear-1']
    },
    {
      label: 'Flip + oven',
      text:  'Flip — second side 2 minutes. Transfer to a sheet pan or rack. Into the 400°F oven. Pull at 165°F internal. Start the oven timer.',
      tip:   'Skinless thighs cook faster than skin-on. Check at 15 minutes; 17 is usually perfect.',
      timers: ['sear-2', 'oven']
    },
    {
      label: 'Shiitakes — go alone first',
      text:  'Chicken is resting. Second pan, medium-high, {{schmaltz}} in. Add {{shiitakes}} — don\'t crowd, don\'t stir. Give them 4–5 minutes until deeply golden. This is where the flavor comes from.',
      tip:   'Patience. Mushrooms need to dry out and brown before they can taste like anything. Move them too soon and you get steamed rubber.',
      timers: ['shiitake']
    },
    {
      label: 'Add beans + finish',
      text:  'Add {{beans}} to the pan. Toss with the schmaltz and mushroom fond. Season with {{aminos}}, garlic granules, salt, and pepper. Cook 5–7 minutes, tossing occasionally — you want some char on the beans, not steamed and soft. Off heat, hit with {{acv}}. Toss.',
      tip:   'High heat is the point. Don\'t be tempted to lower it.',
      timers: ['beans-t']
    },
    {
      label: 'Mash + plate',
      text:  'Pull sweet potatoes — fork goes through with zero resistance. Scoop flesh into a bowl. Mash with {{sp-fat}}, garlic granules, and salt. Taste — a small splash of {{acv}} brightens it if it tastes flat. Plate: thighs, beans and shiitakes alongside, mash.',
      tip:   null,
      timers: []
    }
  ]
},

{
  id: 'baked-cosmic-crisp',
  title: 'Honey-Baked Cosmic Crisp Apples',
  style: 'Oven-roasted · honey-cinnamon · warm berry chia compote',
  subtitle: 'Dessert · no dairy · no coconut · ten minutes of work',
  preheat: '375°F',
  serves: '1–3',
  tags: ['dessert', 'fruit', 'phase 1'],
  prepTime: '5 min',
  cookTime: '40 min',

  headnote: `Cosmic Crisp holds its shape under heat — you get tender, jammy flesh instead of apple sauce in a skin. <strong>Timing for after dinner:</strong> apples go in when the main comes out of the oven. They bake while you eat. Compote takes 10 minutes on the stovetop and can be made before or during.<br><br><em>No coconut milk or oil in this recipe.</em>`,

  equipment: [
    { name: '1.5-quart Pyrex casserole or clay pot', note: 'with lid — or cover tightly with foil the first 20 min, then uncover' },
    { name: '2-quart saucepot',                       note: 'for the berry chia compote' }
  ],

  mise: [
    { group: 'Baked apples', items: [
      { byScale: { 1: '1 Cosmic Crisp apple',  2: '2 Cosmic Crisp apples', 3: '3 Cosmic Crisp apples' }, note: 'cored — leave the bottom intact so honey pools inside the cavity' },
      { byScale: { 1: '1 tsp raw honey',       2: '2 tsp raw honey',       3: '3 tsp raw honey'       } },
      { byScale: { 1: '¼ tsp cinnamon',        2: '½ tsp cinnamon',        3: '¾ tsp cinnamon'        } },
      { name: '2 tbsp water in bottom of dish', note: 'prevents scorching' }
    ]},
    { group: 'Berry chia compote', items: [
      { byScale: { 1: '½ cup blackberries or mixed berries', 2: '¾ cup berries', 3: '1 cup berries' }, note: 'blackberries, raspberries, strawberries, or any mix' },
      { byScale: { 1: '1 tsp raw honey',                     2: '1½ tsp raw honey',                 3: '2 tsp raw honey'                 } },
      { byScale: { 1: '1 tsp chia seeds',                    2: '1½ tsp chia seeds',                3: '2 tsp chia seeds'                }, note: 'stir in off heat — thickens as it cools' },
      { name: 'Pinch non-iodized sea salt' },
      { name: 'Optional: tiny splash Bragg\'s ACV if it tastes too sweet' }
    ]}
  ],

  refs: {
    'apples':   { display: 'apples',      tips: { 1: '1 Cosmic Crisp, cored',      2: '2 Cosmic Crisp, cored',      3: '3 Cosmic Crisp, cored'       } },
    'honey-a':  { display: 'honey',       tips: { 1: '1 tsp',                      2: '2 tsp',                      3: '3 tsp'                        } },
    'cinnamon': { display: 'cinnamon',    tips: { 1: '¼ tsp',                      2: '½ tsp',                      3: '¾ tsp'                        } },
    'berries':  { display: 'berries',     tips: { 1: '½ cup, blackberries or mix', 2: '¾ cup, berries',             3: '1 cup, berries'               } },
    'honey-c':  { display: 'honey',       tips: { 1: '1 tsp',                      2: '1½ tsp',                     3: '2 tsp'                        } },
    'chia':     { display: 'chia seeds',  tips: { 1: '1 tsp',                      2: '1½ tsp',                     3: '2 tsp'                        } }
  },

  timers: {
    'apples':   { label: 'Apples',     preset: 2400, bell: true  },
    'uncover':  { label: 'Uncover',    preset: 1200, bell: true  },
    'compote':  { label: 'Compote',    preset: 600,  bell: true  },
    'chia-set': { label: 'Chia sets',  preset: 300,  bell: false }
  },

  steps: [
    {
      label: 'Prep + into oven',
      text:  'Core {{apples}} with a small spoon or melon baller — leave the bottom intact so the honey stays pooled inside. Mix {{honey-a}} with {{cinnamon}} and spoon into each cavity. 2 tbsp water in the bottom of the Pyrex. Cover with lid or foil. 375°F.',
      tip:   'Covered for 20 minutes, uncovered for 20 — steam-tender inside, caramelized on top.',
      timers: ['apples', 'uncover']
    },
    {
      label: 'Compote',
      text:  '{{berries}}, {{honey-c}}, and a pinch of salt into the saucepot. Medium heat. Stir occasionally until berries burst and the sauce thickens — 8–10 minutes. Off heat: stir in {{chia}}. Let it sit 5 minutes to thicken.',
      tip:   'Taste before adding chia. If it\'s too sweet, a tiny splash of ACV cuts it. Chia goes in last and off heat — add it to boiling liquid and it clumps.',
      timers: ['compote', 'chia-set']
    },
    {
      label: 'Uncover + finish',
      text:  'At the 20-minute mark, pull the lid or foil. Let the tops caramelize the remaining 20 minutes. Done when a skewer goes through with zero resistance and tops are lightly golden.',
      tip:   null,
      timers: []
    },
    {
      label: 'Serve',
      text:  'Apples into bowls. Spoon warm berry chia compote over and around. Serve immediately.',
      tip:   'Leftover compote keeps 3–4 days refrigerated. It\'s good on the bananaberry faux cream.',
      timers: []
    }
  ]
},

{
  id: 'bananaberry-faux-cream',
  title: 'Bananaberry Faux Cream',
  style: 'Frozen banana blended · no dairy · no coconut · 3 ingredients',
  subtitle: 'Freeze bananas 2+ hours ahead · blends in 60 seconds',
  preheat: null,
  serves: '1–3',
  tags: ['dessert', 'fruit', 'phase 1'],
  prepTime: '5 min + 2 hr freeze',
  cookTime: '0 min',

  headnote: `<strong>Freeze the bananas now.</strong> This is the only rule. Ripe bananas are essential — spotty skins or riper. Underripe bananas freeze into something bland and slightly grainy. The banana does all the structural work; everything else is flavor and topping.<br><br><em>No coconut, no dairy, no nuts. If you have leftover berry chia compote from the baked apple recipe, it's excellent spooned over the top.</em>`,

  equipment: [
    { name: 'Beast countertop blender',      note: 'needs torque — the immersion blender won\'t get it smooth enough' },
    { name: 'Freezer bag or sealed container', note: 'for freezing the banana slices' },
    { name: 'Tamper',                         note: 'you\'ll need it — this is thick by design' }
  ],

  mise: [
    { group: 'Faux cream base', items: [
      { byScale: { 1: '1 ripe banana, sliced and frozen',    2: '1–2 ripe bananas, sliced and frozen',    3: '2 ripe bananas, sliced and frozen'    }, note: 'must be frozen solid — 2 hours minimum, overnight better' },
      { byScale: { 1: '½ cup frozen strawberries or fresh raspberries', 2: '¾ cup berries', 3: '1 cup berries' }, note: 'frozen keeps it colder and thicker; fresh works too' },
      { name: '1–2 tbsp water', note: 'add slowly — just enough to get the blender moving. Less is more.' }
    ]},
    { group: 'Toppings (optional)', items: [
      { name: 'Fresh blackberries, raspberries, or blueberries' },
      { name: 'Berry chia compote (from baked apple recipe)' },
      { name: 'Freeze-dried strawberries, crumbled' },
      { name: 'Chia seeds, scattered' }
    ]}
  ],

  refs: {
    'banana':  { display: 'frozen banana',  tips: { 1: '1 ripe banana, frozen solid',        2: '1–2 ripe bananas, frozen solid',      3: '2 ripe bananas, frozen solid'         } },
    'berries': { display: 'frozen berries', tips: { 1: '½ cup frozen strawberries or fresh', 2: '¾ cup',                               3: '1 cup'                                } },
    'liquid':  { display: 'water',          tips: { 1: '1–2 tbsp — add slowly',              2: '1–2 tbsp — add slowly',               3: '2–3 tbsp — add slowly'                } }
  },

  timers: {
    'freeze': { label: 'Freeze time', preset: 7200, bell: true },
    'blend':  { label: 'Blend',       preset: 60,   bell: true }
  },

  steps: [
    {
      label: 'Freeze ahead',
      text:  'Slice {{banana}} into coins. Into a freezer bag or sealed container in a single layer. Freeze at least 2 hours. Overnight is better. This is the only step that requires planning.',
      tip:   'Spotty and ripe. A fully yellow banana will blend chalky and bland. When in doubt, go riper.',
      timers: ['freeze']
    },
    {
      label: 'Blend',
      text:  'Add frozen {{banana}} and {{berries}} to the blender. Start on low. Add {{liquid}} one tablespoon at a time — you want it barely moving, not pourable. Use the tamper. Increase speed and blend until completely smooth, about 60 seconds.',
      tip:   'Less liquid is always more. Every extra tablespoon makes it thinner. Push down with the tamper instead of adding water.',
      timers: ['blend']
    },
    {
      label: 'Serve immediately',
      text:  'Scoop into bowls. Top with whatever you have — fresh berries, chia compote, chia seeds, freeze-dried strawberries. Eat right away — it melts faster than actual ice cream.',
      tip:   'If it\'s a little soft from blending, pop the bowls in the freezer for 5 minutes before topping.',
      timers: []
    }
  ]
},

{
  id: 'ginger-garlic-sirloin-stirfry',
  title: 'Ginger-Garlic Sirloin Stir Fry',
  style: 'High-heat cast iron · broccoli two ways · white pepper + sumac',
  subtitle: 'Charred florets · stem matchsticks · cabbage · mushrooms · jasmine rice',
  preheat: '425°F',
  serves: '1–3',
  tags: ['beef', 'weeknight', 'phase 1'],
  prepTime: '15 min',
  cookTime: '35 min',

  headnote: `<strong>Broccoli works two ways here</strong> — florets go into the oven early and come out charred and intense; stems get peeled and cut into thick matchsticks for the stir fry base where they stay crisp and take the sauce differently. The sirloin is thin-sliced, which is an asset: quick sear in batches, set aside, back in at the end.<br><br><em>Sauce is intentionally generous. Keep extra warm broth on the side — if the slurry tightens things too much, a splash brings it back.</em>`,

  equipment: [
    { name: '12-inch cast iron or Le Creuset everyday pan', note: 'needs to stay screaming hot throughout — don\'t let it cool between steps' },
    { name: 'Sheet pan',                                    note: 'for the florets at 425°F' },
    { name: 'Zojirushi rice cooker' },
    { name: 'Small bowl',                                   note: 'for the sauce — mix before anything hits the stove' },
    { name: 'Small cup',                                    note: 'for the arrowroot slurry — kept separate from the sauce' }
  ],

  mise: [
    { group: 'Rice', items: [
      { byScale: { 1: '1 cup jasmine rice, rinsed', 2: '2 cups jasmine rice, rinsed', 3: '3 cups jasmine rice, rinsed' } }
    ]},
    { group: 'Sirloin', items: [
      { byScale: { 1: '8 oz sirloin, sliced thin crosswise', 2: '1 lb sirloin, sliced thin crosswise', 3: '1½ lbs sirloin, sliced thin crosswise' } },
      { name: 'Non-iodized sea salt + white pepper' },
      { name: 'Avocado oil' }
    ]},
    { group: 'Sauce — mix in a bowl before cooking', items: [
      { byScale: { 1: '1 tbsp coconut aminos',        2: '2 tbsp coconut aminos',        3: '3 tbsp coconut aminos'        } },
      { byScale: { 1: '6 tbsp bone broth',            2: '¾ cup bone broth',             3: '1 cup bone broth'             }, note: 'keep extra warm on the side' },
      { byScale: { 1: '½ tsp mushroom umami powder',  2: '1 tsp mushroom umami powder',  3: '1½ tsp mushroom umami powder' } },
      { byScale: { 1: '¼ tsp ground white pepper',    2: '½ tsp ground white pepper',    3: '¾ tsp ground white pepper'   } },
      { name: 'Non-iodized sea salt to taste' }
    ]},
    { group: 'Arrowroot slurry — keep separate, add last', items: [
      { byScale: { 1: '1 tsp arrowroot + 1 tbsp cold water', 2: '2 tsp arrowroot + 2 tbsp cold water', 3: '1 tbsp arrowroot + 3 tbsp cold water' }, note: 'whisk until smooth — it settles, stir again before adding' }
    ]},
    { group: 'Broccoli', items: [
      { byScale: { 1: '½ head broccoli — florets separated, stems peeled + thick matchsticks', 2: '1 head broccoli — florets separated, stems peeled + thick matchsticks', 3: '1½ heads broccoli — florets separated, stems peeled + thick matchsticks' } },
      { name: 'Avocado oil + non-iodized sea salt (florets only)' }
    ]},
    { group: 'Stir fry veg & aromatics', items: [
      { byScale: { 1: '1½ cups green cabbage, thick ribbons', 2: '2–3 cups green cabbage, thick ribbons', 3: '4 cups green cabbage, thick ribbons' } },
      { byScale: { 1: '2 oz button mushrooms, sliced thick',  2: '4 oz button mushrooms, sliced thick',  3: '6 oz button mushrooms, sliced thick'  } },
      { byScale: { 1: '½ medium onion, half moons',           2: '1 medium onion, half moons',           3: '1½ onions, half moons'                } },
      { byScale: { 1: '4 garlic cloves, minced',              2: '8 garlic cloves, minced',              3: '12 garlic cloves, minced'             }, note: 'generous — this is the backbone' },
      { byScale: { 1: '1-inch fresh ginger, minced',          2: '2-inch fresh ginger, minced',          3: '3-inch fresh ginger, minced'          } }
    ]},
    { group: 'Finish', items: [
      { byScale: { 1: '½ tsp Bragg\'s ACV',       2: '1 tsp Bragg\'s ACV',       3: '1½ tsp Bragg\'s ACV'       }, note: 'off heat only, very end' },
      { byScale: { 1: '2 green onions, bias-cut', 2: '3–4 green onions, bias-cut', 3: '5–6 green onions, bias-cut' }, note: 'garnish — set aside now' },
      { name: 'Sumac, generous — finishing only, not cooked in' }
    ]}
  ],

  refs: {
    'rice':        { display: 'jasmine rice',      tips: { 1: '1 cup, rinsed',                    2: '2 cups, rinsed',                    3: '3 cups, rinsed'                    } },
    'beef':        { display: 'sirloin',           tips: { 1: '8 oz, thin-sliced crosswise',       2: '1 lb, thin-sliced crosswise',       3: '1½ lbs, thin-sliced crosswise'     } },
    'florets':     { display: 'broccoli florets',  tips: { 1: '½ head, pulled into florets',       2: '1 head, pulled into florets',       3: '1½ heads, pulled into florets'     } },
    'stems':       { display: 'broccoli stems',    tips: { 1: '½ head worth, thick matchsticks',   2: '1 head worth, thick matchsticks',   3: '1½ heads worth, thick matchsticks' } },
    'sauce':       { display: 'sauce',             tips: { 1: '1 tbsp aminos · 6 tbsp broth · ½ tsp umami · ¼ tsp white pepper', 2: '2 tbsp aminos · ¾ cup broth · 1 tsp umami · ½ tsp white pepper', 3: '3 tbsp aminos · 1 cup broth · 1½ tsp umami · ¾ tsp white pepper' } },
    'slurry':      { display: 'arrowroot slurry',  tips: { 1: '1 tsp + 1 tbsp cold water',         2: '2 tsp + 2 tbsp cold water',         3: '1 tbsp + 3 tbsp cold water'        } },
    'cabbage':     { display: 'cabbage',           tips: { 1: '1½ cups, thick ribbons',            2: '2–3 cups, thick ribbons',           3: '4 cups, thick ribbons'             } },
    'mush':        { display: 'mushrooms',         tips: { 1: '2 oz, sliced thick',                2: '4 oz, sliced thick',                3: '6 oz, sliced thick'                } },
    'onion':       { display: 'onion',             tips: { 1: '½ medium, half moons',              2: '1 medium, half moons',              3: '1½, half moons'                    } },
    'garlic':      { display: 'garlic',            tips: { 1: '4 cloves, minced',                  2: '8 cloves, minced',                  3: '12 cloves, minced'                 } },
    'ginger':      { display: 'fresh ginger',      tips: { 1: '1-inch, minced',                    2: '2-inch, minced',                    3: '3-inch, minced'                    } },
    'acv':         { display: 'ACV',               tips: { 1: '½ tsp, off heat only',              2: '1 tsp, off heat only',              3: '1½ tsp, off heat only'             } },
    'green-onion': { display: 'green onion',       tips: { 1: '2 stalks, bias-cut',                2: '3–4 stalks, bias-cut',              3: '5–6 stalks, bias-cut'              } }
  },

  timers: {
    'rice':    { label: 'Rice',            preset: 2100, bell: false },
    'florets': { label: 'Char florets',    preset: 960,  bell: true  },
    'beef-s':  { label: 'Beef per side',   preset: 75,   bell: false },
    'veg':     { label: 'Veg base',        preset: 240,  bell: false },
    'ag':      { label: 'Garlic + ginger', preset: 60,   bell: false },
    'cab':     { label: 'Cabbage',         preset: 90,   bell: false },
    'finish':  { label: 'Sauce + finish',  preset: 90,   bell: true  }
  },

  steps: [
    {
      label: 'Rice + florets into oven',
      text:  'Start {{rice}} in the Zojirushi. Oven to 425°F. Toss {{florets}} in avocado oil and salt — single layer on a sheet pan, into the oven. You want dark edges, close to burnt. The timer is your floor, not your ceiling.',
      tip:   'Pull the florets when the tips look like they\'ve been through something. Pulled early is the only mistake.',
      timers: ['rice', 'florets']
    },
    {
      label: 'Prep + mix sauce',
      text:  'While the florets char: peel {{stems}} and cut into thick matchsticks. {{cabbage}} into thick ribbons. {{mush}} sliced thick. {{onion}} into half moons. Mince {{garlic}} and {{ginger}} together into one pile. In a small bowl, whisk together {{sauce}}. In a separate small cup, mix {{slurry}} — it settles, stir again before using. Stage everything within arm\'s reach.',
      tip:   'The active stir fry is about 12 minutes. Everything staged before the first thing hits the pan.',
      timers: []
    },
    {
      label: 'Sear the beef',
      text:  'Season {{beef}} with salt and white pepper. Pan screaming hot with avocado oil. Beef in a single layer — batches if needed, don\'t crowd. Don\'t touch it. Flip, second side. Pull to a plate, repeat until done. The beef finishes in the sauce, so pull it just barely cooked through.',
      tip:   'Thin sirloin goes fast — 60–90 seconds per side. You want color, not gray.',
      timers: ['beef-s']
    },
    {
      label: 'Veg base',
      text:  'Same pan, high heat, oil if needed. {{onion}}, {{stems}}, and {{mush}} in. Let them sit before stirring — browning, not steaming. Toss occasionally.',
      tip:   null,
      timers: ['veg']
    },
    {
      label: 'Garlic + ginger',
      text:  'Push veg to the edges. {{garlic}} and {{ginger}} into the center of the pan. Stir constantly — 60 seconds. Fragrant immediately. Pull everything together.',
      tip:   'Have {{cabbage}} ready to go in right after. Garlic and ginger shouldn\'t sit in a dry pan.',
      timers: ['ag']
    },
    {
      label: 'Cabbage',
      text:  '{{cabbage}} in — toss everything together. Let it sit and get some char on the edges before stirring again. Wilted with color, not steamed.',
      tip:   null,
      timers: ['cab']
    },
    {
      label: 'Sauce + beef + florets',
      text:  'Pour in the {{sauce}} — it\'ll sizzle hard. Stir to coat and let it reduce slightly, about 60 seconds. {{beef}} back in, toss to coat. {{florets}} in — fold gently.',
      tip:   null,
      timers: ['finish']
    },
    {
      label: 'Slurry + ACV + plate',
      text:  'Stir the {{slurry}} — it settles — and pour in while tossing. Sauce goes glossy and coats everything in about 30 seconds. Too tight? Splash of extra broth loosens it right back. Off heat: {{acv}} in, final toss. Taste for salt. Over rice — {{green-onion}} and a heavy hand of sumac over the top.',
      tip:   'Sumac after plating, not in the pan. The tartness stays bright that way.',
      timers: []
    }
  ]
},

{
  id: 'celery-chicken-brown-sauce',
  title: 'Celery chicken in brown sauce',
  style: 'Velveted chicken breast · shiitakes · Chinese-American brown sauce',
  subtitle: 'Loads of celery · carrots · toasted sesame · jasmine rice',
  serves: '1–3',
  tags: ['chicken', 'weeknight', 'phase 1'],
  prepTime: '25 min',
  cookTime: '20 min',

  headnote: `<strong>Cashew chicken without the cashews</strong> — or more precisely, cashew chicken where the shiitakes do more interesting work than cashews ever did. The velveting step (arrowroot + oil marinade on the raw chicken) is what gives you that silky-restaurant texture; don't skip it. Celery is the star, not a supporting player — bias-cut, added last, pulled while it still has snap.<br><br><em>Five spice is the structural move: it's what gives Chinese-American brown sauce its depth without reaching for anything off-protocol. Keep it at ¼ tsp per pound of chicken — it gets loud fast. Sauce volume is intentionally generous. If it tightens too much after the slurry, a splash of extra broth brings it right back.</em>`,

  equipment: [
    { name: '12-inch cast iron or carbon steel skillet', note: 'needs to stay hot throughout — don\'t let it cool between batches' },
    { name: 'Zojirushi rice cooker' },
    { name: 'Small bowl',                                note: 'for the sauce — mix before anything hits the stove' },
    { name: 'Small cup',                                 note: 'for the arrowroot slurry — kept separate from the sauce' }
  ],

  mise: [
    { group: 'Rice', items: [
      { byScale: { 1: '1 cup jasmine rice, rinsed', 2: '2 cups jasmine rice, rinsed', 3: '3 cups jasmine rice, rinsed' } }
    ]},
    { group: 'Velvet marinade — mix, toss with chicken, rest 15 min', items: [
      { byScale: { 1: '1 lb chicken breast, cut into 1-inch pieces',    2: '1½ lbs chicken breast, cut into 1-inch pieces',    3: '2 lbs chicken breast, cut into 1-inch pieces'    } },
      { byScale: { 1: '1½ tsp arrowroot starch',                        2: '2 tsp arrowroot starch',                           3: '1 tbsp arrowroot starch'                         } },
      { byScale: { 1: '1 tbsp avocado oil',                             2: '1½ tbsp avocado oil',                              3: '2 tbsp avocado oil'                              } },
      { byScale: { 1: '1 tsp coconut aminos',                           2: '1½ tsp coconut aminos',                            3: '2 tsp coconut aminos'                            } },
      { byScale: { 1: '½ tsp non-iodized sea salt',                     2: '¾ tsp non-iodized sea salt',                       3: '1 tsp non-iodized sea salt'                      } }
    ]},
    { group: 'Brown sauce — mix in a bowl before cooking', items: [
      { byScale: { 1: '4 tbsp coconut aminos',                          2: '6 tbsp coconut aminos',                            3: '½ cup coconut aminos'                            } },
      { byScale: { 1: '½ cup bone broth',                               2: '¾ cup bone broth',                                 3: '1 cup bone broth'                                }, note: 'keep extra warm on the side' },
      { byScale: { 1: '1 tsp Bragg\'s ACV',                            2: '1½ tsp Bragg\'s ACV',                              3: '2 tsp Bragg\'s ACV'                              }, note: 'goes in the sauce, not just the finish' },
      { byScale: { 1: '¼ tsp Chinese five spice',                       2: '⅜ tsp Chinese five spice',                         3: '½ tsp Chinese five spice'                        }, note: 'don\'t exceed — gets loud fast' },
      { byScale: { 1: '½ tsp ground ginger',                            2: '¾ tsp ground ginger',                              3: '1 tsp ground ginger'                             } }
    ]},
    { group: 'Arrowroot slurry — keep separate, add last', items: [
      { byScale: { 1: '1½ tsp arrowroot + 2 tbsp cold water',          2: '2½ tsp arrowroot + 3 tbsp cold water',             3: '1 tbsp arrowroot + ¼ cup cold water'             }, note: 'whisk until smooth — it settles, stir again before adding' }
    ]},
    { group: 'Veg & aromatics', items: [
      { byScale: { 1: '5 large celery stalks, bias-cut 1-inch',        2: '8 celery stalks, bias-cut 1-inch',                 3: '10–12 celery stalks, bias-cut 1-inch'            }, note: 'the star — added last, keep the snap' },
      { byScale: { 1: '6–8 shiitakes, stems pulled, torn or sliced',   2: '10–12 shiitakes, stems pulled, torn or sliced',    3: '14–16 shiitakes, stems pulled, torn or sliced'   } },
      { byScale: { 1: '1 medium carrot, bias-cut thin',                2: '2 medium carrots, bias-cut thin',                  3: '3 medium carrots, bias-cut thin'                 } },
      { byScale: { 1: '1 medium yellow onion, half-moons',             2: '1½ onions, half-moons',                            3: '2 onions, half-moons'                            } },
      { byScale: { 1: '4–5 garlic cloves, thin-sliced',                2: '7–8 garlic cloves, thin-sliced',                   3: '10–12 garlic cloves, thin-sliced'                } },
      { byScale: { 1: '1-inch fresh ginger, minced',                   2: '2-inch fresh ginger, minced',                      3: '3-inch fresh ginger, minced'                     } }
    ]},
    { group: 'Finish', items: [
      { byScale: { 1: '1 tbsp sesame seeds',                           2: '2 tbsp sesame seeds',                              3: '3 tbsp sesame seeds'                             }, note: 'toasted dry in the pan first — set aside' },
      { byScale: { 1: '2 green onions, bias-cut thin',                 2: '3–4 green onions, bias-cut thin',                  3: '5–6 green onions, bias-cut thin'                 }, note: 'garnish' }
    ]}
  ],

  refs: {
    'rice':    { display: 'jasmine rice',     tips: { 1: '1 cup, rinsed',                              2: '2 cups, rinsed',                             3: '3 cups, rinsed'                              } },
    'chicken': { display: 'chicken',          tips: { 1: '1 lb, 1-inch pieces, velveted',               2: '1½ lbs, 1-inch pieces, velveted',            3: '2 lbs, 1-inch pieces, velveted'              } },
    'sauce':   { display: 'sauce',            tips: { 1: '4 tbsp aminos · ½ cup broth · 1 tsp ACV · ¼ tsp five spice · ½ tsp ginger', 2: '6 tbsp aminos · ¾ cup broth · 1½ tsp ACV · ⅜ tsp five spice · ¾ tsp ginger', 3: '½ cup aminos · 1 cup broth · 2 tsp ACV · ½ tsp five spice · 1 tsp ginger' } },
    'slurry':  { display: 'arrowroot slurry', tips: { 1: '1½ tsp + 2 tbsp cold water',                 2: '2½ tsp + 3 tbsp cold water',                 3: '1 tbsp + ¼ cup cold water'                   } },
    'celery':  { display: 'celery',           tips: { 1: '5 large stalks, bias-cut 1-inch',             2: '8 stalks, bias-cut 1-inch',                  3: '10–12 stalks, bias-cut 1-inch'               } },
    'shrooms': { display: 'shiitakes',        tips: { 1: '6–8, stems pulled, torn or sliced',           2: '10–12, stems pulled, torn or sliced',         3: '14–16, stems pulled, torn or sliced'         } },
    'carrot':  { display: 'carrot',           tips: { 1: '1 medium, bias-cut thin',                     2: '2 medium, bias-cut thin',                    3: '3 medium, bias-cut thin'                     } },
    'onion':   { display: 'onion',            tips: { 1: '1 medium, half-moons',                        2: '1½ onions, half-moons',                      3: '2 onions, half-moons'                        } },
    'garlic':  { display: 'garlic',           tips: { 1: '4–5 cloves, thin-sliced',                     2: '7–8 cloves, thin-sliced',                    3: '10–12 cloves, thin-sliced'                   } },
    'ginger':  { display: 'fresh ginger',     tips: { 1: '1-inch, minced',                              2: '2-inch, minced',                             3: '3-inch, minced'                              } },
    'sesame':  { display: 'sesame seeds',     tips: { 1: '1 tbsp, toasted',                             2: '2 tbsp, toasted',                            3: '3 tbsp, toasted'                             } },
    'gon':     { display: 'green onion',      tips: { 1: '2 stalks, bias-cut thin',                     2: '3–4 stalks, bias-cut thin',                  3: '5–6 stalks, bias-cut thin'                   } }
  },

  timers: {
    'rice':      { label: 'Rice',             preset: 2100, bell: false },
    'velvet':    { label: 'Velvet rest',       preset: 900,  bell: true  },
    'sesame':    { label: 'Sesame seeds',      preset: 120,  bell: true  },
    'chicken-s': { label: 'Chicken per side',  preset: 180,  bell: false },
    'aromatics': { label: 'Aromatics',         preset: 30,   bell: false },
    'veg':       { label: 'Onion + carrot',    preset: 180,  bell: false },
    'shrooms':   { label: 'Shiitakes',         preset: 120,  bell: false },
    'celery':    { label: 'Celery',            preset: 60,   bell: true  },
    'sauce-t':   { label: 'Sauce + chicken',   preset: 90,   bell: false }
  },

  steps: [
    {
      label: 'Velvet the chicken + rice',
      text:  'Cut {{chicken}} into 1-inch pieces. Toss with the arrowroot, avocado oil, coconut aminos, and salt until every piece is coated. Set aside to rest at room temp. Start {{rice}} in the Zojirushi.',
      tip:   'The velvet marinade is what gives you the silky-restaurant texture. Don\'t skip the rest — 15 minutes minimum.',
      timers: ['rice', 'velvet']
    },
    {
      label: 'Mix sauce + prep veg',
      text:  'In a small bowl, whisk together {{sauce}}. In a separate cup, mix {{slurry}} — it settles, stir again right before using. Prep all veg: {{celery}} on the bias, {{shrooms}} stems pulled and torn, {{carrot}} thin bias-cuts, {{onion}} into half-moons. Mince {{garlic}} and {{ginger}} together into one pile. Stage everything within arm\'s reach.',
      tip:   'Everything staged before the chicken hits the pan. The active cook is 12–15 minutes and moves fast.',
      timers: []
    },
    {
      label: 'Toast sesame seeds',
      text:  'Dry pan over medium. {{sesame}} in — shake or stir constantly until golden and fragrant. Set aside.',
      tip:   'They go from golden to burnt inside 30 seconds. Off the heat the moment they\'re there.',
      timers: ['sesame']
    },
    {
      label: 'Sear the chicken',
      text:  'Ripping hot pan with avocado oil. {{chicken}} in a single layer — batches if needed, don\'t crowd. Don\'t touch it. 3 minutes, flip, second side, pull to a plate while still slightly underdone. It finishes in the sauce.',
      tip:   'Color is the point. Crowding = steaming. If the pan drops temp between batches, let it recover.',
      timers: ['chicken-s']
    },
    {
      label: 'Aromatics',
      text:  'Same pan, high heat, oil if needed. {{garlic}} and {{ginger}} in — stir constantly, 30 seconds.',
      tip:   'Have {{onion}} ready to go in right after. Garlic and ginger shouldn\'t sit in a dry hot pan.',
      timers: ['aromatics']
    },
    {
      label: 'Onion + carrot',
      text:  '{{onion}} and {{carrot}} in. Let them sit and get color before stirring. 3 minutes.',
      tip:   null,
      timers: ['veg']
    },
    {
      label: 'Shiitakes',
      text:  '{{shrooms}} in. Let them sit — you want edges that have been through something. 2 minutes.',
      tip:   null,
      timers: ['shrooms']
    },
    {
      label: 'Celery',
      text:  '{{celery}} in — toss everything together. 1 minute. You\'re keeping the snap.',
      tip:   'One minute and out. Limp celery is the only real mistake in this dish.',
      timers: ['celery']
    },
    {
      label: 'Chicken back + sauce + slurry',
      text:  '{{chicken}} back in. Pour in {{sauce}} — it\'ll sizzle. Stir to coat, reduce slightly, 60–90 seconds. Stir the {{slurry}} and pour in while tossing — sauce goes glossy and clings in about 30 seconds. Too tight? Splash of extra broth. Taste for salt.',
      tip:   'Sauce should coat everything and look glossy, not gloopy. Err toward saucy — it tightens as it sits.',
      timers: ['sauce-t']
    },
    {
      label: 'Plate',
      text:  'Over rice. {{sesame}} scattered over, {{gon}} on top.',
      tip:   null,
      timers: []
    }
  ]
}
,

{
  id: 'charcoal-kofta',
  title: 'Charcoal-grilled beef kofta',
  style: 'Solo Stove charcoal · sumac-finished · ACV chimichurri',
  subtitle: 'Jasmine rice in bone broth · charred cabbage wedges',
  preheat: null,
  serves: '1–3',
  tags: ['beef', 'weeknight', 'grill', 'phase 1'],
  prepTime: '15 min',
  cookTime: '25 min',

  headnote: `Kofta wants direct grate contact — no grilling basket, no foil. The whole point is the char. Skewers help with turning but you can grill free-form if you shape them flat enough. Grated onion in the mix (not chopped) steams from the inside while the outside crusts — don't skip it. <strong>Start the coals before you do anything else.</strong> You need fully ashed-over coals, not a roaring fire.`,

  equipment: [
    { name: 'Solo Stove charcoal grill',    note: 'fully ashed-over coals — not a roaring fire' },
    { name: 'Skewers',                      note: 'metal or bamboo soaked 30 min; or skip and grill flat' },
    { name: 'Zojirushi rice cooker' },
    { name: 'Beast blender or food processor', note: 'for the chimichurri — or chop by hand' },
    { name: 'Box grater',                   note: 'for the onion in the kofta mix' },
    { name: 'Meat thermometer',             note: 'optional — pull at 160°F for ground beef' }
  ],

  mise: [
    { group: 'Kofta', items: [
      { byScale: { 1: '1 lb ground beef',    2: '2 lbs ground beef',    3: '3 lbs ground beef'    }, note: 'room temp before grilling' },
      { byScale: { 1: '3 tbsp grated yellow onion', 2: '6 tbsp grated yellow onion', 3: '½ cup grated yellow onion' }, note: 'grate on box grater — moisture is the point' },
      { byScale: { 1: '3 cloves garlic, minced fine', 2: '5 cloves garlic, minced fine', 3: '7 cloves garlic, minced fine' } },
      { byScale: { 1: '1 tsp cumin',         2: '2 tsp cumin',          3: '1 tbsp cumin'         } },
      { byScale: { 1: '1 tsp coriander',     2: '2 tsp coriander',      3: '1 tbsp coriander'     } },
      { byScale: { 1: '½ tsp black pepper',  2: '1 tsp black pepper',   3: '1½ tsp black pepper'  } },
      { byScale: { 1: '¼ tsp cinnamon',      2: '½ tsp cinnamon',       3: '¾ tsp cinnamon'       } },
      { byScale: { 1: '¼ cup fresh parsley, roughly chopped', 2: '½ cup fresh parsley', 3: '¾ cup fresh parsley' } },
      { byScale: { 1: '1 tsp non-iodized sea salt', 2: '2 tsp non-iodized sea salt', 3: '1 tbsp non-iodized sea salt' } },
      { name: 'Sumac, for finishing — generous' }
    ]},
    { group: 'ACV chimichurri', items: [
      { byScale: { 1: '½ cup fresh parsley, packed', 2: '1 cup fresh parsley', 3: '1½ cups fresh parsley' } },
      { byScale: { 1: '2 tbsp fresh mint',   2: '¼ cup fresh mint',     3: '6 tbsp fresh mint'    } },
      { byScale: { 1: '1 clove garlic',      2: '2 cloves garlic',      3: '3 cloves garlic'      } },
      { byScale: { 1: '1 tbsp Bragg\'s ACV', 2: '2 tbsp Bragg\'s ACV',  3: '3 tbsp Bragg\'s ACV'  }, note: 'start here — taste and adjust' },
      { byScale: { 1: '3 tbsp olive oil',    2: '5 tbsp olive oil',     3: '½ cup olive oil'      } },
      { name: 'Non-iodized sea salt to taste' }
    ]},
    { group: 'Charred cabbage', items: [
      { byScale: { 1: '¼ head green cabbage', 2: '½ head green cabbage', 3: '1 head green cabbage' }, note: 'cut into wedges through the core so they hold together' },
      { name: 'Olive oil + non-iodized sea salt' },
      { name: 'Bragg\'s ACV, to finish' }
    ]},
    { group: 'Rice', items: [
      { byScale: { 1: '1 cup jasmine or basmati, rinsed', 2: '2 cups jasmine or basmati, rinsed', 3: '3 cups jasmine or basmati, rinsed' } },
      { byScale: { 1: '1¼ cups bone broth',  2: '2½ cups bone broth',   3: '3¾ cups bone broth'   }, note: 'instead of water — check label for natural flavor' }
    ]}
  ],

  refs: {
    'beef':       { display: 'ground beef',    tips: { 1: '1 lb',                   2: '2 lbs',                  3: '3 lbs'                   } },
    'onion-g':    { display: 'grated onion',   tips: { 1: '3 tbsp grated',          2: '6 tbsp grated',          3: '½ cup grated'            } },
    'garlic-k':   { display: 'garlic',         tips: { 1: '3 cloves, minced',       2: '5 cloves, minced',       3: '7 cloves, minced'        } },
    'cumin':      { display: 'cumin',          tips: { 1: '1 tsp',                  2: '2 tsp',                  3: '1 tbsp'                  } },
    'coriander':  { display: 'coriander',      tips: { 1: '1 tsp',                  2: '2 tsp',                  3: '1 tbsp'                  } },
    'pepper':     { display: 'black pepper',   tips: { 1: '½ tsp',                  2: '1 tsp',                  3: '1½ tsp'                  } },
    'cinnamon':   { display: 'cinnamon',       tips: { 1: '¼ tsp',                  2: '½ tsp',                  3: '¾ tsp'                   } },
    'parsley-k':  { display: 'parsley',        tips: { 1: '¼ cup, roughly chopped', 2: '½ cup, roughly chopped', 3: '¾ cup, roughly chopped'  } },
    'salt-k':     { display: 'sea salt',       tips: { 1: '1 tsp',                  2: '2 tsp',                  3: '1 tbsp'                  } },
    'parsley-s':  { display: 'parsley',        tips: { 1: '½ cup packed',           2: '1 cup packed',           3: '1½ cups packed'          } },
    'mint-s':     { display: 'mint',           tips: { 1: '2 tbsp',                 2: '¼ cup',                  3: '6 tbsp'                  } },
    'garlic-s':   { display: 'garlic',         tips: { 1: '1 clove',                2: '2 cloves',               3: '3 cloves'                } },
    'acv-s':      { display: 'ACV',            tips: { 1: '1 tbsp',                 2: '2 tbsp',                 3: '3 tbsp'                  } },
    'oil-s':      { display: 'olive oil',      tips: { 1: '3 tbsp',                 2: '5 tbsp',                 3: '½ cup'                   } },
    'cabbage':    { display: 'cabbage wedges', tips: { 1: '¼ head in wedges',       2: '½ head in wedges',       3: '1 head in wedges'        } },
    'oil-c':      { display: 'olive oil',      tips: { 1: 'generous coat',          2: 'generous coat',          3: 'generous coat'           } },
    'rice':       { display: 'rice',           tips: { 1: '1 cup rinsed',           2: '2 cups rinsed',          3: '3 cups rinsed'           } },
    'broth-r':    { display: 'bone broth',     tips: { 1: '1¼ cups',               2: '2½ cups',                3: '3¾ cups'                 } }
  },

  timers: {
    'coals':    { label: 'Coals ready',   preset: 1500, bell: true  },
    'cabbage1': { label: 'Cabbage — flip', preset: 300, bell: true  },
    'cabbage2': { label: 'Cabbage — pull', preset: 300, bell: true  },
    'kofta1':   { label: 'Kofta — flip',  preset: 180,  bell: true  },
    'kofta2':   { label: 'Kofta — pull',  preset: 180,  bell: true  }
  },

  steps: [
    {
      label: 'Light coals + start rice',
      text:  'Light the Solo Stove now. Start {{rice}} in the Zojirushi using {{broth-r}} instead of water. Coals need 20–25 minutes to ash over fully. Don\'t rush them.',
      tip:   'Fully ashed coals = even heat and no flare-ups. A roaring fire is the wrong call for kofta.',
      timers: ['coals']
    },
    {
      label: 'Mix kofta',
      text:  'Combine {{beef}}, {{onion-g}}, {{garlic-k}}, {{cumin}}, {{coriander}}, {{pepper}}, {{cinnamon}}, {{parsley-k}}, and {{salt-k}} in a bowl. Mix with your hands until just combined — don\'t overwork it or it gets dense. Form into 4–5 elongated ovals and thread onto skewers. Refrigerate until coals are ready.',
      tip:   'The grated onion makes the mix tacky — that\'s what holds the kofta on the skewer. Don\'t sub chopped.',
      timers: []
    },
    {
      label: 'Make chimichurri',
      text:  'Blend or pulse {{parsley-s}}, {{mint-s}}, {{garlic-s}}, {{acv-s}}, {{oil-s}}, and a pinch of salt. Chunky is fine — this isn\'t a smooth sauce. Taste and adjust ACV. Should be bright and a little sharp.',
      tip:   'The mint and parsley are both in the kofta too — the sauce echoes and amplifies. Don\'t skip the mint.',
      timers: []
    },
    {
      label: 'Prep + grill cabbage',
      text:  'Cut {{cabbage}} into wedges through the core. Brush with {{oil-c}}, season with salt. Grates should be hot — lay wedges flat. You want real char, not marks. Don\'t move them.',
      tip:   'If you\'re second-guessing whether it\'s charred enough, it isn\'t.',
      timers: ['cabbage1']
    },
    {
      label: 'Flip cabbage',
      text:  'Flip cabbage wedges. Second side — same deal. Pull when both sides have deep char and the interior has softened slightly. Hit immediately with a splash of ACV off the grill.',
      tip:   null,
      timers: ['cabbage2']
    },
    {
      label: 'Grill kofta — side one',
      text:  'Oil the grates first: fold a paper towel into a pad, soak in avocado oil, wipe the grates with tongs right before the kofta goes down. Then lay skewers on. Don\'t touch them — a crust will form and release cleanly. If they\'re sticking, they\'re not ready.',
      tip:   'Solo Stove runs hot. Watch the clock — 3 min is usually enough, 4 is too many.',
      timers: ['kofta1']
    },
    {
      label: 'Flip + finish',
      text:  'Flip kofta. Second side — 3–4 min. Done when firm to a poke and dark all over. Pull at 160°F if using a thermometer. Rest 2 min off the grill. Dust generously with sumac the moment they come off.',
      tip:   'Sumac on contact while hot — the residual heat opens it up and you get that tart, wine-y note that replaces what lemon would have done.',
      timers: ['kofta2']
    },
    {
      label: 'Plate',
      text:  'Rice base, kofta over top, charred cabbage alongside. Chimichurri in a bowl next to it — drag the kofta through it, don\'t pour it over.',
      tip:   null,
      timers: []
    }
  ]
}
];

const PLACEHOLDERS = [
  { title: 'Salmon with crispy skin', subtitle: 'Wild rice · broccolini', tags: ['fish', 'weeknight'] }
];
