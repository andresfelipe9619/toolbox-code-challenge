const router = require('express').Router()

router.get('/iecho', (req, res) => {
  const { text } = req.query
  if (!text) {
    return res.status(400).json({
      error: 'No text'
    })
  }
  const palindrome = isPalindrome(text)

  return res.json({
    ok: true,
    palindrome,
    text: reverseText(text)
  })
})

function reverseText (text) {
  return text
    .split('')
    .reverse()
    .join('')
}

function isPalindrome (text) {
  const normalizedText = text.toLowerCase().replace(/[\W_]/g, '')
  const reversedText = reverseText(normalizedText)
  const palindrome = reversedText === normalizedText
  return palindrome
}

module.exports = router
