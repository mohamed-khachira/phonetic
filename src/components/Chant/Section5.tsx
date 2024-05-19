import { useRef, useState } from "react";
import { PauseCircleSharp, PlayCircleSharp } from "react-ionicons";

import ifamille from "../../assets/chants/animaux.jpeg";
import mfamille from "../../assets/chants/animaux.mp3";


const Section5 = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const myRef = useRef<HTMLAudioElement | null>(null);
   

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
       
            
            <div style={{
            
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <audio
                    ref={myRef}
                    src={mfamille}
                    
                />
                            <img className="w-80 h-90" alt="play music" src={ifamille} style={{
                                       marginRight:20
                                    }} />

                {/*<img className="w-20 h-20" onClick={handleAudio} src={play} alt="mobilescreen" />*/}
                {isPlaying ? <PauseCircleSharp onClick={pauseAudio}
                    color={'MediumSeaGreen'}
                    height="100px"
                    width="100px"
                    /> : <PlayCircleSharp onClick={playAudio}
                    color={'MediumSeaGreen'}
                    height="100px"
                    width="100px"
                    
                />}
            </div>
        
    );
};

export default Section5;