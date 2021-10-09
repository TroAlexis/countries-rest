export default function getTextWithDefault(text, defaultText = '-') {
  if (text === 0) {
    return text;
  } if (text) {
    return text;
  }
  return defaultText;
}
