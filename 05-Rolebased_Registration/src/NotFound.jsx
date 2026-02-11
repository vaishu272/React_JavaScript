import { useNavigate } from "react-router-dom";
import "animate.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div
        className="
          max-w-lg w-full bg-white rounded-xl p-10 text-center
          shadow-lg border
          animate__animated animate__fadeInUp
        "
      >
        {/* 404 */}
        <h1
          className="
            text-[96px] font-bold text-blue-600 leading-none mb-2
            animate__animated animate__zoomIn
          "
        >
          404
        </h1>

        {/* Title */}
        <h2
          className="
            text-2xl font-semibold text-gray-800 mb-3
            animate__animated animate__fadeInDown animate__delay-1s
          "
        >
          Page Not Found
        </h2>

        {/* Description */}
        <p
          className="
            text-gray-600 mb-8
            animate__animated animate__fadeIn animate__delay-1s
          "
        >
          The page you are looking for doesn’t exist or may have been moved.
        </p>

        {/* Single Action */}
        <button
          onClick={() => navigate(-1)}
          className="
            px-6 py-2 rounded-lg cursor-pointer bg-blue-600 text-white font-medium
            hover:bg-blue-700 transition
            animate__animated animate__bounceIn animate__delay-2s
          "
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
