"use client"
import { slideInFromTop } from '@/utils'
import {motion} from 'framer-motion'
import Image from 'next/image'

const Encryption = () => {
    return(
        <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
            <div className="absolute w-auto h-auto top-0 z-[10]">
                <motion.div variants={slideInFromTop} className='text-[42px] font-medium text-center text-gray-300'>
                    Performance
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-800 to-pink-500'>
                        {" "}
                        &
                        {" "}
                    </span>
                    Security
                </motion.div>
            </div>
            <div className='flex flex-col items-center justify-center translate-y[-50px] absolute z-[20] w-auto h-auto'>
                <div className='flex flex-col items-center group cursor-pointer w-auto h-auto'>
                    <Image 
                        src="/LockTop.png" 
                        className='w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11'
                        alt='Lock' width={50} height={50} />
                    
                    <Image src="/LockMain.png" alt='Lock Top' width={70} height={70} className='z-10' />
                </div>
                <div className='Welcome-box px-[4px] py-[4px] z-[4px] border my-[20px] border-[#50125b] opacity-[0.9]'>
                    <h1 className='Welcome-text text-[12px]'>
                        Az Encryption
                    </h1>
                </div>
            </div>
            <div className='absolute z-[20] bottom-[10px] px-[5px]'>
                <div className='cursive text-[20px] font-medium text-center text-gray-400'>
                    Secure your data end-to-end with Az Bytes
                </div>
            </div>

            <div className="w-full flex items-start justify-center absolute">
                <video
                loop
                muted
                autoPlay
                playsInline
                preload="false"
                className="w-full h-auto"
                src="/encryption.webm/"
                />
            </div>

        </div>
    )
}


export default Encryption