"use client"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils';
import { SparklesIcon } from '@heroicons/react/24/solid';
import {motion} from 'framer-motion';
import Image from 'next/image';

const BannerContent = () => {
    return(
        <motion.div initial="hidden" animate="visible" className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
                <motion.div variants={slideInFromTop} className='Welcome-box py-[8px] px-[7px] border border-[#731c82] opacity-[0.9]'>
                    <SparklesIcon className='text-[#83197e] mar-[10px] h-5 w-5' />
                    <h1 className='Welcome-text text-[13px] text-[#e69ff6]'>The Developer Portfolio</h1>
                </motion.div>

                <motion.div variants={slideInFromLeft(0.5)} className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
                    <span>
                        Providing
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-400'>
                            {" "}
                            the best{" "}
                        </span>
                        project experience
                    </span>
                </motion.div>
                <motion.p variants={slideInFromLeft(0.8)} className='text-lg text-gray-400 my-5 max-w-[600px]'>
                    I&apos;m a full-stack Software Engineer with experience in Web, Mobile and Software Development. Please check out my portfolio and skills.
                </motion.p>
                <motion.a variants={slideInFromLeft(1)} className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'>
                    View More
                </motion.a>
            </div>
            <motion.div variants={slideInFromRight(0.8)} className='w-full h-full flex flex-col gap-5 justify-center m-auto text-start'>
                <Image src="/mainIconsdark.svg" alt='Work' height={650} width={650} />
            </motion.div>
        </motion.div>
    )
}


const MainBanner = () => {
    return(
        <div className="relative flex flex-col h-full w-full" id="aboutUs">
            <video 
                muted
                loop
                className='absolute h-full w-full top-[65px] object-cover'
                autoPlay >
                    <source src="/main-video.mp4" type="video/mp4"/>
            </video>
            <BannerContent/>
        </div>
    )
}

export default MainBanner;