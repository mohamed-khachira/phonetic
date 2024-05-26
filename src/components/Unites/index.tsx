import React, { useState } from 'react';
import GenericSection from './GenericSection';
import DetailSection from './DetailSection';
import ContentSection from './ContentSection';
import '../AlphabetGame.css';
import ifamille from "../../assets/unites/Image1.jpg";
import iecole from "../../assets/unites/Image2.jpg";
import icorps from "../../assets/unites/Image3.jpg";
import iassiette from "../../assets/unites/Image4.jpg";
import ianimaux from "../../assets/unites/Image5.jpg";
import ilivre from "../../assets/unites/Image6.jpg";
import ijeux from "../../assets/unites/Image7.jpg";
import ifete from "../../assets/unites/Image8.jpg";
import Image9 from "../../assets/unites/Image9.jpg";
import Image10 from "../../assets/unites/Image10.jpg";
import Image11 from "../../assets/unites/Image11.jpg";
import Image12 from "../../assets/unites/Image12.jpg";
import Image13 from "../../assets/unites/Image13.jpg";
import Image14 from "../../assets/unites/Image14.jpg";

import maman from "../../assets/unites/maman.jpg";
import table from "../../assets/unites/table.jpg";
import panda from "../../assets/unites/panda.jpg";
import computer from "../../assets/unites/computer.jpg";

import QuestionSection from './QuestionSection';
import son1 from "../../assets/unites/1.mp3";
import un from "../../assets/unites/un.mp3";
import toubi from "../../assets/unites/toubi.mp3";
import jub from "../../assets/unites/jub.mp3";
import lit from "../../assets/unites/lit.mp3";
import ecole from "../../assets/unites/ecole.mp3";
import bus from "../../assets/unites/bus.mp3";

import mamanS from "../../assets/unites/maman.mp3";
import tableS from "../../assets/unites/table.mp3";
import pandaS from "../../assets/unites/panda.mp3";
import computerS from "../../assets/unites/computer.mp3";
import video1 from "../../assets/unites/video1.mp4";
import video2 from "../../assets/unites/video2.mp4";

import moutonS from "../../assets/unites/mouton.mp3";
import cantineS from "../../assets/unites/cantine.mp3";
import orangeS from "../../assets/unites/orange.mp3";
import ballonS from "../../assets/unites/ballon.mp3";
import cantine from "../../assets/unites/cantine.jpeg";
import ballon from "../../assets/unites/ballon.jpeg";
import orange from "../../assets/unites/orange.jpeg";
import mouton from "../../assets/unites/mouton.jpeg";


import QuestionSection2 from './QuestionSection2';
import VideoSection from './VideoSection';
import SentenceBuilder from './SentenceBuilder';
import VideoSection2 from './VideoSection2';


interface ChantType {
    title: string;
    section: string;
    color: string;
    img: string;
    sectionColor: string;
    buttons: { title: string; content: any; }[];
}


