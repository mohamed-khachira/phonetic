import { CheckmarkCircleOutline } from "react-ionicons";
import education from "../../assets/1549325147.svg";

import ameni from "../../assets/ameni.jpeg";
import eya from "../../assets/eya.jpeg";

const About = () => {
	return (
		<div id="about" className="w-full md:px-[200px] px-8 flex md:flex-row flex-col items-center justify-between py-10 md:gap-0 gap-16 bg-[#ebf8ff]">
			<div
				className="md:w-[700px]  w-[350px] h-[350px] bg-no-repeat bg-cover relative plane-mask"
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
						<span>Des exercices d’écoute / répétition / écoute de son audio et comparaison avec le modèle répété.</span>
					</div>
					<div className="flex items-center gap-3">
						<CheckmarkCircleOutline color="#60a5fa" />
						<span>Vous y trouverez différents modules qui présentent les voyelles et les consonnes du français d'un point de vue articulatoire.</span>
					</div>
					<div className="flex items-center gap-3">
						<CheckmarkCircleOutline color="#60a5fa" />
						<span>Des quiz basés sur la perception (par exemple : associer un rythme entendu et un énoncé, cliquer sur une syllabe matérialisée où on entend un son donné).</span>
					</div>
				</div>
			</div>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{width: '500px'}}>
            <div className="mb-12">
                <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 ">Notre équipe</h2>
            </div>
				<div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
						<div className="block group md:col-span-2 lg:col-span-1 ">
							<div className="relative mb-6">
								<img src={ameni} alt="Ameni khchira"
									className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600" />
							</div>
							<h4
								className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
								Amani Khchira</h4>
						</div>
						<div className="block group md:col-span-2 lg:col-span-1 ">
							<div className="relative mb-6">
								<img src={eya} alt="Eya Larayedh"
									className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600" />
							</div>
							<h4
								className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
								Eya Larayedh</h4>
						</div>
				</div>
        	</div>
		</div>
	);
};

export default About;