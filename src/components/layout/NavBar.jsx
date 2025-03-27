import { useDisptachFilters } from "../../contexts/CoursesContext";

const MenuBar = () => {
  const { dispatchSearch } = useDisptachFilters();
  const handleOnChange = (ev) => {
    dispatchSearch({
      type: "SEARCH_COURSES",
      payload: { search: ev.target.value },
    });
  };

  return (
    <header className="flex flex-col mb-4">
      <div className="flex justify-between px-6 pt-6">
        <div className="flex">
          <a className="flex space-x-2 items-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.0"
              stroke="violet"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          </a>
        </div>

        <div className="flex w-1/2">
          <input
            type="search"
            name="courses"
            id="courses"
            className="flex-1 border rounded-full px-4 py-[0.4rem]"
            placeholder="Seach by name"
            onChange={handleOnChange}
          />
        </div>

        <div className="flex lg:hidden">
          <button
            className="inline-flex items-center justify-center p-1 rounded-md text-gray-400 focus:outline-none focus:bg-violet-400 focus:text-white hover:text-white hover:bg-violet-400 hover:transition-colors hover:duration-700 hover:ease-in-out] hover:cursor-pointer"
            aria-label="Main menu"
            aria-expanded="false"
          >
            <svg
              className="block h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              className="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default MenuBar;
