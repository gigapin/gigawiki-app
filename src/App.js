import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import Libraries from './components/libraries/Libraries';
import Library from './components/libraries/Library';
import Page from './components/documents/Page';
import React, { Suspense, useEffect, useState } from 'react';
import Spinner from './components/layout/Spinner';

const Document = React.lazy(() => import('./components/documents/Document'));

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }, [])

  return (
    <div className='bg-neutral-50 dark:bg-slate-800'>
      {
        loading ?
          <Spinner loading={loading} />
        :
        <>
        <Navbar />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/libraries' element={<Libraries />} />
            <Route path='/libraries/:libraryId' element={<Library />} />
            <Route path='/documents/:project' element={<Document />} />
            <Route path='/documents/:project/:slug' element={<Page />} />
          </Routes>
        </Suspense>
        </>
      }
      
    </div>
  );
}

export default App;
