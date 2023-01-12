import companyImg from '../../../assets/company.jpg'
import studentsImg from '../../../assets/students.jpg'
import { FaCaretRight } from 'react-icons/fa'

const Scenario = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12 z-50">
      <h2 className="text-center text-3xl pb-12 text-teal-600">Possible scenarios for using GiGaWiki</h2>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <img src={companyImg} alt='Company Scenario' className='rounded-2xl shadow-xl shadow-slate-400' />
        </div>
        <div>
          <h3 className='text-2xl mb-2 text-cyan-600'>Companies</h3>
          <div className='text-lg pl-4 my-4 flex flex-row'>
            <FaCaretRight className='mt-1 mr-4 w-6 h-6 text-cyan-600'/>
            <p className='text-lime-700'>You can create a centralized wiki containing project information and details</p>
          </div>
          <div className='text-lg pl-4 my-4 flex flex-row'>
            <FaCaretRight className='mt-1 mr-4 w-6 h-6 text-cyan-600'/>
            <p className='text-lime-700'>Drafting of detailed guides or manuals on proprietary products</p>
          </div>
          <div className='text-lg pl-4 my-4 flex flex-row'>
            <FaCaretRight className='mt-1 mr-4 w-6 h-6 text-cyan-600'/>
            <p className='text-lime-700'>Write corporate policies with terms and conditions</p>
          </div>
          <div className='text-lg pl-4 my-4 flex flex-row'>
            <FaCaretRight className='mt-1 mr-4 w-6 h-6 text-cyan-600'/>
            <p className='text-lime-700'>Make the company's know-out available to its employees</p>
            </div>
          <div className='text-lg pl-4 my-4 flex flex-row'>
            <FaCaretRight className='mt-1 mr-4 w-6 h-6 text-cyan-600'/>
            <p className='text-lime-700'>Training for your employees</p>
          </div>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 mt-24">
        <div>
          <h3 className='text-2xl mb-2 text-cyan-600'>Training and Learning</h3>
          <div className='text-lg pl-4 my-4 flex flex-row'>
            <FaCaretRight className='mt-1 mr-4 w-6 h-6 text-cyan-600'/>
            <p className='text-lime-700'>You can create a centralized wiki containing project information and details</p>
          </div>
          <div className='text-lg pl-4 my-4 flex flex-row'>
            <FaCaretRight className='mt-1 mr-4 w-6 h-6 text-cyan-600'/>
            <p className='text-lime-700'>Drafting of detailed guides or manuals on proprietary products</p>
          </div>
          <div className='text-lg pl-4 my-4 flex flex-row'>
            <FaCaretRight className='mt-1 mr-4 w-6 h-6 text-cyan-600'/>
            <p className='text-lime-700'>Write corporate policies with terms and conditions</p>
          </div>
          <div className='text-lg pl-4 my-4 flex flex-row'>
            <FaCaretRight className='mt-1 mr-4 w-6 h-6 text-cyan-600'/>
            <p className='text-lime-700'>Make the company's know-out available to its employees</p>
            </div>
          <div className='text-lg pl-4 my-4 flex flex-row'>
            <FaCaretRight className='mt-1 mr-4 w-6 h-6 text-cyan-600'/>
            <p className='text-lime-700'>Training for your employees</p>
          </div>
          </div>
          <div>
            <img src={studentsImg} alt='Company Scenario' className='rounded-2xl shadow-xl shadow-slate-400' />
          </div>
      </div>
    </div>
  )
}

export default Scenario