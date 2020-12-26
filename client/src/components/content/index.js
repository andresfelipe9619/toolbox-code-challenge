import React from 'react'

export default function Content (props) {
  return (
    <main className='content-container'>
      <div className='card w-75 h-50'>
        <div className='card-body container'>
          <div className='row'>
            <div className='col-md-3'>
              <h4 className='card-title'>Results:</h4>
            </div>
            <div className='col-md-9'>
              <div className='content-results'>
                <Results {...props} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function Results ({ data, loading }) {
  const hasData = !!data.length
  if (!hasData && loading) return <Loading />
  if (!hasData) return <Empty />

  return (
    <>
      <ul className={classes.ul}>
        {data.map((item, index) => (
          <li key={index} className={classes.li}>
            {item.input}
            {!!item.palindrome ? <CheckIcon /> : <CancelIcon />}
          </li>
        ))}
        {loading && <Loading />}
      </ul>
    </>
  )
}

const classes = {
  ul: ['list-group', 'w-75'].join(' '),
  li: [
    'd-flex',
    'text-wrap',
    'text-break',
    'list-group-item',
    'align-items-center',
    'justify-content-between'
  ].join(' ')
}

const Empty = () => <h5>No data provided</h5>

const Loading = () => (
  <div className='text-center w-50 h-25'>
    <div className='spinner-grow' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </div>
  </div>
)

const CancelIcon = () => (
  <span className='badge rounded-pill bg-danger'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='currentColor'
      className='bi bi-x'
      viewBox='0 0 16 16'
    >
      <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
    </svg>
  </span>
)

const CheckIcon = () => (
  <span className='badge rounded-pill bg-success'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='currentColor'
      className='bi bi-check'
      viewBox='0 0 16 16'
    >
      <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
    </svg>
  </span>
)
