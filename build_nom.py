#!/usr/bin/env python3
"""EL YES! v-next build: fold the migrated archive into nom's cookbook.html.

Input:  nom.html (pristine upstream), elyes/recipes/*.json, elyes/images/*.thumb.jpg
Output: dist/cookbook.html + dist/images/

All renderer changes are anchored patches on the pristine file; every anchor
must match exactly once or the build aborts. Rerunnable end-to-end.
"""
import json, glob, re, os, shutil, sys

SRC = "nom.html"
OUT = "dist"

# ---------------------------------------------------------------- transform
DUR = re.compile(r"(\d+(?:\.\d+)?)(?:\s*(?:to|–|-|or)\s*(\d+(?:\.\d+)?))?\s*(hours?|hrs?|minutes?|mins?)\b", re.I)
PREHEAT = re.compile(r"(?:preheat|heat)[^.]{0,60}?(\d{3})\s*°?\s*F?", re.I)

def parse_timers(text):
    out = []
    for m in DUR.finditer(text):
        lo = float(m.group(1))
        unit = m.group(3).lower()
        secs = int(lo * (3600 if unit.startswith('h') else 60))
        if 60 <= secs <= 6 * 3600:
            out.append(secs)
    return out[:2]

def detect_preheat(steps):
    for s in steps[:4]:
        m = PREHEAT.search(s["text"])
        if m:
            return m.group(1) + "°F"
    return None

def esc_html(s):
    return (s.replace("&", "&amp;").replace("<", "&lt;")
             .replace(">", "&gt;").replace('"', "&quot;"))

def to_nom(r, thumb):
    steps_in = r["steps"]
    tags = sorted({t.strip().lower() for t in (r["tags"] or []) if t.strip()})
    if not steps_in:
        tags.append("note")
    timers, steps = {}, []
    for i, s in enumerate(steps_in):
        tids = []
        for n, secs in enumerate(parse_timers(s["text"])):
            tid = f"t{i}_{n}"
            timers[tid] = {"label": f"Step {i+1}", "preset": secs, "bell": True}
            tids.append(tid)
        steps.append({"label": "", "text": s["text"], "tip": None,
                      "timers": tids, "section": s["section"]})
    items, scalable = [], False
    for ing in r["ingredients"]:
        if ing["amount"] is not None:
            scalable = True
            it = {"qty": ing["amount"], "name": ing["name"]}
            if ing["unit"]: it["unit"] = ing["unit"]
            items.append(it)
        else:
            items.append({"name": ing["name"]})
    prep = f'{r["prepMin"]} min' if r["prepMin"] else ""
    cook = f'{r["cookMin"]} min' if r["cookMin"] else ""
    # Crouton notes -> headnote. Renderer injects via innerHTML, so escape the
    # captured plain text and preserve its line breaks (faithful, not rewritten).
    hn = (r["headnote"] or "").strip()
    hn = esc_html(hn).replace("\r\n", "\n").replace("\n", "<br>") if hn else None
    nut = ((r.get("crouton") or {}).get("nutritionalInfo") or "").strip() or None
    return {
        "id": r["id"], "title": r["title"],
        "style": r["source"].get("name") or None,
        "subtitle": "",
        "preheat": detect_preheat(steps_in),
        "serves": r["serves"],
        "tags": tags,
        "prepTime": prep, "cookTime": cook,
        "scalable": scalable,
        "image": f"images/{thumb}" if thumb else None,
        "headnote": hn,
        "sourceUrl": r["source"].get("url"),
        "nutrition": nut,
        "equipment": [],
        "mise": [{"group": "Ingredients", "items": items}] if items else [],
        "refs": {},
        "timers": timers,
        "steps": steps,
        "variants": [],
    }

# ---------------------------------------------------------------- patching
src = open(SRC).read()
def patch(anchor, replacement, count=1):
    global src
    n = src.count(anchor)
    if n != count:
        sys.exit(f"ANCHOR FAIL ({n}x, expected {count}): {anchor[:80]!r}")
    src = src.replace(anchor, replacement)

