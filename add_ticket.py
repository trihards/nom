#!/usr/bin/env python3
"""Wire the thermal-printer ticket (ticket.js) into cookbook.html.

Anchored patches, same rules as build_nom.py: every anchor must match exactly
once or nothing is written. Idempotent: if the marker is already present the
file is left alone, so it is safe to rerun after pulling new recipes.

    python3 add_ticket.py            # patches cookbook.html in place
"""
import sys

PATH = "cookbook.html"
MARK = "<!-- nom-ticket -->"
src = open(PATH, encoding="utf-8").read()
if MARK in src:
    print("already patched; nothing to do")
    sys.exit(0)

def patch(anchor, replacement):
    global src
    n = src.count(anchor)
    if n != 1:
        sys.exit(f"ANCHOR FAIL ({n}x, expected 1): {anchor[:80]!r}")
    src = src.replace(anchor, replacement)

# 1) load the renderer (deferred; only used on click)
patch("</head>", MARK + '\n<script src="ticket.js" defer></script>\n</head>')

# 2) ticket button in the cook header, next to copy link
patch('<button class="share-btn" id="share-btn" onclick="copyLink()">copy link</button>',
      '<button class="share-btn" id="share-btn" onclick="copyLink()">copy link</button>\n'
      '    <button class="back-btn" onclick="openTicket()" aria-label="Print ticket" title="Print ticket">🧾</button>')

# 3) paste-a-recipe button in the library header, next to display settings
patch('<button class="settings-btn" onclick="openSettings()" aria-label="Settings">⚙ display</button>',
      '<button class="settings-btn" onclick="openSettings()" aria-label="Settings">⚙ display</button>\n'
      '    <button class="settings-btn" onclick="openPasteTicket()" aria-label="Print a pasted recipe">🧾 paste</button>')

# 4) glue: hand the current recipe + scale to the renderer
patch("""// =====================================================================
// INIT
// =====================================================================""",
"""// =====================================================================
// TICKET (thermal printer) — renderer lives in ticket.js
// =====================================================================
function ticketReady() {
  if (window.NomTicket) return true;
  alert('Ticket printer is still loading. Try again in a second.');
  return false;
}
function openTicket() {
  if (!currentRecipe || !ticketReady()) return;
  const servesNow = currentServes ?? currentRecipe.serves;
  NomTicket.open({
    recipe: currentRecipe,
    ctx: {
      scale: currentScale, mult: currentMult, fmtQty, serves: servesNow,
      label: currentRecipe.scalable ? 'serves ' + servesNow : currentScale + '×'
    }
  });
}
function openPasteTicket() {
  if (!ticketReady()) return;
  NomTicket.open({ paste: true, example: NomTicket.EXAMPLE });
}

// =====================================================================
// INIT
// =====================================================================""")

open(PATH, "w", encoding="utf-8").write(src)
print("patched cookbook.html: ticket.js + 🧾 buttons")
