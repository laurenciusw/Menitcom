import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/actions/postAction";
import { fetchCategories } from "../store/actions/categoryAction";

import React from "react";
import MenuBar from "../components/MenuBar";
import CardBar from "../components/CardBar";
import Headline from "../components/Headline";
import NewsFeed from "../components/NewsFeed";
import CateogryBar from "../components/CateogryBar";

export default function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <div className="w-3/5 mx-auto">
        <div className="text-7xl m-4">
          <span className="bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text">
            Menitcom
          </span>
        </div>

        <div className="">
          <MenuBar />

          <div className="flex align-middle ">
            {categories.map((category) => (
              <CateogryBar key={category.id} category={category} />
            ))}
          </div>
        </div>

        <div className="flex w-4/12 mx-auto justify-center ">
          {posts.slice(0, 4).map((post) => (
            <CardBar key={post.id} post={post} />
          ))}
        </div>

        <div className="">
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="w-full col-span-2">
              {posts.slice(posts.length - 1).map((post) => (
                <Headline key={post.id} post={post} />
              ))}

              <hr className="my-8" />

              {posts.map((post) => (
                <NewsFeed key={post.id} post={post} />
              ))}
            </div>
            <div className="artboard phone-2 bg-slate-600">375×667</div>
          </div>
        </div>
      </div>
    </>
  );
}
