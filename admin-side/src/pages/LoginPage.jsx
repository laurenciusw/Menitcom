import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { baseUrl } from "../store/baseUrl"


export default function LoginPage(){
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
    }

    const handleSumbit = async (e)=>{
        e.preventDefault()
        try {
            const response = await fetch(baseUrl + '/users/login',{
                method:'POST',
                headers:{
                    'content-Type': 'application/json',
                },
                body:JSON.stringify({email,password})
            })

            if(!response.ok){
                const errorResponse = await response.json();
                throw new Error(errorResponse.message);
            }

            const data = await response.json()
            localStorage.setItem('access_token', data.access_token);
            navigate('/');
            
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <div className="flex items-center justify-center">
          <div className="bg-white w-full md:w-2/4 xl:w-2/5 p-12 min-h-screen">
            
            <h1 className="text-2xl mb-6 text-black border-y-2 border-y-black uppercase font-semibold p-2 text-center">ADMIN LOGIN</h1>
            <form onSubmit={handleSumbit}>
              <div className="">
                <div className="border-gray-900/10">
                  <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                      <div className="mt-2">
                        <input type="email" className="block w-full border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400" value={email} onChange={handleEmailChange}></input>
                      </div>
                    </div>
  
                    <div className="col-span-full">
                      <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                      <div className="mt-2">
                        <input type="password" className="block w-full border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400" value={password} onChange={handlePasswordChange}></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="mt-6 flex items-center justify-center">
                <button type="submit" className="bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
}