export function getTextWithDefault(text, defaultText = '-') {
  console.log('Text: ', text);
  return isTextValid(text) ? text : defaultText;
}

export function isTextValid(text) {
  return Boolean(text) || text === 0;
}
