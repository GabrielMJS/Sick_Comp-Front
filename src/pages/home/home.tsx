import { useState } from "react";
import reactLogo from "../../assets/react.svg";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex gap-8 mb-6">
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="h-24 animate-spin-slow hover:opacity-75 transition-opacity"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-4">Vite + React</h1>

      <div className="bg-white shadow-md rounded-xl p-6 text-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">src/App.tsx</code>{" "}
          and save to test HMR
        </p>
      </div>

      <p className="mt-8 text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Home;
