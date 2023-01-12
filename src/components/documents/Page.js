import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Section from "./Section";
import PaginatePage from "./PaginatePage";

const Page = () => {
  let { project } = useParams();
  let { slug } = useParams();

  const [page, setPage] = useState({});
  const [document, setDocument] = useState({});
  const [menus, setMenu] = useState([]);
  const [sections, setSection] = useState([]);
  const [prev, setPrev] = useState({});
  const [next, setNext] = useState({});

  const mobileSidebar = useRef(null)

  const toggleMobileSidebar = () => {
    
    if (mobileSidebar.current.classList[0] === 'hidden') {
      mobileSidebar.current.classList = 'block' 
    } else {
      mobileSidebar.current.classList = 'hidden'
    }
  };

  useEffect(() => {
    const httpApi = async() => {
      const res = await axios.get(`/document/${project}/${slug}`);
      setDocument(res.data.project);
      setSection(res.data.sections);
      setMenu(res.data.pages);
      setPage(res.data.page);
      setPrev(res.data.prev);
      setNext(res.data.next);
    }
    httpApi();
  }, [project, slug]);
  
  return(
    <>
      <div className="md:grid md:grid-cols-4 lg:grid-cols-5 lg:container lg:mx-auto">
        <div id="drawer-navigation" ref={mobileSidebar} className="hidden md:block h-full pt-8 pl-6 overflow-y-auto border-r-2 border-emerald-100 dark:border-emerald-700" aria-labelledby="drawer-navigation-label">
          <Section document={document} menus={menus} sections={sections} /> 
        </div>

        <div className="px-4 pt-4 md:col-span-3 md:col-start-2 lg:col-span-4 lg:col-start-2 lg:px-10">
          <div className="w-fit mx-auto">
            <button className="md:hidden p-2 border border-emerald-200 text-sm mx-auto" onClick={toggleMobileSidebar}>Show Pages</button>
          </div>
          <h1 className="mb-6 pt-4 font-sans text-3xl font-bold tracking-tight text-teal-700 dark:text-teal-400 sm:text-4xl sm:leading-none" key={document.id}> 
            {page.title}
          </h1> 

          <div className="text-lime-900" dangerouslySetInnerHTML={{__html:page.content}}></div>  

          <PaginatePage document={document} prev={prev} next={next} />

        </div>
      </div>
    </>
  ) 
}

export default Page;