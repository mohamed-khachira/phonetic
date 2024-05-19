import a from "../../../assets/alphabet/letter-a.png";
import b from "../../../assets/alphabet/letter-b.png";
import c from "../../../assets/alphabet/letter-c.png";
import d from "../../../assets/alphabet/letter-d.png";
import e from "../../../assets/alphabet/letter-e.png";
import f from "../../../assets/alphabet/letter-f.png";
import g from "../../../assets/alphabet/letter-g.png";
import h from "../../../assets/alphabet/letter-h.png";
import i from "../../../assets/alphabet/letter-i.png";
import j from "../../../assets/alphabet/letter-j.png";
import k from "../../../assets/alphabet/letter-k.png";
import l from "../../../assets/alphabet/letter-l.png";
import m from "../../../assets/alphabet/letter-m.png";
import n from "../../../assets/alphabet/letter-n.png";
import o from "../../../assets/alphabet/letter-o.png";
import p from "../../../assets/alphabet/letter-p.png";
import q from "../../../assets/alphabet/letter-q.png";
import r from "../../../assets/alphabet/letter-r.png";
import s from "../../../assets/alphabet/letter-s.png";
import t from "../../../assets/alphabet/letter-t.png";
import u from "../../../assets/alphabet/letter-u.png";
import v from "../../../assets/alphabet/letter-v.png";
import w from "../../../assets/alphabet/letter-w.png";
import x from "../../../assets/alphabet/letter-x.png";
import y from "../../../assets/alphabet/letter-y.png";
import z from "../../../assets/alphabet/letter-z.png";

import aSon from "../../../assets/alphabet_audio/A.mp3";
import aSonExample from "../../../assets/alphabet_audio/360_vignette_a1_a_0.mp3";

import bSon from "../../../assets/alphabet_audio/B.mp3";
import bSonExample from "../../../assets/alphabet_audio/361_vignette_a1_b_0.mp3";

import cSon from "../../../assets/alphabet_audio/C.mp3";
import cSonExample from "../../../assets/alphabet_audio/362_vignette_a1_c_0.mp3";

import dSon from "../../../assets/alphabet_audio/D.mp3";
import dSonExample from "../../../assets/alphabet_audio/363_vignette_a1_d_0.mp3";

import eSon from "../../../assets/alphabet_audio/E.mp3";
import eSonExample from "../../../assets/alphabet_audio/364_vignette_a1_e_0.mp3";

import fSon from "../../../assets/alphabet_audio/F.mp3";
import fSonExample from "../../../assets/alphabet_audio/365_vignette_a1_f_0.mp3";

import gSon from "../../../assets/alphabet_audio/G.mp3";
import gSonExample from "../../../assets/alphabet_audio/366_vignette_a1_g_0.mp3";

import hSon from "../../../assets/alphabet_audio/H.mp3";
import hSonExample from "../../../assets/alphabet_audio/367_vignette_a1_h_0.mp3";

import iSon from "../../../assets/alphabet_audio/I.mp3";
import iSonExample from "../../../assets/alphabet_audio/368_vignette_a1_i_0.mp3";

import jSon from "../../../assets/alphabet_audio/J.mp3";
import jSonExample from "../../../assets/alphabet_audio/369_vignette_a1_j_0.mp3";

import kSon from "../../../assets/alphabet_audio/K.mp3";
import kSonExample from "../../../assets/alphabet_audio/370_vignette_a1_k_0.mp3";

import lSon from "../../../assets/alphabet_audio/L.mp3";
import lSonExample from "../../../assets/alphabet_audio/371_vignette_a1_l_0.mp3";

import mSon from "../../../assets/alphabet_audio/M.mp3";
import mSonExample from "../../../assets/alphabet_audio/372_vignette_a1_m_0.mp3";

import nSon from "../../../assets/alphabet_audio/N.mp3";
import nSonExample from "../../../assets/alphabet_audio/373_vignette_a1_n_0.mp3";

import oSon from "../../../assets/alphabet_audio/O.mp3";
import oSonExample from "../../../assets/alphabet_audio/374_vignette_a1_o.mp3";

import pSon from "../../../assets/alphabet_audio/P.mp3";
import pSonExample from "../../../assets/alphabet_audio/375_vignette_a1_p.mp3";

import qSon from "../../../assets/alphabet_audio/Q.mp3";
import qSonExample from "../../../assets/alphabet_audio/376_vignette_a1_q.mp3";

import rSon from "../../../assets/alphabet_audio/R.mp3";
import rSonExample from "../../../assets/alphabet_audio/377_vignette_a1_r.mp3";

import sSon from "../../../assets/alphabet_audio/S.mp3";
import sSonExample from "../../../assets/alphabet_audio/378_vignette_a1_s.mp3";

import tSon from "../../../assets/alphabet_audio/T.mp3";
import tSonExample from "../../../assets/alphabet_audio/379_vignette_a1_t.mp3";

import uSon from "../../../assets/alphabet_audio/U.mp3";
import uSonExample from "../../../assets/alphabet_audio/380_vignette_a1_u.mp3";

import vSon from "../../../assets/alphabet_audio/V.mp3";
import vSonExample from "../../../assets/alphabet_audio/381_vignette_a1_v.mp3";

import wSon from "../../../assets/alphabet_audio/W.mp3";
import wSonExample from "../../../assets/alphabet_audio/382_vignette_a1_w.mp3";

import xSon from "../../../assets/alphabet_audio/X.mp3";
import xSonExample from "../../../assets/alphabet_audio/383_vignette_a1_x.mp3";

import ySon from "../../../assets/alphabet_audio/Y.mp3";
import ySonExample from "../../../assets/alphabet_audio/384_vignette_a1_y.mp3";

