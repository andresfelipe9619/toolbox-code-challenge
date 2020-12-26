const API_URL = 'http://localhost:5000'

export function isTextPalindrome (text) {
  if (typeof word === 'string') {
    throw new Error(`${text} is not a string, please provide a valid string`)
  }
  return fetchUrl(`${API_URL}/iecho?text=${text}`)
}

export async function fetchUrl (url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}
