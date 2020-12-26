import React, { useState } from 'react'
import Navbar from './components/navbar'
import Content from './components/content'
import { isTextPalindrome } from './api'
import './App.css'

function App () {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  async function handleSend (text) {
    try {
      setLoading(true)
      const result = await isTextPalindrome(text)
      setData(prev => [{ ...result, input: text }, ...prev])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar handleSend={handleSend} />
      <Content {...{ data, loading }} />
    </>
  )
}

export default App