import zSon from "../../../assets/alphabet_audio/Z 2_0.mp3";
import zSonExample from "../../../assets/alphabet_audio/385_vignette_a1_z.mp3";

import music from "../../../assets/music.gif";

import FrenchAlphabet from "../../../assets/FrenchAlphabet.mp3";
import { useRef, useState } from "react";
import { PauseCircleSharp, PlayCircleSharp } from "react-ionicons";

interface ChangeAlphabetProps {
    changeAlphabet: (item: {
        id: string;
        img: string;
        prononciation: string;
        exemple: string;
        aExample: string;
        phonetique: string;
      }) => void;
}

const SongPage = ({changeAlphabet}: ChangeAlphabetProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const myRef = useRef<HTMLAudioElement | null>(null);
    const alphabet = [
        { id: 'a', img: a , prononciation: aSon, exemple: aSonExample, aExample: 'Adam', phonetique: 'a'},
        { id: 'b', img: b , prononciation: bSon, exemple: bSonExample, aExample: 'Bachir', phonetique: 'bé'},
        { id: 'c', img: c , prononciation: cSon, exemple: cSonExample, aExample: 'Clara', phonetique: 'cé'},
        { id: 'd', img: d , prononciation: dSon, exemple: dSonExample, aExample: 'Djamila', phonetique: 'dé'},
        { id: 'e', img: e , prononciation: eSon, exemple: eSonExample, aExample: 'Eugénie', phonetique: 'euh'},
        { id: 'f', img: f , prononciation: fSon, exemple: fSonExample, aExample: 'Fatou', phonetique: 'èf'},
        { id: 'g', img: g , prononciation: gSon, exemple: gSonExample, aExample: 'Gabriel', phonetique: 'gé'},
        { id: 'h', img: h , prononciation: hSon, exemple: hSonExample, aExample: 'Habib', phonetique: 'ash'},
        { id: 'i', img: i , prononciation: iSon, exemple: iSonExample, aExample: 'Inès', phonetique: 'i'},
        { id: 'j', img: j , prononciation: jSon, exemple: jSonExample, aExample: 'Jade', phonetique: 'ji'},
        { id: 'k', img: k , prononciation: kSon, exemple: kSonExample, aExample: 'Kévin', phonetique: 'ka'},
        { id: 'l', img: l , prononciation: lSon, exemple: lSonExample, aExample: 'Léa', phonetique: 'èl'},
        { id: 'm', img: m , prononciation: mSon, exemple: mSonExample, aExample: 'Mamadou', phonetique: 'èm'},
        { id: 'n', img: n , prononciation: nSon, exemple: nSonExample, aExample: 'Nathan', phonetique: 'èn'},
        { id: 'o', img: o , prononciation: oSon, exemple: oSonExample, aExample: 'Omar', phonetique: 'o'},
        { id: 'p', img: p , prononciation: pSon, exemple: pSonExample, aExample: 'Paul', phonetique: 'pé'},
        { id: 'q', img: q , prononciation: qSon, exemple: qSonExample, aExample: 'Quentin', phonetique: 'ku'},
        { id: 'r', img: r , prononciation: rSon, exemple: rSonExample, aExample: 'Rosalie', phonetique: 'èr'},
        { id: 's', img: s , prononciation: sSon, exemple: sSonExample, aExample: 'Samuel', phonetique: 'èss'},
        { id: 't', img: t , prononciation: tSon, exemple: tSonExample, aExample: 'Thomas', phonetique: 'té'},
        { id: 'u', img: u , prononciation: uSon, exemple: uSonExample, aExample: 'Ursule', phonetique: 'u'},
        { id: 'v', img: v , prononciation: vSon, exemple: vSonExample, aExample: 'Victor', phonetique: 'vé'},
        { id: 'w', img: w , prononciation: wSon, exemple: wSonExample, aExample: 'William', phonetique: 'double vé'},
        { id: 'x', img: x , prononciation: xSon, exemple: xSonExample, aExample: 'Xavier', phonetique: 'iks'},
        { id: 'y', img: y , prononciation: ySon, exemple: ySonExample, aExample: 'Yasmine', phonetique: 'i grec'},
        { id: 'z', img: z , prononciation: zSon, exemple: zSonExample, aExample: 'Zohra', phonetique: 'zèd'}
    ];

    const playAudio = () => {
        setIsPlaying(!isPlaying);
        if (myRef.current !== null) {
            myRef.current.play();
        }
    };
    const pauseAudio = () => {
        setIsPlaying(!isPlaying);
        if (myRef.current !== null) {
            myRef.current.pause();
        }
    };

    return (
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
            <div className="grid grid-cols-4 md:grid-cols-7 sm:grid-cols-2 gap-3">
            {alphabet.map((item) => (
                <div onClick={ () => changeAlphabet(item)} className="w-30 h-30 shadow-2xl p-3" key={item.id}> <img src={item.img} alt="mobilescreen" /> </div>
            ))}
            </div>
            <div>
                <audio
                    ref={myRef}
                    src={FrenchAlphabet}
                />
                <img className="w-20 h-30" alt="play music" src={music} />
                {/*<img className="w-20 h-20" onClick={handleAudio} src={play} alt="mobilescreen" />*/}
                {isPlaying ? <PauseCircleSharp onClick={pauseAudio}
                    color={'#FF0000'}
                    height="100px"
                    width="100px"
                    /> : <PlayCircleSharp onClick={playAudio}
                    color={'#FF0000'}
                    height="100px"
                    width="100px"
                />}
            </div>
        </div>
    );
};

export default SongPage;