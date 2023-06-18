import { Link } from 'react-router-dom';

export default function Headline({post}) {
  return (
    <div className="h-auto bg-white rounded-box place-items-center">
    <div className=" w-full">
      <div className="card w-auto bg-base-100 shadow-xl">
        <figure>
          <img src={post.imgUrl} alt=""  />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          <Link to={`/article/${post.id}/${post.slug}`}>{post.title}</Link>
            </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
    </div>
  );
}
