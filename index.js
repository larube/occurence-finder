export const cleanText = text =>
  text
    .replace(/['!?;,:"'«»()`.']/g, '')
    .replace(/\s\s+/g, ' ')
    .trim()

const findNbOccurencesInText = (text = '', needle = '') => {
  const cleanedText = cleanText(text)

  return cleanedText
    .split(' ')
    .filter(
      word => word.length > 2 && word.toLowerCase() === needle.toLowerCase(),
    ).length
}

export default findNbOccurencesInText
