import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Section from "./Section";

const Document = () => {
  let { project } = useParams();
 
  const [document, setDocument] = useState({});
  const [menus, setMenu] = useState([]);
  const [sections, setSection] = useState([]);

  const mobileSidebar = useRef(null)

  const toggleMobileSidebar = () => {
    
    if (mobileSidebar.current.classList[0] === 'hidden') {
      mobileSidebar.current.classList = 'block' 
    } else {
      mobileSidebar.current.classList = 'hidden'
    }
  };

  useEffect(() => {
    const axiosApi = async() => {
      const httpApi = await axios.get(`/document/${project}`);
        setDocument(httpApi.data.project);
        setSection(httpApi.data.sections);
        setMenu(httpApi.data.pages);
    }
    axiosApi();
  }, [project]);
  
  return(
    <div className="md:grid md:grid-cols-4 lg:grid-cols-5">
      <div id="drawer-navigation" ref={mobileSidebar} className="hidden md:block h-full overflow-y-auto border-r-2 border-emerald-100 dark:border-emerald-700 pt-4" aria-labelledby="drawer-navigation-label">
        <Section document={document} menus={menus} sections={sections} key={document.toString()} /> 
      </div>
      
      <div className="px-4 pt-4 md:col-span-3 md:col-start-2 lg:col-span-4 lg:col-start-2 lg:px-10">
        <div className="w-fit mx-auto">
          <button className="md:hidden p-2 border border-emerald-200 text-sm mx-auto" onClick={toggleMobileSidebar}>Show Pages</button>
        </div>
        <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-teal-400 sm:text-4xl sm:leading-none"> 
          {document.name}
        </h2> 
        {document.description}  
      </div>
    </div>
  )
}

export default Document;