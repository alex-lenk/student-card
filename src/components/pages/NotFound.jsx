import React from 'react'
import {Link} from 'react-router-dom'
import '../../assets/scss/not-found.scss'

const NotFound = () => {
  return (
    <section className="not-found">
        <div className="not-found__error">404</div>
        <h1 className="not-found__title">Страница не&nbsp;найдена</h1>
        <Link to='/' className='btn-primary btn'>На главную</Link>
    </section>
  )
}

export default NotFound
