import { CheckmarkCircleOutline } from "react-ionicons";
import education from "../../assets/1549325147.svg";

const About = () => {
	return (
		<div id="about" className="w-full md:px-[200px] px-8 flex md:flex-row flex-col items-center justify-between py-10 md:gap-0 gap-16 bg-[#ebf8ff]">
			<div
				className="md:w-[700px] md:h-[700px] w-[350px] h-[350px] bg-no-repeat bg-cover relative plane-mask"
				style={{ backgroundImage: `url(${education})` }}
			/>
			<div className="flex flex-col md:w-[48%] w-full md:px-0 px-8">
				<span className="text-[15px] text-blue-600 font-semibold">À propos de nous</span>
				<span className="text-[30px] font-medium text-gray-700 mt-1">
                Nous sommes ici pour vous aider à <br /> améliorer votre prononciation
				</span>
				<p className="max-w-[650px] text-gray-600 leading-7 mt-5">
                Bienvenue sur le site « Fun Phonics ». Ce site s’adresse aux personnes qui veulent apprendre le français ! Dans ces pages, vous trouverez des présentations sonores (de l’alphabet français et de l’alphabet phonétique international) ainsi que des exercices de discrimination et des jeux pour vous aider à appréhender les nouveaux sons et rythmes du français.
				</p>
				<div className="flex flex-col gap-3 mt-5">
					<div className="flex items-center gap-3">
						<CheckmarkCircleOutline color="#60a5fa" />
						<span>Dans ces pages, vous trouverez des présentations sonores.</span>
					</div>
					<div className="flex items-center gap-3">
						<CheckmarkCircleOutline color="#60a5fa" />
						<span>Des exercices de discrimination et des jeux pour vous aider à appréhender les nouveaux sons et rythmes du français.</span>
					</div>
					<div className="flex items-center gap-3">
						<CheckmarkCircleOutline color="#60a5fa" />
						<span>Vous y trouverez différents modules qui présentent les voyelles et les consonnes du français d'un point de vue articulatoire.</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;