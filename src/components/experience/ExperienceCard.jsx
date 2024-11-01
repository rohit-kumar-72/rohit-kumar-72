import React from 'react'

function ExperienceCard({ experience }) {
    // console.log(experience)
    return (
        <div className="bg-white dark:bg-slate-900 flex flex-col shadow-md relative dark:shadow-[rgba(18,215,250,0.45)] rounded-lg">
            <div className="flex justify-between items-center py-2 px-5 flex-wrap font-heading">
                <div className="flex gap-4 items-center">
                    <img src={experience.image} alt="" className='h-16' />
                    <h2 className='text-xl font-semibold'>
                        {experience.companyName}
                    </h2>
                </div>
                <div className="text-xl font-mono">
                    {experience.role}
                </div>
            </div>
            <hr />
            <div className="px-5 text-gray-500 flex-grow text-sm font-body">
                <ul className='list-disc list-inside '
                    style={{
                        paddingLeft: "1.5rem", textIndent: "-1.5rem"
                    }}
                >
                    {
                        experience.work.map((line, index) => (
                            <li
                                key={index}
                                className='py-1 leading-5 tracking-wide'
                            >
                                {line}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="py-4 bg-gray-200 dark:bg-gray-800 px-5 mt-4 text-sm">
                {experience.duration}
            </div>
        </div>
    )
}

export default ExperienceCard