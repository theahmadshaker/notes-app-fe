import Sidebar from "../components/Sidebar";
import NotesGrid from "../components/NotesGrid";

const NotesPanel = () => {
  return (
    <div className="w-screen h-screen max-h-screen max-w-screen flex flex-row items-start justify-start">
      <Sidebar />
      <NotesGrid />
    </div>
  );
};

export default NotesPanel;
