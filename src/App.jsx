import { useState, useEffect } from "react";
export default function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className="flex mx-auto my-5 justify-center items-center rounded-3xl bg-teal-500/70 h-[250px] w-[300px]">
      <div>
        <h1 className="text-3xl text-center pb-2 text-rose-900 font-black">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
        </h1>
        <div className="flex mx-auto gap-2 justify-center items-center">
          {running ? (
            <button
              onClick={() => {
                setRunning(false);
              }}
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm"
            >
              Start
            </button>
          ) : (
            <button
              onClick={() => {
                setRunning(true);
              }}
              className="px-4 py-2 bg-blue-800 text-white rounded-lg text-sm"
            >
              Pause
            </button>
          )}
          <button
            onClick={() => setTime(0)}
            className="px-4 py-2 bg-red-700 text-white rounded-lg text-sm"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
