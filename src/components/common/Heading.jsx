import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from '@/lib/utils';

function Heading({ text1 = "", text2 = "", className }) {
    const headingRef = useRef();

    // const projectref = useRef(Array.from({ length: 3 }, () => React.createRef()));

    useGSAP(() => {
        // const tl = gsap.timeline()
        // tl.from(divref.current, {
        //     x: -200,
        //     duration: 2,
        //     stagger: 0.5
        // })
        const t1 = gsap.timeline()
        t1.from(headingRef.current, {
            width: 0,
            opacity: 0,
            delay: 1,
            duration: 0.5
        })
        t1.from(headingRef.current, {
            height: 0,
            duration: 1.5,
        })
    })

    if (text1 === "" && text2 === "") {
        return <></>
    }

    return (
        <div className="overflow-hidden flex justify-center items-center py-4">
            <div ref={headingRef} className="overflow-hidden border-b-2 border-orng">
                <h1 className={cn("heading py-2 px-1 md:py-6", className)}>
                    {text1} <span className="text-lgray heading">{text2}</span>
                </h1>
            </div>
        </div>
    )
}

export default Heading