export function sanitiseTypeaheadText(string, sanitisedQueryReplaceChars = [], trim = true) {
  let sanitisedString = string.toLowerCase().replace(/\s\s+/g, ' ');

  if (trim) {
    sanitisedString = sanitisedString.trim();
  }

  sanitisedQueryReplaceChars.forEach(char => {
    sanitisedString = sanitisedString.replace(new RegExp(char, 'g'), '');
  });

  return sanitisedString;
}
