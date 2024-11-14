import Spinner from "../_components/Spinner"

function Loading() {
  return (
    <div className='grid items-center justify-center'>
      <Spinner />
      <p className='text-xl text-primary-200'>Load ing data cabins....</p>
    </div>
  )
}

export default Loading
