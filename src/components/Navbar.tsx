"use client"
import { Socials } from "@/utils"
import Image from "next/image"


const Navbar = () => {
    return(
        <div className="w-full h-[65px] fixed top-0 shadow-[#89448d] bg-[#000] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a href="#aboutUs" className="h-auto w-auto flex flex-row items-center">
                    <span className="font-bold ml-[10px] hidden, md:block  text-gray-300">
                        Az Bytes
                    </span>
                </a>

                <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#6a1a7a] bg-[#000] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-300">
                        <a href="#aboutUs" className="cursor-pointer">About Us</a>
                        <a href="#skills" className="cursor-pointer">Skills</a>
                        <a href="#myProjects" className="cursor-pointer">Portfolio</a>
                    </div>
                </div>

                <div className="flex flex-row gap-5">
                    {Socials.map((item: any) => (
                        <Image src={item.src} alt={item.alt} key={item.key} width={24} height={24} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar