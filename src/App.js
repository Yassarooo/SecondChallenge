import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  return <WordByWord />;
}

const WordByWord = () => {
  const [input, setInput] = useState("");
  const [text, setText] = useState([]);
  const [word, setWord] = useState(1);

  const onSubmit = (e) => {
    e.preventDefault();
    const wordsArray = input.split(" ");
    if (wordsArray.length <= 1) {
      alert("Enter more than one word.");
    } else {
      setText(wordsArray);
      setWord(1);
      setInput("");
    }
  };

  useEffect(() => {
    if (text && word < text.length) {
      const time = setTimeout(() => setWord(word + 1), 500);
      return () => clearTimeout(time);
    }
  }, [text, word]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <form onSubmit={onSubmit}>
        <input
          required
          type={"text"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {text.slice(0, word).map((item) => (
          <p style={{ paddingRight: 4 }}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
