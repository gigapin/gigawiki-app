import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Project from "./Project";

const Library = () => {
  const [projects, setProjects] = useState([]);

  let { libraryId } = useParams();

  useEffect(() => {
    const httpApi = async() => {
      const axiosApi = await axios.get(`/library/${libraryId}`);
      setProjects(axiosApi.data.projects);
    }
    httpApi();
  }, [libraryId])

  return(
    
      <div className="mx-auto container py-14 px-8 h-screen md:px-1 md:grid md:grid-cols-3 md:gap-4 lg:px-0 xl:grid-cols-4">
        {
          projects.map((project) => (
            <Project 
              project={project} 
              key={project.id} 
            />
          ))
        }
      </div>
    
  )
}

export default Library;