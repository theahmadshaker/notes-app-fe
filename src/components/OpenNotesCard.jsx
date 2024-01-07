import { motion } from "framer-motion";
import BlurLayer from "./BlurLayer";

const OpenNotesCard = ({
  title,
  description,
  date,
  closeCard,
  backgroundColor,
  layoutId,
}) => {
  return (
    <>
      <BlurLayer onClick={closeCard} />
      <motion.div
        layoutId={layoutId}
        className="w-full aspect-square max-w-md rounded-3xl p-6 cursor-pointer flex flex-col items-start justify-between absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 "
        style={{ backgroundColor: backgroundColor }}
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
    </>
  );
};

export default OpenNotesCard;
