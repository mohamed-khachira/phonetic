import { useState } from 'react';
import { CloseOutline, ReorderThreeOutline } from "react-ionicons";
import { HashLink } from 'react-router-hash-link';
import {
    useLocation
  } from "react-router-dom";

const Navbar = () => {
    let [open, setOpen] = useState(false);
    let location = useLocation();
	const navLinks = [
		{ title: "Accueil", element: "#home",path: "/", active: true },
		{ title: "L'alphabet phonétique", element: "#alphabet", path: "/phonics", active: false },
		{ title: "À Propos", element: "#about", path: "/about", active: false },
		{ title: "Contactez-nous", element: "#contact", path: "/contact", active: false }
	];
    const handleClick = () => {
        setOpen(!open)
      };
	return (
		<div className='shadow-md w-full z-30 sticky top-0 left-0 flex md:flex-row flex-col items-center w-full md:px-[200px] px-8 justify-between md:gap-0 gap-28 bg-[#141b2b]'>
           <div className='md:flex items-center w-full justify-between py-3'>
            {/* logo section */}
            <div className='text-white font-bold text-2xl cursor-pointer flex items-center gap-1'>
            <img src="/phonetic/abc.svg" height="50px"
                    width="50px" alt="home" />
                <span>Fun Phonics</span>
            </div>
            {/* Menu icon */}
            <div className='text-white absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <CloseOutline
                    color={'#00000'} 
                    title={'close'}
                    height="50px"
                    width="50px"
                    onClick={handleClick}
                  /> : <ReorderThreeOutline
                  color={'#00000'} 
                  title={'open'}
                  height="50px"
                  width="50px"
                  onClick={handleClick}
                />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 bg-[#141B2B]' : 'top-[-490px]'}`}>
                {
                    navLinks.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link.title}>
                        {/* <a href={link.path} className={`duration-500 ${link.active ? "text-blue-400" : "text-white"}`}>{link.title}</a>*/}
                        <HashLink className={`${location.hash === link.element ? link.active = true : link.active = false} duration-500 ${link.active ? "text-blue-400" : "text-white"}`} smooth to={`/${link.element}`}>
            	        {link.title}
                        </HashLink>
                    </li>))
                }
                <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>S'enregistrer</button>
            </ul>
            {/* button */}
           </div>
        </div>
	);
};

export default Navbar;