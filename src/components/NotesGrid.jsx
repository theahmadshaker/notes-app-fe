import { useState } from "react";

import Searchbar from "./Searchbar";
import NotesCard from "./NotesCard";
import OpenNotesCard from "./OpenNotesCard";

import { useColor } from "../hooks/useActiveColor";
import useFetchNotes from "../hooks/useFetchNotes";

const NotesGrid = () => {
  const { activeColor } = useColor();
  const { notes, loading } = useFetchNotes(activeColor);
  const [selectedId, setSelectedId] = useState(null);

  if (loading) {
    return <div>Loading notes...</div>;
  }

  const handleCardClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="flex flex-col items-start justify-start flex-grow h-full w-full">
      <Searchbar />
      <div className="flex flex-row items-center justify-start px-12 py-6 w-full">
        <h1 className="text-4xl text-black font-semibold">Notes</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 w-full p-4 justify-center overflow-y-auto flex-grow">
        {notes.length === 0 ? (
          <div>No notes to display</div>
        ) : (
          notes.map((note) =>
            selectedId === note.id ? (
              <OpenNotesCard
                layoutId={`note-${note.id}`}
                key={note.id}
                title={note.name}
                description={note.description}
                date={note.date}
                backgroundColor={note.color}
                closeCard={() => setSelectedId(null)}
              />
            ) : (
              <NotesCard
                layoutId={`note-${note.id}`}
                key={note.id}
                title={note.name}
                description={note.description}
                date={note.date}
                backgroundColor={note.color}
                onClick={() => handleCardClick(note.id)}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default NotesGrid;
