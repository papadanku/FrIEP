
function ASRS_MarkScores()
{
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = spreadsheet.getSheetName();

  if (sheetName == "ASRS Table")
  {
    const rangeArray = [
      'B18:E18',
      'B20:E22',
      'B24:E24',
      'B26:E33'
    ];

    for (const range of rangeArray)
    {
      var selectedCells = spreadsheet.getRange(range);

      // Find-Replace Slightly Elevated scores
      selectedCells
        .createTextFinder('^(6[0-4])$')
        .useRegularExpression(true).matchEntireCell(true)
        .replaceAllWith('$1*');
      
      // Find-Replace Elevated scores
      selectedCells
        .createTextFinder('(6[5-9])')
        .useRegularExpression(true).matchEntireCell(true)
        .replaceAllWith('$1**');
      
      // Find-Replace Very Elevated scores
      selectedCells
        .createTextFinder('(\d{3,}|[7-9]\d)')
        .useRegularExpression(true).matchEntireCell(true)
        .replaceAllWith('$1***');
    }
  }
}
