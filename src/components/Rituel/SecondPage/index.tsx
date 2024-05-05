import AnalogClock from "../../AnalogClock/index.tsx";
import count from "../../../assets/count.svg";

const SecondPage = () => {
    return (
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
            <div className="h-full">
                <span className="font-medium">Quelle est l’heure ?</span>
                <AnalogClock />
            </div>
            <div>
                <span className="font-medium">Je compte à 10 : </span>
                <img src={count} alt="mobilescreen" />
            </div>
        </div>
    );
};

export default SecondPage;