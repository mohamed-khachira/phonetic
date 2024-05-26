import React, { useState, useRef } from "react";

interface QuestionSectionProps {
  audioSrc: string;
  question: string;
  responses: { text: string, isCorrect: boolean }[];
}

const QuestionSection: React.FC<QuestionSectionProps> = ({ audioSrc, question, responses }) => {
  const [message, setMessage] = useState<string>("");
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleResponseClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setMessage("Correct!");
    } else {
      setMessage("Faux. Essayez à nouveau.");
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2><strong>J'écoute</strong></h2>
      <audio ref={audioRef} src={audioSrc} controls style={{ marginBottom: 20 }} />
      <p>{question}</p>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        {responses.map((response, index) => (
          <button
            key={index}
            onClick={() => handleResponseClick(response.isCorrect)}
            style={{
              padding: '10px 20px',
              backgroundColor: 'lightgrey',
              border: '1px solid grey',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            {response.text}
          </button>
        ))}
      </div>
      {message && <p style={{ marginTop: 20 }}>{message}</p>}
    </div>
  );
};

export default QuestionSection;
