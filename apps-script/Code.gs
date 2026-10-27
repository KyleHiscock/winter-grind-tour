/**
 * Winter Grind Tour — public, read-only score feed.
 * Paste into the linked Google Sheet's Extensions → Apps Script.
 * This publishes ONLY the selected course settings, scores and round-level stats.
 * It deliberately excludes player notes, Google Drive photo links and emails.
 */
const SPREADSHEET_ID = '1VAYMas0R1-ssGaJbEpbQS8lxWdMR1Cev_Yd-p8etZ6E';
function doGet(e) {
  const cb = String(e && e.parameter && e.parameter.callback || 'receiveLeagueData');
  if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(cb)) {
    return ContentService.createTextOutput('Invalid callback');
  }
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const a = readRows_(ss, 'Schedule', 32);
  const b = readRows_(ss, 'Results', 32);
  const c = readRows_(ss, 'Stroke Holes', 13);
  const d = readRows_(ss, 'Scramble Holes', 16);
  const schedule = a.filter(x => Number(x[0]) > 0).map(x => ({
    week:x[0], date:date_(x[1]), theme:x[26], status:x[20], round1:'scramble', round2:'stroke',
    scramble:x[4], scrambleGs:x[5], teeScramble:x[23]||x[7],
    scrambleFairway:x[10], scrambleGreen:x[11], pinsScramble:x[13], windScramble:x[15],
    gimmeScramble:x[30]||'2 ft', sourceScramble:x[25],
    stroke:x[2], strokeGs:x[3], teeStroke:x[22]||x[6],
    strokeFairway:x[8], strokeGreen:x[9], pinsStroke:x[12], windStroke:x[14],
    gimmeStroke:x[31]||'5 ft', sourceStroke:x[24], stimp:x[16], realism:x[17]
  }));
  const results = b.filter(x => Number(x[0]) > 0).map(x => ({
    week:x[0], date:date_(x[1]), scramble:x[11], scramblePar:x[12],
    scrambleGross:x[13], scrambleToPar:x[14],
    teamBirdies:x[25], teamPars:x[26], teamBogeys:x[27],
    teamDoubles:x[30], teamEagles:x[31],
    stroke:x[2], par:x[3], kyleGross:x[4], ryanGross:x[5],
    kyleToPar:x[6], ryanToPar:x[7], winner:x[8],
    kylePts:x[9], ryanPts:x[10],
    kBirdies:x[15], gBirdies:x[16],
    kFw:x[17], gFw:x[18], kGir:x[19], gGir:x[20],
    kDrive:x[21], gDrive:x[22], kFeet:x[23], gFeet:x[24]
  }));
  const strokeHoles = c.filter(x => Number(x[0]) > 0 && (isNum_(x[3]) || isNum_(x[5]) || isNum_(x[6])))
    .map(x => ({week:x[0], hole:x[1], par:x[3], yards:x[4], kyle:x[5], ryan:x[6]}));
  const scrambleHoles = d.filter(x => Number(x[0]) > 0 && (isNum_(x[3]) || isNum_(x[5])))
    .map(x => ({week:x[0], hole:x[1], par:x[3], yards:x[4],
      strokes:x[5], outcome:x[6], relativeToPar:x[7]}));
  const payload = {name:'The Winter Grind Tour', season:'2026–27',
    generatedAt:new Date().toISOString(), schedule, results, strokeHoles, scrambleHoles};
  return ContentService.createTextOutput(
    cb+'('+JSON.stringify(payload).replace(/</g, '\\u003c')+');'
  ).setMimeType(ContentService.MimeType.JAVASCRIPT);
}
function readRows_(ss, name, width) {
  const sh = ss.getSheetByName(name);
  if (!sh) return [];
  const n = sh.getLastRow()-1;
  return n>0 ? sh.getRange(2,1,n,width).getValues() : [];
}
function isNum_(v){return typeof v==='number' && Number.isFinite(v);}
function date_(v){return v instanceof Date ?
  Utilities.formatDate(v,Session.getScriptTimeZone(),'yyyy-MM-dd') : v;}
