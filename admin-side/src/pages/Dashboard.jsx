import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../store/actions/postAction";
import { fetchCategories } from "../store/actions/categoryAction";

import React from "react";
import PostTable from "../components/PostTable";
import AddButton from "../components/AddButton";
import useModal from "../hooks/useModal";
import PostForm from "../components/PostForm";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { open, show, hide } = useModal(false);

  const data = useSelector((state) => state.post.posts);
  const loading = useSelector((state) => state.post.loading);
  const error = useSelector((state) => state.post.error);
  const categories = useSelector((state) => state.category.categories);

  // use effect
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchCategories());
  }, []);

  // post form
  const [postForm, setPostForm] = useState({
    title: "",
    content: "",
    categoryId: "",
    imgUrl: "",
    tags: [],
  });

  // add post
  const handleAdd = () => {
    setPostForm({
      title: "",
      content: "",
      categoryId: "",
      imgUrl: "",
      tags: [],
    });
    show();
  };

  //   editpost
  const handleEdit = (post) => {
    setPostForm(post);
  };

  if (loading) {
    return (
      <>
        <div>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex justify-center">
        <div onClick={handleAdd}>
          <AddButton text="ADD NEW POST" />
        </div>
      </div>

      <div className="md:px-32 py-8 w-full">
        <div className="shadow overflow-hidden rounded border-b border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-10 text-left py-3 px-4 uppercase font-semibold text-sm">
                  #
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Title
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Content
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Image
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Category
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Author
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {data.map((post, index) => (
                <PostTable
                  key={post.id}
                  index={index}
                  post={post}
                  handleEdit={handleEdit}
                  show={show}
                />
              ))}
            </tbody>
          </table>
          {loading && (
            <div className="fixed flex items-center ml-8 justify-center  min-h-screen mx-auto w-3/4">
              <span className="loading loading-bars loading-lg"></span>
              <h1>loading...</h1>
            </div>
          )}
          {error && (
            <div className="fixed flex items-center ml-8 justify-center  min-h-screen mx-auto w-3/4">
              <p className="text-black mb-40">
                Something went wrong. Try to reload the page.
              </p>
            </div>
          )}
        </div>
      </div>
      <div>
        <PostForm
          open={open}
          onClose={hide}
          categories={categories}
          postForm={postForm}
          setPostForm={setPostForm}
        />
      </div>
    </>
  );
}
