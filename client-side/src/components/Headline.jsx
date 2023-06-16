export default function Headline() {
  return (
    <div className="h-auto bg-white rounded-box place-items-center">
    <div className=" w-full">
      <div className="card w-auto bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://dummyimage.com/600x400/000/fff" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      <div className="flex">
        <div className="card card-side bg-base-100 shadow-xl m-3 w-fit h-40">
          <figure>
            <img src="https://dummyimage.com/600x400/000/fff" alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl m-3 h-40 w-fit">
          <figure>
            <img src="https://dummyimage.com/600x400/000/fff" alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
}
