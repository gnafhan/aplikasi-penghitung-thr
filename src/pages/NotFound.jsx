const NotFound = () => {
  return (
    <div className='flex w-full justify-center items-center min-h-[100vh] flex-col gap-5'>
      <h1 className='text-4xl font-semibold'>404 Not Found!</h1>
      <a href='/' className='link link-hover'>
        Back to Home
      </a>
    </div>
  )
}

export default NotFound
