import { useState } from "react";
import { COURSES } from "../constants";
import CourseCard from "./CourseCard";
import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const CourseListComponent = () => {
  const [courses, setCourses] = useState(COURSES.slice(0, 5));

  const removeItem = (id) => {
    let tempCourses = [...courses];
    console.log(courses)
    console.log(tempCourses)
    tempCourses.splice(id, 1);
    console.log(tempCourses)
    setCourses(tempCourses);
  };
  const moveToTop = (id) => {
    console.log(courses);
    let tempCourses = [...courses];
    let [ele] = tempCourses.splice(id, 1);
    tempCourses.unshift(ele);
    setCourses(tempCourses);
  };
  const moveToBottom = (id) => {
    let tempCourses = [...courses];
    let [ele] = tempCourses.splice(id, 1);
    tempCourses.push(ele);
    setCourses(tempCourses);
  };

  const getCoursePos = (id) => courses.findIndex((course) => course.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setCourses((courses) => {
      const originalPos = getCoursePos(active.id);
      const newPos = getCoursePos(over.id);

      return arrayMove(courses, originalPos, newPos);
    });
  };
  return (
    <div className="mt-10 bg-[#F9F7F7] w-[85%] h-[85%] overflow-auto p-6 px-10 rounded-lg flex flex-col items-start">
      <h1 className="text-left text-3xl font-bold mb-2">Manage Bundle</h1>
      <h2 className="text-left text-xl text-[#4B4747] mb-4">
        Change orders of the products based on priority
      </h2>

      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <div className="w-full h-full overflow-auto rounded-md">
          <SortableContext
            items={courses}
            strategy={verticalListSortingStrategy}
          >
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                course={course}
                removeItem={removeItem}
                moveToBottom={moveToBottom}
                moveToTop={moveToTop}
                courseIndex={index}
              />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
};

export default CourseListComponent;
