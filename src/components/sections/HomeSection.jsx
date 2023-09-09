import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import {Link} from 'react-router-dom'
import lihatKanan from '../../assets/lihatKanan.png';

const HomeSection = () => {
    const Sosmed = [
        {name: faGithub},
        {name: faLinkedin},
        {name: faInstagram}
    ]

    return (
        <>
            <div className="w-full h-screen pl-32 md:pl-10 lg:pl-0 relative">
                <img src={lihatKanan} alt="Image" className="absolute image-with-shadow md:left-0 sm:left-imageHomeSm left-imageHome bottom-0 md:h-5/6 h-4/5 object-cover -z-10" />
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="font-bold lg:text-2xl sm:text-lg md:shadow-none shadow-lg shadow-white">Ngurah Juliarta</h1>
                    <p className="text-md ld:text-lg opacity-80 md:shadow-none shadow-lg shadow-white">I am <span className="text-sky-500">Web Developer</span></p>
                    <ul className="flex mt-3">
                        {Sosmed.map((icon, i) => {
                            return (
                                <li key={i} className="ml-2 py-1 px-2 rounded hover:bg-gray-100 group">
                                    <FontAwesomeIcon className="w-5 h-5 group-hover:opacity-100 opacity-70 md:shadow-none shadow-lg shadow-white" icon={icon.name} />
                                </li>
                            )
                        })}
                    </ul>
                    <Link to='/about' className="mt-5">
                        <button className="py-2 px-4 text-xs md:text-sm rounded-md bg-transparent border border-gray-500 shadow-lg opacity-70 hover:opacity-100 duration-500">Lihat banyak tentang saya <FontAwesomeIcon icon={faArrowRight} /></button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HomeSection