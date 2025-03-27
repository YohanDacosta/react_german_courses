import { useFilters } from "../contexts/CoursesContext";
import data from "../data/data.json";

const preProcessData = () => {
  let listCourses = [];

  {
    Object.values(data).map((courses) =>
      Object.values(courses).map((course) => {
        listCourses = [...listCourses, course];
      })
    );
  }

  return listCourses;
};

const filteredCourses = ({ courses, filters, search }) => {
  let filtered = courses.filter((course) => {
    const schoolChecked = filters.school[course.school.toLowerCase()] || false;
    const levelChecked = course.level.some((level) => filters.level[level]);

    const hasSchoolFilters = Object.values(filters.school).some(
      (value) => value
    );
    const hasLevelFilters = Object.values(filters.level).some((value) => value);

    if (hasSchoolFilters && hasLevelFilters) {
      return schoolChecked && levelChecked;
    } else if (hasSchoolFilters) {
      return schoolChecked;
    } else if (hasLevelFilters) {
      return levelChecked;
    } else {
      return true;
    }
  });

  if (search.search) {
    filtered = filtered.filter((course) => {
      return course.name.toLowerCase().includes(search.search);
    });
  }

  return filtered;
};

const useFilteredCourses = () => {
  const courses = preProcessData();
  const { filters, search } = useFilters();

  const filtered = filteredCourses({ courses, filters, search });

  return { filtered };
};

export default useFilteredCourses;
