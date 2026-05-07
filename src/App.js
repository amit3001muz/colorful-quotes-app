import React, { useState } from "react";
import "./App.css";

const quotes = [
  "Dream big, work hard.",
  "DevOps is not a tool, it's a culture.",
  "Stay hungry, stay foolish.",
  "Code. Deploy. Repeat.",
  "Kubernetes is powerful!"
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [color, setColor] = useState("#3498db");

  const changeQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    
    setQuote(randomQuote);
    setColor(randomColor);
  };

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <h1>🌈 Quotes App</h1>
      <p>{quote}</p>
      <button onClick={changeQuote}>New Quote</button>
    </div>
  );
}

export default App;
