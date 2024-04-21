import phonics from "../../assets/klgd_lfgx_181115.svg";
const Contact = () => {
	return (
		<div id="home" className="hero z-[1] w-full h-[100vh] grid place-items-center bg-[#141b2b] relative">
			<div className="flex md:flex-row flex-col items-center w-full md:px-[200px] px-8 justify-between md:gap-0 gap-28">
				<div className="flex flex-col gap-3 left-animation w-full">
					<span className="text-blue-400 text-[28px] font-medium">
					Votre plateforme pour apprendre à prononcer le français!
					</span>
					<span className="text-white font-medium md:text-[60px] text-[45px]">
                    Fun With Phonics
					</span>
					<span className="text-white font-medium text-[60px]"></span>
					<span className="text-white leading-7 max-w-[800px] text-justify">
                    Cette plateforme propose des différent parcours afin d'améliorer sa prononciation est de s'entraîner en répétant les virelangues. Cela vous aidera à parler la langue plus rapidement tout en étant certain de prononcer les voyelles correctement. L’apprenant accède à des activités
                    <ul className="list-disc">
                        <li>Des exercices d’écoute / répétition / écoute de son audio et comparaison avec le modèle répété.</li>
                        <li>Des quiz basés sur la perception (par exemple : associer un rythme entendu et un énoncé, cliquer sur une syllabe matérialisée où on entend un son donné).</li>
                    </ul>
					</span>
					<div className="flex items-center gap-7 mt-5">
						<button className="bg-blue-400 px-6 py-3 text-gray-900 font-semibold rounded-full">
                        Commencez ici !
						</button>
					</div>
				</div>
				<img
					src={phonics}
					className="md:w-[53%] w-full right-animation"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Contact;