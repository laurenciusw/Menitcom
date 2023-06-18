import { Link } from "react-router-dom"

export  default function CardBar({post}){
    return(
      <div className=" px-6 basis-0 w-5/6 grid-cols-6 flex justify-center">
        <div className="card w-96 bg-base-100 shadow-xl m-4">
        <figure><img src={post.imgUrl} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">
          <Link to={`/article/${post.id}/${post.slug}`}>{post.title}</Link>
          </h2>
  
        </div>
      </div>

    
    
      </div>
    )
}