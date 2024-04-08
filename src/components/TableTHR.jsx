import { deleteDataTHR } from '../util/getDataThr'

/* eslint-disable react/prop-types */
const TableTHR = ({ dataTHR, setLoading, setDataTHR }) => {
  const handleDelete = async id => {
    setLoading(true)
    try {
      await deleteDataTHR(id)
      const newDataTHR = dataTHR.filter(data => data.id !== id)
      setDataTHR(newDataTHR)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  return (
    <div className='flex items-center justify-center w-full min-h-svh '>
      <div className='flex w-full max-w-screen-sm shadow-lg card card-body bg-base-100'>
        <div className='flex flex-col items-center justify-center w-full gap-3'>
          <h1 className='text-3xl font-semibold'>Total</h1>
          <h2 className='text-4xl font-semibold'>
            Rp{' '}
            {dataTHR
              .reduce((prev, curr) => parseInt(curr.thr) + prev, 0)
              .toLocaleString('id-ID')}
          </h2>
        </div>
        <div>
          <div className='flex justify-end w-full'>
            <a href='/add' className='btn btn-md btn-primary'>
              {/* <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 4.5v15m7.5-7.5h-15'
                />
              </svg> */}
              Tambah THR
            </a>
          </div>
          <div className='overflow-x-auto'>
            <table className='table'>
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Nama</th>
                  <th>THR</th>
                  <th>Keterangan</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {dataTHR
                  .sort((a, b) => parseInt(b.thr) - parseInt(a.thr))
                  .map((data, index) => (
                    <tr
                      key={'table row ' + index}
                      className={`${index % 2 == 0 ? 'bg-base-200' : ''}`}
                    >
                      <th>{index + 1}</th>
                      <td>{data.name}</td>
                      <td>{parseInt(data.thr).toLocaleString('id-ID')}</td>
                      <td>{data.keterangan ? data.keterangan : '-'}</td>
                      <td className='flex gap-3'>
                        {/* <button className='btn btn-primary btn-sm'>Edit</button> */}
                        <button
                          onClick={() => handleDelete(data.id)}
                          className='btn btn-error text-base-100 btn-sm'
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableTHR
