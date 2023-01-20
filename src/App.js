import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import Libraries from './components/libraries/Libraries';
import Library from './components/libraries/Library';
import Document from './components/documents/Document';
import Page from './components/documents/Page';
import Contact from './components/website/Home/Contact';
import { useEffect, useState } from 'react';
import Spinner from './components/layout/Spinner';

function App() {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div className='bg-neutral-50 dark:bg-slate-800'>
      {
        loading ?
          <Spinner loading={loading} />
        :
        <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/libraries' element={<Libraries />} />
          <Route path='/libraries/:libraryId' element={<Library />} />
          <Route path='/documents/:project' element={<Document />} />
          <Route path='/documents/:project/:slug' element={<Page />} />
          <Route path='/contacts' element={<Contact />} />
        </Routes>
        </>
      }
      
    </div>
  );
}

export default App;
