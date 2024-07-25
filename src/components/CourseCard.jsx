/* eslint-disable react/prop-types */
import { useSortable } from "@dnd-kit/sortable";
import courseImg from "./../../public/static/images/courseImg.png";
import dragImg from "./../../public/static/images/dragBtn.svg";
import { CSS } from "@dnd-kit/utilities";
import PopupMenu from "./PopupMenu";
import { COLORS } from "../colors";

const CourseCard = ({
  course,
  removeItem,
  moveToBottom,
  moveToTop,
  courseIndex,
}) => {
  const { id } = course;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{ ...style }}
      className="shadow-[#7E7E7E] relative flex items-center justify-between border border-[#7E7E7E] shadow-md rounded-lg w-full h-[17%] mb-4 p-3"
    >
      <img src={dragImg} className="w-[4%] h-full" />
      <div className="w-[12%] h-full">
        <img src={courseImg} className="w-full h-full rounded-lg" />
      </div>

      <h2 className="w-[60%] text-left pl-4">{course.title}</h2>

      <h2>Rs. {course.price}</h2>

      <h2
        style={{
          background: COLORS.chipGreen,
          border: `1px solid ${COLORS.chipBorder}`,
        }}
        className="px-3 py-1 rounded-md"
      >
        Course
      </h2>

      <PopupMenu
        removeItem={removeItem}
        moveToBottom={moveToBottom}
        moveToTop={moveToTop}
        courseIndex={courseIndex}
      />
    </div>
  );
};

export default CourseCard;
