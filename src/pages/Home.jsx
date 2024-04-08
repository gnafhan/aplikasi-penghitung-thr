import { useEffect, useState } from 'react'
import getPin from '../util/getPin'
import Loading from '../components/Loading'
import Pin from '../components/Pin'
import TableTHR from '../components/TableTHR'
import getDataTHR from '../util/getDataThr'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [pin, setPin] = useState('')
  const [dataTHR, setDataTHR] = useState([])
  const localPin = localStorage.getItem('pin')
  useEffect(() => {
    getPin().then(data => {
      if (localPin == data[0].pin) {
        setLoading(false)
      } else {
        setPin(data[0].pin)
        document.getElementById('my_modal_3').showModal()
      }
    })

    getDataTHR().then(data => {
      setDataTHR(data)
    })
  }, [localPin])

  return (
    <>
      {loading ? (
        <>
          <Pin setLoading={setLoading} pin={pin} />
          <Loading />
        </>
      ) : (
        <TableTHR
          setLoading={setLoading}
          dataTHR={dataTHR}
          setDataTHR={setDataTHR}
        />
      )}
    </>
  )
}

export default Home
