import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link, useHistory} from 'react-router-dom'
import {validator} from '../utils/validator'
import {validatorConfig} from '../utils/validatorConfig'
import TextField from '../form/textField'
import Modal from '../ui/modal'

const CardForm = () => {
  const history = useHistory()
  const {name, surname, yearOfBirth, portfolioUrl} = localStorage
  const [data, setData] = useState({
    name,
    surname,
    yearOfBirth,
    portfolioUrl,
  })

  const [errors, setErrors] = useState({})

  const [isModalVisible, setModalVisibility] = useState(false)

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = event => {
    event.preventDefault()
    const isValid = validate()

    if (!isValid) return

    localStorage.setItem('name', data.name)
    localStorage.setItem('surname', data.surname)
    localStorage.setItem('yearOfBirth', data.yearOfBirth)
    localStorage.setItem('portfolioUrl', data.portfolioUrl)

    setTimeout(() => {
      history.push('/')
    }, 3000)
  }

  const handleClick = () => {
    setModalVisibility(true)
  }

  return (
    <form className='mb-5' onSubmit={handleSubmit}>
      <h1 className='mb-5'>{name ? 'Редактировать карточку' : 'Создать карточку'}</h1>
      <TextField
        label='Имя'
        name='name'
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextField
        label='Фамилия'
        name='surname'
        value={data.surname}
        onChange={handleChange}
        error={errors.surname}
      />
      <TextField
        label='Год рождения'
        type='number'
        name='yearOfBirth'
        value={data.yearOfBirth}
        onChange={handleChange}
        error={errors.yearOfBirth}
      />
      <TextField
        label='Портфолио'
        name='portfolioUrl'
        value={data.portfolioUrl}
        onChange={handleChange}
        error={errors.portfolioUrl}
      />

      <Link to='/' className='btn-warning btn me-3'>Назад</Link>

      <button
        type='submit'
        disabled={!isValid}
        className='btn-success btn'
        onClick={handleClick}
      >
        {localStorage.length ? 'Обновить' : 'Создать'}
      </button>

      <Modal isVisible={isModalVisible}/>
    </form>
  )
}

CardForm.defaultProps = {
  name: '',
  surname: '',
  yearOfBirth: '',
  portfolioUrl: '',
}

CardForm.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  yearOfBirth: PropTypes.string,
  portfolioUrl: PropTypes.string,
}

export default CardForm