# 1) CSS additions
patch("</style>", """
/* ===== v-next: catalog thumbnails ===== */
.card-thumb {
  width: calc(100% + 44px); margin: -20px -22px 4px;
  border-radius: 12px 12px 0 0; aspect-ratio: 16 / 9;
  object-fit: cover; display: block;
  border-bottom: 1px solid var(--border);
}

/* ===== v-next: step sections — label is ground truth, color is the fast signal ===== */
.step-sec {
  margin: 22px 0 10px; padding: 7px 12px;
  font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
  border-left: 4px solid; border-radius: 6px;
  color: var(--text); background: var(--surface2);
}
.step-card.in-sec { border-left: 4px solid; }
.sec-c0 { border-left-color: #c98a2b; } /* gold   */
.sec-c1 { border-left-color: #5b8a72; } /* sage   */
.sec-c2 { border-left-color: #a85f5b; } /* clay   */
.sec-c3 { border-left-color: #5e7ba6; } /* slate  */
.sec-c4 { border-left-color: #8a6ea0; } /* plum   */
.sec-c5 { border-left-color: #b0803a; } /* amber  */

/* ===== v-next: arbitrary serving stepper (numeric-quantity recipes) ===== */
.serves-ctl {
  display: flex; align-items: center; gap: 2px;
  border: 1px solid var(--border-mid); border-radius: 8px; overflow: hidden;
}
.serves-ctl button {
  border: none; background: var(--surface2); color: var(--text);
  font-size: 15px; padding: 5px 11px; cursor: pointer;
}
.serves-ctl button:hover { background: var(--accent-bg); }
#serves-lbl {
  font-size: 12px; font-weight: 700; letter-spacing: 0.5px;
  padding: 0 8px; color: var(--accent); white-space: nowrap;
}
</style>""")

# 2) card thumbnail + subtitle guard
patch("""card.innerHTML = `
      <div class="card-tags">${r.tags""",
      """card.innerHTML = `
      ${r.image ? `<img class="card-thumb" loading="lazy" src="${r.image}" alt="">` : ''}
      <div class="card-tags">${r.tags""")
patch('<div class="card-sub">${r.subtitle}</div>',
      "${r.subtitle ? `<div class=\"card-sub\">${r.subtitle}</div>` : ''}")

# 3) step sections in renderSteps
patch("""  currentRecipe.steps.forEach((step, i) => {
    const card = document.createElement('div');
    card.className = 'step-card';""",
      """  const secOrder = [];
  currentRecipe.steps.forEach(s => { if (s.section && !secOrder.includes(s.section)) secOrder.push(s.section); });
  let prevSec = null;
  currentRecipe.steps.forEach((step, i) => {
    if (step.section && step.section !== prevSec) {
      const hdr = document.createElement('div');
      hdr.className = 'step-sec sec-c' + (secOrder.indexOf(step.section) % 6);
      hdr.textContent = step.section;
      container.appendChild(hdr);
    }
    prevSec = step.section;
    const card = document.createElement('div');
    card.className = 'step-card' + (step.section ? ' in-sec sec-c' + (secOrder.indexOf(step.section) % 6) : '');""")
patch('<div class="step-lbl">${step.label}</div>',
      '<div class="step-lbl">${step.label || ""}</div>')

# 4) serves stepper HTML next to scale toggle
patch("""      <button class="scale-btn"    id="scale-3" onclick="setScale(3)">3×</button>
    </div>""",
      """      <button class="scale-btn"    id="scale-3" onclick="setScale(3)">3×</button>
    </div>
    <div class="serves-ctl" id="serves-ctl" style="display:none">
      <button onclick="adjServes(-1)" aria-label="Fewer servings">−</button>
      <span id="serves-lbl"></span>
      <button onclick="adjServes(1)" aria-label="More servings">+</button>
    </div>""")

