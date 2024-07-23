import { LazyLoadImage } from 'react-lazy-load-image-component'
import Image from '../../assets/juli.jpg'
import 'react-lazy-load-image-component/src/effects/blur.css';

const AboutSection = () => {
    return (
        <>
            <div className="py-24 container mx-auto flex md:flex-row flex-col overflow-x-hidden">
                <div className="p-5 md:p-0 w-3/4 sm:w-1/2 md:w-1/3 xl:w-1/4 h-max mx-auto relative">
                    <LazyLoadImage
                        src={Image}
                        alt="About Image"
                        className='w-full object-cover rounded border-4 border-sky-500 border-opacity-10'
                        placeholderSrc={Image}
                        effect='blur'
                    />
                    <div className="before:absolute before:w-32 before:h-32 before:rounded-full before:bg-gradient-to-tr before:from-green-400 before:to-blue-500 before:content-'' before:-top-10 before:-left-10 before:-z-10 before:animate-inOutLeft after:absolute after:w-32 after:h-32 after:rounded-full after:bg-gradient-to-br after:from-green-400 after:to-blue-500 after:content-'' after:-bottom-10 after:-right-10 after:animate-inOutRight after:-z-10"></div>
                    <div className="before:absolute before:w-10 before:h-10 before:rounded-full before:bg-gradient-to-tr before:from-green-400 before:to-blue-500 before:content-'' before:-top-5 before:-right-5 before:-z-10 before:animate-bounce after:absolute after:w-10 after:h-10 after:rounded-full after:bg-gradient-to-br after:from-green-400 after:to-blue-500 after:content-'' after:-bottom-5 after:-left-5 after:-z-10 after:animate-bounce"></div>
                </div>
                <div className="space-y-4 text-justify mt-5 md:mt-0 ml-0 md:ml-10 md:w-2/3 xl:w-3/4 dark:text-slate-400">
                    <p>Hello 👋, my name is <span className="font-bold">Si Ngurah Putu Juliarta</span>, but you can call me Juli or Ngurah. I'm a Web Developer and Student based in Badung, Bali. I have a strong passion for programming, especially web development. My journey in this field began with HTML and CSS. What started as casual exploration soon turned into a dedicated pursuit.</p>
                    <p>Over time, I honed my skills in various programming languages, including PHP and JavaScript. I also gained proficiency in frameworks such as Laravel, React.js, and Vue.js, enabling me to create more complex and dynamic web applications.</p>
                    <p>I am always enthusiastic about learning and advancing my skills in programming. If you have any questions, are interested in my services, or would like to collaborate on a project, please don't hesitate to contact me. I'm always ready to learn and grow together.</p>
                </div>
            </div>
        </>
    )
}

export default AboutSection