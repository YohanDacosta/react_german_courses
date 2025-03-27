import { useState } from "react";
import CustomButton from "../common/CustomButton";
import CustomCheckBox from "../common/CustomCheckBox";
import { useDisptachFilters, useFilters } from "../../contexts/CoursesContext";

const SideBar = () => {
  const { dispatchFilter } = useDisptachFilters();
  const { filters } = useFilters();

  const [stateSchool, setStateSchool] = useState(false);
  const [stateLevel, setStateLevel] = useState(false);

  const onClickSchool = () => {
    setStateSchool(!stateSchool);
  };

  const onClickLevel = () => {
    setStateLevel(!stateLevel);
  };

  const handleOnChange = (ev) => {
    const { checked, value, id } = ev.target;

    dispatchFilter({ type: "FILTER_COURSES", payload: { value, checked, id } });
  };

  const cleanChecked = () => {
    dispatchFilter({ type: "CLEAN_FILTERS" });
  };

  return (
    <div className="w-full md:w-1/4 bg-gray-50 p-4 rounded-lg order-first">
      <div className="flex items-center">
        <button
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 md:hidden"
          aria-label="Main menu"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>
        <h2 className="text-lg font-semibold">Filter</h2>
      </div>
      <CustomButton
        title={"Löschen"}
        classes={"bg-violet-400 text-white px-4 py-2 rounded-md w-full"}
        fnc={cleanChecked}
      />
      <div className="mt-4 space-y-4">
        <div
          className="flex border-t-[0.01rem] pt-4 items-center"
          onClick={onClickSchool}
        >
          <h3 className="font-semibold mx-2 text-xs px-4 py-2 hover:cursor-pointer hover:bg-violet-400 hover:rounded-full hover:transition-colors hover:duration-500 hover:ease-in-out">
            Schule
          </h3>
        </div>

        {stateSchool ? (
          <div className="bg-[rgba(235,234,234,1)] p-2 text-xs">
            <CustomCheckBox
              checked={filters.school.ecap}
              id={["school"]}
              value={"ecap"}
              label={"ECAP"}
              onChange={handleOnChange}
            />
            <CustomCheckBox
              checked={filters.school.k5}
              id={["school"]}
              value={"k5"}
              label={"K5"}
              onChange={handleOnChange}
            />
            <CustomCheckBox
              checked={filters.school.academia}
              id={["school"]}
              value={"academia"}
              label={"Academia"}
              onChange={handleOnChange}
            />
            <CustomCheckBox
              checked={filters.school.bilingua}
              id={["school"]}
              value={"bilingua"}
              label={"Bilingua"}
              onChange={handleOnChange}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="mt-4 space-y-4">
        <div
          className="flex border-t-[0.01rem] pt-4 items-center"
          onClick={onClickLevel}
        >
          <h3 className="font-semibold mx-2 text-xs px-4 py-2 hover:cursor-pointer hover:bg-violet-400 hover:rounded-full hover:transition-colors hover:duration-500 hover:ease-in-out">
            Zielniveau
          </h3>
        </div>
        {stateLevel ? (
          <div className="bg-[rgba(235,234,234,1)] p-2 text-xs">
            <CustomCheckBox
              checked={filters.level.a1}
              id={["level"]}
              value={"a1"}
              label={"A1"}
              onChange={handleOnChange}
            />
            <CustomCheckBox
              checked={filters.level.a2}
              id={["level"]}
              value={"a2"}
              label={"A2"}
              onChange={handleOnChange}
            />
            <CustomCheckBox
              checked={filters.level.b1}
              id={["level"]}
              value={"b1"}
              label={"B1"}
              onChange={handleOnChange}
            />
            <CustomCheckBox
              checked={filters.level.b2}
              id={["level"]}
              value={"b2"}
              label={"B2"}
              onChange={handleOnChange}
            />
            <CustomCheckBox
              checked={filters.level.c1}
              id={["level"]}
              value={"c1"}
              label={"C1"}
              onChange={handleOnChange}
            />
            <CustomCheckBox
              checked={filters.level.c2}
              id={["level"]}
              value={"c2"}
              label={"C2"}
              onChange={handleOnChange}
            />
            <CustomCheckBox
              checked={filters.level.alpha}
              id={["level"]}
              value={"alpha"}
              label={"Alpha"}
              onChange={handleOnChange}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SideBar;