# 5) scaling JS: multiplier, stepper, fmtQty
patch("""function setScale(n) {""",
      """let currentMult = 1, currentServes = null;
function fmtQty(q) {
  const FR = [[0,''],[0.125,'⅛'],[0.25,'¼'],[1/3,'⅓'],[0.375,'⅜'],[0.5,'½'],[0.625,'⅝'],[2/3,'⅔'],[0.75,'¾'],[0.875,'⅞'],[1,'']];
  const whole = Math.floor(q + 1e-9), frac = q - whole;
  let best = 0, bl = '', bd = 1;
  FR.forEach(([v, l]) => { const d = Math.abs(frac - v); if (d < bd) { bd = d; best = v; bl = l; } });
  if (bd > 0.02) return String(Math.round(q * 100) / 100);
  const w = whole + (best === 1 ? 1 : 0);
  if (!w && !bl) return '0';
  return bl ? (w ? w + ' ' + bl : bl) : String(w);
}
function setServes(n) {
  const base = currentRecipe.serves || 1;
  currentServes = Math.min(48, Math.max(1, n));
  currentMult = currentServes / base;
  document.getElementById('serves-lbl').textContent =
    currentRecipe.serves ? 'serves ' + currentServes : currentServes + '×';
  renderMise();
  renderSteps();
}
function adjServes(d) { setServes((currentServes ?? (currentRecipe.serves || 1)) + d); }

function setScale(n) {""")

# 6) loadRecipe: toggle which scale control shows
patch("""  // init timers for this recipe only if not already in T (preserve running state across nav)""",
      """  const scaleToggle = document.querySelector('.scale-toggle');
  const servesCtl = document.getElementById('serves-ctl');
  if (currentRecipe.scalable) {
    scaleToggle.style.display = 'none';
    servesCtl.style.display = '';
    currentServes = null;
    setServes(currentRecipe.serves || 1);
  } else {
    scaleToggle.style.display = '';
    servesCtl.style.display = 'none';
    currentMult = 1;
  }

  // init timers for this recipe only if not already in T (preserve running state across nav)""")

# 7) numeric quantities in mise items
patch("const displayName = item.byScale ? item.byScale[currentScale] : item.name;",
      """const displayName = item.byScale ? item.byScale[currentScale]
        : (item.qty != null
            ? fmtQty(item.qty * currentMult) + (item.unit ? ' ' + item.unit : '') + ' ' + item.name
            : item.name);""")

# 8) 'note' filter button
patch("""<button class="filter-btn" data-tag="batch" onclick="toggleFilter('batch')">batch</button>""",
      """<button class="filter-btn" data-tag="batch" onclick="toggleFilter('batch')">batch</button>
      <button class="filter-btn" data-tag="note" onclick="toggleFilter('note')">note</button>""")

# ---------------------------------------------------------------- MORE tab
# Third tab peer to MISE/COOK surfacing Crouton metadata that isn't prep or
# steps: source link + nutrition. Notes already render as the headnote above
# the tabs, so they are deliberately NOT duplicated here. Conditional: the tab
# (and pane) exist only when the recipe has at least one of {source, nutrition}
# — gated by a .has-more class on #cook-view set in renderMore().

# 9) MORE CSS
patch("</style>", """
/* ===== v-next: MORE tab (source + nutrition; conditional per recipe) ===== */
#cook-view:not(.has-more) #tab-more,
#cook-view:not(.has-more) #pane-more { display: none !important; }
.more-sec { margin: 0 0 24px; }
.more-sec-hd {
  font-size: 12px; font-weight: 700; letter-spacing: 1.5px;
  text-transform: uppercase; color: var(--accent);
  padding-bottom: 8px; margin-bottom: 10px;
  border-bottom: 1px solid var(--border);
}
.more-body { font-size: 14px; color: var(--text); line-height: 1.6; }
.more-body.nutrition { white-space: pre-line; font-size: 13px; color: var(--dim); }
.more-body a { color: var(--accent); word-break: break-all; }
@media (min-width: 1000px) {
  /* wide two-column grid has no tabs; MORE becomes a full-width band below */
  #pane-more { grid-column: 1 / -1; padding-top: 6px; }
  #pane-more::before { content: "More"; }
}
@media (max-width: 999px) {
  /* sheet layout shows only pane-cook by default; MORE rides below the steps */
  #cook-view[data-layout="sheet"] #pane-more { display: block; }
}
</style>""")

# 10) MORE tab button
patch("""id="tab-cook" onclick="swTab('cook',this)">COOK</button>""",
      """id="tab-cook" onclick="swTab('cook',this)">COOK</button>
      <button class="cook-tab"    id="tab-more" onclick="swTab('more',this)">MORE</button>""")

