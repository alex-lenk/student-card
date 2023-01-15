import React from 'react'
import PropTypes from 'prop-types'
import declensionWords from './utils/declensionWords'

const StudentCard = ({name, surname, yearOfBirth, portfolioUrl}) => {
  const getAge = new Date().getFullYear() - yearOfBirth

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
          {yearOfBirth} ({declensionWords(getAge, [' год', ' года', ' лет'], true)})
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

StudentCard.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  yearOfBirth: PropTypes.string,
  portfolioUrl: PropTypes.string,
}

export default StudentCard
