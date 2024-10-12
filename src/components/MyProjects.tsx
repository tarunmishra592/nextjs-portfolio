import Image from "next/image";


interface Props{
    src: string;
    title: string;
    desc: string;
}

const ProjectCard = ({ src, title, desc }: Props) => {
    return(
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#52135d]">
            <Image src={src} alt={title} width={1000} height={1000} className="w-full object-contain" />
            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-400">{desc}</p>
            </div>
        </div>
    )
}


const MyProjects = () => {
    return(
        <div className="flex flex-col items-center justify-center py-20" id="myProjects">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-pink-700 mb-10">My Projects</h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard 
                    src="/NextWebsite.png" 
                    title="Modern Next.js 14 Project"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                     />
                
                <ProjectCard 
                    src="/CardImage.png" 
                    title="Modern Next.js 14 Project"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                     />

                <ProjectCard 
                    src="/azbytes-portfolio.png" 
                    title="Modern Next.js 14 Project"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                     />
            </div>
        </div>
    )
}


export default MyProjects