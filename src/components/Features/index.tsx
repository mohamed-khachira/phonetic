import { useState } from "react";
import { BookOutline, BarChartOutline, HelpOutline, VideocamOutline, GameControllerOutline, MusicalNotesOutline, CalculatorOutline, HourglassOutline, BulbOutline, HomeOutline } from "react-ionicons";
import Rituel from "../Rituel/index.tsx";
import Alphabet from "../Alphabet/index.tsx";
import Chant from "../Chant/index.tsx";

const Features = () => {
	const [section, setSection] = useState("main");
	const featuresList = [
		{
			icon: (
				<HelpOutline
					color="#60a5fa"
					style={{ width: 60, height: 60 }}
				/>
			),
			title: "Rituel",
			description: "Savoir écouter, formuler...",
		},
		{
			icon: (
				<BookOutline
					color="#60a5fa"
					style={{ width: 60, height: 60 }}
				/>
			),
			title: "L'alphabet",
			description: "A B C D E F G...",
		},
		{
			icon: (
				<HourglassOutline
					color="#60a5fa"
					style={{ width: 60, height: 60 }}
				/>
			),
			title: "Les unités",
			description: "Ma famille, mon école, ...",
		},
		{
			icon: (
				<MusicalNotesOutline
					color="#60a5fa"
					style={{ width: 60, height: 60 }}
				/>
			),
			title: "Les chants",
			description: "Apprendre le français avec des chansons.",
		},
		{
			icon: (
				<GameControllerOutline
					color="#60a5fa"
					style={{ width: 60, height: 60 }}
				/>
			),
			title: "Les jeux",
			description: "Apprendre le français en s'amusant.",
		},
		{
			icon: (
				<CalculatorOutline
					color="#60a5fa"
					style={{ width: 60, height: 60 }}
				/>
			),
			title: "Les contes",
			description: "Apprendre le français avec des histoires.",
		},
		{
			icon: (
				<BulbOutline
					color="#60a5fa"
					style={{ width: 60, height: 60 }}
				/>
			),
			title: "Le vocabulaire",
			description: "Liste de vocabulaire français pour les débutants.",
		},
	
	];
	return (
		<div id="alphabet" className="flex w-full py-10 md:px-[200px] px-8 flex-col gap-16 justify-center items-center">
			{section !== "main" && (
				<button
					onClick={() => setSection('main')}
					className="flex mx-auto text-white bg-blue-400 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 text-lg shadow-md"
				>
					<HomeOutline color={'#00000'} height="30px" width="30px" />
					<span className="py-1">Retour au menu principal</span>
				</button>
			)}
			{section === "main" && (
				<div>
					<div className="flex flex-col w-full items-center">
						<span className="font-semibold text-blue-500">L'alphabet phonétique</span>
						<span className="font-semibold text-slate-700 text-3xl mt-1">
							Contenu de la ressource
						</span>
					</div>
					<div className="grid grid-cols-1 py-5 gap-4 md:grid-cols-4 lg:grid-cols-6">
						{featuresList.map((feature) => (
							<div
								className="bg-white py-5 px-1 flex flex-col items-center justify-center gap-5 rounded-[10px] transition-all duration-300 cursor-pointer hover:scale-[1.05]"
								style={{ boxShadow: "0 0 40px 5px rgb(0 0 0 / 5%)" }}
								key={feature.title}
								onClick={() => setSection(feature.title)}
							>
								{feature.icon}
								<span className="font-semibold text-gray-700 text-[21px]">
									{feature.title}
								</span>
								<span className="max-w-[360px] text-center leading-7">
									{feature.description}
								</span>
							</div>
						))}
					</div>
				</div>
			)}
			{section === "Rituel" && <Rituel />}
			{section === "L'alphabet" && <Alphabet />}
			{section === "Les chants" && <Chant />}
		</div>
	);
};

export default Features;
