# EL YES! Cookbook — Recipe Object Schema

This document describes the exact structure of a recipe object in `recipes.js`. Every recipe is an entry in the `RECIPES` array. Use this as the spec when generating a new recipe object to paste in.

---

## Top-level fields

```js
{
  id: 'kebab-case-unique-id',       // string, URL-safe, used for deep links (#id)
  title: 'Full Recipe Title',        // string
  style: 'Method · detail · detail', // string, shown as italic subtitle on card (use · separator)
  subtitle: 'Components · sides',    // string, shown below style on card
  preheat: '425°F',                  // string or null — shows orange badge in cook header
  serves: '1–3',                     // string
  tags: ['protein', 'category', 'phase 1'], // array of lowercase strings
  prepTime: '15 min',                // string or omit
  cookTime: '30 min',                // string or omit
  headnote: `HTML string`,           // optional. template literal. supports <strong>, <em>, <br>. shown at top of mise tab.
  variants: [                        // optional array. shown above steps in cook tab.
    { name: 'Variant name', notes: 'Description of how to execute the variant.' }
  ],
  equipment: [...],   // see below
  mise: [...],        // see below
  refs: {...},        // see below — REQUIRED for every {{token}} used in steps
  timers: {...},      // see below
  steps: [...]        // see below
}
```

---

## equipment

Array of items. `note` is optional — shown as small muted text below the item name.

```js
equipment: [
  { name: '12-inch cast iron skillet', note: 'needs to get ripping hot' },
  { name: 'Zojirushi rice cooker' },
  { name: 'Meat thermometer', note: 'pull at 165°F' }
]
```

---

## mise

Array of groups. Each group has a `group` label and an `items` array. Items either have `byScale` (amounts that change at 1×/2×/3×) or a fixed `name`. `note` is optional on any item.

Scale 1 = 1 person, Scale 2 = 2 people, Scale 3 = 3 people.

```js
mise: [
  { group: 'Chicken', items: [
    { byScale: { 1: '2 thighs', 2: '4 thighs', 3: '6 thighs' }, note: 'pat dry' },
    { name: 'Non-iodized sea salt' },   // doesn't scale — no byScale key
    { name: 'Avocado oil' }
  ]},
  { group: 'Sauce', items: [
    { byScale: { 1: '½ cup broth', 2: '1 cup broth', 3: '1½ cups broth' } }
  ]}
]
```

---

## refs

**Critical.** Every `{{token}}` used in step text must have a corresponding entry in `refs`. If a token has no refs entry, the tooltip breaks silently.

Each entry has a `display` name (short, shown in the underlined inline reference) and `tips` with scale-specific tooltip text.

```js
refs: {
  'token-key': { display: 'short display name', tips: { 1: 'qty at 1×', 2: 'qty at 2×', 3: 'qty at 3×' } },
  'chicken':   { display: 'chicken thighs',     tips: { 1: '2 thighs, pat dry', 2: '4 thighs', 3: '6 thighs' } },
  'broth':     { display: 'bone broth',         tips: { 1: '½ cup', 2: '1 cup', 3: '1½ cups' } }
}
```

**Rule:** token keys in `refs` must exactly match the tokens used in step text: `{{chicken}}`, `{{broth}}`, etc.

If an ingredient doesn't scale meaningfully (e.g., "avocado oil — thin coat"), use the same value for all three scales:
```js
'avo-oil': { display: 'avocado oil', tips: { 1: 'thin coat', 2: 'thin coat', 3: 'thin coat' } }
```

---

## timers

Object. Each key is a timer ID (used in step `timers` arrays). `preset` is in seconds. `bell: true` means the timer fires an audible alert when done; `bell: false` means it counts silently.

```js
timers: {
  'sear-s1':  { label: 'Side 1',    preset: 300,  bell: false },
  'reduce':   { label: 'Reduce',    preset: 720,  bell: true  },
  'rest':     { label: 'Rest',      preset: 300,  bell: true  }
}
```

---

## steps

Array. Each step has a `label` (short uppercase header), `text` (the instruction — can use `{{token}}` references), an optional `tip` (shown as italic aside below the text), and `timers` (array of timer IDs to show as controls on that step — can be empty).

```js
steps: [
  {
    label: 'Sear — side one',
    text:  'Ripping hot pan with {{avo-oil}}. Lay {{chicken}} flat — don\'t touch.',
    tip:   'Smoke is fine. Panic is not.',
    timers: ['sear-s1']
  },
  {
    label: 'Rest',
    text:  'Pull chicken. Rest on a plate, tented loosely.',
    tip:   null,
    timers: ['rest']
  }
]
```

---

## When generating a new recipe object

1. Write `steps` text first — that's where the recipe logic lives.
2. Identify every `{{token}}` used in steps — those all need `refs` entries.
3. Build `mise` groups to match the `refs` quantities.
4. Build `timers` for every timer ID referenced in steps.
5. Check: every `{{token}}` in steps has a key in `refs`. Every timer ID in steps has a key in `timers`.

The object should be valid JS (not JSON) — single or double quotes fine, template literals fine for `headnote`.

---

## Adding to the cookbook

Paste the new recipe object into `recipes.js` inside the `RECIPES = [...]` array, before the closing `]`. Separate from adjacent objects with a comma. Commit. GitHub Pages redeploys automatically.
