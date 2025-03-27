import CustomButton from "../common/CustomButton";

const Card = ({ course = null }) => {
  return (
    <div className="p-4 bg-[rgba(235,234,234,1)] md:flex md:items-center md:space-x-12">
      <div>
        <h2 className="text-xl font-semibold">{course.name}</h2>
        <p>
          <strong>Schule:</strong>{" "}
          <span className="border-[0.18rem] rounded-full border-green-900 px-2">
            {course.school}
          </span>
        </p>
        <p>
          <strong>Daten:</strong> {course.date}
        </p>
        <p>
          <strong>Kurszeiten:</strong> {course.duration_course}
        </p>
        <p>
          <strong>Zielniveau:</strong> {course.level_description}
        </p>
        <p>
          <strong>Preis:</strong> {course.price}
        </p>
        <p>
          <strong>Ratenpreis:</strong> {course.lessons}
        </p>
        <p>
          <strong>Anmeldeschluss:</strong>{" "}
          <span className="border-[0.15rem] rounded-full border-red-900 px-2">
            {course.registration_deadline}
          </span>
        </p>
      </div>
      <CustomButton
        title={"Infos und Anmeldung"}
        classes={"mt-3 text-white px-4 py-2 rounded-md bg-violet-400"}
      />
    </div>
  );
};

export default Card;
