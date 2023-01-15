import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    document.title = 'Карточка студента'
  }, [])

  return (
    <>
      <h1 className='mb-5'>Карточка студента</h1>

        <p className='mb-5'>Нет данных</p>

      <Link to='/card-form' className='btn btn-primary me-3'>
        {localStorage.length ? 'Редактировать' : 'Добавить данные'}
      </Link>
    </>
  )
}

export default Home
