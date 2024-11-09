import { sculptureList } from "./data.js";
import { useState } from "react";
import "../src/App.css";

export default function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;
  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }
  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }
  function handleShowMore() {
    setShowMore(!showMore);
  }
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Prev
      </button>
      <button onClick={handleNextClick} disabled={!hasNext}>
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img className="photo" src={sculpture.url} alt={sculpture.alt} /> <br />
      <button onClick={handleShowMore}>
        {showMore ? "Hide" : "Show"} Details
      </button>
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}
