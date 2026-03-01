
import React from 'react';
import {  FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className=' bg-black text-white'>
       <div className='w-[90%] mx-auto'>
        <div className='flex justify-between p-2 text-sm'>
        <div className='flex gap-2 items-center ml-2'>
        <img src='/logo.png' alt='' className='w-5 h-5'></img>
    <a className=" font-semibold">HERO.IO</a>
        </div>
        <div >
        <h3>Social links</h3>
        <div className="flex gap-4 text-sm mt-2">
            <FaLinkedin className="cursor-pointer hover:text-blue-600" />
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaXTwitter className="cursor-pointer hover:text-black" />
       </div>
        </div>
        </div>

            <footer className="footer sm:footer-horizontal footer-center p-2 text-xs border-t border-gray-50">
                    <aside>
                        <p >Copyright © {new Date().getFullYear()} - All right reserved</p>
                    </aside>
            </footer>
       </div>
        </div>
    );
};

export default Footer;