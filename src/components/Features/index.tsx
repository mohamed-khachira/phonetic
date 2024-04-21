import { useState } from "react";
import { BookOutline, BarChartOutline, HelpOutline, VideocamOutline, GameControllerOutline, MusicalNotesOutline, CalculatorOutline, HourglassOutline, BulbOutline } from "react-ionicons";
import Rituel from "../Rituel/index.tsx";

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
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
		{
			icon: (
				<BookOutline
					color="#60a5fa"
					style={{ width: 60, height: 60 }}
				/>
			),
			title: "Les alphabets",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
		{
			icon: (
				<HourglassOutline
					color="#60a5fa"
					style={{ width: 60, height: 60 }}
				/>
			),
			title: "Les unités",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
        {
			icon: (
				<MusicalNotesOutline
					color="#60a5fa"
					style={{ width: 60, height: 60 }}
				/>
			),
			title: "Les chants",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
        {
			icon: (
				<GameControllerOutline
					color="#60a5fa"
					style={{ width: 60, height: 60 }}
				/>
			),
			title: "Les jeux",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
        {
			icon: (
				<CalculatorOutline
					color="#60a5fa"
					style={{ width: 60, height: 60 }}
				/>
			),
			title: "Les contes",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
        {
			icon: (
				<BarChartOutline
					color="#60a5fa"
					style={{ width: 60, height: 60 }}
				/>
			),
			title: "Les projets",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
        {
			icon: (
				<BulbOutline
					color="#60a5fa"
					style={{ width: 60, height: 60 }}
				/>
			),
			title: "Le vocabulaire",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
        {
			icon: (
				<VideocamOutline
					color="#60a5fa"
					style={{ width: 60, height: 60 }}
				/>
			),
			title: "Les vidéos",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		}
	];
	return (
		<div id="alphabet" className="flex w-full py-10 md:px-[200px] px-8 flex-col gap-16 justify-center items-center">
			{ section !== "main" && <button onClick={() => setSection('main')} className="flex mx-auto text-white bg-blue-400 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg rounded-full mt-12 shadow-md">Retour au menu principal</button>}
			{ section === "main" && <div>
				<div className="flex flex-col w-full items-center">
					<span className="font-semibold text-blue-500">L'alphabet phonétique</span>
					<span className="font-semibold text-slate-700 text-3xl mt-1">
					Contenu de la ressource
					</span>
					<p className="max-w-[400px] text-center mt-4">
					Après avoir créé gratuitement un compte, vous auriez accès aux activités suivantes:
					</p>
				</div>
				<div className="grid grid-cols-1 py-5 gap-4 md:grid-cols-4 lg:grid-cols-6">
					{featuresList.map((feature) => {
						return (
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
								</span>{" "}
							</div>
						);
					})}
				</div>
			</div>}
			{ section === "Rituel" && <Rituel />}
		</div>
	);
};

export default Features;