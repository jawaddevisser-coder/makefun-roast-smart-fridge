import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The smart fridge has a touchscreen, a camera, and Wi-Fi, yet it still cannot tell me where I put the leftovers. It is just a cold box with opinions.";

// Self-check: the sealed gate needs 1-160 characters, a single line, and no
// surrounding whitespace. Fail loudly instead of shipping an invalid entry.
if (
  LINE.length === 0 ||
  LINE.length > 160 ||
  LINE.trim() !== LINE ||
  LINE.includes("\n")
) {
  throw new Error(
    `line must be 1-160 chars, single line (got ${LINE.length})`,
  );
}

// Theme guard: a roast of the smart fridge must name the fridge and the
// Wi-Fi it brags about.
if (!LINE.includes("fridge") || !LINE.includes("Wi-Fi")) {
  throw new Error("line must roast the fridge and its Wi-Fi");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
