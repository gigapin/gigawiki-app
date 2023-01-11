import doc from '../../assets/docs.jpg'

const Header = () => {
  return(
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
            <a href="https://www.github.com/gigapin/GiGaWiki" className='p-4 bg-teal-500 text-white text-xl hover:no-underline hover:shadow-xl shadow-md'>Download Now!</a>
          </div>
        </div>
        <div>
          <img className="object-cover w-full h-56 rounded shadow-xl sm:h-96" src={doc} alt="Representing a stack of documents" />
        </div>
      </div>
    </div>
  );
}

export default Header;