module.exports = {
  arrowParens: 'avoid', // (p) => p + 1 becomes p => p + 1
  bracketSpacing: true, // {p:1} becomes { p: 1 }
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'css', // preserve whitespaces in inline elements
  printWidth: 120, // max characters per line
  quoteProps: 'as-needed', // add quotes around props in objects only if they are not valid js literals, for instance { 'big-test': 1 }
  semi: true, // add semi-columns at the end of each statement
  singleQuote: true, // use single quotes for strings
  tabWidth: 2, // use 2 spaces indentation
  trailingComma: 'es5', // add commas after the last item, for example [ 'a', 'b', ] or { a: 1, b: 2, }
  useTabs: false, // use spaces for indentation instead of tabs
  singleAttributePerLine: true, // 1 html attribute per line
};
