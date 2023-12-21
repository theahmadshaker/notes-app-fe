import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./App.css";
import NotesPanel from "./pages/notesPanel";
import Authentication from "./pages/authentication";
import "typeface-poppins";

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserAuthenticated(!!user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  if (isUserAuthenticated === null) {
    return <div>Loading...</div>; // Or any other loading state representation
  }

  if (!isUserAuthenticated) {
    return <Authentication />;
  }

  return <NotesPanel />;
}

export default App;
