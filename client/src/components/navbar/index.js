import React from 'react'

export default function Navbar ({ handleSend }) {
  return (
    <header>
      <nav className='navbar navbar-light'>
        <div className='container-fluid'>
          <form
            className='d-flex justify-content-center flex-grow-1'
            onSubmit={e => {
              e.preventDefault()
              const text = e.target?.search?.value
              handleSend(text)
            }}
          >
            <input
              required
              name='search'
              type='search'
              aria-label='Search'
              className='form-control mx-4 w-50'
              placeholder='Insert text'
            />
            <button className='btn search-btn px-4' type='submit'>
              Send
            </button>
          </form>
        </div>
      </nav>
    </header>
  )
}
