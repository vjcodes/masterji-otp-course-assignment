import { useMemo, useState } from "react";
import { COURSES, TABLE_HEADERS } from "../constants";
import courseImg from "./../../public/static/images/courseImg.png";
import arrowLeft from "./../../public/static/images/arrow-left.svg";
import arrowLeftDisabled from "./../../public/static/images/arrow-left-disabled.svg";
import arrowRight from "./../../public/static/images/right-arrow.svg";
import arrowRightDisabled from "./../../public/static/images/right-arrow-disabled.svg";

const BatchesComponent = () => {
  const [rows, setRows] = useState(10);
  const [page, setPage] = useState(0);
  const [searchvalue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const tableRows = useMemo(() => {
    const filteredCourses = COURSES.filter((course) =>
      course.title.toLowerCase().includes(searchvalue.toLowerCase().trim())
    );
    return filteredCourses.slice(rows * page, rows * page + rows);
  }, [rows, page, searchvalue]);

  const isBackDisabled = () => {
    return page - 1 < 0;
  };

  const isForwardDisabled = () => {
    return page + 1 > Math.ceil(COURSES.length / rows) - 1;
  };

  return (
    <div className="mt-10 bg-[#F9F7F7] w-[85%] h-[80%] overflow-auto p-6 px-10 rounded-lg flex flex-col items-start">
      <h1 className="text-left text-3xl font-bold mb-2">Batches</h1>
      <h2 className="text-left text-xl text-[#4B4747] mb-4">
        Create learner’s batch and share information at the same time.
      </h2>

      <div className="w-full flex justify-start mb-6">
        <input
          type="text"
          placeholder="Search by Title (alt+k or cmd+k)"
          className="border pr-20 pl-2 py-2 w-[30%] rounded-md mr-2"
          onChange={handleSearch}
        />

        <button className="bg-[#6C6BAF] px-6 py-2 text-white rounded-md">
          Search
        </button>
      </div>

      <div className="w-full h-[60%] border overflow-auto border-black rounded-md">
        <table className="w-full h-full overflow-auto px-0">
          <tr>
            {TABLE_HEADERS.map((header) => (
              <th
                style={{
                  width: header?.width,
                }}
                className="border border-black text-left pl-4 py-6 bg-[#F2F2F2]"
                key={header?.id}
              >
                {header?.label}
              </th>
            ))}
          </tr>

          {tableRows.map((course) => (
            <tr
              key={course.id}
              className="border-x-2  bg-white"
              style={{
                borderBottom:
                  course?.id === COURSES.length ? "1px solid black" : "",
              }}
            >
              <td className="p-6">
                <div className="flex items-center">
                  <div className="w-1/4">
                    <img src={courseImg} className="w-full h-full rounded-lg" />
                  </div>

                  <div className="ml-4 text-left">
                    <h1>{course.title}</h1>
                  </div>
                </div>
              </td>
              <td>{course.startDate}</td>
              <td>{course.endDate}</td>
              <td>₹ {course.price}</td>
              <td>{course.validity}</td>
              <td>{course.isPublished ? "Published" : "Unpublished"}</td>
            </tr>
          ))}
        </table>
      </div>

      <div className="w-full h-[10%] flex flex-row-reverse items-center px-4">
        <div className="w-fit">
          <button
            className="p-1 w-16 h-16"
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          >
            {isBackDisabled() ? (
              <img src={arrowLeftDisabled} />
            ) : (
              <img src={arrowLeft} />
            )}
          </button>
          <button
            onClick={() =>
              setPage((prev) =>
                Math.min(prev + 1, Math.ceil(COURSES.length / rows) - 1)
              )
            }
            className="p-1 w-16 h-16"
          >
            {isForwardDisabled() ? (
              <img src={arrowRightDisabled} />
            ) : (
              <img src={arrowRight} />
            )}
          </button>
        </div>

        <div className="mr-4 w-fit flex items-center">
          <h2 className="mr-2">Rows per page</h2>
          <select
            className="p-2 border"
            value={rows}
            onChange={(e) => setRows(e.target.value)}
          >
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BatchesComponent;
