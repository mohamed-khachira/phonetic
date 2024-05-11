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

import play from "../../../assets/play.png";
import music from "../../../assets/music.gif";

import FrenchAlphabet from "../../../assets/FrenchAlphabet.mp3";

const SongPage = () => {
    const alphabet = [
        { id: 'a', img: a },
        { id: 'b', img: b },
        { id: 'c', img: c },
        { id: 'd', img: d },
        { id: 'e', img: e },
        { id: 'f', img: f },
        { id: 'g', img: g },
        { id: 'h', img: h },
        { id: 'i', img: i },
        { id: 'j', img: j },
        { id: 'k', img: k },
        { id: 'l', img: l },
        { id: 'm', img: m },
        { id: 'n', img: n },
        { id: 'o', img: o },
        { id: 'p', img: p },
        { id: 'q', img: q },
        { id: 'r', img: r },
        { id: 's', img: s },
        { id: 't', img: t },
        { id: 'u', img: u },
        { id: 'v', img: v },
        { id: 'w', img: w },
        { id: 'x', img: x },
        { id: 'y', img: y },
        { id: 'z', img: z }
    ];
    const audio = new Audio(FrenchAlphabet);
    audio.loop = true;

    const handleAudio = () => {
        audio.loop = true;
        audio.play();
    };

    return (
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
            <div className="grid grid-cols-7 gap-3">
            {alphabet.map((item) => (
                <div className="w-30 h-30 shadow-2xl p-3" key={item.id}> <img src={item.img} alt="mobilescreen" /> </div>
            ))}
            </div>
            <div>
                <img className="w-20 h-30" alt="play music" src={music} />
                <img className="w-20 h-20" onClick={handleAudio} src={play} alt="mobilescreen" />
            </div>
        </div>
    );
};

export default SongPage;