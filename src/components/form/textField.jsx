import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({label, type, name, value, onChange, error, placeholder}) => {
  const handleChange = ({target}) => {
    onChange({
      name: target.name,
      value: target.value
    })
  }

  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '')
  }

  return (
    <div className='mb-3'>
      {label && <label className='form-label' htmlFor={name}>{label}</label>}

      <div className='input-group has-validation'>
        <input
          className={getInputClasses()}
          type={type}
          name={name}
          id={name}
          value={value.trim()}
          onChange={handleChange}
          placeholder={placeholder ? placeholder : ''}
        />
        {error && <div className='invalid-feedback'>{error}</div>}
      </div>
    </div>
  )
}

TextField.defaultProps = {
  type: 'text'
}

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  placeholder: PropTypes.string,
}

export default TextField
