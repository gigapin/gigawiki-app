import { Link } from 'react-router-dom';

const Subject = ({ subject }) => {
  return(
    <div className="overflow-hidden transition-shadow duration-300 bg-lime-600 mt-8 rounded-2xl md:h-48">
      <Link to="" aria-label="Article">
        <img 
          src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" 
          class="object-cover w-full h-64 rounded md:h-32" 
          alt="" 
        />
      </Link>
      <div className="py-5 text-center md:py-3">
        <Link 
          to={`/libraries/${subject.id}`} 
          aria-label="Article" 
          className="inline-block text-green-900 transition-colors duration-200 hover:text-teal-100"
        >
          <p className="text-2xl font-bold md:text-base lg:text-xl">
            {subject.name}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Subject;