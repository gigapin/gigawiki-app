import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { FaFileExport, FaLink, FaEllipsisV } from "react-icons/fa";
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
  const lastSidebar = useRef(null)

  const toggleMobileSidebar = () => {
    if (mobileSidebar.current.classList[0] === 'hidden') {
      mobileSidebar.current.classList = 'block' 
    } else {
      mobileSidebar.current.classList = 'hidden'
    }
  };

  const toggleLastSidebar = () => {
    if (lastSidebar.current.classList[0] === 'hidden') {
      lastSidebar.current.classList = 'block'
    } else {
      lastSidebar.current.classList = 'hidden'
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
        
      <div className="hidden w-full max-h-fit p-2" ref={lastSidebar}>
        <div className="flex flex-row mb-3">
          <div className="pt-1"><FaFileExport className="w-6 h-4 text-sky-400" /></div>
          <div>
            <a href="http://gigawiki.test" rel="norefferer" className="hover:no-underline">Export PDF</a>
          </div>
        </div>
        <div className="flex flex-row mb-3">
          <div className="pt-1"><FaLink className="w-6 h-4 text-sky-400" /></div>
          <div>
            <a href="http://gigawiki.test" rel="norefferer" className="hover:no-underline">Copy link</a>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-4 lg:grid-cols-5 lg:container lg:mx-auto">
        <div id="drawer-navigation" ref={mobileSidebar} className="hidden md:block h-full pt-8 pl-6 overflow-y-auto border-r-2 border-emerald-100 dark:border-emerald-700" aria-labelledby="drawer-navigation-label">
          <Section document={document} menus={menus} sections={sections} /> 
        </div>

        <div className="px-4 pt-4 md:col-span-3 md:col-start-2 lg:col-span-3 lg:col-start-2 lg:px-10">
          <div className="w-fit mx-auto">
            <button className="md:hidden p-2 border border-emerald-200 text-sm mx-auto" onClick={toggleMobileSidebar}>Show Pages</button>
          </div>

          <div className="flex items-center">
            <div className="grow">
              <h1 className="mb-6 pt-4 font-sans text-3xl font-bold tracking-tight text-teal-700 dark:text-teal-400 sm:text-4xl sm:leading-none" key={document.id}> 
                {page.title}
              </h1> 
            </div>
            <div className="flex-none w-12 pl-6 lg:hidden">
              <button onClick={toggleLastSidebar} ><FaEllipsisV /></button>
            </div>
          </div>
          
          <div className="text-lime-900" dangerouslySetInnerHTML={{__html:page.content}}></div>  

          <PaginatePage document={document} prev={prev} next={next} />

        </div>
        <div className="hidden lg:block lg:col-start-5 pt-8 pl-8">
          <div className="flex flex-row mb-3">
            <div className="pt-1"><FaFileExport className="w-6 h-4 text-sky-400" /></div>
            <div>
              <a href="http://gigawiki.test" rel="norefferer" className="hover:no-underline">Export PDF</a>
            </div>
          </div>
          <div className="flex flex-row mb-3">
            <div className="pt-1"><FaLink className="w-6 h-4 text-sky-400" /></div>
            <div>
              <a href="http://gigawiki.test" rel="norefferer" className="hover:no-underline">Copy link</a>
            </div>
          </div>
        </div>
      </div>
    </>
  ) 
}

export default Page;