import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Main() {
  return (
    <>
    <div className=" w-full mx-auto transition-all duration-300 flex flex-col justify-between">
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}
