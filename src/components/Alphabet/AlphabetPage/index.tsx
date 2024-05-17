import { VolumeHigh } from "react-ionicons";
import { useRef } from "react";

export interface AlphabetType {
  id: string;
  img: string;
  prononciation: string,
  exemple: string,
  aExample: string,
  phonetique: string
}
interface AlphabetProps {
  alphabet: AlphabetType;
}

const AlphabetPage = ({alphabet} : AlphabetProps) => {
    const myRef1 = useRef<HTMLAudioElement | null>(null);
    const myRef2 = useRef<HTMLAudioElement | null>(null);
    const playAudio1 = () => {
      if (myRef1.current !== null) {
        myRef1.current.play();
      }
    };
    const playAudio2 = () => {
      if (myRef2.current !== null) {
        myRef2.current.play();
      }
    };

    return (
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
            <div> <img src={alphabet.img} alt="mobilescreen" /> </div>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table
                      className="min-w-full text-center text-sm font-light text-surface dark:text-white">
                      <thead
                        className="border-b border-neutral-200 bg-neutral-50 font-medium dark:border-white/10 dark:text-neutral-800">
                        <tr>
                          <th scope="col" className=" px-6 py-4">Prononciation</th>
                          <th scope="col" className=" px-6 py-4">Exemple</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-neutral-200 dark:border-white/10">
                        <audio
                    ref={myRef1}
                    src={alphabet.prononciation}
                />
                <audio
                    ref={myRef2}
                    src={alphabet.exemple}
                />
                          <td className="whitespace-nowrap  px-6 py-4 font-medium"><VolumeHigh
                    color={'#7EC8E3'} 
                    height="50px"
                    width="50px"
                    onClick={playAudio1}
                    />{alphabet.phonetique}</td>
                          <td className="whitespace-nowrap  px-6 py-4"> <VolumeHigh
                        color={'#7EC8E3'} 
                        height="50px"
                        width="50px"
                        onClick={playAudio2}
                        />{alphabet.aExample}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default AlphabetPage;