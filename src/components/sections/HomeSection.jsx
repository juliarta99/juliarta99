import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import {Link} from 'react-router-dom'
import lihatKanan from '../../assets/lihatKanan.svg';

const HomeSection = () => {
    const Sosmed = [
        {name: faGithub, link: 'https://github.com/juliarta99'},
        {name: faLinkedin, link: 'https://www.linkedin.com/in/si-ngurah-putu-juliarta-5a6359262'},
        {name: faInstagram, link: 'https://instagram.com/n.juliarta'}
    ]

    return (
        <>
            <div className="w-full h-screen pl-32 pl-Home md:pl-10 lg:pl-0 relative">
                <img src={lihatKanan} alt="Image" className="absolute imageHome image-with-shadow md:left-0 sm:-left-8 -left-32 sm:bottom-0 -bottom-3 md:h-5/6 sm:h-4/5 h-2/3 object-contain -z-10" />
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="font-bold lg:text-2xl sm:text-lg md:shadow-none shadow-lg shadow-white">Ngurah Juliarta</h1>
                    <p className="text-md ld:text-lg opacity-80 md:shadow-none shadow-lg shadow-white">I am <span className="text-sky-500">Web Developer</span></p>
                    <ul className="flex mt-3">
                        {Sosmed.map((icon, i) => {
                            return (
                                <li key={i} className="ml-2 py-1 px-2 rounded hover:bg-gray-100 group">
                                    <a href={icon.link}>
                                        <FontAwesomeIcon className="w-5 h-5 group-hover:opacity-100 opacity-70 md:shadow-none shadow-lg shadow-white" icon={icon.name} />
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <Link to='/about' className="mt-5">
                        <button className="py-2 px-4 text-xs md:text-sm rounded-md md:bg-transparent border border-gray-500 shadow-lg md:shadow-gray-400 opacity-70 hover:opacity-100 md:hover:bg-sky-500 md:hover:shadow-sky-300 bg-sky-500 hover:bg-white shadow-sky-300 hover:shadow-white duration-500">More about me <FontAwesomeIcon icon={faArrowRight} /></button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HomeSection