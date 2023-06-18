import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../store/actions/postAction';


export default function Article() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const post = useSelector((state) => state.post.selectedPost);

  console.log(post);

  useEffect(() => {
    dispatch(fetchPostById(id));
  }, []);

  return (
    <>
      <div className="bg-white min-h-screen flex justify-center items-center">
        <div className="pt-12">
          <img src={post?.imgUrl} alt="" className="w-full" />
          <div className="mx-auto w-full md:w-[700px] my-12">
            {post?.Category ? (
              <p className="text-lg font-bold underline m-2 uppercase">
              </p>
            ) : (
              ''
            )}
            <div className="text m-2 lowercase flex flex-row">
              {post ? <p className="mr-1">Tags:</p> : ''}
              {post?.tags?.map((tag, index) => (
                <p className="font-mono mr-3" key={tag.id}>
                  {tag.name} {index + 1 !== post.tags.length ? '|' : ''}
                </p>
              ))}
            </div>
            <p className="font-extrabold text-2xl mx-8 md:mx-auto md:text-5xl my-4">{post?.title}</p>
            {post?.User && <p className="text-lg font m-2">Oleh : {post?.User.username ? post.User?.username : post.User?.email}</p>}
           
            <p className="text-semibold md:mx-auto m-2  text-base md:text-lg text-gray-900" style={{ whiteSpace: 'pre-line' }}>
              {post?.content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
