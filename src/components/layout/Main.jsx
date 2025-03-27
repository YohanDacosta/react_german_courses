import Card from "./Card";
import NoCourses from "../common/NoCourses";
import useFilteredCourses from "../../hooks/useFilteredCourses";

const Main = () => {
  const { filtered } = useFilteredCourses();

  return (
    <div className="w-full md:w-3/4 space-y-6 px-4 sm:px-0">
      {filtered.length <= 0 ? (
        <NoCourses />
      ) : (
        filtered.map((course) => <Card key={course.id} course={course} />)
      )}
    </div>
  );
};

export default Main;
