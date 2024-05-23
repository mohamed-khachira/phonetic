// src/components/AlphabetGame.tsx
import React, { useState, useEffect } from 'react';
import '../AlphabetGame.css';

// Function to shuffle an array
const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const AlphabetGame: React.FC = () => {
  const [shuffledAlphabet, setShuffledAlphabet] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setShuffledAlphabet(shuffleArray([...alphabet]));
  }, []);

  const handleLetterClick = (letter: string) => {
    if (letter === alphabet[currentIndex]) {
      setSelectedLetters([...selectedLetters, letter]);
      setCurrentIndex(currentIndex + 1);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <h2 ><strong>Disposez les lettres</strong></h2>
      <div className="alphabet-container">
        {shuffledAlphabet.map((letter) => ( 
          <button
            key={letter}
            className={`alphabet-button ${selectedLetters.includes(letter) ? 'correctt' : ''} ${error && !selectedLetters.includes(letter) ? 'error' : ''}`}
            onClick={() => handleLetterClick(letter)}
            disabled={selectedLetters.includes(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      {error && <p className="error-message">Fausse! Réessayez.</p>}
    </div>
  );
};

export default AlphabetGame;
