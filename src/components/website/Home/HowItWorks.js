import { FaGripHorizontal } from 'react-icons/fa'

const HowItWorks = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
      <h2 className="text-center text-3xl pb-12 text-teal-600">How GiGaWiki works</h2>
      <h3 className="text-center text-cyan-600">
        GiGaWiki is composed by an administrative panel to manage projects and an interface only to
        consult the documents created.
      </h3>

      <div className="grid justify-items-center lg:gap-1 lg:grid-cols-2 mt-6 lg:h-24 mx-auto lg:max-w-screen-lg">
        <div className="bg-white h-24 rounded-tl-3xl rounded-bl-3xl mb-4 w-9/12 md:w-8/12 lg:w-10/12">
          <div className='inline-flex items-center'>
            <div className='px-4 text-lime-700'><p>You can create different projects divided by subjects or work areas</p></div>
            <div className='bg-cyan-400 h-24 border-r-2 border-cyan-700 mr-0'><FaGripHorizontal className='w-16 h-24 p-4' /></div>
          </div>
        </div>

        <div className="bg-white h-24 rounded-tr-3xl rounded-br-3xl mb-4 w-9/12 md:w-8/12 lg:w-10/12">
          <div className='inline-flex items-center'>
            <div className='bg-teal-400 h-24 border-l-2 border-cyan-700 ml-0'><FaGripHorizontal className='w-16 h-24 p-4' /></div>
            <div className='px-4 text-lime-700'><p>Create documents with a simple text editor</p></div>
          </div>
        </div>
      </div>

      <div className="grid justify-items-center lg:gap-1 lg:grid-cols-2 mt-6 lg:h-24 mx-auto lg:max-w-screen-lg">
        <div className="bg-white h-24 rounded-tl-3xl rounded-bl-3xl mb-4 w-9/12 md:w-8/12 lg:w-10/12">
          <div className='inline-flex items-center'>
            <div className='px-4 text-lime-700'><p>Uploads images and videos within pages and projects</p></div>
            <div className='bg-teal-400 h-24 border-r-2 border-cyan-700 mr-0'><FaGripHorizontal className='w-16 h-24 p-4' /></div>
          </div>
        </div>

        <div className="bg-white h-24 rounded-tr-3xl rounded-br-3xl mb-4 w-9/12 md:w-8/12 lg:w-10/12">
          <div className='inline-flex items-center'>
            <div className='bg-cyan-400 h-24 border-l-2 border-cyan-700 ml-0'><FaGripHorizontal className='w-16 h-24 p-4' /></div>
            <div className='px-4 text-lime-700'><p>Any changes made to the document are tracked</p></div>
          </div>
        </div>
      </div>

      <div className="grid justify-items-center lg:gap-1 lg:grid-cols-2 mt-6 lg:h-24 mx-auto lg:max-w-screen-lg">
        <div className="bg-white h-24 rounded-tl-3xl rounded-bl-3xl mb-4 w-9/12 md:w-8/12 lg:w-10/12">
          <div className='inline-flex items-center'>
            <div className='px-4 text-lime-700'><p>You can easily compare the different versions of the pages</p></div>
            <div className='bg-emerald-400 h-24 border-r-2 border-cyan-700 mr-0'><FaGripHorizontal className='w-16 h-24 p-4' /></div>
          </div>
        </div>

        <div className="bg-white h-24 rounded-tr-3xl rounded-br-3xl mb-4 w-9/12 md:w-8/12 lg:w-10/12">
          <div className='inline-flex items-center'>
            <div className='bg-lime-400 h-24 border-l-2 border-cyan-700 ml-0'><FaGripHorizontal className='w-16 h-24 p-4' /></div>
            <div className='px-4 text-lime-700'><p>Restore previous versions by looking at a preview</p></div>
          </div>
        </div>
      </div>

      <div className="grid justify-items-center lg:gap-1 lg:grid-cols-2 mt-6 lg:h-24 mx-auto lg:max-w-screen-lg">
        <div className="bg-white h-24 rounded-tl-3xl rounded-bl-3xl mb-4 w-9/12 md:w-8/12 lg:w-10/12">
          <div className='inline-flex items-center'>
            <div className='px-4 text-lime-700'><p>Keep your information safe by assigning different roles to users</p></div>
            <div className='bg-lime-400 h-24 border-r-2 border-cyan-700 mr-0'><FaGripHorizontal className='w-16 h-24 p-4' /></div>
          </div>
        </div>

        <div className="bg-white h-24 rounded-tr-3xl rounded-br-3xl mb-4 w-9/12 md:w-8/12 lg:w-10/12">
          <div className='inline-flex items-center'>
            <div className='bg-emerald-400 h-24 border-l-2 border-cyan-700 ml-0'><FaGripHorizontal className='w-16 h-24 p-4' /></div>
            <div className='px-4 text-lime-700'><p>Download a PDF version of the documents created</p></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HowItWorks