import React from 'react'

export default function CateogryBar({category}) {
    console.log(category)
  return (
    <>
    <div className=" flex-wrap w-full bg-slate-500 text-center text-slate-50 py-3">
        
        <a>{category.name}</a>
        
        </div>
    </>
  )
}