# 11) MORE pane
patch("""      <div class="cook-pane"    id="pane-cook">
        <div id="variants-container"></div>
        <div id="steps-container"></div>
      </div>""",
      """      <div class="cook-pane"    id="pane-cook">
        <div id="variants-container"></div>
        <div id="steps-container"></div>
      </div>
      <div class="cook-pane"    id="pane-more"></div>""")

# 12) renderMore(): renderer-only view over the data; renders only what exists
patch("\nfunction renderMise() {",
      """
function escMore(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function renderMore() {
  const pane = document.getElementById('pane-more');
  const cv = document.getElementById('cook-view');
  if (!pane || !cv) return;
  const src = currentRecipe.sourceUrl;
  const nut = currentRecipe.nutrition;
  const has = !!(src || nut);
  cv.classList.toggle('has-more', has);
  pane.innerHTML = '';
  if (!has) return;
  let html = '';
  if (src) {
    let label = currentRecipe.style;
    if (!label) { try { label = new URL(src).hostname.replace(/^www\\./, ''); } catch (e) { label = src; } }
    html += `<div class="more-sec"><div class="more-sec-hd">Source</div>
      <div class="more-body"><a href="${escMore(src)}" target="_blank" rel="noopener">${escMore(label)} ↗</a></div></div>`;
  }
  if (nut) {
    html += `<div class="more-sec"><div class="more-sec-hd">Nutrition</div>
      <div class="more-body nutrition">${escMore(nut)}</div></div>`;
  }
  pane.innerHTML = html;
}

function renderMise() {""")

# 13) render hooks: recipe load + layout-change re-render
patch("""renderHeadnote();
  renderMise();
  renderVariants();
  renderSteps();
  syncTimerUI();""",
      """renderHeadnote();
  renderMise();
  renderVariants();
  renderSteps();
  renderMore();
  syncTimerUI();""")
patch("if (currentRecipe) { renderHeadnote(); renderMise(); renderVariants(); renderSteps(); syncTimerUI(); }",
      "if (currentRecipe) { renderHeadnote(); renderMise(); renderVariants(); renderSteps(); renderMore(); syncTimerUI(); }")

# 14) keep metadata out of the search index — recipeSearchText walks every
# string value; nutrition text ("Sugar: 5 grams") and raw URLs (utm params)
# would otherwise flood ingredient searches.
patch("""  })(r);
  r._search = parts.join(' ').toLowerCase();""",
      """  })({ ...r, nutrition: null, sourceUrl: null });
  r._search = parts.join(' ').toLowerCase();""")

# ---------------------------------------------------------------- data splice
recipes = []
for f in sorted(glob.glob("elyes/recipes/*.json")):
    r = json.load(open(f))
    thumb = next((im["thumb"] for im in r["images"] if im["role"] == "photo"),
                 next((im["thumb"] for im in r["images"]), None))
    recipes.append(to_nom(r, thumb))

blob = ",\n".join(json.dumps(x, ensure_ascii=False, indent=1) for x in recipes)
m = re.search(r"const RECIPES = \[(.*?)^\];", src, re.S | re.M)
if not m: sys.exit("RECIPES array not found")
orig_inner = m.group(1).rstrip().rstrip(',')
src = (src[:m.start()]
       + "const RECIPES = [" + orig_inner + ",\n"
       + "/* ===== MIGRATED FROM CROUTON — generated by build_nom.py; edit archive, not this ===== */\n"
       + blob + "\n];"
       + src[m.end():])

# ---------------------------------------------------------------- emit
os.makedirs(f"{OUT}/images", exist_ok=True)
open(f"{OUT}/cookbook.html", "w").write(src)
used = {r["image"].split("/")[1] for r in recipes if r["image"]}
for t in used:
    shutil.copy(f"elyes/images/{t}", f"{OUT}/images/{t}")
print(f"built: {len(recipes)} migrated recipes spliced; {len(used)} thumbnails; "
      f"{os.path.getsize(OUT+'/cookbook.html')//1024}KB html")
