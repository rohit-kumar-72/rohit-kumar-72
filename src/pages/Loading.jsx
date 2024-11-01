import BlurIn from "@/components/ui/blur-in";
import Meteors from "@/components/ui/meteors";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Loading({ loadingRef }) {
    const hi = useRef();
    const intro = useRef();
    useGSAP(() => {
        gsap.from(hi.current, {
            delay: 3,
            y: 20
        })
    })
    return (
        <div ref={loadingRef} className="max-w-[100vw] relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
            <Meteors number={30} />
            <div ref={hi}>
                <BlurIn
                    word={"Hi!"}
                    className="font-heading pointer-events-none whitespace-pre-wrap text-white text-center text-6xl md:text-8xl font-bold leading-tight dark:text-white"
                    delay={1.5}
                />
            </div>
            <div ref={intro}>
                <BlurIn
                    word={"I'm Rohit"}
                    className="font-heading capitalize leading-tight font-bold pointer-events-none whitespace-pre-wrap text-white text-center text-6xl md:text-8xl dark:text-white"
                    delay={3}
                />
            </div>

        </div>
    );
}

export default Loading