import React from 'react'
import Shadow from '../common/Shadow'
import TextChip from '../common/TextChip'
import JsonDisplay from '../common/JsonDisplay'
import { Github, Link } from 'lucide-react'

function Project({ github, url, name, content, image, techStack, credentials, isreverse }) {
    return (
        <div className={`flex flex-col lg:flex-row items-center justify-between ${isreverse && "lg:flex-row-reverse"}`}>
            <div className={`flex-1 relative lg:p-4 py-4`}>
                <div className={`mx-auto lg:w-4/5 relative z-10 hover:shadow-sm hover:shadow-[#00BFFF] transition-all ease-in-out duration-300 rounded-md`}>
                    <img src="/safaritop.png" alt="" className='rounded-t-md' />
                    <img src={image} alt="" className='rounded-b-md' />
                </div>
                <Shadow />
                <div className=" flex gap-4 font-mono mx-auto lg:w-4/5 mt-2">
                    <a
                        href={github}
                        className='p-2 hover:bg-orng hover:text-white rounded-lg flex gap-2 items-center transition-all ease-in-out duration-100 cursor-pointer'
                        target='_blank'
                    >
                        <Github className='size-4 hover:text-white' />
                        Source Code
                    </a>
                    <a
                        href={url}
                        className='p-2 hover:bg-orng hover:text-white rounded-lg flex gap-2 items-center transition-all ease-in-out duration-100 cursor-pointer'
                        target='_blank'
                    >
                        <Link className='size-4 hover:text-white' />
                        Live Link
                    </a>
                </div>
            </div>
            <div className="flex-1">
                <div className="lg:w-4/5 mx-auto space-y-2">
                    <h1 className='highlight text-4xl font-semibold '>{name}</h1>
                    <p className='text-gray-500'>{content}</p>
                    <div className="flex flex-wrap gap-2">
                        {
                            techStack?.map((tech, index) => (
                                <TextChip key={index} text={tech} />
                            ))
                        }
                    </div>
                    <JsonDisplay data={credentials} />
                </div>
            </div>
        </div>
    )
}

export default Project