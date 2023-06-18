import React from 'react'
import { deleteCategory } from '../store/actions/categoryAction'
import { useDispatch } from 'react-redux'



export default function CategoryTables({category,index,show ,onEdit}) {
    // const {category,index,show ,onEdit} = props
    const dispatch = useDispatch()

    const handleDeleteCategory = (id) => {
            dispatch(deleteCategory(id))
              .then(() => {
                console.log("berhasil delete")
              })
              .catch((error) => {
                console.log(error)
              });
          }
        
      
  return (
    <>
    <tr>
        <td className="text-left py-3 px-4">{index+1}</td>
        <td className="text-left py-3 px-4">{category.name}</td>
        <td>
        <div className="flex justify-center items-center">
            <button
              className="bg-black text-white m-1 px-2 py-1 hover:bg-gray-800"
            onClick={()=>{
                onEdit(category)
                show()
            }}
            >
              EDIT
            </button>
            <button className="bg-red-500 text-white m-1 px-2 py-1 hover:bg-red-400" onClick={() => handleDeleteCategory(category.id)}>
              DELETE
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}
