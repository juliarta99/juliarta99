import { useState } from 'react'
import { Link } from 'react-router-dom';
import NavbarLink from './NavbarLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [showLink, setShowLink] = useState(false);

    const handleShow = () => {
        setShowLink(!showLink)
    }

    const navLink = [
        {to: '/', name: 'Home'},
        {to: '/about', name: 'About'},
        {to: '/portfolio', name: 'Portfolio'},
        {to: '/contact', name: 'Contact'}
    ]

    return (
        <>      
            <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-10">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to='/' className='flex items-center'>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Juliarta</span>
                    </Link>
                    <button type="button" onClick={handleShow} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <FontAwesomeIcon icon={faBars} className='w-5 h-5' />
                    </button>
                    <div className={`${ showLink === true ? '' : 'hidden'} w-full md:block md:w-auto`}>
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {navLink.map((link, i) => {
                                return (
                                    <NavbarLink key={i} to={link.to} name={link.name} />
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar