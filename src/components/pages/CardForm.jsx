import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {validator} from '../utils/validator'
import {validatorConfig} from '../utils/validatorConfig'
import TextField from '../form/textField'
import Modal from '../ui/modal'

const CardForm = () => {
  const history = useHistory()
  const [data, setData] = useState({
    name: '',
    surname: '',
    yearBirth: '',
    portfolioUrl: '',
  })

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) setData(JSON.parse(user))
  }, [])

  const isStorage = localStorage.length

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

    localStorage.setItem('user', JSON.stringify(data))

    setTimeout(() => {
      history.push('/')
    }, 3000)
  }

  const handleClick = () => {
    setModalVisibility(true)
  }

  return (
    <form className='mb-5' onSubmit={handleSubmit}>
      <h1 className='mb-5'>{isStorage ? 'Редактировать карточку' : 'Создать карточку'}</h1>
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
        name='yearBirth'
        value={data.yearBirth}
        onChange={handleChange}
        error={errors.yearBirth}
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
        {isStorage ? 'Обновить' : 'Создать'}
      </button>

      <Modal isVisible={isModalVisible}/>
    </form>
  )
}

CardForm.defaultProps = {
  name: '',
  surname: '',
  yearBirth: '',
  portfolioUrl: '',
}

export default CardForm
