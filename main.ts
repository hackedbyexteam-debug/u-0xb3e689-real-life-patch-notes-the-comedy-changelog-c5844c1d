// Real-Life Patch Notes: The Comedy Changelog.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: 14 candidates scored against the judge's published criteria, in
// order: (1) a single-line patch note about a real-life / human-biology bug,
// reading as comedy; (2) genuinely funny — the joke lands on a first read
// and rests on a real comedic idea, not just the word "bug"; (3) reads like
// an actual release note — version number, terse engineering register, fix
// stated as if it shipped; (4) names a specific, recognisable bug of the
// body or daily life, so the reader winces and laughs at once; (5) no
// padding, every word working. Gate: 1-160 characters.
//
// Candidates (rejected in brackets why):
// 1. brain replaying an embarrassing moment from 2014 at 3 a.m. instead of
//    sleeping [the 3 a.m. cringe-replay is the modal entry of this genre].
// 2. stomach growling during silent prayers, meetings, first dates only
//    [good wince, but the joke is just "loud at bad times" — one beat].
// 3. yawning in a meeting triggering a chain reaction across 14 attendees
//    [funny image, but the punchline is the count, not an idea].
// 4. left leg falling asleep in long meetings, waking as pins and needles
//    [flat; describes the bug, no twist].
// 5. bladder sending a low-battery warning only after the last rest stop
//    [strong runner-up: concrete, wince, real idea — kept as #2].
// 6. mouth saying "you too" to the waiter who said "enjoy your meal"
//    [relatable, but a known stand-up bit, not fresh].
// 7. brain autocorrecting "I'll start Monday" to "next Monday" every week
//    [procrastination joke; modal, and the version-register fit is weak].
// 8. eyes watering while chopping onions but never during sad movies
//    [mild; the contrast is thin].
// 9. knees cracking louder than the Wi-Fi router on cold mornings
//    [funny image, but "louder than the router" is decoration, not idea].
// 10. body demanding a 2 p.m. nap after a full night's sleep [modal nap joke].
// 11. brain forgetting a password used daily but remembering a jingle from
//     2007 [CHOSEN — see below].
// 12. stomach announcing hunger 20 minutes after finishing a buffet
//     [one beat, no twist].
// 13. hand waving back at a stranger who was waving at someone behind you
//     [good wince, but no version-note logic: it is an anecdote, not a bug].
// 14. brain rehearsing an argument in the shower that never happened
//     [the shower-argument is the single most common entry of this genre].
//
// Why the pick wins:
// - Criterion 2: a real comedic idea — the brain's memory has garbage
//   priorities: it drops the credential you need every day and keeps a
//   jingle you have not needed since 2007. The joke lands on first read.
// - Criterion 3: perfect release-note shape — "v2.6.3: fixed a bug where
//   ..." with the fix stated as shipped, dry engineering tone throughout.
// - Criterion 4: specific and recognisable — a daily password, a jingle,
//   the year 2007. Every reader has lived exactly this bug.
// - Criterion 5: 99 characters, no padding; "daily" vs "2007" does all
//   the work. The example line in the brief (left ear, 40ms) was avoided:
//   copying the brief's own example can never beat the field.
// Runner-up (bladder / low-battery / last rest stop) loses on C2: its
// idea is "bad timing", while the winner's idea is a broken priority
// system — a funnier, more patch-note-shaped bug.
// Verified: entry is 99 characters (gate 1-160), one line, ASCII only.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `v2.6.3: fixed a bug where the brain forgot a password used daily but remembered a jingle from 2007.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
