import { useState } from "react";
import FirstPage from "./FirstPage/index.tsx";
import SecondPage from "./SecondPage/index.tsx";
import Pagination from "../Pagination/index.tsx";

const Rituel = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [slidePerPage, SetSlidePerPage] = useState(1);
    const pages = [
        <FirstPage key={0}/>,
        <SecondPage key={1}/>
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

export default Rituel;