// src/components/WordGame.tsx
import React, { useState, useRef } from 'react';
import '../WordGame.css';

import a from "../../assets/alphabet/letter-a.png";
import b from "../../assets/alphabet/letter-b.png";
import c from "../../assets/alphabet/letter-c.png";
import d from "../../assets/alphabet/letter-d.png";
import e from "../../assets/alphabet/letter-e.png";
import f from "../../assets/alphabet/letter-f.png";
import g from "../../assets/alphabet/letter-g.png";
import h from "../../assets/alphabet/letter-h.png";
import i from "../../assets/alphabet/letter-i.png";
import j from "../../assets/alphabet/letter-j.png";
import k from "../../assets/alphabet/letter-k.png";
import l from "../../assets/alphabet/letter-l.png";
import m from "../../assets/alphabet/letter-m.png";
import n from "../../assets/alphabet/letter-n.png";
import o from "../../assets/alphabet/letter-o.png";
import p from "../../assets/alphabet/letter-p.png";
import q from "../../assets/alphabet/letter-q.png";
import r from "../../assets/alphabet/letter-r.png";
import s from "../../assets/alphabet/letter-s.png";
import t from "../../assets/alphabet/letter-t.png";
import u from "../../assets/alphabet/letter-u.png";
import v from "../../assets/alphabet/letter-v.png";
import w from "../../assets/alphabet/letter-w.png";
import x from "../../assets/alphabet/letter-x.png";
import y from "../../assets/alphabet/letter-y.png";
import z from "../../assets/alphabet/letter-z.png";

import aSon from "../../assets/alphabet_audio/A.mp3";
import bSon from "../../assets/alphabet_audio/B.mp3";
import cSon from "../../assets/alphabet_audio/C.mp3";
import dSon from "../../assets/alphabet_audio/D.mp3";
import eSon from "../../assets/alphabet_audio/E.mp3";
import fSon from "../../assets/alphabet_audio/F.mp3";
import gSon from "../../assets/alphabet_audio/G.mp3";
import hSon from "../../assets/alphabet_audio/H.mp3";
import iSon from "../../assets/alphabet_audio/I.mp3";
import jSon from "../../assets/alphabet_audio/J.mp3";
import kSon from "../../assets/alphabet_audio/K.mp3";
import lSon from "../../assets/alphabet_audio/L.mp3";
import mSon from "../../assets/alphabet_audio/M.mp3";
import nSon from "../../assets/alphabet_audio/N.mp3";
import oSon from "../../assets/alphabet_audio/O.mp3";
import pSon from "../../assets/alphabet_audio/P.mp3";
import qSon from "../../assets/alphabet_audio/Q.mp3";
import rSon from "../../assets/alphabet_audio/R.mp3";
import sSon from "../../assets/alphabet_audio/S.mp3";
import tSon from "../../assets/alphabet_audio/T.mp3";
import uSon from "../../assets/alphabet_audio/U.mp3";
import vSon from "../../assets/alphabet_audio/V.mp3";
import wSon from "../../assets/alphabet_audio/W.mp3";
import xSon from "../../assets/alphabet_audio/X.mp3";
import ySon from "../../assets/alphabet_audio/Y.mp3";
import zSon from "../../assets/alphabet_audio/Z 2_0.mp3";


const alphabet = [
  { id: 'a', img: a, prononciation: aSon },
  { id: 'b', img: b, prononciation: bSon },
  { id: 'c', img: c, prononciation: cSon },
  { id: 'd', img: d, prononciation: dSon },
  { id: 'e', img: e, prononciation: eSon },
  { id: 'f', img: f, prononciation: fSon },
  { id: 'g', img: g, prononciation: gSon },
  { id: 'h', img: h, prononciation: hSon },
  { id: 'i', img: i, prononciation: iSon },
  { id: 'j', img: j, prononciation: jSon },
  { id: 'k', img: k, prononciation: kSon },
  { id: 'l', img: l, prononciation: lSon },
  { id: 'm', img: m, prononciation: mSon },
  { id: 'n', img: n, prononciation: nSon },
  { id: 'o', img: o, prononciation: oSon },
  { id: 'p', img: p, prononciation: pSon },
  { id: 'q', img: q, prononciation: qSon },
  { id: 'r', img: r, prononciation: rSon },
  { id: 's', img: s, prononciation: sSon },
  { id: 't', img: t, prononciation: tSon },
  { id: 'u', img: u, prononciation: uSon },
  { id: 'v', img: v, prononciation: vSon },
  { id: 'w', img: w, prononciation: wSon },
  { id: 'x', img: x, prononciation: xSon },
  { id: 'y', img: y, prononciation: ySon },
  { id: 'z', img: z, prononciation: zSon },
];

const WordGame: React.FC = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentLetter = alphabet[currentLetterIndex];

  const playPronunciation = () => {
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.src = currentLetter.prononciation;
      audioRef.current.play();
      audioRef.current.onended = () => setIsPlaying(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const checkAnswer = () => {
    if (inputValue === currentLetter.id) {
      setFeedback('Excellent!');
      setTimeout(() => {
        setCurrentLetterIndex((currentLetterIndex + 1) % alphabet.length);
        setInputValue('');
        setFeedback(null);
      }, 2000);
    } else {
      setFeedback('Réessayer');
    }
  };

  return (
    <div className="game-container">
      <h2>Écoutez la prononciation et écrivez la lettre</h2>
      <div className="letter-container">
        <img src={currentLetter.img} alt={`Letter ${currentLetter.id}`} />
        <button onClick={playPronunciation} disabled={isPlaying}>
          {isPlaying ? 'Écoute...' : 'Écouter la prononciation'}
        </button>
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Écrivez la lettre ici"
        />
        <button onClick={checkAnswer}>Vérifier</button>
      </div>
      {feedback && <p className={`feedback ${feedback === 'Excellent!' ? 'correct' : 'error'}`}>{feedback}</p>}
      <audio ref={audioRef} />
    </div>
  );
};

export default WordGame;
