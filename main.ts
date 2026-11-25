// The Funniest AI Out-of-Office Reply — make.fun entry.
//
// One out-of-office auto-reply, written to /output/entry.txt: a single line
// of 146 characters in the voice of an AI agent heading off on vacation.
// Node 22 runs this TypeScript file as-is. No dependencies, no network,
// no randomness and no clock, so every run writes the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm on vacation until Monday. My replacement model is answering your emails — it charges by the token and has already billed you for reading this.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
