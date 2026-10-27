# The Winter Grind Tour — Kyle Hiscock × Ryan Grace

Evergreen website for **Kyle Hiscock** and **Ryan Grace** at Skramble House of Golf ROC.

## Current site
- 25 themed Tuesdays, 50 different GSPro course assignments, October 27, 2026–April 13, 2027.
- **Round 1:** 18-hole two-man scramble, **2-ft gimmes**.
- **Round 2:** 18-hole individual gross stroke play, **5-ft gimmes**.
- Stimp 11, Force Realistic, 6,000–7,000-yard tees. Pins, wind and firmness vary by course.
- Approved original tournament crest in optimized `winter-grind-logo.svg` (transparent PNG embedded inside SVG).
- Individual scores by hole. Round-level FW hit, GIR, average drive and feet of putts made are collected **only** for individual stroke play.
- Scramble stats: 18-hole scores, eagle+, birdies, pars, bogeys, double+; no advanced scramble metrics.
- No sample scores or invented stats are published.

## Publish GitHub Pages

1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, set Source = **Deploy from a branch**.
3. Choose **main** branch and **/(root)** folder, then Save.
4. The normal address is https://kylehiscock.github.io/winter-grind-tour/ once Pages is active. Do not assume it is live until GitHub Pages reports a deployment and the site opens.
5. This repo does **not** affect any HGGL repository. Week 16 is the Ross Championship Showcase; the Spring Cup Grand Finale is Week 25.

## Live Google Sheets scoring — administrator setup

The score-entry Google Sheet is maintained privately by the tour organizer and is not linked from the public website.

The published HTML is configured with a read-only Apps Script feed. If the feed ever needs to be redeployed:

1. Open the Google Sheet → **Extensions → Apps Script**.
2. Copy `apps-script/Code.gs` into the project's `Code.gs`; save.
3. Review: this script publishes the tour schedule, score totals, hole scores and **round-level** FW Hit/GIR/drive/putting metrics. It does **not** publish uploaded photos, notes, emails or addresses.
4. Click **Deploy → New deployment → Web app**. Set **Execute as: Me** and, **only if you want the scores public on the site**, **Who has access: Anyone**. Authorize Google permissions.
5. Copy the actual web app URL ending in `/exec`. Edit `index.html` to set `const APPS_SCRIPT_URL="YOUR_ACTUAL_EXEC_URL";`, then commit.
6. Load the site and confirm the status badge reads **Sheet connected**. Future score entries will be reflected when the page reloads.
7. Never include private image links or confidential spreadsheet tabs in the public feed. The source sheet itself may remain private.

## Public UX — October 27, 2026 upgrade

The Evergreen site includes five public-facing experiences, all powered by the existing read-only Apps Script feed:

1. **This Week** spotlights the selected Tuesday with Round 1 scramble and Round 2 stroke-play courses, tees, and a link to its detailed page.
2. **18-hole scorecards** show front-nine/back-nine score tiles, out/in/total calculations, and relative-to-par score coloring. Incomplete holes stay blank.
3. **Player trends** compare Kyle Hiscock and Ryan Grace across gross scores, score versus par, fairways hit, GIR, average driving distance, feet of putts made, and birdies. Missing data is not treated as zero.
4. **Record Book** tracks verified season lows, best score vs. par, largest margin, most birdies, lowest scramble round and longest completed-round winning streak.
5. **Mobile week pages and sharing** use permanent hash URLs like `#/week/1`. The page has a week-to-week selector and a Share link.

The public score-entry Google Sheet link and internal connection-status badge were removed from the website. The existing private spreadsheet remains owner-only; only the approved feed data is publicly accessible.

## How to log weekly scores

After Tuesday's two rounds, post the GSPro screenshots in the ChatGPT conversation:
- Scramble 18-hole team scorecard first.
- Individual 18-hole stroke-play scorecard with both players.
- Kyle's and Ryan's full-round stats screenshots, including FW Hit, GIR, average driving distance and total feet of putts made.

ChatGPT can read the screenshots and, with the connected Google Sheet, enter verified results in the appropriate tabs. Hole-by-hole FW and GIR are not recorded.

## Notes

GSPro course names, installations and tees require confirmation at Skramble. This is an unofficial recreational series, not GHIN/World Handicap System scoring. Hosted on GitHub Pages; independent of GSPro, Skramble, and HGGL.

## Extended season research (Weeks 17–25)

Added nine Tuesday sessions February 16–April 13, 2027, with 18 new GSPro models. Course pairings: Bandon Dunes Encore (Old Macdonald + Bandon Dunes); Open Championship Rewind (Royal St Georges + Royal Birkdale); Northern Ireland Links Quest (DPC Portrush + DPC County Down); Nevada Desert Spectacular (Wolf Creek + Shadow Creek); St. Patrick's Week Challenge (Old Head + Adare Manor); Atlantic Coast Clash (Sea Island Seaside + Kiawah Ocean); American Major Tests (Prairie Knolls + Oakmont CC); Championship Dress Rehearsal (Quail Hollow + Valhalla); Spring Cup Grand Finale (Riviera + Pine Valley).

Every selected tee was checked against a course-specific public [The Course View](https://thecourseview.com/) page for 6,000–7,000 yards. See the private spreadsheet's Schedule and Course Bank tabs for exact tee colors, yardages, public source links, and weekly conditions. All nine weeks are two full 18-hole rounds. Venue-specific installation and course version cannot be confirmed until checking Skramble's GSPro PCs. The existing Apps Script feed is range-independent and reads all added rows automatically.
