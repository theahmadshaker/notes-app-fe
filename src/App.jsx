// React
// import {useState} from "react"

import "./App.css";
import NotesPanel from "./pages/notesPanel";
import Authentication from "./pages/authentication";

// Fonts
import "typeface-poppins";

function App() {
  // To be changed to a react useState later
  const isUserAuthenticated = true;

  if (!isUserAuthenticated) {
    return <Authentication />;
  }

  return (
    <>
      <NotesPanel />
    </>
  );
}

export default App;
