import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../store/actions/categoryAction";

import React from 'react'
import CategoryTables from "../components/CategoryTables";


export default function Category() {
    const dispatch=useDispatch()

    const data = useSelector((state) => state.category.categories);
    const loading = useSelector((state) => state.category.loading);
    const error = useSelector((state) => state.category.error);

  // use effect
  useEffect(() => {
    dispatch(fetchCategories());
    
  }, []);
    
  return (
   <>
   <div className="md:px-32 py-8 w-8/12 align-middle">
        <div className="shadow overflow-hidden rounded border-b border-gray-200">
          <table className="min-w-full bg-white">
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
              <CategoryTables key={category.id} index={index} category={category} />
            ))}
            </tbody>
          </table>
        </div>
      </div>
   </>
  )
}
