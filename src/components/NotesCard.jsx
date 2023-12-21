import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import BlurLayer from "./BlurLayer";

const NotesCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const cardRef = useRef(null);

  useEffect(() => {
    if (isOpen && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      controls.start({
        x: window.innerWidth / 2 - rect.left - rect.width / 2,
        y: window.innerHeight / 2 - rect.top - rect.height / 2,
        zIndex: 10, // Ensure zIndex is higher than BlurLayer
        scale: 2,
        transition: { ease: "easeInOut", duration: 0.4 },
      });
    } else {
      controls.start({
        x: 0,
        y: 0,
        zIndex: 0,
        scale: 1,
        transition: { ease: "easeInOut", duration: 0.4 },
      });
    }
  }, [isOpen, controls]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <BlurLayer
          onClick={() => {
            handleClick();
          }}
        />
      )}
      <motion.div
        ref={cardRef}
        initial={{ scale: 1 }}
        animate={controls}
        onClick={handleClick}
        className="w-full max-w-md aspect-video rounded-3xl bg-violet-700 p-6 cursor-pointer flex flex-col items-start justify-between"
      >
        <div className="flex flex-col items-start justify-start">
          <h1
            className="font-semibold text-lg focus:outline-none w-full"
            contentEditable={isOpen}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            This is a note
          </h1>
          <h5
            contentEditable={isOpen}
            onClick={(event) => {
              event.stopPropagation();
            }}
            className="focus:outline-none text-sm w-full"
          >
            This is the card description here{" "}
          </h5>
        </div>
        <h3
          onClick={(event) => {
            event.stopPropagation();
          }}
          className="text-sm"
        >
          May, 25th 2023
        </h3>
      </motion.div>
    </>
  );
};

export default NotesCard;
