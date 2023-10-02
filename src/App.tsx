import reactLogo from "./assets/icons/react.svg";
import viteLogo from "/vite.svg";
import tailwindLogo from "./assets/icons/tailwind.svg";
import { useState } from "react";

function Toast({
  showToast,
  message,
}: {
  showToast: boolean;
  message: string;
}) {
  return (
    <>
      <code
        className={`fixed top-5 right-5 p-3 text-sm bg-neutral-300 rounded-md transition-opacity ease-in-out duration-200 ${
          showToast ? "opacity-100" : "opacity-0"
        }`}
      >
        {message}
      </code>
    </>
  );
}

function App() {
  const [showToast, setShowToast] = useState(false);
  const handleToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(
      "npx degit harsh07may/vite-react-ts-tailwind my-project"
    );
    handleToast();
  };
  return (
    <>
      <Toast showToast={showToast} message="Copied to clipboard!" />
      <main className="flex flex-col items-center justify-center w-full h-screen gap-5 ">
        {/* borderBottomRightRadius: "225px 15px",
          borderBottomLeftRadius: "15px 255px",
          border: "solid 2px #41403E", */}
        <h1 className="text-3xl font-light text-center text-neutral-900">
          Vite + ReactTS + TailwindCSS
        </h1>
        <section className="flex">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="w-28" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="w-28" alt="React logo" />
          </a>
          <a href="https://tailwindcss.com" target="_blank">
            <img src={tailwindLogo} className="w-28" alt="TailwindCSS logo" />
          </a>
        </section>
        <code
          onClick={handleCopy}
          className="flex items-center p-1 text-sm rounded-md cursor-pointer md:w-fit w-72 bg-neutral-200 hover:bg-slate-100"
        >
          <svg
            viewBox="0 -9 3 24"
            aria-hidden="true"
            className="w-auto h-6 mr-3 text-neutral-800 "
          >
            <path
              d="M0 0L3 3L0 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          npx degit harsh07may/vite-react-ts-tailwind
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 transition-colors duration-200 active:stroke-slate-400"
          >
            <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
            <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
          </svg>
        </code>
      </main>
      <div className="fixed bottom-5 left-5">
        <p className="inline">Created by </p>
        <a
          className="hover:underline"
          target="_blank"
          href="https://github.com/harsh07may"
        >
          harsh07may
        </a>
      </div>
    </>
  );
}

export default App;
