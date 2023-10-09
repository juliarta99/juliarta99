import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 50) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible &&
                <button onClick={scrollToTop} className="fixed z-[9999] md:bottom-10 md:right-10 bottom-4 right-4 p-2 flex items-center shadow-lg rounded-full bg-sky-300 shadow-sky-300 animate-bounce">
                    <FontAwesomeIcon icon={faArrowUp} className="w-5 h-5"></FontAwesomeIcon>
                </button>
            }
        </>
    )
}

export default ToTop