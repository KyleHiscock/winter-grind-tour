# The Winter Grind Tour — Kyle Hiscock × Ryan Grace

Evergreen website for **Kyle Hiscock** and **Ryan Grace** at Skramble House of Golf ROC.

## Current site
- 26 themed Tuesdays, 52 distinct GSPro course assignments, October 27, 2026–April 20, 2027.
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
5. This repo does **not** affect any HGGL repository. Week 16 is the Ross Championship Showcase; the Spring Cup Grand Finale is Week 26.

## Live Google Sheets scoring — administrator setup

The score-entry Google Sheet is maintained privately by the tour organizer and is not linked from the public website.

The published HTML is configured with a read-only Apps Script feed. If the feed ever needs to be redeployed:

1. Open the Google Sheet → **Extensions → Apps Script**.
2. Copy `apps-script/Code.gs` into the project's `Code.gs`; save.
3. Review: this script publishes the tour schedule, score totals, hole scores and **round-level** FW Hit/GIR/drive/putting metrics. It does **not** publish uploaded photos, notes, emails or addresses.
4. Click **Deploy → New deployment → Web app**. Set **Execute as: Me** and, **only if you want the scores public on the site**, **Who has access: Anyone**. Authorize Google permissions.
5. Copy the actual web app URL ending in `/exec`. Edit `index.html` to set `const APPS_SCRIPT_URL="YOUR_ACTUAL_EXEC_URL";`, then commit.
6. Reload the site and verify new schedule/results data appears. The technical connection-status badge is intentionally hidden from public visitors.
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

## Extended season research (Weeks 17–26)

Added ten Tuesday sessions February 16–April 20, 2027, with 20 new GSPro models compared with the original 16-week schedule. Course pairings: Ozark Mountain Escape (Paynes Valley + Ozarks National Golf Course); Open Championship Rewind (Royal St Georges + Royal Birkdale); Northern Ireland Links Quest (DPC Portrush + DPC County Down); Nevada Desert Spectacular (Wolf Creek + Shadow Creek); St. Patrick's Week Challenge (Old Head + Adare Manor); Atlantic Coast Clash (Cabot Cliffs + Kiawah Ocean); American Major Tests (Prairie Knolls + Oakmont CC); Championship Dress Rehearsal (Quail Hollow + Valhalla); Wisconsin Sandhills Showdown (Mammoth Dunes + Sand Valley); Spring Cup Grand Finale (Riviera + Pine Valley).

