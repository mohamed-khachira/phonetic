import { useState } from "react";
import SongPage from "./SongPage/index.tsx";
import AlphabetPage from "./AlphabetPage/index.tsx";
import Pagination from "../Pagination/index.tsx";

const Alphabet = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const slidePerPage = 1;
    const pages = [
        <SongPage key={0}/>,
        <AlphabetPage key={1}/>
    ]

    const indexOfLastPost = currentPage * slidePerPage;
    const indexOfFirstPost = indexOfLastPost - slidePerPage;
    const currentPages = pages.slice(indexOfFirstPost, indexOfLastPost);

    const handleDecrement = () => {
        setCurrentPage(currentPage - 1);
    }
    const handleIncrement = () => {
        setCurrentPage(currentPage + 1);
    }
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