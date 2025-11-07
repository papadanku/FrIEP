
function findAndReplace(inputRange, findString, replaceString) {
  inputRange
    .createTextFinder(findString)
    .useRegularExpression(true).matchEntireCell(true)
    .replaceAllWith(replaceString);
}
