import phonics from "../../assets/klgd_lfgx_181115.svg";
import { CheckmarkCircle } from "react-ionicons";
const Contact = () => {
	return (
	<div id="home" className="relative isolate bg-[#ebf8ff]">
		<div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-20">
			<div className="max-w-2xl mx-auto lg:mx-0 lg:flex-auto">
				<h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900">
					Votre plateforme pour apprendre à prononcer le français!
				</h1>
				<p className="mt-6 text-lg leading-8 text-gray-600">
				Cette plateforme propose des différent parcours afin d'améliorer sa prononciation est de s'entraîner en répétant les virelangues. Cela vous aidera à parler la langue plus rapidement tout en étant certain de prononcer les voyelles correctement.
				</p>
				<ul className="list-none px-2 py-3">
					<li className="flex items-center">
						<CheckmarkCircle
						color={'#008000'}
						height="30px"
						width="30px"
						/><span className="pl-1">Apprendre l'alphabet en s'amusant</span>
					</li>
					<li className="flex items-center">
						<CheckmarkCircle
						color={'#008000'}
						height="30px"
						width="30px"
						/><span className="pl-1">Écouter et répéter l'alphabet</span>
					</li>
					<li className="flex items-center">
						<CheckmarkCircle
						color={'#008000'}
						height="30px"
						width="30px"
						/><span className="pl-1">Apprendre à nommer les lettres de l'alphabet</span>
					</li>
				</ul>
				<div className="max-w-md mt-8 lg:mt-0">
                <div className="sm:flex items-center">
                    <input name="EMAIL" type="email" placeholder="Entrez votre e-mail" aria-label="Email address" className="w-full px-5 py-3 text-base leading-6 transition duration-150 ease-in-out border-2 rounded-md appearance-none focus:outline-none sm:max-w-xs border-gray-200 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 bg-white"/>
                    <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <button type="submit" className="block px-5 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
						S&#39;abonner 
                </button>
                    </div>
                </div>

    </div>
			</div>
			<div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
				<img src={phonics} alt="mobilescreen" />
			</div>
		</div>
    </div>
	);
};

export default Contact;