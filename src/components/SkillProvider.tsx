import {motion} from 'framer-motion'
import Image from 'next/image';
import { useInView } from "react-intersection-observer";

interface Props{
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillProvider = ({ src, width, height, index }: Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVarients = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3

    return(
        <motion.div ref={ref} initial="hidden" custom={index} transition={{delay: index * animationDelay}} variants={imageVarients} animate={inView ? "visible" : "hidden"}>
            <Image src={src} width={width} height={height} alt='Az Bytes Skills' />
        </motion.div>
    )
}

export default SkillProvider