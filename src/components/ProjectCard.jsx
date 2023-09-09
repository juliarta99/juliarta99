import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

const ProjectCard = ({image, name, desc, tasks, linkGithub = null, linkWeb = null}) => {
    return (
        <>
            <div className="group bg-white border border-gray-200 rounded-lg shadow hover:bg-sky-200 duration-500 dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={image} alt={name} />
                <div className="py-3 px-2">
                    <h5 className="text-center text-md md:text-lg font-bold text-gray-900 dark:text-white">{name}</h5>
                    <p className="text-center text-xs md:text-sm text-gray-900 dark:text-white">{desc}</p>
                    <div className="flex gap-2 justify-center mt-2">
                        {tasks.map((data, i) => {
                            return (
                                <div key={i} className="p-2 text-xs md:text-sm bg-sky-200 group-hover:bg-white rounded-md">
                                    {data.name}
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex gap-4 mt-2 justify-center">
                        {linkGithub != null ? <a href={linkGithub}>
                            <FontAwesomeIcon icon={faGithub} className="w-5 h-5 opacity-80 hover:opacity-100"></FontAwesomeIcon>
                        </a> : ''}
                        {linkWeb != null ? <a href={linkWeb}>
                            <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 opacity-80 hover:opacity-100"></FontAwesomeIcon>
                        </a> : ''}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard