import printemps from "../../../assets/spring.png";
import summer from "../../../assets/summer.png";
import Autumn from "../../../assets/Autumn.png";
import winter from "../../../assets/winter.png";

import sun from "../../../assets/sun.png";
import good from "../../../assets/good.png";
import cold from "../../../assets/cold.png";

import { Checkmark, AlertCircle} from "react-ionicons";
import { useState, ChangeEvent} from "react";
import Dropdown from "../../Dropdown/index.tsx";

/*const QUIZZES = [
    {question: "C’est :", answerOptions: [
        { "answer": "Le printemps", img: printemps},
        { "answer": "L'été", img: summer},
        { "answer": "L’automne", img: Autumn,"isCorrect": true },
        { "answer": "L’hiver", img: winter}
      ]},
    {question: "Il fait :", answerOptions: [
        { "answer": "Chaud", img: sun},
        { "answer": "Beau", img: good},
        { "answer": "Froid", img:cold, "isCorrect": true },
      ]},
]*/

const FirstPage = () => {
    const [correctDate, setCorrectDate] = useState<boolean | null>(null)
    const [selectedDay, setSelectedDay] = useState<string | undefined>(undefined)
    const [selectedMonth, setSelectedMonth] = useState<string | undefined>(undefined)
    const [season, setSeason] = useState("")
    const [weather, setWeather] = useState("")
    const [correctSeason, setCorrectSeason] = useState<boolean | null>(null)
    const [correctWeather, setcorrectWeather] = useState<boolean | null>(null)

    const daysOfTheWeek = [
        {id: '1', name: 'Lundi'},
        {id: '2', name: 'Mardi'},
        {id: '3', name: 'Mercredi'},
        {id: '4', name: 'Jeudi'},
        {id: '5', name: 'Vendredi'},
        {id: '6', name: 'Samedi'},
        {id: '0', name: 'Dimanche'}
    ]
    const months = [
        {id: '1', name: 'Janvier'},
        {id: '2', name: 'Février'},
        {id: '3', name: 'Mars'},
        {id: '4', name: 'Avril'},
        {id: '5', name: 'Mai'},
        {id: '6', name: 'Juin'},
        {id: '7', name: 'Juillet'},
        {id: '8', name: 'Août'},
        {id: '9', name: 'Septembre'},
        {id: '10', name: 'Octobre'},
        {id: '11', name: 'Novembre'},
        {id: '12', name: 'Décembre'}
    ]

    const handleChangeDay = (id: string) => {
        const d = new Date();
        let day = d.getDay();
        setCorrectDate(parseInt(id) === day)
        setSelectedDay(id)
    };
    const handleChangeMonth = (id: string) => {
        const d = new Date();
        let month = d.getMonth() + 1;
        setCorrectDate(parseInt(id) === month)
        setSelectedMonth(id)
    };
    const handleChangeYear = (e: ChangeEvent<HTMLInputElement>) => {
        const d = new Date();
        let year = d.getFullYear();
        setCorrectDate(parseInt(e.target.value) === year)
    };
    const onSeasonChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSeason(e.target.value)
        setCorrectSeason(e.target.value === "summer")
    }
    const onWeatherChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWeather(e.target.value)
        setcorrectWeather(e.target.value === "sun");
    }
    return (
        <>
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
                <span>Aujourd'hui, c'est:</span>
                {/*<input className="ml-2 border border-slate-300" onChange={handleChangeDay} type="number" min="1" max="31" placeholder="jj"/>*/}
                <Dropdown id="jj" title="Sélectionnez le jour" data={daysOfTheWeek} onSelect={handleChangeDay} selectedId={selectedDay} style="bg-white-800 text-black border-solid border-2 border border-slate-300"/>
                {/*<<input className="border border-slate-300" onChange={handleChangeMonth} type="number" min="1" max="12" placeholder="mm"/>*/}
                <Dropdown id="mm" title="Sélectionnez le mois" data={months} onSelect={handleChangeMonth} selectedId={selectedMonth} style="bg-white-800 text-black border-solid border-2 border border-slate-300"/>
                <input className="flex justify-between items-center gap-5 rounded w-full py-2 px-4 bg-white-800 text-black border-solid border-2 border border-slate-300" onChange={handleChangeYear} type="number" min="2000" max="2030" placeholder="Tapez l'année"/>
                {/*<<Dropdown id="aaaa" title="sélectionner l'année" data={[{id: '1', name: 'test'}]} onSelect={handleSelect} style="bg-white-800 text-black border-solid border-2 border border-slate-300"/>*/}
                {correctDate === true && <Checkmark
                    color={'#008000'}
                    beat
                    height="40px"
                    width="40px"
                />}
                {correctDate === false && <AlertCircle
                    color={'#FF0000'}
                    beat
                    height="40px"
                    width="40px"
                />}
            </div>
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10">
                <div className="">C'est:</div>
                <div className="shadow-md rounded overflow-hidden shadow-lg flex flex-col">
                    <img alt="Printemps" src={printemps}/>
                    <label className="text-center">
                        <input type="radio" value="printemps" checked={season === "printemps"} onChange={onSeasonChange} /> Le printemps
                    </label>
                </div>
                <div className="shadow-md rounded overflow-hidden shadow-lg flex flex-col">
                    <img alt="Printemps" src={summer}/>
                    <label className="text-center">
                        <input type="radio" value="summer" checked={season === "summer"} onChange={onSeasonChange} /> L'été
                    </label>
                </div>
                <div className="shadow-md rounded overflow-hidden shadow-lg flex flex-col">
                    <img alt="Printemps" src={Autumn}/>
                    <label className="text-center">
                        <input type="radio" value="Autumn" checked={season === "Autumn"} onChange={onSeasonChange} /> L’automne
                    </label>
                </div>
                <div className="shadow-md rounded overflow-hidden shadow-lg flex flex-col">
                    <img alt="Printemps" src={winter}/>
                    <label className="text-center">
                        <input type="radio" value="winter" checked={season === "winter"} onChange={onSeasonChange} /> L’hiver
                    </label>
                </div>
                {correctSeason === true && <Checkmark
                    color={'#008000'}
                    beat
                    height="40px"
                    width="40px"
                />}
                {correctSeason === false && <AlertCircle
                    color={'#FF0000'}
                    beat
                    height="40px"
                    width="40px"
                />}
            </div>
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10">
                <div className="">Il fait:</div>
                <div className="shadow-md rounded overflow-hidden shadow-lg flex flex-col">
                    <img alt="Printemps" src={sun}/>
                    <label className="text-center">
                        <input type="radio" value="sun" checked={weather === "sun"} onChange={onWeatherChange} /> Chaud
                    </label>
                </div>
                <div className="shadow-md rounded overflow-hidden shadow-lg flex flex-col">
                    <img alt="Printemps" src={good}/>
                    <label className="text-center">
                        <input type="radio" value="good" checked={weather === "good"} onChange={onWeatherChange} /> Beau
                    </label>
                </div>
                <div className="shadow-md rounded overflow-hidden shadow-lg flex flex-col">
                    <img alt="Printemps" src={cold}/>
                    <label className="text-center">
                        <input type="radio" value="cold" checked={weather === "cold"} onChange={onWeatherChange} /> Froid
                    </label>
                </div>
                {correctWeather === true && <Checkmark
                    color={'#008000'}
                    beat
                    height="40px"
                    width="40px"
                />}
                {correctWeather === false && <AlertCircle
                    color={'#FF0000'}
                    beat
                    height="40px"
                    width="40px"
                />}
            </div>
        </>
    );
};

export default FirstPage;