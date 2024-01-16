import { useState, useEffect } from "react";

import Searchbar from "./Searchbar";
import NotesCard from "./NotesCard";
import OpenNotesCard from "./OpenNotesCard";

import useFetchNotes from "../hooks/useFetchNotes";
import { AnimatePresence } from "framer-motion";

const NotesGrid = () => {
  const { notes, loading } = useFetchNotes();
  const [selectedId, setSelectedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {}, [selectedId]);

  if (loading) {
    return <div>Loading notes...</div>;
  }

  const handleSearchChange = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.name.toLowerCase().includes(searchQuery) ||
      note.description.toLowerCase().includes(searchQuery)
  );

  const handleCardClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="flex flex-col items-start justify-start flex-grow h-full w-full">
      <Searchbar onSearchChange={handleSearchChange} />

      <div className="flex flex-row items-center justify-start px-12 py-6 w-full">
        <h1 className="text-4xl text-black font-semibold">Notes</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 w-full p-4 justify-center overflow-y-auto flex-grow">
        {filteredNotes.length === 0 ? (
          <div>No notes to display</div>
        ) : (
          filteredNotes.map((note) =>
            selectedId === note.id ? (
              <>
                <PlaceholderCard />

                <AnimatePresence>
                  <OpenNotesCard
                    layoutId={`note-${note.id}`}
                    key={note.id}
                    initialTitle={note.name}
                    initialDescription={note.description}
                    date={note.date}
                    backgroundColor={note.color}
                    closeCard={() => setSelectedId(null)}
                    id={note.id}
                  />
                </AnimatePresence>
              </>
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

const PlaceholderCard = () => {
  return (
    <div className="w-full aspect-square max-w-md rounded-3xl p-6 invisible">
      {/* Invisible placeholder */}
    </div>
  );
};
