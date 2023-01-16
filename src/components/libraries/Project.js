import { Link } from 'react-router-dom';

const Project = ({ project }) => {
  return(
    <div className="p-8 mt-8 h-48 bg-gradient-to-t from-lime-600 to-lime-400 dark:from-lime-700 dark:to-lime-500 border rounded-2xl shadow-lg">
      <Link to={`/documents/${project.slug}`} 
        aria-label="Article" 
        title="Jingle Bells" 
        className="inline-block mb-4 text-3xl font-bold leading-5 text-emerald-700 dark:text-emerald-900 transition-colors duration-200 dark:hover:text-lime-900 hover:no-underline md:text-2xl"
      >
      {project.name}
      </Link>
      <p className="mb-5 text-gray-700">
        {project.description}
      </p>
    </div>
  );
}

export default Project