The 6,000–7,000-yard GSPro tee choices were checked using course-specific public [The Course View](https://thecourseview.com/) pages, except Sovereignbyre Links, for which the **GSPro tee color and exact yardage remain unverified**. See the private spreadsheet's Schedule and Course Bank tabs for exact tee colors, yardages, public source links, and weekly conditions. All ten added weeks are two full 18-hole rounds. Venue-specific installation and course version cannot be confirmed until checking Skramble's GSPro PCs. The existing Apps Script feed is range-independent and reads all added rows automatically.

## Community favorites refresh — October 27, 2026

Four approved upgrades originally preserved the 25-week / 50-course structure:
- Week 2 **Desert After Dark**: Silverleaf Club (Black, 6,916 yd) replaces TPC Summerlin as Round 1 scramble; TPC Scottsdale remains Round 2.
- Week 7 **The Green Jacket Invitational**: East Lake Golf Club (Blue, 6,482 yd) replaces Druid Hills as Round 1; Augusta-inspired Georgia Golf Club remains Round 2.
- Week 17 **Ozark Mountain Escape** replaces Bandon Dunes Encore: Payne's Valley (GSPro name **Paynes Valley**, Green, 6,815 yd) scramble, followed by Ozarks National Golf Course (Blue, 6,520 yd) stroke play. Bandon Dunes + Old Macdonald stay in the reserve/alternate pool.
- Week 22 **Atlantic Coast Clash**: Cabot Cliffs (Black, 6,685 yd) replaces Sea Island Seaside as Round 1, followed by Kiawah Ocean.

All source links and course-specific firmness/wind settings are maintained in the live Schedule and Course Bank sheets. GSPro availability on the venue's local PC still requires checking.

## Course-condition realism review — October 27, 2026

- Audited the original 25-week / 50-course schedule against real-world maintenance and playing-characteristics sources; the added Wisconsin courses have individual condition rationales.
- Updated 30 course condition profiles, preserving all tees, pairings, pin days, Stimp 11, gimme rules and scoring calculations. The Schedule and Course Bank match the website.
- East Lake now uses **Normal** fairways and **Firm** greens: its restored Zorro zoysia promotes rollout, while the Normal simulator preset is a playable-season compromise rather than championship-extreme. TPC Scottsdale and Wolf Creek favor Normal overseeded desert fairways.
- Coastal sand/fescue ground-game venues use firmer fairways, while wetter or irrigated parkland venues generally stay Normal. The five specifically exposed Gusty rounds are Carnoustie, Shinnecock Hills, Royal St Georges, Royal Portrush and Old Head.
- The Course Bank has a **Why This Setup** column documenting the rationale for every course. Corresponding explanations appear on each weekly detail page.
- These are representative playing-season *presets*, not forecasts or guaranteed measured real-world firmness. The venue's installed GSPro version / physics can affect perceived ball response.

## Season 26-week revision — October 27, 2026

- Week 8 **The Home of Golf** (December 15, 2026): Round 1 two-man scramble at **St Andrews Old Course-inspired Sovereignbyre Links**; Round 2 individual stroke play at **Carnoustie** (Blue, 6,567 yd). The Sovereignbyre course is listed in GSPro, but the simulator tee selection/yardage cannot be independently verified. Select a 6,000–7,000-yard tee in GSPro and update the Schedule/Course Bank before this round; do **not** use the real-world St Andrews tee lengths as proof of simulator yardage.
- Week 14 **Northern Lights & Southern Peaks** (January 26, 2027): Round 1 **Jack's Point**; Round 2 **Norwegian Lights** (Black, 6,428 yd), replacing Greywolf. Norwegian Lights uses its designer-recommended Normal / Normal / Calm setup.
- Week 25 **Wisconsin Sandhills Showdown** (April 13, 2027): Round 1 **Mammoth Dunes** (Blue, 6,590 yd); Round 2 **Sand Valley** (Blue, 6,540 yd). Both use Firm fairways, Firm greens, Breezy wind, Stimp 11 to emulate strategic sandy ground-game golf.
- Week 26 **Spring Cup Grand Finale** (April 20, 2027): Original Riviera scramble followed by Pine Valley stroke play, moved from Week 25 so the championship still ends on the final week. All 26 stroke rounds award normal Winter Cup points.
- Google Sheets score entry, Results formulas, Stroke Holes, Scramble Holes, Stats Overrides, Photo Log, Practice Log, Dashboard and Scramble Trends now extend through Week 26. The score feed automatically reads the new entries; the website embeds all 26 weeks and preserves private sheet access.

## UX refinement — 26-week edition

- **Home dashboard** highlights the next upcoming or unfinished week, the latest submitted result, and Winter Cup standings. The Cup-race panel adds head-to-head wins, ties, current winning streak, and remaining rounds; it only declares a mathematical clinch when a points lead exceeds the maximum remaining points.
- **The Tour** filters Upcoming / Completed / All Weeks and offers a jump-to-week menu. Completed means both the team scramble and both individual stroke rounds are posted; incomplete weeks remain accessible.
- **Pre-round setup cards** present GSPro course search name, tees, firmness, wind, pins, Stimp 11, gimmes, realism and mulligans for both rounds, with a Copy Settings action.
- **Tee-length guidance** recognizes the players' 230–240-yard driver carry and roughly 250–260-yard total drive. Around 6,200–6,500 yards is a reasonable normal stroke-play target; 6,600–6,800 yards is acceptable for a suitable championship or open/firm layout. Individual tee selections above 6,800 yards get a stronger review note. No alternate color/yardage is invented. The St Andrews-inspired Sovereignbyre course tee remains **unverified** pending an in-simulator check.
- **Weekly recaps** are composed deterministically from actual posted scores and statistics; they report winners, margins, Cup points, team scramble results and supported record breaks only. No model-generated speculation or fake stats.
- **Mobile** includes a Tour / Results / Stats bottom shortcut, adaptive setup cards, and consistent week-to-week scroll positioning.

The Google Sheets Apps Script feed, scoring rules, tour calendar and privately held score-entry data were not altered by this UX pass. The cards recommend verifying shorter tee choices in GSPro where warranted; the source Schedule/Course Bank retain previously researched tees until verification.

## Verified tee-distance review — October 27, 2026

After reviewing 52 course assignments against the players' approximately 230–240-yard carry and 250–260-yard driver total distance, **19 tee selections** were changed using directly published GSPro course-model yardages on [The Course View](https://thecourseview.com/).

- Mean individual stroke-play distance changed from **6,643 yd to 6,471 yd**, and mean scramble from **6,638 yd to 6,464 yd** (the scramble average excludes Week 8 Sovereignbyre's unverified distance).
- Kept deliberate longer open/firm and championship tests when appropriate; all 51 currently verified tee assignments are at or below 6,800 yards.
- The private Course Bank now includes **Tee Review Status**, **Tee Selection Rationale**, and **Previous Tee / Yards** for all 52 course assignments. Verified public course-listing yardage is not proof of installation or matching course version at Skramble.
- Week 8 **Sovereignbyre Links** remains Tee TBD because neither an exact GSPro model tee color nor its yardage could be confirmed publicly. Choose and record a suitable GSPro tee at the venue before the round.
- The website's 26 static schedule records and pre-round cards mirror the revised Google Sheet, and each card includes an optional **Why this tee?** explanation.
- Only Schedule tee text/yardage and Course Bank tee data were changed; dates, themed pairings, scoring, Course Bank firmness/wind presets, 2-/5-ft gimmes, Stimp 11 and other competition rules remain unchanged.

