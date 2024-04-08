/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'

const Pin = props => {
  const { setLoading, pin } = props

  const [wrongPin, setWrongPin] = useState(false)
  const inputPin = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    if (inputPin.current.value == pin) {
      setLoading(false)
      localStorage.setItem('pin', pin)
    } else {
      setWrongPin(true)
    }
  }

  return (
    <div>
      <dialog id='my_modal_3' className='modal'>
        <div className='modal-box'>
          <h3 className='text-lg font-bold'>Masukkan Pin</h3>
          <input
            ref={inputPin}
            type='text'
            placeholder='000000'
            className={`w-full mt-2 input input-bordered ${
              wrongPin ? 'input-error' : ''
            }`}
          />
          <div className='mt-4'>
            <button onClick={handleSubmit} className='btn btn-primary'>
              Submit
            </button>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default Pin
