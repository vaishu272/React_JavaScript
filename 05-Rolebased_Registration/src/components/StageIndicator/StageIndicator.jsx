const StageIndicator = ({ currentStage, label }) => {
  return (
    <>
      {currentStage === "success" ? (
        <h3 className="text-lg font-semibold my-5 text-green-600">
          Registration Completed Successfully! 🎉
        </h3>
      ) : (
        <h3 className="text-lg font-semibold my-5">
          Stage {currentStage} / 3: {label}
        </h3>
      )}
    </>
  );
};

export default StageIndicator;