const Unites: React.FC = () => {
    const [section, setSection] = useState<string>("main");
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const chantList: ChantType[] = [
        {
            title: "U 1: Ma famille, mon amour !",
            section: "section1",
            color: 'HotPink',
            img: ifamille,
            sectionColor: 'HotPink',
            buttons: [
                {
                    title: 'Séance 2 : i/u [i/y]',
                    content: (
                      <>
                        <QuestionSection
                          audioSrc={son1}
                          question="Qu’est-ce que vous entendez ?"
                          responses={[
                            { text: 'i', isCorrect: true },
                            { text: 'o', isCorrect: false },
                            { text: 'u', isCorrect: true },
                            { text: 'a', isCorrect: false },
                          ]}
                        />
                        <QuestionSection2
                          
                          
                          question="Je clique sur l’image où j’entends u: "
                          responses2={[
                            { text: 'a', isCorrect: false ,img2 :Image9 ,audioSrc2:un},
                            { text: 'b', isCorrect: false ,img2 :Image10,audioSrc2:toubi},
                            { text: 'c', isCorrect: true , img2 :Image11,audioSrc2:jub},
                            
                          ]}
                        />
                         <QuestionSection2
                         
                          
                          question="Je clique sur l’image où j’entends i :"
                          responses2={[
                            { text: 'e', isCorrect: true,img2 :Image12,audioSrc2:lit },
                            { text: 'f', isCorrect: false,img2 :Image13,audioSrc2:ecole },
                            { text: 'g', isCorrect: false,img2 :Image14 ,audioSrc2:bus},
                            
                          ]}
                        />
                        
                      </>
                    )
                  },
                  
                { title: 'Séance 4 : a/an [a/ã]:',  content: (
                    <>
                      <VideoSection
                        audioSrc={video1}
                        question="Qu’est-ce que vous entendez ?"
                        responses={[
                          { text: 'on/o', isCorrect: false },
                          { text: 'An/a', isCorrect: true },
                          { text: 'o', isCorrect: false },
                          { text: 'in', isCorrect: false },
                        ]}
                      />
                      <QuestionSection2
                        
                        
                        question="Je coche la bonne image où j’entends an:"
                        responses2={[
                          { text: 'a', isCorrect: true ,img2 :maman ,audioSrc2:mamanS},
                          { text: 'b', isCorrect: false ,img2 :table,audioSrc2:tableS},
                          { text: 'c', isCorrect: true , img2 :panda,audioSrc2:pandaS},
                          { text: 'c', isCorrect: false , img2 :computer,audioSrc2:computerS},
                          
                        ]}
                      />
                       <SentenceBuilder
                       
                      />
                      
                    </>
                  ) },
                  { title: 'Séance 6 : on-an [ɔ̃/ ã]',  content: (
                    <>
                      <VideoSection2
                        audioSrc={video2}
                        question="Qu’est-ce que vous entendez ?"
                        responses={[
                          { text: 'on', isCorrect: true },
                          { text: 'an', isCorrect: true },
                          { text: 'i', isCorrect: false },
                          { text: 'a', isCorrect: true },
                          { text: 'u', isCorrect: false },
                        ]}
                      />
                      <QuestionSection2
                        
                        
                        question="J’écoute et j’élève la main droite quand j’entends an et la main gauche quand j’entends on"
                        responses2={[
                          { text: 'a', isCorrect: false ,img2 :maman ,audioSrc2:mamanS},
                          { text: 'b', isCorrect: false ,img2 :mouton,audioSrc2:moutonS},
                          { text: 'c', isCorrect: true , img2 :cantine,audioSrc2:cantineS},
                          { text: 'c', isCorrect: true , img2 :orange,audioSrc2:orangeS},
                          { text: 'c', isCorrect: true , img2 :ballon,audioSrc2:ballonS},
                          
                        ]}
                      />
                      
                      
                    </>
                  ) },            ]
        },
        {
            title: "U 2: Mon école",
            section: "section2",
            color: 'Orange',
            img: iecole,
            sectionColor: 'DeepSkyBlue',
            buttons: [
                { title: 'Séance 2 : o/ou [o/u] :', content: 'Content for U2 Button 1' },
                { title: 'Séance 4 : p/b [p/b] :', content: 'Content for U2 Button 2' },
                { title: 'Séance 6 : u/i [y /i] :', content: 'Content for U2 Button 3' }
            ]
        },
        {
            title: "U 3: Mon corps",
            section: "section3",
            color: 'Khaki',
            img: icorps,
            sectionColor: 'PaleGreen',
            buttons: [
                { title: 'Séance 2 : [t / d] :', content: 'Content for U3 Button 1' },
                { title: 'Séance 4 : e/eu [ə/ᴔ] :', content: 'Content for U3 Button 2' },
                { title: 'Séance 6 : la phrase interrogative par intonation :', content: 'Content for U3 Button 3' }
            ]
        },
        {
            title: "U 4: Dans mon assiette!",
            section: "section4",
            color: 'Plum',
            img: iassiette,
            sectionColor: 'Moccasin',
            buttons: [
                { title: 'U4 Button 1', content: 'Content for U4 Button 1' },
                { title: 'U4 Button 2', content: 'Content for U4 Button 2' },
                { title: 'U4 Button 3', content: 'Content for U4 Button 3' }
            ]
        },
        {
            title: "U 5: Mes amis les animaux",
            section: "section5",
            color: 'MediumSeaGreen',
            img: ianimaux,
            sectionColor: 'MediumSeaGreen',
            buttons: [
                { title: 'U5 Button 1', content: 'Content for U5 Button 1' },
                { title: 'U5 Button 2', content: 'Content for U5 Button 2' },
                { title: 'U5 Button 3', content: 'Content for U5 Button 3' }
            ]
        },
        {
            title: "U 6: Mon ami, le livre !",
            section: "section6",
            color: 'SteelBlue',
            img: ilivre,
            sectionColor: 'Pink',
            buttons: [
                { title: 'U6 Button 1', content: 'Content for U6 Button 1' },
                { title: 'U6 Button 2', content: 'Content for U6 Button 2' },
                { title: 'U6 Button 3', content: 'Content for U6 Button 3' }
            ]
        },
        {
            title: "U 7 : Mes jeux, préférés !",
            section: "section7",
            color: 'Chocolate',
            img: ijeux,
            sectionColor: 'SkyBlue',
            buttons: [
                { title: 'U7 Button 1', content: 'Content for U7 Button 1' },
                { title: 'U7 Button 2', content: 'Content for U7 Button 2' },
                { title: 'U7 Button 3', content: 'Content for U7 Button 3' }
            ]
        },
        {
            title: "U 8: Quelle fête !",
            section: "section8",
            color: 'LightGreen',
            img: ifete,
            sectionColor: 'Plum',
            buttons: [
                { title: 'U8 Button 1', content: 'Content for U8 Button 1' },
                { title: 'U8 Button 2', content: 'Content for U8 Button 2' },
                { title: 'U8 Button 3', content: 'Content for U8 Button 3' }
            ]
        }
    ];

    const handleClick = (index: number) => {
        setSection(chantList[index].section);
        setCurrentIndex(index);
    };

    const handleNextSection = () => {
        if (currentIndex !== null) {
            setSection(`section${currentIndex + 1}-details`);
        }
    };

    const handleDetailButtonClick = (buttonIndex: number) => {
        if (currentIndex !== null) {
            setSection(`section${currentIndex + 1}-button${buttonIndex + 1}`);
        }
    };

    return (
        <div className="flex w-full py-0 md:px-[200px] px-8 flex-col gap-12 justify-center items-center">
            {section === "main" ? (
                <div>
                    <div className="grid grid-cols-1 py-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                        {chantList.map((chant, index) => (
                            <div
                                className="bg-white py-1 px-1 flex flex-col items-center justify-center gap-5 rounded-[10px] transition-all duration-300 cursor-pointer hover:scale-[1.05]"
                                key={index}
                                onClick={() => handleClick(index)}
                            >
                                <div className='button-71'
                                    style={{
                                        backgroundColor: chant.color,
                                        width: 240,
                                        height: 50,
                                        margin: "0px",
                                        padding: '10px 10px',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'left',
                                        justifyContent: 'left'
                                    }}
                                >
                                    <strong>{chant.title}</strong>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : section.endsWith('-details') ? (
                <DetailSection
                    color={chantList[currentIndex!].sectionColor}
                    text={`Details of ${chantList[currentIndex!].title}`}
                    buttons={chantList[currentIndex!].buttons}
                    onButtonClick={handleDetailButtonClick}
                />
            ) : section.endsWith('-button1') ? (
                <ContentSection content={chantList[currentIndex!].buttons[0].content} />
            ) : section.endsWith('-button2') ? (
                <ContentSection content={chantList[currentIndex!].buttons[1].content} />
            ) : section.endsWith('-button3') ? (
                <ContentSection content={chantList[currentIndex!].buttons[2].content} />
            ) : (
                <GenericSection 
                    color={chantList[currentIndex!].sectionColor} 
                    img={chantList[currentIndex!].img} 
                    onNextSection={handleNextSection}
                />
            )}
        </div>
    );
};

export default Unites;
