import { useState } from 'react'
import './App.css'
import Navbar from '../src/components/Navbar'
import CardBar from '../src/components/CardBar'
import MenuBar from './components/MenuBar'
import Headline from './components/Headline'
import NewsFeed from './components/NewsFeed'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>

<div className='w-3/5 mx-auto'>


  <div className='text-7xl m-4 '>
    Menitcom
  </div>

  <div className=''>
  <MenuBar/>
  </div>
  
  <div className=' '>
  <CardBar/>
  </div>

 
<div className="">
  <div className="grid grid-cols-3 gap-4 w-full">
    <div className='w-full col-span-2'>
        <Headline/> 
        <hr className='my-8'/>
        <NewsFeed/> 
    </div>
    <div className="artboard phone-2 bg-slate-600">375×667</div>
  </div>
  
</div>

</div>


    </>
  )
}

export default App
