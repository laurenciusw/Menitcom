export default function NewsFeed(){
    return(
      
      <div className="h-auto bg-white rounded-box place-items-center " >
        NewsFeed
    <div>
<div>
<div className="card card-side bg-base-100 shadow-xl lg:flex-row m-3 w-fit h-40" >
  <figure><img src="https://dummyimage.com/600x400/000/fff" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
</div>

<div>
<div className="card card-side bg-base-100 shadow-xl lg:flex-row-reverse m-3 w-fit h-40">
  <figure><img src="https://dummyimage.com/600x400/000/fff" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
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