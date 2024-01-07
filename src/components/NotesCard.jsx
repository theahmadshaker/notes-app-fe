import { motion } from "framer-motion";

const NotesCard = ({
  title,
  description,
  date,
  onClick,
  backgroundColor,
  layoutId,
}) => {
  const transition = {
    type: "tween", // Use tween for linear animation
    duration: 0.3, // Duration in seconds
  };

  return (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      className="w-full aspect-square max-w-md rounded-3xl p-6 cursor-pointer flex flex-col items-start justify-between"
      style={{ backgroundColor: backgroundColor }}
      layout={transition} // Add layout prop for layout animation
    >
      <div className="flex flex-col items-start justify-start">
        <h1 className="font-semibold text-lg focus:outline-none w-full">
          {title}
        </h1>
        <h5 className="focus:outline-none text-sm w-full">{description}</h5>
      </div>
      <h3
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="text-sm"
      >
        {date}
      </h3>
    </motion.div>
  );
};

export default NotesCard;
