import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 px-4">
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center">
          {/* App Badge */}
          <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
            📝
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Welcome to the Portal
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            Complete your{" "}
            <span className="font-medium">role-based registration</span> to
            access the dashboard and get started.
          </p>

          {/* CTA (Call-to-Action) Button */}
          <button
            onClick={() => navigate("/register/stage-1")}
            className="
            w-full py-3 rounded-lg cursor-pointer
            bg-blue-600 text-white font-semibold
            hover:bg-blue-700 transition
            shadow-md hover:shadow-lg
          "
          >
            Start Registration
          </button>

          {/* Footer */}
          <p className="text-xs text-gray-400 mt-6">
            Secure • Simple • Fast onboarding
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
