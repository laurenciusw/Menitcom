import React from 'react'

export default function CategoryTables({category,index}) {
  return (
    <>
    <tr>
        <td className="text-left py-3 px-4">{index+1}</td>
        <td className="text-left py-3 px-4">{category.name}</td>
        <td>
        <div className="flex justify-center items-center">
            <button
              className="bg-black text-white m-1 px-2 py-1 hover:bg-gray-800"
            >
              EDIT
            </button>
            <button className="bg-red-500 text-white m-1 px-2 py-1 hover:bg-red-400">
              DELETE
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}
