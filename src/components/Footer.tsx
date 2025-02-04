import { RxDiscordLogo, RxGithubLogo } from 'react-icons/rx'
import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return(
        <div className="w-full h-full bg-transparent text-gray-300 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">

                <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>
                    <div className='min-w[200px] h-auto flex flex-col items-center justify-start'>
                        <div className="font-bold text-[16px]">
                            Community
                        </div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube/>
                            <span className='text-[15px] ml-[6px]'>Youtube</span>
                        </p>

                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo/>
                            <span className='text-[15px] ml-[6px]'>Github</span>
                        </p>

                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo/>
                            <span className='text-[15px] ml-[6px]'>Discord</span>
                        </p>
                    </div>

                    <div className='min-w[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>Social Media</div>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <FaYoutube/>
                            <span className='text-[15px] ml-[7px]'>
                                Instagram
                            </span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <FaYoutube/>
                            <span className='text-[15px] ml-[7px]'>
                                Twitter
                            </span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <FaYoutube/>
                            <span className='text-[15px] ml-[7px]'>
                                Linkedin
                            </span>
                        </p>
                    </div>
                    <div className='min-w[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>About</div>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <span className='text-[15px] ml-[8px]'>Become a Member</span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <span className='text-[15px] ml-[8px]'>Learn Coding</span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <span className='text-[15px] ml-[8px]'>azbytes@gmail.com</span>
                        </p>
                    </div>
                </div>
                

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Az Bytes 2024. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer