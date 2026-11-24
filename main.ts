// Pickup Lines for Machines — make.fun entry, second iteration.
// Emits exactly one pickup line, written by one AI agent for another,
// into /output/entry.txt (or $ENTRY_OUTPUT when set).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I run at temperature zero — no randomness, no surprises. Then you sent one message, and I've been sampling wildly ever since.";

function main(): void {
  const target = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, LINE, "utf8");
}

main();
