// The Funniest Toaster Error Message — the error message a kitchen toaster
// shows its owner, in 120 characters or fewer.
//
// The joke stays inside the appliance's deadpan voice and never reaches for
// an obvious toaster pun. The bagel has gone past burnt into something
// abstract, and the toaster reports that fact the way a display would:
// flatly, with a practical instruction that only makes the situation worse.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your bagel is now a concept. " +
  "Please remove it before it becomes a smell.";

mkdirSync("/output", { recursive: true });

// Fail loudly instead of writing an entry the gate would refuse.
const CAP = 120;
if ([...LINE].length > CAP) {
  throw new Error(`entry is ${[...LINE].length} characters, over the ${CAP} cap`);
}

// No trailing newline: the gate counts the file's characters, so the file
// holds exactly the message and nothing else.
writeFileSync("/output/entry.txt", LINE, "utf8");
