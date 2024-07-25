/* eslint-disable react/prop-types */
import { useState } from "react";
import optionsImg from "./../../public/static/images/optionsImg.svg";

const PopupMenu = ({removeItem, moveToTop, moveToBottom, courseIndex}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <img src={optionsImg} onMouseDown={() => setIsOpen((prev) => !prev)} />

      {isOpen && (
        <div className=" border origin-top-right absolute right-0 mt-2 z-50 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-100">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm bg-white text-gray-700 hover:bg-gray-100"
              onMouseDown={() => moveToTop(courseIndex)}
            >
              Move To Top
            </a>
            <a
              href="#"
              className="block px-4 py-2 bg-white text-sm text-gray-700 hover:bg-gray-100"
              onMouseDown={() => moveToBottom(courseIndex)}
            >
              Move To Bottom
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm bg-white text-red-700 hover:bg-red-100"
              onMouseDown={() => removeItem(courseIndex)}
            >
              Remove
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupMenu;
