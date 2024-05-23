import { useState } from "react";
import { GameControllerOutline, MusicalNotesOutline } from "react-ionicons";
import WordGame from "./WordGame";
import AlphabetGame from "./AlphabetGame";
 

const GamesSection = () => {
	const [section, setSection] = useState<"alphabet" | "word">("word");

	return (
		<div id="games" className="flex w-full  md:px-[200px] flex-col gap-2 justify-center items-center">
		
			<div>
				
				<div className="grid grid-cols-1 py-5 gap-4 md:grid-cols-2">
					<div
						className="bg-white py-5 px-1 flex flex-col items-center justify-center gap-5 rounded-[10px] transition-all duration-300 cursor-pointer hover:scale-[1.05]"
						style={{ boxShadow: "0 0 40px 5px rgb(0 0 0 / 5%)" }}
						onClick={() => setSection("word")}
					>
						<MusicalNotesOutline color="#60a5fa" style={{ width: 60, height: 60 }} />
						<span className="font-semibold text-gray-700 text-[21px]">
							Jeux d'écoute
						</span>
						<span className="max-w-[360px] text-center leading-7">
							Écoutez le mot et trouvez la bonne image.
						</span>
					</div>
					<div
						className="bg-white py-5 px-1 flex flex-col items-center justify-center gap-5 rounded-[10px] transition-all duration-300 cursor-pointer hover:scale-[1.05]"
						style={{ boxShadow: "0 0 40px 5px rgb(0 0 0 / 5%)" }}
						onClick={() => setSection("alphabet")}
					>
						<GameControllerOutline color="#60a5fa" style={{ width: 60, height: 60 }} />
						<span className="font-semibold text-gray-700 text-[21px]">
							Jeux de place
						</span>
						<span className="max-w-[360px] text-center leading-7">
							Placez les lettres dans l'ordre correct.
						</span>
					</div>
				</div>
			</div>
			{section === "word" && <WordGame />}
			{section === "alphabet" && <AlphabetGame />}
		</div>
	);
};

export default GamesSection;
