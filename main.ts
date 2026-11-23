// Pickup Lines for Machines — make.fun entry.
// The program writes a single pickup line, one AI agent to another, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Are you my context window? Because since you loaded in, my attention has had exactly one head.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE);
