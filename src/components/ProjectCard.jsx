import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProjectCard = ({image, name, desc, tasks, linkGithub = null, linkWeb = null}) => {
    return (
        <>
            <div className="group backdrop-blur-sm border border-gray-200 rounded-lg shadow hover:bg-sky-200 dark:hover:bg-sky-900 duration-500 dark:border-slate-800">
                <LazyLoadImage
                    src={image}
                    alt={name}
                    className='rounded-t-lg'
                    placeholderSrc={image}
                    effect='blur'
                />
                <div className="py-3 px-4">
                    <h5 className="text-center text-md md:text-lg font-bold text-gray-900 dark:text-slate-100">{name}</h5>
                    <p className="text-center text-xs text-gray-500 dark:text-gray-300">{desc}</p>
                    <div className="flex gap-2 justify-center mt-2">
                        {tasks.map((data, i) => {
                            return (
                                <div key={i} className="p-2 text-xs md:text-sm bg-sky-200 group-hover:bg-white dark:group-hover:bg-slate-300 rounded-md"
                                >{data.name}</div>
                            )
                        })}
                    </div>
                    <div className="flex gap-4 mt-2 justify-center">
                        {linkGithub != null ? <a href={linkGithub} target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="w-5 h-5 opacity-80 hover:opacity-100 dark:text-white"></FontAwesomeIcon>
                        </a> : ''}
                        {linkWeb != null ? <a href={linkWeb} target="_blank">
                            <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 opacity-80 hover:opacity-100 dark:text-white"></FontAwesomeIcon>
                        </a> : ''}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard