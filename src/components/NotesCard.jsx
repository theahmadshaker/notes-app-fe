import { motion } from "framer-motion";

const NotesCard = ({ title, description, date, openCard, backgroundColor }) => {
  return (
    <motion.div
      onClick={openCard}
      className="w-full aspect-square max-w-md rounded-3xl p-6 cursor-pointer flex flex-col items-start justify-between"
      style={{ backgroundColor: backgroundColor }}
      initial={{ scale: 0 }} // Start from scale 0
      animate={{ scale: 1 }} // Animate to scale 1
      transition={{ duration: 0.5 }} // Set the animation duration to 0.5 seconds
    >
      <div className="flex flex-col items-start justify-start">
        <h1
          className="font-semibold text-lg focus:outline-none w-full"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {title}
        </h1>
        <h5
          onClick={(event) => {
            event.stopPropagation();
          }}
          className="focus:outline-none text-sm w-full"
        >
          {description}
        </h5>
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
