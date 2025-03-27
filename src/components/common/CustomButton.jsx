const CustomButton = ({ title, classes, fnc }) => {
  return (
    <button
      className={`hover:cursor-pointer hover:bg-violet-500 hover:transition-colors hover:duration-300 hover:ease-in-out ${classes}`}
      onClick={fnc}
    >
      {title}
    </button>
  );
};

export default CustomButton;
