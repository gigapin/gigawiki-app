import { FaFileDownload, FaFileSignature } from "react-icons/fa";

const HowToGet = () => {
  const git = process.env.REACT_APP_GITHUB;
  const doc = process.env.REACT_APP_DEFAULT_LIBRARY;
  
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
    <h2 className="text-center text-3xl pb-12 text-teal-600">Get GiGaWiki</h2>
    <div className="grid gap-10 lg:grid-cols-2">
      
      <div className="border-2 border-teal-200 p-8 rounded-lg shadow-sm">
        <div className='my-3'><FaFileDownload className="w-8 h-8 text-sky-600"/></div>
        <div className=""><h3 className="text-2xl font-semibold text-cyan-600">Application download</h3></div>
        <div className="my-4 text-lime-600"><p>GiGaWiki is a self-hosted application, can be downloaded from this GitHub's page</p></div>
        <div className="">
          <a href={git} rel="noreferrer" target="_blank">GitHub</a>
        </div>
      </div>
      
      <div className="border-2 border-teal-200 p-8 rounded-lg shadow-sm">
        <div className='my-3'><FaFileSignature className="w-8 h-8 text-sky-600"/></div>
        <div className=""><h3 className="text-2xl font-semibold text-cyan-600">Simple Requirements</h3></div>
        <div className="my-4 text-lime-600">
          <p>
            GiGaWiki is built using PHP/Laravel framework and it uses a database to store data, you can choise between MySQL and PostgreSQL.
            Please read the documentation to get all information about installation and setup.
          </p>
        </div>
        <div className="">
          <a href={doc} rel="noreferrer">Go to documentation</a>
        </div>
      </div>

    </div>
 
    </div>
  )
}

export default HowToGet