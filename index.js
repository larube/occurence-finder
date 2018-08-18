export const cleanText = text =>
  text.replace(/['!?;,:"'«»()`.']/g, '').replace(/\s\s+/g, ' ')

const findNbOccurencesInText = (text = '', needle = '') => {
  const cleanedText = cleanText(text).trim()

  return cleanedText
    .split(' ')
    .filter(
      word => word.length > 2 && word.toLowerCase() === needle.toLowerCase(),
    ).length
}

export default findNbOccurencesInText
