const BlurLayer = ({ onClick }) => {
  return (
    <div
      className="h-screen w-screen fixed bg-gray-600 bg-opacity-10 backdrop-filter backdrop-blur-sm top-0 left-0 z-0"
      onClick={onClick}
    />
  );
};

export default BlurLayer;
