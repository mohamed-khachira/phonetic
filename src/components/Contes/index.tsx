import { FaPlayCircle } from "react-icons/fa";
import petit_chaperon_rouge from "../../assets/contes/petit_chaperon_rouge.png";
import chat_souris from "../../assets/contes/chat_souris.png";
import lievre_tortue from "../../assets/contes/lievre_tortue.png";
import lion_rat from "../../assets/contes/lion_rat.png";

import LePetitChaperonRouge from "../../assets/contes/LePetitChaperonRouge.mp4";
import LeLionetLeRat from "../../assets/contes/LeLionetLeRat.mp4";
import LeChatetLesSouris from "../../assets/contes/LeChatetLesSouris.mp4";
import leLievreetlaTortue from "../../assets/contes/leLievreetlaTortue.mp4";

import VideoPlayer from "./video-player";
import { useState } from "react";

const Contes = () => {
    const [currentVideo, setcurrentVideo] = useState(LePetitChaperonRouge);
    const contes = [
        {id: '1', img: petit_chaperon_rouge, description: 'Le petit chaperon rouge', video: LePetitChaperonRouge},
        {id: '2', img: chat_souris, description: 'Le chat et les souris', video: LeChatetLesSouris},
        {id: '3', img: lievre_tortue, description: 'Le Lièvre et la Tortue', video: leLievreetlaTortue},
        {id: '4', img: lion_rat, description: 'Le lion et le rat', video: LeLionetLeRat},
    ]
    const handleClick = (video: string) => {
        setcurrentVideo(video)
    };
    return (
    <div className="p-1 flex flex-wrap items-center justify-center">
        {contes.map((conte) => (
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg" key={conte.id}
            onClick={() => handleClick(conte.video)}>
                <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                    style={{transform: "scale(1.5)", opacity: "0.1"}}>
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                </svg>
                <div className="relative px-10 flex items-center justify-center">
                    <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        style={{background: "radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: "0.2"}}>
                    </div>
                    <img className="relative w-40" src={conte.img} alt=""/>
                </div>
                <div className="relative text-white px-1 pb-6 mt-6">
                    <div className="flex justify-between items-center">
                        <span className="block font-semibold text-xl px-3 w-15">{conte.description}</span>
                        <FaPlayCircle size={50} />
                    </div>
                </div>
            </div>
         ))}
      <VideoPlayer
        video={currentVideo}
      />
    </div>
    );
};

export default Contes;