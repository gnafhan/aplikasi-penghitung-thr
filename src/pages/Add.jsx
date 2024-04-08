import { useEffect, useState } from 'react'
import { postDataTHR } from '../util/getDataThr'
import getPin from '../util/getPin'
import Loading from '../components/Loading'

const Add = () => {
  const [newData, setNewData] = useState({})
  const [error, setError] = useState('')
  const localPin = localStorage.getItem('pin')
  const [loading, setLoading] = useState(true)

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('aa', newData)
    try {
      await postDataTHR(newData.name, newData.thr, newData?.keterangan ?? '-')
      window.location.href = '/'
    } catch (error) {
      setError(error.message)
      console.error(error)
    }
  }

  useEffect(() => {
    getPin().then(data => {
      if (localPin != data[0].pin) {
        window.location.href = '/'
      } else {
        setLoading(false)
      }
    })
  }, [localPin])
  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className='flex w-full justify-center items-center min-h-[100vh] px-4'>
            <div className='flex w-full max-w-screen-sm shadow-lg card card-body bg-base-100'>
              <div className='flex flex-col items-center justify-center w-full gap-3 mt-3'>
                <h1 className='text-3xl font-semibold'>Tambahkan THR 😍</h1>
              </div>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-5 mt-5'
              >
                <label className='w-full form-control '>
                  <div className='label'>
                    <span className='label-text'>THR dari siapa nich😘</span>
                  </div>
                  <input
                    required
                    type='text'
                    placeholder='Om John'
                    className='w-full input input-bordered'
                    onChange={e =>
                      setNewData({ ...newData, name: e.target.value })
                    }
                  />
                  {error && <p className='mt-1 text-sm text-error'>{error}</p>}
                </label>
                <label className='w-full form-control '>
                  <div className='label'>
                    <span className='label-text'>Dapet berapa nihhh 💸</span>
                  </div>
                  <input
                    type='number'
                    min={0}
                    required
                    placeholder='100000'
                    className='w-full input input-bordered'
                    onChange={e =>
                      setNewData({ ...newData, thr: e.target.value })
                    }
                  />
                  {error && <p className='mt-1 text-sm text-error'>{error}</p>}
                </label>
                <label className='w-full form-control '>
                  <div className='label'>
                    <span className='label-text'>Keterangan</span>
                  </div>
                  <input
                    type='text'
                    placeholder='Duitnya di mama'
                    className='w-full input input-bordered '
                    onChange={e =>
                      setNewData({ ...newData, keterangan: e.target.value })
                    }
                  />
                </label>
                <div className='flex justify-end w-full gap-3'>
                  <a href='/' className='btn btn-error text-base-100'>
                    Cancel
                  </a>
                  <button className='btn btn-primary text-base-100'>
                    Tambahkan THR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Add
