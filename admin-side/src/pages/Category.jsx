import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../store/actions/categoryAction";

import React from "react";
import CategoryTables from "../components/CategoryTables";
import AddButton from "../components/AddButton";
import CategoryForm from "../components/CategoryForm";
import useModal from "../hooks/useModal";

export default function Category() {
  const dispatch = useDispatch();
  const { open, show, hide } = useModal(false);

  const data = useSelector((state) => state.category.categories);
  const loading = useSelector((state) => state.category.loading);
  const error = useSelector((state) => state.category.error);

  // use effect
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  //category Form
  const [categoryForm, setCategoryForm] = useState({
    name: "",
  });

  const handleCategoryEdit = (category) => {
    setCategoryForm(category);
  };

  const handleAdd = () => {
    setCategoryForm({
      name: "",
    });
    show();
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
      <div>
        <div className="flex justify-center">
          <div onClick={handleAdd}>
            <AddButton text="ADD NEW CATEGORY" />
          </div>
        </div>
      </div>

      <div className="md:px-32 py-8 w-full align-middle">
        <div className="shadow overflow-hidden rounded border-b border-gray-200">
          <table className="w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-10 text-left py-3 px-4 uppercase font-semibold text-sm">
                  #
                </th>
                <th className="w-30 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Category Name
                </th>
                <th className="w-24text-left py-3 px-4 uppercase font-semibold text-sm">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {data.map((category, index) => (
                <CategoryTables
                  key={category.id}
                  index={index}
                  category={category}
                  show={show}
                  onEdit={handleCategoryEdit}
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
        <CategoryForm
          open={open}
          onClose={hide}
          setCategoryForm={setCategoryForm}
          categoryForm={categoryForm}
        />
      </div>
    </>
  );
}
