import printemps from "../../assets/spring.png";
import summer from "../../assets/summer.png";
import Autumn from "../../assets/Autumn.png";
import winter from "../../assets/winter.png";

import sun from "../../assets/sun.png";
import good from "../../assets/good.png";
import cold from "../../assets/cold.png";

import { Checkmark, AlertCircle} from "react-ionicons";
import { useState } from "react";

const QUIZZES = [
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
]

const Rituel = () => {
    const [correctDate, setCorrectDate] = useState(null)

    const handleChangeDay = (e) => {
        const d = new Date();
        let day = d.getDate();
        setCorrectDate(parseInt(e.target.value) === day)
    };
    const handleChangeMonth = (e) => {
        const d = new Date();
        let month = d.getMonth() + 1;
        console.log(month, e.target.value);
        setCorrectDate(parseInt(e.target.value) === month)
    };
    const handleChangeYear = (e) => {
        const d = new Date();
        let year = d.getFullYear();
        setCorrectDate(parseInt(e.target.value) === year)
    };
    return (
        <>
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-7">
                <span>Aujourd'hui, c'est:</span>
                <input className="ml-2 border border-slate-300" onChange={handleChangeDay} type="number" min="1" max="31" placeholder="jj"/>/
                <input className="border border-slate-300" onChange={handleChangeMonth} type="number" min="1" max="12" placeholder="mm"/>/
                <input className="border border-slate-300" onChange={handleChangeYear} type="number" min="2000" max="2030" placeholder="aaaa"/>
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
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
                <div className="">C'est:</div>
                <div className="shadow-md rounded overflow-hidden shadow-lg flex flex-col">
                    <img alt="Printemps" src={printemps}/>
                    <label className="text-center">
                        <input type="radio" checked /> Le printemps
                    </label>
                </div>
                <div className="shadow-md rounded overflow-hidden shadow-lg flex flex-col">
                    <img alt="Printemps" src={summer}/>
                    <label className="text-center">
                        <input type="radio" checked /> L'été
                    </label>
                </div>
                <div className="shadow-md rounded overflow-hidden shadow-lg flex flex-col">
                    <img alt="Printemps" src={Autumn}/>
                    <label className="text-center">
                        <input type="radio" checked /> L’automne
                    </label>
                </div>
                <div className="shadow-md rounded overflow-hidden shadow-lg flex flex-col">
                    <img alt="Printemps" src={winter}/>
                    <label className="text-center">
                        <input type="radio" checked /> L’hiver
                    </label>
                </div>
            </div>
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
                <div className="">Il fait:</div>
                <div className="shadow-md rounded overflow-hidden shadow-lg flex flex-col">
                    <img alt="Printemps" src={sun}/>
                    <label className="text-center">
                        <input type="radio" checked /> Chaud
                    </label>
                </div>
                <div className="shadow-md rounded overflow-hidden shadow-lg flex flex-col">
                    <img alt="Printemps" src={good}/>
                    <label className="text-center">
                        <input type="radio" checked /> Beau
                    </label>
                </div>
                <div className="shadow-md rounded overflow-hidden shadow-lg flex flex-col">
                    <img alt="Printemps" src={cold}/>
                    <label className="text-center">
                        <input type="radio" checked /> Froid
                    </label>
                </div>
            </div>
        </>
    );
};

export default Rituel;