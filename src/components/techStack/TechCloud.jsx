import IconCloud from "@/components/ui/icon-cloud";
import { slugs } from "@/data.json"

export function TechCloud() {
    return (
        <div className="flex max-md:flex-col-reverse gap-4 max-md:items-center justify-between">
            <div className="flex-1 dark:border-white/30 dark:bg-gradient-to-b dark:from-white/20 dark:to-white/5 backdrop-blur-xl border-white/20 p-6 shadow-lg relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border lg:px-20 lg:pb-20 lg:pt-8">
                <IconCloud iconSlugs={slugs} />
            </div>
            <div className="flex-1">
                <div className="lg:w-3/5 lg:mx-auto space-y-4">
                    <div className="flex justify-between gap-4">
                        <div>
                            <h1 className='highlight text-xl md:text-2xl font-semibold font-heading'>Devemopment</h1>
                            <ul className="font-mono list-disc translate-x-6">
                                <li>MERN</li>
                                <li>NextJs</li>
                                <li>Django</li>
                                <li>Html</li>
                                <li>Css</li>
                                <li>Tailwind</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='highlight text-xl md:text-2xl font-semibold font-heading'>Languages</h1>
                            <ul className="font-mono list-disc translate-x-6">
                                <li>C++</li>
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div>
                            <h1 className='highlight text-xl md:text-2xl font-semibold font-heading'>Tools/Services</h1>
                            <ul className="font-mono list-disc translate-x-6">
                                <li>Github</li>
                                <li>Vercel</li>
                                <li>VScode</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
