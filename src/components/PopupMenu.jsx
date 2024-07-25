/* eslint-disable react/prop-types */
import { useState } from "react";
import optionsImg from "./../../public/static/images/optionsImg.svg";
import deleteImg from "./../../public/static/images/deleteImg.svg";
import upArrow from "./../../public/static/images/upArrow.svg";
import downArrow from "./../../public/static/images/downArrow.svg";

const PopupMenu = ({ removeItem, moveToTop, moveToBottom, courseIndex }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <img src={optionsImg} onMouseDown={() => setIsOpen((prev) => !prev)} />

      {isOpen && (
        <div className=" border origin-top-right absolute right-0 mt-2 z-50 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-100">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm bg-white text-gray-700 hover:bg-gray-100 flex items-center"
              onMouseDown={() => moveToTop(courseIndex)}
            >
              <img src={upArrow} alt="moveUp" className="mr-2" />
              Move To Top
            </a>
            <a
              href="#"
              className="block px-4 py-2 bg-white text-sm text-gray-700 hover:bg-gray-100 flex items-center"
              onMouseDown={() => moveToBottom(courseIndex)}
            >
              <img src={downArrow} alt="moveUp" className="mr-2" />
              Move To Bottom
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm bg-white text-red-700 hover:bg-red-100 flex items-center"
              onMouseDown={() => removeItem(courseIndex)}
            >
              <img src={deleteImg} alt="delete" className="mr-2" />
              Remove
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupMenu;
