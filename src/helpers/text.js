export function getTextWithDefault(text, defaultText = '-') {
  return isTextValid(text) ? text : defaultText;
}

export function isTextValid(text) {
  return Boolean(text) || text === 0;
}
