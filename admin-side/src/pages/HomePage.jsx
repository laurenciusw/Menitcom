import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';


export default function HomePage() {
    return(
        <>
        <div>
           
        <div className="flex min-h-screen flex-row bg-white text-white">
        <SideBar />
        <main className="main -ml-64 flex flex-grow flex-col p-6 transition-all duration-150 ease-in md:ml-0 bg-white">
        <Outlet />
        </main>
      </div>
        </div>
        </>
    )
}