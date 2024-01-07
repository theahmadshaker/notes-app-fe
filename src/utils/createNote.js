import { doc, setDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../config/firebase";

async function createNote(color) {
  // Ensure the user is authenticated
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User must be logged in to create a note");
  }

  // Get today's date in a suitable format (e.g., YYYY-MM-DD)
  const today = new Date().toISOString().split("T")[0];

  // Prepare the note data with an empty description and a server timestamp
  const noteData = {
    name: "Untitled",
    description: "",
    date: today,
    createdAt: serverTimestamp(), // Use Firestore's server timestamp
  };

  // Reference to the user's document in the 'users' collection
  const userDocRef = doc(db, "users", user.uid);

  // Reference to the 'notes' subcollection of the user's document
  const notesCollectionRef = collection(userDocRef, "notes");

  // Create a new document with an auto-generated ID within the 'notes' subcollection
  const noteRef = doc(notesCollectionRef);

  // Add a 'color' field to the note data with the provided color parameter
  const noteDataWithColor = { ...noteData, color };

  // Write the new note with the color and timestamp to Firestore
  try {
    await setDoc(noteRef, noteDataWithColor);
  } catch (error) {
    console.error("Error creating note with color " + color + ":", error);
  }
}

export default createNote;
