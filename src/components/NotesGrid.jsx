import Searchbar from "./Searchbar";
import NotesCard from "./NotesCard";

import { useColor } from "../hooks/useActiveColor";

import useFetchNotes from "../hooks/useFetchNotes";

const NotesGrid = () => {
  const { activeColor } = useColor();
  const { notes, loading } = useFetchNotes(activeColor);

  // Removed the empty useEffect hook as it serves no purpose here.

  if (loading) {
    return <div>Loading notes...</div>;
  }

  return (
    <div className="flex flex-col items-start justify-start flex-grow h-full w-full">
      <Searchbar />
      <div className="flex flex-row items-center justify-start px-12 py-6 w-full">
        <h1 className="text-4xl text-black font-semibold">Notes</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 w-full p-4 justify-center overflow-y-auto flex-grow relative">
        {notes.length === 0 ? (
          <div className="h-full w-1/3 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-center">
              You do not seem to have any notes yet, start adding some with the
              colors you want from the left sidebar.
            </h1>
          </div>
        ) : (
          notes.map((note) => (
            <NotesCard
              key={note.id}
              title={note.name}
              description={note.description}
              date={note.date}
              backgroundColor={note.color}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NotesGrid;
