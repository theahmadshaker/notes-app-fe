import Searchbar from "./Searchbar";
import NotesCard from "./NotesCard";

const NotesGrid = () => {
  return (
    <div className="flex flex-col items-start justify-start flex-grow h-full">
      <Searchbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 w-full p-4 justify-center overflow-y-auto">
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
      </div>
    </div>
  );
};

export default NotesGrid;
