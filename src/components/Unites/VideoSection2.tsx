import React, { useState } from "react";

interface QuestionSectionProps {
  audioSrc: string;
  question: string;
  responses: { text: string, isCorrect: boolean }[];
}

const VideoSection2: React.FC<QuestionSectionProps> = ({ audioSrc, question, responses }) => {
  const [message, setMessage] = useState<string>("");

  const handleResponseClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setMessage("Correct!");
    } else {
      setMessage("Faux. Essayez à nouveau.");
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2><strong>On/an</strong></h2>
        <video controls width="70%" className="videoPlayer" src={audioSrc}></video>
        <p>A partir de chanson</p>
      <p>{question}</p>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        {responses.map((response, index) => (
          <button
            key={index}
            onClick={() => handleResponseClick(response.isCorrect)}
            style={{
              padding: '10px 20px',
              backgroundColor: 'orange',
              width:'60px',
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

export default VideoSection2;
