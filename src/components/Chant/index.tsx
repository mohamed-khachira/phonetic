import React, { useState } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';

const Chant: React.FC = () => {
    const [section, setSection] = useState<string>("main");

    const chantList = [
        {
            title: "U 1: Ma famille, mon amour !",
            section: "section1",
            color: 'HotPink'
        },
        {
            title: "U 2: Mon école",
            section: "section2",
            color: 'Orange'
        },
        {
            title: "U 3: Mon corps",
            section: "section3",
            color: 'Khaki'
        },
        {
            title: "U 4: Dans mon assiette!",
            section: "section4",
            color: 'Plum'
        },
        {
            title: "U 5: Mes amis les animaux",
            section: "section5",
            color: 'MediumSeaGreen'
        },
        {
            title: "U 6: Mon ami, le livre !",
            section: "section6",
            color: 'SteelBlue'
        },
        {
            title: "U 7 : Mes jeux, préférés !",
            section: "section7",
            color: 'Chocolate'
        },
        {
            title: "U 8: Quelle fête !",
            section: "section8",
            color: 'LightGreen'
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

    return (
        <div className="flex w-full py-0 md:px-[200px] px-8 flex-col gap-16 justify-center items-center" >
         
            {section === "main" && (
                <div>
                    
                    <div className="grid grid-cols-1 py-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                        {chantList.map((chant, index) => (
                            <div
                                className="bg-white py-1 px-1 flex flex-col items-center justify-center gap-5 rounded-[10px] transition-all duration-300 cursor-pointer hover:scale-[1.05]"
                               
                                key={index}
                                onClick={() => setSection(chant.section)}
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
                                    {chant.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {section === "section1" && <Section1 />}
            {section === "section2" && <Section2 />}
            {section === "section3" && <Section3 />}
            {section === "section4" && <Section4 />}
            {section === "section5" && <Section5 />}
            {section === "section6" && <Section6 />}
            {section === "section7" && <Section7 />}
            {section === "section8" && <Section8 />}
            {/* Add more sections as needed */}
        </div>
    );
};

export default Chant;
