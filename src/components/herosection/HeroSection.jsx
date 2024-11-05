import { FileText, Mail } from 'lucide-react'
import GradualSpacing from '../ui/gradual-spacing'
import ShinyButton from '../ui/shiny-button'
import ShimmerButton from '../ui/shimmer-button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { gmail } from '@/data.json'

function HeroSection() {
    // const allicons = useRef([])
    // console.log(allicons)
    // useGSAP(() => {
    //     gsap.from(".sicon", {
    //         duration: 0.5,
    //         stagger: 0.2,
    //         y: -50,

    //     })
    // })

    const handleEmailClick = () => {
        window.location.href = `mailto:${gmail}?subject=Internship/Job Offer`;
    };

    return (
        <div className='flex justify-center items-center mt-20'>
            <div className="relative flex flex-col justify-center items-center gap-1 md:pb-20">
                <h1 className='title max-xl:text-6xl max-lg:text-5xl max-md:text-3xl'>
                    Hi, I'm <span className="highlight">Rohit kumar</span>
                </h1>
                <GradualSpacing
                    className='xl:text-4xl md:text-2xl max-md:tracking-wider subheading sm:text-lg font-bold text-lgray tracking-tight'
                    text="Passionate for Software Engineering"
                />
                <p className='para -mt-4 font-body leading-5 font-medium text-sm '>
                    I am a third-year bachelor's degree student and an enthusiastic software developer passionate about crafting innovative solutions and exceptional user experiences. My previous work at a company allowed me to gain valuable insights and hands-on experience. I am seeking exciting opportunities that will allow me to further develop my abilities and contribute to impactful projects.
                </p>
                <div className='flex md:gap-10 items-center justify-between gap-4'>
                    <div onClick={handleEmailClick}>
                        <ShinyButton
                            className={'bg-orng text-white font-mono md:w-[163px] border border-orng'}
                        >
                            <p className='flex gap-2 items-center justify-center'>
                                <Mail className='text-white size-5' />
                                <span>Get in Touch</span>
                            </p>
                        </ShinyButton>
                    </div>
                    <ShimmerButton background={'#fff'} shimmerColor={'#FF6500'} className={'md:w-[163px] shadow-md dark:hover:shadow-[#fff] dark:shadow-sm transition-all ease-in-out duration-300 border border-orng'}>
                        <p className='flex gap-2 items-center justify-center text-black font-mono'>
                            <FileText className='text-black size-5' />
                            <span className='text-sm font-semibold'>Resume</span>
                        </p>
                    </ShimmerButton>
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}

export default HeroSection