
/** @OnlyCurrentDoc */

function BASC_ProcessCells(spreadsheet, scaleRange, validitiyRange, pasteScales, pasteValidity)
{
  // Start processing the scale scores
  var scaleValues = spreadsheet.getRange(scaleRange);
  spreadsheet.getRange(pasteScales).activate();

  // Move scale scores from the copy box to the target table
  scaleValues.copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, true);
  scaleValues.clearContent();

  // Start processing the validity scores
  var validityValues = spreadsheet.getRange(validitiyRange);
  spreadsheet.getRange(pasteValidity).activate();

  // Move validity scores from the copy box to the target table
  validityValues.copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, true);
  validityValues.clearContent();
}

function BASC_MarkScores(spreadsheet, contentScaleRange, adaptiveScaleRange)
{
  // Process Content scales
  var contentCells = spreadsheet.getRange(contentScaleRange);

  // Find-Replace At-Risk scores (Use ^ and $ for full cell match)
  // Matches exactly 60 through 69
  contentCells
    .createTextFinder('(6\\d)') 
    .useRegularExpression(true).matchEntireCell(true)
    .replaceAllWith('$1*');
  
  // Find-Replace Clinically Significant scores (Use ^ and $ for full cell match)
  // Matches 100+ (\d{3,}) or 70-99 ([7-9]\d)
  contentCells
    .createTextFinder('(\\d{3,}|[7-9]\\d)') 
    .useRegularExpression(true).matchEntireCell(true)
    .replaceAllWith('$1**');

  // Process Adaptive scales
  var adaptiveCells = spreadsheet.getRange(adaptiveScaleRange);

  // Find-Replace At-Risk scores (Use ^ and $)
  // Matches exactly 40 or 30 through 39
  adaptiveCells
    .createTextFinder('(40|3\\d)')
    .useRegularExpression(true).matchEntireCell(true)
    .replaceAllWith('$1*');
  
  // Find-Replace Clinically Significant scores (Use ^ and $)
  // Matches exactly 30 or 0-29
  adaptiveCells
    .createTextFinder('(30|[0-2]\\d)')
    .useRegularExpression(true).matchEntireCell(true)
    .replaceAllWith('$1**');
}

function BASC_CopyPaste()
{
  // Initialize sheet
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = spreadsheet.getSheetName();

  switch (sheetName)
  {
    case "BASC-3 · Multi-Rater · TRS":
      BASC_ProcessCells(spreadsheet, 'G27:Z30', 'G33:I36', 'B18', 'B40');
      BASC_MarkScores(spreadsheet, 'B18:E31', 'B32:E37');
      break;
    case "BASC-3 · Multi-Rater · TRS & PRS":
      BASC_ProcessCells(spreadsheet, 'G26:AA29', 'G32:I35', 'B18', 'B41');
      BASC_MarkScores(spreadsheet, 'B18:E31', 'B32:E38');
      break;
    case "BASC-3 · Preschool · Multi-Rater · TRS & PRS":
      BASC_ProcessCells(spreadsheet, 'G26:V29', 'G32:I35', 'B18', 'B36');
      BASC_MarkScores(spreadsheet, 'B18:E28', 'B29:E33');
      break;
    case "BASC-3 · SRS":
      BASC_ProcessCells(spreadsheet, 'D21:X21', 'D24:H24', 'B13', 'B36');
      BASC_MarkScores(spreadsheet, 'B13:B28', 'B29:B33');
      break;
    case "BASC-3 Table · SRS · Child":
      BASC_ProcessCells(spreadsheet, 'D21:V21', 'D24:H24', 'B13', 'B34');
      BASC_MarkScores(spreadsheet, 'B13:B26', 'B27:B31');
      break;
  }
};
