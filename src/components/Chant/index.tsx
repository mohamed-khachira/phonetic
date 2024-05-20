import React, { useState } from 'react';
import GenericSection from './GenericSection.tsx';

import ifamille from "../../assets/chants/famille.jpeg";
import mfamille from "../../assets/chants/famille.mp3";

import iecole from "../../assets/chants/ecole.jpeg";
import mecole from "../../assets/chants/ecole.mp3";

import icorps from "../../assets/chants/corps.jpeg";
import mcorps from "../../assets/chants/corps.mp3";

import iassiette from "../../assets/chants/assiette.jpeg";
import massiette from "../../assets/chants/assiette.mp3";

import ianimaux from "../../assets/chants/animaux.jpeg";
import manimaux from "../../assets/chants/animaux.mp3";

import ilivre from "../../assets/chants/livre.jpeg";
import mlivre from "../../assets/chants/livre.mp3";

import ijeux from "../../assets/chants/jeux.jpeg";
import mjeux from "../../assets/chants/jeux.mp3";

import ifete from "../../assets/chants/fete.jpeg";
import mfete from "../../assets/chants/fete.mp3";

interface ChantType {
    title: string;
    section: string;
    color: string;
    img: string;
    audio: string;
    sectionColor: string;
  }

const Chant: React.FC = () => {
    const [section, setSection] = useState<string>("main");
    const [CurrentSection, setCurrentSection] = useState<ChantType | null>(null);

    const chantList : ChantType[] = [
        {
            title: "U 1: Ma famille, mon amour !",
            section: "section1",
            color: 'HotPink',
            img: ifamille,
            audio: mfamille,
            sectionColor: 'HotPink'
        },
        {
            title: "U 2: Mon école",
            section: "section2",
            color: 'Orange',
            img: iecole,
            audio: mecole,
            sectionColor: 'DeepSkyBlue'
        },
        {
            title: "U 3: Mon corps",
            section: "section3",
            color: 'Khaki',
            img: icorps,
            audio: mcorps,
            sectionColor: 'PaleGreen'
        },
        {
            title: "U 4: Dans mon assiette!",
            section: "section4",
            color: 'Plum',
            img: iassiette,
            audio: massiette,
            sectionColor: 'Moccasin'
        },
        {
            title: "U 5: Mes amis les animaux",
            section: "section5",
            color: 'MediumSeaGreen',
            img: ianimaux,
            audio: manimaux,
            sectionColor: 'MediumSeaGreen'
        },
        {
            title: "U 6: Mon ami, le livre !",
            section: "section6",
            color: 'SteelBlue',
            img: ilivre,
            audio: mlivre,
            sectionColor: 'Pink'
        },
        {
            title: "U 7 : Mes jeux, préférés !",
            section: "section7",
            color: 'Chocolate',
            img: ijeux,
            audio: mjeux,
            sectionColor: 'SkyBlue'
        },
        {
            title: "U 8: Quelle fête !",
            section: "section8",
            color: 'LightGreen',
            img: ifete,
            audio: mfete,
            sectionColor: 'Plum'
        }
    ];

    const buttonStyle: React.CSSProperties = {
        width: 130,
        height: 120,
        margin: "15px",
        padding: '10px 20px',
        color: 'white',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer'
    };
    const handleClick = (chant: ChantType) => {
        setSection(chant.section);
        setCurrentSection(chant);
      };

    return (
        <div className="flex w-full py-0 md:px-[200px] px-8 flex-col gap-16 justify-center items-center" >
            {section === "main" ? (
                <div>
                    <div className="grid grid-cols-1 py-1 gap-4 md:grid-cols-4 lg:grid-cols-4">
                        {chantList.map((chant, index) => (
                            <div
                                className="bg-white py-1 px-1 flex flex-col items-center justify-center gap-5 rounded-[10px] transition-all duration-300 cursor-pointer hover:scale-[1.05]"
                                key={index}
                                onClick={() => handleClick(chant)}
                            >
                                <div
                                    style={{
                                        ...buttonStyle,
                                        backgroundColor: chant.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <strong>{chant.title}</strong>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ): <GenericSection color={CurrentSection?.sectionColor} img={CurrentSection?.img} audio={CurrentSection?.audio}/>}
        </div>
    );
};

export default Chant;
