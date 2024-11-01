import React from "react";
import { projects } from '@/data.json'
import Project from "./Project";
import Heading from "../common/Heading";

function AllProject() {

    return (
        <div id="projects">
            <Heading text1={"Latest Works /"} text2={"projects"} />
            <div className="space-y-20 lg:space-y-14">
                {
                    projects?.map((project, index) => (
                        <Project
                            key={index}
                            url={project?.link}
                            github={project?.github}
                            name={project?.name}
                            content={project?.content}
                            image={project?.image}
                            techStack={project?.techStack}
                            credentials={project?.credentials}
                            isreverse={index % 2 !== 0}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default AllProject