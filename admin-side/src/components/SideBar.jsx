import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SideBar() {
 const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
  }
  return (
    <>
    <aside className="sidebar w-48 lg:w-64 min-h-screen -translate-x-full transform bg-sky-900 p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md flex-shrink-0">
        <div className=" mb-6">
          
        </div>
        <Link to={'/'}>
          <div className=" text-center cursor-pointer text-white mb-6 ">
            <span className="font-sans text-md font-semibold ">
              <span>Dashboard</span>
            </span>
          </div>
          </Link>

          <Link to={'/categories'}>
          <div className=" text-center cursor-pointer text-white mb-6 ">
            <span className="font-sans text-md font-semibold ">
              <span>Category</span>
            </span>
          </div>
          </Link>
        
          <div className=" text-center cursor-pointer text-white mb-6 ">
            <span className="font-sans text-md font-semibold ">
              <span>Register Admin</span>
            </span>
          </div>
        <hr />

        <div onClick={handleLogout} className=" text-center cursor-pointer text-white mb-6 ">
            <span className="font-sans text-md font-semibold ">
              <span>Logoout</span>
            </span>
          </div>
       
      </aside>
    </>
  )
}
