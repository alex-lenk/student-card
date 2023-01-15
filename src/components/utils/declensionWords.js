const declensionWords = (number, words, showNumb = false) => {
  const cases = [2, 0, 1, 1, 1, 2]
  const num = showNumb ? number : ''

  return num + words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
    ]

}

export default declensionWords
