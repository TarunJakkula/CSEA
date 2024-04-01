import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const d = {
    12: "Rishik",
    14: "Sumvit",
    17: "Tarun",
    20: "Bharadwaj",
    27: "Arpan",
    34: "Sharath",
    53: "Sathvik",
    58: "Divyansh",
    59: "Rahul",
    61: "You have successfully wasted a min of your life",
  };

  useEffect(() => {
    if (count <= 60)
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
  }, [count]);

  return (
    <div className="App">
      {d[count] !== undefined ? (
        <span className="name">{d[count]}</span>
      ) : (
        <span className="number">{count}</span>
      )}
    </div>
  );
}

export default App;
