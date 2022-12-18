import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import Libraries from './components/libraries/Libraries';
import Library from './components/libraries/Library';
import Document from './components/documents/Document';
import Page from './components/documents/Page';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/libraries' element={<Libraries />} />
          <Route path='/libraries/:libraryId' element={<Library />} />
          <Route path='/documents/:project' element={<Document />} />
          <Route path='/documents/:project/:slug' element={<Page />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;