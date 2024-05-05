import React from 'react'
import { ChevronBackOutline, ChevronForwardOutline } from "react-ionicons";

const Pagination = ({ handleDecrement, handleIncrement, currentPage, length }) => {
    return (
        <div className="flex justify-between w-full">
            <button disabled={currentPage === 1} onClick={handleDecrement} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l text-lg flex">
                <ChevronBackOutline
                    color={'#00000'} 
                    height="25px"
                    width="25px"
                />Précédent
            </button>
            <button disabled={currentPage === length} onClick={handleIncrement} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r text-lg flex">
            Suivant
            <ChevronForwardOutline
                color={'#00000'} 
                height="25px"
                width="25px"
            />
            </button>
        </div>
    )
}
export default Pagination