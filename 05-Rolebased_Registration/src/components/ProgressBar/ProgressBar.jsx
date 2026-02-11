const ProgressBar = ({ progress, color }) => {
  const visibleWidth = progress === 0 ? 5 : progress;
  return (
    <>
      <div className="text-end text-sm font-medium text-gray-700">
        {progress}%
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
        <div
          className="h-full rounded-full transition-all  duration-500 ease-in-out"
          style={{
            width: `${visibleWidth}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </>
  );
};

export default ProgressBar;
