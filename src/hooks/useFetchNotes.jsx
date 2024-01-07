import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../config/firebase";

const useFetchNotes = (color) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth.currentUser;

    if (!user) {
      setLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(
      collection(db, "users", user.uid, color),
      (querySnapshot) => {
        const dataArray = querySnapshot.docs.map((docSnapshot) => ({
          id: docSnapshot.id,
          ...docSnapshot.data(),
        }));
        setNotes(dataArray);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching notes:", error);
        setLoading(false);
      }
    );

    // Cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, [color]);

  return { notes, loading };
};

export default useFetchNotes;
