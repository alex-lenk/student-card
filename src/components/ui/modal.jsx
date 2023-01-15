import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Modal = ({isVisible}) => {
  const visibleClass = isVisible ? ' d-block' : ''

  return (
    <div className={`modal${visibleClass}`}>
      <div className='modal-dialog  modal-dialog-centered'>
        <div className='modal-content text-bg-light'>
          <div className='modal-body'>
            <h2 className='mb-3'>Обновлено успешно!</h2>

            Будите перенаправлены на главную через 3 секунды!
          </div>
          <div className='modal-footer'>
            <Link to='/' className='btn btn-info'>Посмотреть результат</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.defaultProps = {
  isVisible: false,
}

Modal.propTypes = {
  isVisible: PropTypes.bool,
}

export default Modal
