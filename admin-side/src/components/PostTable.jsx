import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../store/actions/postAction';



export default function PostTable({post,index,handleEdit, show }){
  const dispatch = useDispatch();

  const handleDelete = (id) => {
        dispatch(deletePost(id))
          .then(() => {
            console.log("berhasil delete")
          })
          .catch((error) => {
            console.log(error)
          });
      
  };
    return(
        <>

      <tr>
        <td className="text-left py-3 px-4">{index+1}</td>
        <td className="text-left py-3 px-4">{post.title}</td>
        <td className="text-left py-3 px-4">{post.content}</td>
        <td className="text-left py-3 px-4">
        <img src={post.imgUrl} alt=""></img>
        </td>
        <td className="text-left py-3 px-4">{post.Category.name}</td>
        <td className="text-left py-3 px-4">{post.User.email}</td>
        <td>
        <div className="flex justify-center items-center">
            <button
              className="bg-black text-white m-1 px-2 py-1 hover:bg-gray-800"
              onClick={()=>{
                handleEdit(post)
                show()
              }}
            >
              EDIT
            </button>
            <button className="bg-red-500 text-white m-1 px-2 py-1 hover:bg-red-400"onClick={() => handleDelete(post.id)} >
              DELETE
            </button>
          </div>
        </td>
      </tr>
     
</>
    )
}