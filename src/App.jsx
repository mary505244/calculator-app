import clsx from "clsx";
import React from "react";
import { ThemeToggle, Calculator } from "./components";

function App() {
  return (
    <div
      className={clsx(
        "w-screen h-screen px-6 py-8 flex justify-center items-center",
        "pink:bg-pink-100 pink:text-pink-800",
        "blue:bg-blue-100 blue:text-white",
        "purple:bg-purple-200 purple:text-white"
      )}
    >
      <main className="flex flex-col gap-6 w-screen max-w-xl">
        
        <header className={clsx("flex justify-between items-end")}>
          <ThemeToggle />
          {/* <h1 className="text-3xl font-bold">calc</h1> */}
        </header>

        <Calculator />

      </main>
    </div>
  );
}

export default App;
