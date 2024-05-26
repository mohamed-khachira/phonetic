import React, { useState, useRef } from "react";

interface QuestionSectionProps2 {
  question: string;
  responses2: { text: string, isCorrect: boolean, img2: any, audioSrc2: any }[];
}

const QuestionSection2: React.FC<QuestionSectionProps2> = ({ question, responses2 }) => {
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px', }}>
      
      <p>{question}</p>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
        {responses2.map((response, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button
              onClick={() => handleResponseClick(response.isCorrect)}
              style={{
                padding: '10px 20px',
                backgroundColor: 'white',
                border: '1px solid grey',
                borderRadius: '10px',
                cursor: 'pointer',
                marginBottom: '10px',
                height:'100px',
                width: '100px',// Add some margin to separate the elements
              }}
            >
            
              <img src={response.img2} alt="Response"  />
            </button>
            <audio ref={audioRef} src={response.audioSrc2} controls style={{width: '140px', marginBottom: 20 }} />

            
          </div>
        ))}
      </div>
      {message && <p style={{ marginTop: 20 }}>{message}</p>}
    </div>
  );
};

export default QuestionSection2;
