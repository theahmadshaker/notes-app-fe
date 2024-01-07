import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../config/firebase";

async function fetchNotes(color) {
  const user = auth.currentUser.uid;

  const querySnapshot = await getDocs(collection(db, "users", user, color));

  const dataArray = querySnapshot.docs.map((docSnapshot) => {
    return {
      id: docSnapshot.id, // Get document id
      ...docSnapshot.data(), // Spread the document data
    };
  });

  return dataArray;
}

export default fetchNotes;
