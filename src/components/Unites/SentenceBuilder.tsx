import  { useState, useEffect } from 'react';
import elephant from "../../assets/unites/elephant.jpg";

const SentenceBuilder = () => {
    const words = ["grand", "L'éléphant", "est", "."];
    const correctSentence = "L'éléphant est grand .";
  const [sentence, setSentence] = useState("");

  const handleButtonClick = (word:string) => {
    setSentence(prev => prev ? `${prev} ${word}` : word);
  };

  useEffect(() => {
    if (sentence && sentence !== correctSentence && sentence.split(" ").length === words.length) {
      const timer = setTimeout(() => setSentence(""), 1000); // Clear after 1 second if incorrect
      return () => clearTimeout(timer);
    }
    if (sentence && sentence === correctSentence && sentence.split(" ").length === words.length) {
        const timer = setTimeout(() => setSentence(""), 4000); // Clear after 1 second if incorrect
        return () => clearTimeout(timer);
      }
  }, [sentence, correctSentence, words.length]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h2>Je forme une phrase et je la répète plusieurs fois:</h2>
        {words.map((word, index) => (
          <button key={index} onClick={() => handleButtonClick(word)}>
            {word}
          </button>
        ))}
      </div>
      <input type="text" value={sentence} readOnly />
      <div>
        {sentence === correctSentence ? "Phrase Correcte!" : ""}
      </div>
    </div>
    <div>
        <img src={elephant} alt="" />
    </div>
    </div>
  );
};

export default SentenceBuilder;
