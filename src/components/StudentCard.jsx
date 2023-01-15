import React from 'react'
import declensionWords from './utils/declensionWords'

const StudentCard = () => {
  const {name, surname, yearBirth, portfolioUrl} = JSON.parse(localStorage.getItem('user'))
  const getAge = new Date().getFullYear() - yearBirth

  return (
    <div className="mb-5 card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>Имя: </strong>
          {name}
        </li>

        <li className="list-group-item">
          <strong>Фамилия: </strong>
          {surname}
        </li>

        <li className="list-group-item">
          <strong>Год рождения: </strong>
          {yearBirth} ({declensionWords(getAge, [' год', ' года', ' лет'], true)})
        </li>

        <li className="list-group-item">
          <strong>Портфолио: </strong>
          <a className="card-link" href={portfolioUrl} target='_blank' rel='noopener noreferrer'>
            {portfolioUrl}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default StudentCard
