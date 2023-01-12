import React, { useState, useEffect } from 'react';
import Subject from './Subject';
import axios from 'axios';

const Libraries = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const apiAxios = async() => {
      const res = await axios.get('/library');
      setSubjects(res.data);
    }
    apiAxios();
   
  }, [])
 
  return (
    
      <div className="mx-auto container py-14 px-8 h-full md:px-1 md:grid md:grid-cols-3 md:gap-4 lg:px-0 xl:grid-cols-4">
        {
          subjects.map((subject) => (
            <Subject subject={subject} key={subject.id} />
          ))  
        }
      </div>
    
  );
  
}

export default Libraries;