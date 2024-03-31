import logo from "../../../assets/img/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import '../../../App.css'
import { IoIosArrowForward } from "react-icons/io";



export const Navbar = () => {

    return (
        <section className="mt-6">
            <div className="flex justify-between items-center 2xl:px-80 xl:px-44">
                <div>
                    <a href="#">
                        <img className="h-14" src={logo} alt="Web site logo" />
                    </a>
                </div>
                <div className="flex justify-around w-3/6 items-center">
                    <div className="border-l-2 pl-12 text-center">
                        <h3 className="text-[#2578B4] uppercase font-bold">Las Vegas, NV</h3>
                        <p className="font-bold text-gray-500">702-779-3397</p>
                    </div>
                    <div className="border-l-2 px-12 text-center">
                        <h3 className="text-[#2578B4] uppercase font-bold ">Knoxville, TN</h3>
                        <p className="font-bold text-gray-500">865-353-8880</p>
                    </div>
                    <div className="flex items-center">
                    <a href="#"><FaFacebookF className="mx-3 text-[#2578B4] cursor-pointer text-xl" /></a>
                    <a href="#"><FaInstagram className="mx-3 text-[#2578B4]  cursor-pointer text-2xl"/></a>
                    </div>
                </div>
                <div className="relative">
                    <input placeholder="Search Inventory..." className=" w-60 px-1 focus:outline-none border border-[#2578B4] py-2 rounded-md" type="text" />
                    <button className="bg-[#2578B4] py-2 border border-[#2578B4] absolute right-0 px-2 rounded-r-md text-[white] font-bold" type="submit">GO</button>
                </div>
            </div>
            <div className="bg-[#DDDDDD] h-14 px-80 flex items-center justify-between mt-4">
                <div className="flex items-center">
                    <IoLocation className="text-[#2578B4]"/>
                <p className="px-2 text-gray-500 font-bold">Map & Hours</p>
                </div>
                <div className="uppercase font-bold subNav">
                    <a href="#">Sales</a>
                    <a href="#">Rentals</a>
                    <a href="#">Brands</a>
                    <a href="#">Financing</a>
                    <a href="#">News</a>
                    <a href="#">Gallery</a>
                    <a href="#">Contact</a>
                </div>
                <div className="bg-[#2578B4] h-full flex items-center px-10 cursor-pointer">
                    <button className="bg-[#2578B4] text-white px-2">BOOK NOW</button>
                    <IoIosArrowForward className="text-white" />
                </div>
            </div>
        </section>
    )
}
