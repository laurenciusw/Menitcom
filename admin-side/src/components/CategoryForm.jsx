import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { categoryEdit, newCategory } from '../store/actions/categoryAction';
import { showError } from '../hooks/swalModal';




export default function CategoryForm(props) {
    const dispatch = useDispatch();
    const { open, onClose ,categoryForm, setCategoryForm} = props;
    const classActive = open ? "block" : "hidden";

    
  // Handle input 
  const handleInput = (e) => {
    const { name, value } = e.target;
    setCategoryForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  //submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryForm.id) {
      dispatch(newCategory(categoryForm))
        .then(() => {
          onClose();
        })
        .catch((error) => {
          showError (error)
        });
    } else {
      dispatch(categoryEdit(categoryForm))
        .then(() => {
          onClose();
        })
        .catch((error) => {
          showError (error)
        });
    }
  };

  //cancel
  const handleCancel = (e) => {
e.preventDefault()
    setCategoryForm({
      name: '',
    });
    onClose();
  };

  return (
    <>
     <div className={`${classActive}`}>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="bg-white p-8 relative z-10 w-2/4">
            <div className="mx-auto w-full max-w-[550px]">
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Category Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={categoryForm.name}
                    onChange={handleInput}
                    placeholder="Category Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                
                <div className="flex justify-center items-center">
                  <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base text-white outline-none">
                    Submit
                  </button>

                  <button
                    className="hover:shadow-form rounded-md bg-red-800 py-3 px-8 text-base text-white outline-none flex"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
