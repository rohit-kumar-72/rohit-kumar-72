import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import Heading from "../common/Heading";
import { experiences } from '@/data.json'
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
    // console.log(experiences)
    return (
        <div id="experience" className="relative flex size-full items-center justify-center overflow-hidden border bg-background md:shadow-xl">
            <div className="mx-auto w-11/12 md:w-11/12 mt-4 pb-4">
                <Heading text1="Work" text2=" Experience" className={"gap-4 flex items-center"} />
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 gap-x-16 lg:grid-cols-2">

                    {
                        experiences?.map((experience, index) => (
                            <ExperienceCard key={index} experience={experience} />
                        ))
                    }
                    {/* </div> */}
                </div>
            </div>
            <GridPattern
                width={20}
                height={20}
                x={-1}
                y={-1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,white)] ",
                )}
            />
        </div>
    );
}
