import companyImg from '../../../assets/company.jpg'

const Scenario = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12 z-50">
      <h2 className="text-center text-3xl pb-12">Possible scenarios for using GiGaWiki</h2>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="">
          <img src={companyImg} alt='Company Scenario' />
        </div>
        <div>
          <h3 className='text-2xl mb-2'>Companies</h3>
          <div className='text-lg ring ring-teal-200 ring-offset-1 ring-offset-emerald-100 pl-4 my-4'>
          <FontAwesomeIcon icon="fa-solid fa-check" />
            <p className='text-lime-700'>You can create a centralized wiki containing project information and details</p>
          </div>
          <div className='text-lg ring ring-teal-400 ring-offset-2 ring-offset-emerald-200 pl-4 my-4'>
            <p>Drafting of detailed guides or manuals on proprietary products</p>
          </div>
          <div className='text-lg ring ring-teal-400 ring-offset-2 ring-offset-emerald-200 pl-4 my-4'>
            <p>Write corporate policies with terms and conditions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scenario