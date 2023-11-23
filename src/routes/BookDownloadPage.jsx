import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsChevronCompactLeft, BsCloudDownload } from "react-icons/bs";

import folderFileSvg from '../assets/folder_files.svg';
import ebooksData from '../services/data/data.js';

export default function Book() {
  const [data, setData] = useState(null);
  const {semester, index} = useParams();
  
  useEffect(() => {
    const dataBySemester = ebooksData[semester];
    
    if (dataBySemester !== undefined) {
      setData(dataBySemester);
    }
  }, [])
  
  
  return (
    <div className="bg-base-200">
      <div className="navbar bg-base-100 shadow-sm px-4 sticky top-0">
        <div className="flex-none text-2xl" onClick={ () => window.history.back() }>
          <BsChevronCompactLeft />
        </div>
      </div>
      <div className="container p-3 mx-auto">
        <div className="flex flex-col items-center justify-center w-full p-4">
          <div className="text-center">
            <h1 className="font-bold text-2xl mb-2">
              {
                data !== null ? data.books[index].name : <h1>Null</h1>
              }
            </h1>
            <span className="text-zinc-600">
              {
                data !== null ? data.semester : <h1>Null</h1>
              }
            </span>
          </div>
          <p className="p-10">
            <img src={folderFileSvg} className="w-2/4 mx-auto" alt=""/>
          </p>
          <div className="mt-2">
            <button className="btn bg-emerald-400 text-white w-full" onClick={ () => window.open(data.books[index].tb_mm) }>
              <BsCloudDownload/>
              Student Book MM Version
            </button>
            <button className="btn-disabled mt-2 btn bg-emerald-400 text-white w-full" onClick={ () => window.open(data.books[index].tb_mm) }>
              <BsCloudDownload/>
              Student Book Eng Version
            </button>
            <button className="btn-disabled mt-2 btn bg-emerald-400 text-white w-full" onClick={ () => window.open(data.books[index].tb_mm) }>
              <BsCloudDownload/>
              Teacher Guide MM Version
            </button>
            <button className="btn-disabled mt-2 btn bg-emerald-400 text-white w-full" onClick={ () => window.open(data.books[index].tb_mm) }>
              <BsCloudDownload/>
              Teacher Guide Eng Version
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}