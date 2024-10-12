"use client"
import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data, slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils'
import { SparklesIcon } from '@heroicons/react/24/solid'
import {motion} from 'framer-motion'
import SkillProvider from './SkillProvider'



const MySkillText = () => {
    return(
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <motion.div variants={slideInFromTop} className='Welcome-box py-[8px] px-[7px] border border-[#651c86] opacity-[0.9]'>
                <SparklesIcon className='text-[#f59cff] mr-[10px] h-5 w-5' />
                <h1 className='text-[#fff]'>Nextjs 14 portfolio</h1>
            </motion.div>
            <motion.div variants={slideInFromLeft(0.5)} className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'>
                Making modern Web, Mobile Apps.
            </motion.div>
            <motion.div variants={slideInFromRight(0.5)} className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'>
                Project delivered on on time, never miss deadline.
            </motion.div>
        </div>
    )
}


const MySkills = () => {
    return(
        <section id="skills" style={{transform: "scale(0.9)"}} className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20">
            <MySkillText/>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {
                    Skill_data.map((item, index) => (
                        <SkillProvider key={index} src={item.Image} width={item.width} height={item.height} index={index} />
                    ))
                }
            </div>

            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {
                    Frontend_skill.map((item, index) => (
                        <SkillProvider key={index} src={item.Image} width={item.width} height={item.height} index={index} />
                    ))
                }
            </div>

            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {
                    Backend_skill.map((item, index) => (
                        <SkillProvider key={index} src={item.Image} width={item.width} height={item.height} index={index} />
                    ))
                }
            </div>

            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {
                    Full_stack.map((item, index) => (
                        <SkillProvider key={index} src={item.Image} width={item.width} height={item.height} index={index} />
                    ))
                }
            </div>

            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {
                    Other_skill.map((item, index) => (
                        <SkillProvider key={index} src={item.Image} width={item.width} height={item.height} index={index} />
                    ))
                }
            </div>

            <div className="w-full h-full absolute">
                <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
                    <video src='/cards-video.webm' className='w-full h-auto' preload='false' playsInline loop muted autoPlay />
                </div>
            </div>

        </section>
    )
}


export default MySkills