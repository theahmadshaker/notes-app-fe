import { motion } from "framer-motion";
import BlurLayer from "./BlurLayer";
import { useEffect, useRef, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase"; // Import Firebase config

const OpenNotesCard = ({
  id, // The note's ID
  initialTitle,
  initialDescription,
  date,
  closeCard,
  backgroundColor,
  layoutId,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const cardRef = useRef(null);

  const handleUpdate = async () => {
    const user = auth.currentUser;
    if (!user || !user.uid) {
      console.error("User must be logged in to update a note");
      return;
    }

    if (!id) {
      console.error("Invalid note ID");
      return;
    }

    const noteRef = doc(db, "users", user.uid, "notes", id);

    try {
      await updateDoc(noteRef, {
        name: title,
        description: description,
      });
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  // Center the card on the screen
  useEffect(() => {
    if (cardRef.current) {
      const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
      const { offsetWidth: cardWidth, offsetHeight: cardHeight } =
        cardRef.current;

      const top = (screenHeight - cardHeight) / 2;
      const left = (screenWidth - cardWidth) / 2;

      cardRef.current.style.top = `${top}px`;
      cardRef.current.style.left = `${left}px`;
    }
  }, []);

  return (
    <>
      <BlurLayer onClick={closeCard} />
      <motion.div
        ref={cardRef}
        layoutId={layoutId}
        className="w-64 aspect-square max-w-md rounded-3xl p-6 cursor-pointer flex flex-col items-start justify-between"
        style={{
          backgroundColor: backgroundColor,
          position: "absolute",
          scale: 1.5,
        }}
      >
        <div className="flex flex-col items-start justify-start">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleUpdate}
            className="font-semibold text-lg focus:outline-none w-full bg-transparent border-none"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={handleUpdate}
            className="focus:outline-none text-sm w-full bg-transparent border-none resize-none"
            rows="4"
          />
        </div>
        <h3 className="text-sm">{date}</h3>
      </motion.div>
    </>
  );
};

export default OpenNotesCard;
