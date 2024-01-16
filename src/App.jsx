import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./App.css";
import NotesPanel from "./pages/notesPanel";
import Authentication from "./pages/authentication";

// Custom hooks
// import useFetchNotes from "./hooks/useFetchNotes";

// Fonts
import "typeface-poppins";

// Providers
import NotesProvider from "./context/NotesContext";

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(null);
  const auth = getAuth();

  // useFetchNotes();

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

  // Ensure the return statement and the opening parenthesis of JSX are on the same line
  return (
    <NotesProvider>
      <NotesPanel />
    </NotesProvider>
  );
}

export default App;
