import { FadeLoader } from 'react-spinners';

const Spinner = ({ loading }) => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <FadeLoader
        color={'#10b981'}
        loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Spinner