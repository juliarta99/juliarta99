import { Link, useLocation } from "react-router-dom"

const NavbarLink = ({to, name}) => {
    const pathLocation = useLocation().pathname;

    return (
        <>
            <li>
                <Link 
                    to={to} 
                    className={`block py-2 pl-3 pr-4 rounded ${pathLocation == to ? 'text-white bg-sky-700 md:bg-transparent md:text-sky-700 md:p-0 dark:text-slate-300 md:dark:text-sky-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 dark:text-slate-300 md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
                >{name}</Link>
            </li>
        </>
    )
}

export default NavbarLink