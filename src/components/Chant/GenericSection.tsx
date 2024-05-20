import { useRef, useState } from "react";
import { PauseCircleSharp, PlayCircleSharp } from "react-ionicons";

interface SectionProps {
  color?: string;
  img?: string;
  audio?: string;
}

const GenericSection = ({
  color,
  img,
  audio
}: SectionProps) => {
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
            src={audio}
        />
        <img className="w-full h-90" alt="play music" src={img} style={{marginRight:20}} />

        {isPlaying ? <PauseCircleSharp onClick={pauseAudio}
            color={color}
            height="100px"
            width="100px"
            /> : <PlayCircleSharp onClick={playAudio}
            color={color}
            height="100px"
            width="100px"
        />}
    </div>
  );
};

export default GenericSection;