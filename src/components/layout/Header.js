import doc from '../../assets/docs.webp'

const Header = () => {
  const width = '600px'
  const height = '400px'

  const git = process.env.REACT_APP_GITHUB;
  
  return(
    <div className=''>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 z-50">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <h5 className="mb-4 text-4xl font-bold leading-tight text-teal-600">
            The easiest way to create, organize and manage documents
          </h5>
          <p className="mb-6 text-2xl text-cyan-600">
          Perfect for companies, organizations, training and learning
          </p>
          <div className='my-16'>
            <a href={git} rel="noreferrer" target="_blank" className='p-4 bg-teal-500 text-white text-xl hover:no-underline hover:shadow-xl shadow-md'>Download Now!</a>
          </div>
        </div>
        <div className="">
          <img className="rounded-2xl shadow-xl shadow-slate-400 dark:shadow-slate-900 sm:h-96" width={width} height={height} src={doc} alt="Representing a stack of documents" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Header;