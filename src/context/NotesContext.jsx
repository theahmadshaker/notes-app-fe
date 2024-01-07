// NotesContext.js
import { createContext } from "react";

export const NotesContext = createContext();

// NotesProvider.js
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();
  const auth = getAuth();

  useEffect(() => {
    if (!auth.currentUser) {
      setLoading(false);
      return;
    }

    const userNotesRef = collection(db, "users", auth.currentUser.uid, "notes");
    const q = query(userNotesRef, where("userId", "==", auth.currentUser.uid));

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const notesArray = [];
        querySnapshot.forEach((doc) => {
          notesArray.push({ id: doc.id, ...doc.data() });
        });
        setNotes(notesArray);
        setLoading(false);
      },
      (error) => {
        console.log(error);
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Cleanup on unmount
  }, [auth.currentUser, db]);

  return (
    <NotesContext.Provider value={{ notes, loading }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
