import { Link } from "react-router-dom"


export default function NewsFeed({post}){
    return(
      
      <div className="h-auto bg-white rounded-box place-items-center " >
    <div>
<div>
<div className="card card-side bg-base-100 shadow-xl lg:flex-row m-3 w-fit h-40" >
  <figure clas><img src={post.imgUrl} alt="" className="w-full"/></figure>
  <div className="card-body">
    <h2 className="card-title">
    <Link to={`/article/${post.id}/${post.slug}`}>{post.title}</Link>
      </h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
</div>



</div>
</div>
    )
}