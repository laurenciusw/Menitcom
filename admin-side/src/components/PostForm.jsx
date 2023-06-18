import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editPost, newPost } from "../store/actions/postAction";
import { showError } from "../hooks/swalModal";



export default function PostForm(props) {
  const dispatch = useDispatch();
  const { open, onClose, categories, postForm, setPostForm } = props;
  const classActive = open ? "block" : "hidden";

  // Handle input 
  const handleInput = (e) => {
    const { name, value } = e.target;
    setPostForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  //tags
  const [tagsName, setTagsName] = useState("");
  const [validTag, setValidTag] = useState(true);

  const handleAddTags = () => {
    if (!tagsName) return setValidTag(false);
    setPostForm((prevForm) => ({
      ...prevForm,
      tags: [...prevForm.tags, { name: tagsName }],
    }));
    setTagsName("");
  };

  const handleTagsNameChange = (e) => {
    setValidTag(true);
    setTagsName(e.target.value);
  };

  const handleRemoveTags = (index) => {
    setPostForm((form) => {
      const updatedTags = [...form.tags];
      updatedTags.splice(index, 1);
      return {
        ...form,
        tags: updatedTags,
      };
    });
  };

  //cancel
  const handleCancel = (e) => {
    e.preventDefault();
    setPostForm({
      title: "",
      content: "",
      categoryId: "",
      imgUrl: "",
      tags: [],
    });
    onClose();
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postForm.id) {
      dispatch(newPost(postForm))
        .then(() => {
          onClose();
        })
        .catch((error) => {
          showError (error)
        });
    } else {
      dispatch(editPost(postForm))
        .then(() => {
          onClose();
        })
        .catch((error) => {
          showError (error)
        });
    }
  };;

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
                    News Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={postForm.title}
                    onChange={handleInput}
                    id="title"
                    placeholder="News Title"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

                <div className="col-span-full mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Category
                  </label>
                  <div className="mt-2">
                    <select
                      name="categoryId"
                      value={postForm.categoryId}
                      onChange={handleInput}
                      className="text-gray-900 w-full border p-2 font-semibold"
                    >
                      <option value="" disabled>
                        Select category
                      </option>
                      {categories?.map((el) => (
                        <option value={el.id} key={el.name} className="">
                          {el.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="subject"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Img Url
                  </label>
                  <input
                    type="text"
                    name="imgUrl"
                    value={postForm.imgUrl}
                    onChange={handleInput}
                    id="imgUrl"
                    placeholder="Enter the img Url"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Content
                  </label>
                  <textarea
                    rows={4}
                    name="content"
                    id="message"
                    value={postForm.content}
                    onChange={handleInput}
                    placeholder="News Content"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    
                  />
                </div>

                <div className="col-span-full mb-5">
                  <label className="block text-base font-medium text-[#07074D]">
                    Tags
                  </label>
                  <div className="flex flex-wrap items-center mt-2 ">
                    {postForm.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="mb-1 mr-2 border-0 shadow-sm ring-1 ring-inset px-1 ring-gray-300 text-black"
                      >
                        {tag.name}
                        <button
                          type="button"
                          className="ml-3 text-xs"
                          onClick={() => handleRemoveTags(index)}
                        >
                          ❌
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center mt-2">
                    <input
                      type="text"
                      name="tagsName"
                      className="text-black px-3 border-0 shadow-sm ring-1 ring-inset ring-gray-300 py-1 mr-3"
                      value={tagsName}
                      onChange={handleTagsNameChange}
                    />
                    <button
                      type="button"
                      className="border-2 py-1 px-2 text-black"
                      onClick={handleAddTags}
                    >
                      Add tags
                    </button>
                  </div>
                  {!validTag && (
                    <div className="text-red-500 text-xs font-mono mt-1">
                      Tag name cannot be empty
                    </div>
                  )}
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
  );
}
