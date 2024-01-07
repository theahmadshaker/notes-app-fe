import { motion } from "framer-motion";

const NotesCard = ({ title, description, date, openCard }) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      onClick={openCard}
      className="w-full h-48 max-w-md aspect-video rounded-3xl bg-violet-700 p-6 cursor-pointer flex flex-col items-start justify-between"
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
