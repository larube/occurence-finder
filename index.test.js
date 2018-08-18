import findNbOccurencesInText, { cleanText } from './index'

describe('#cleanText', () => {
  test('should remove strange characters from a string', () => {
    const textWithStrangeCharacters = 'hello\'!!!! how !  are ?;you,:"«»()'
    expect(cleanText(textWithStrangeCharacters)).toEqual('hello how are you')
  })
})

describe('#findNbOccurencesInText', () => {
  test('should count occurences of a word in a text', () => {
    const text = 'hello\'!!!! how !  are ?;you ,:"«»(are). Are? are you k ?'
    expect(findNbOccurencesInText(text, 'are')).toEqual(4)
  })

  test('shoud return 0 if no text or no needle passed', () => {
    expect(findNbOccurencesInText('', '')).toEqual(0)
    expect(findNbOccurencesInText('lispsum text', '')).toEqual(0)
  })
})
