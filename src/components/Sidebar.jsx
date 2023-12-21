// React
import { useState } from "react";

// HeadlessUI
import { Disclosure, RadioGroup } from "@headlessui/react";

// Framer
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const colors = {
    purple: "#7c3aed",
    blue: "#2563eb",
    green: "#059669",
    yellow: "#eab308",
    red: "#e11d48",
    pink: "#db2777",
  };

  return (
    <div className="h-full w-1/12 flex flex-col items-center justify-start border-r border-gray-200 py-10 space-y-8">
      <h1 className="text-xl font-semibold">Noterize</h1>
      <div className="flex  flex-col items-center justify-start">
        <CategorySelector colors={colors} />
      </div>
    </div>
  );
};

export default Sidebar;

const CategorySelector = ({ colors }) => {
  const [activeColor, setActiveColor] = useState("All");

  const animationDelay = 0.1; // delay between each bubble animation in seconds

  let colorValues = Object.values(colors);
  // let colorKeys = Object.keys(colors);

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`w-10 h-10 rounded-full bg-black flex flex-row items-center justify-center hover:opacity-80 ${
              open && "rotate-45"
            } duration-200`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
                className="fill-white"
              />
            </svg>
          </Disclosure.Button>
          <AnimatePresence>
            {open && (
              <Disclosure.Panel static>
                <RadioGroup
                  className="flex flex-col items-center justify-center py-6 space-y-[32px]"
                  value={activeColor}
                >
                  {colorValues.map((color, index) => (
                    <ColorBubble
                      key={color}
                      color={color}
                      delay={index * animationDelay}
                      activeColor={activeColor}
                      setActiveColor={() => {
                        setActiveColor(color);
                      }}
                    />
                  ))}
                </RadioGroup>
              </Disclosure.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
};

const ColorBubble = ({ color, delay, activeColor, setActiveColor }) => {
  const initialY = -32; // Initial Y position offset
  const isSelected = activeColor === color;

  const scaleVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: initialY }}
      animate={{ opacity: 1, y: 0, transition: { delay: delay } }}
      exit={{ opacity: 0, y: initialY, transition: { duration: 0.1 } }}
      className="w-8 h-8 rounded-full focus:outline-none flex flex-row items-center justify-center"
      style={{ background: color }}
      onClick={setActiveColor}
    >
      {isSelected && (
        <motion.div
          className="w-1/2 h-1/2 rounded-full bg-white"
          initial="hidden"
          animate="visible"
          variants={scaleVariants}
        />
      )}
    </motion.button>
  );
};
