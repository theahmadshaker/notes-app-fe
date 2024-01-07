import { doc, setDoc, collection } from "firebase/firestore";
import { auth, db } from "../config/firebase";

async function createNote(color) {
  // Ensure the user is authenticated
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User must be logged in to create a note");
  }

  // Get today's date in a suitable format (e.g., YYYY-MM-DD)
  const today = new Date().toISOString().split("T")[0];

  // Prepare the note data
  const noteData = {
    name: "",
    description: "",
    date: today,
  };

  // Reference to the user's document in the 'users' collection
  const userDocRef = doc(db, "users", user.uid);

  // Reference to the new note document in the subcollection named after the color
  const noteRef = doc(collection(userDocRef, color));

  // Write the new note to Firestore
  try {
    await setDoc(noteRef, noteData);
    console.log("Note created successfully");
  } catch (error) {
    console.error("Error creating note:", error);
  }
}

export default createNote;
