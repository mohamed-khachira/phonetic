import { useState } from "react";
import SongPage from "./SongPage/index.tsx";
import AlphabetPage, { AlphabetType } from "./AlphabetPage/index.tsx";
import Pagination from "../Pagination/index.tsx";

import a from "../../assets/alphabet/letter-a.png";
import aSon from "../../assets/alphabet_audio/A.mp3";
import aSonExample from "../../assets/alphabet_audio/360_vignette_a1_a_0.mp3";

const Alphabet = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentAlphabet, setCurrentAlphabet] = useState<AlphabetType>({ id: 'a', img: a , prononciation: aSon, exemple: aSonExample, aExample: 'Adam', phonetique: 'a'});

    const slidePerPage = 1;

    const indexOfLastPost = currentPage * slidePerPage;
    const indexOfFirstPost = indexOfLastPost - slidePerPage;

    const handleDecrement = () => {
        setCurrentPage(currentPage - 1);
    }
    const handleIncrement = () => {
        setCurrentPage(currentPage + 1);
    }
    const changeAlphabet = (alphabet: AlphabetType) => {
        setCurrentAlphabet(alphabet);
        setCurrentPage(currentPage + 1);
    }
    const pages = [
        <SongPage key={0} changeAlphabet={changeAlphabet}/>,
        <AlphabetPage key={1} alphabet={currentAlphabet}/>
    ]
    const currentPages = pages.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <>
        {currentPages.map((data) => (
            data
        ))}
        <Pagination length={pages.length} currentPage={currentPage} handleDecrement={handleDecrement} handleIncrement={handleIncrement}/>
        </>
    );
};

export default Alphabet;