import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

const ProjectCard = ({image, name, desc, tasks, linkGithub = null, linkWeb = null}) => {
    return (
        <>
            <div className="py-3 px-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-sky-200 duration-500 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-2">
                    <img className="rounded-t-lg" src={image} alt={name} />
                </div>
                <h5 className="text-center text-sm md:text-md font-bold text-gray-900 dark:text-white">{name}</h5>
                <p className="text-center text-xs md:text-sm text-gray-900 dark:text-white">{desc}</p>
                <div className="flex gap-2 justify-center mt-2">
                    {tasks.map((data, i) => {
                        return (
                            <div key={i} className="p-2 text-xs md:text-sm bg-gray-200 rounded-md">{data.name}</div>
                        )
                    })}
                </div>
                {linkGithub != null ? <a href={linkGithub}>
                    <FontAwesomeIcon icon={faGithub} className="w-5 h-5"></FontAwesomeIcon>
                </a> : ''}
                {linkWeb != null ? <a href={linkWeb}>
                    <FontAwesomeIcon icon={faGlobe} className="w-5 h-5"></FontAwesomeIcon>
                </a> : ''}
            </div>
        </>
    )
}

export default ProjectCard