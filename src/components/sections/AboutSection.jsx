import Image from '../../assets/juli.jpg'

const AboutSection = () => {
    return (
        <>
            <div className="py-20 container mx-auto flex md:flex-row flex-col overflow-x-hidden">
                <div className="p-5 md:p-0 w-3/4 sm:w-1/2 md:w-1/3 xl:w-1/4 h-max mx-auto relative">
                    <img src={Image} alt="Image" className='w-full object-cover rounded border-4 border-sky-500 border-opacity-10' />
                    <div className="before:absolute before:w-32 before:h-32 before:rounded-full before:bg-gradient-to-tr before:from-green-400 before:to-blue-500 before:content-'' before:-top-10 before:-left-10 before:-z-10 before:animate-inOutLeft after:absolute after:w-32 after:h-32 after:rounded-full after:bg-gradient-to-br after:from-green-400 after:to-blue-500 after:content-'' after:-bottom-10 after:-right-10 after:animate-inOutRight after:-z-10"></div>
                    <div className="before:absolute before:w-10 before:h-10 before:rounded-full before:bg-gradient-to-tr before:from-green-400 before:to-blue-500 before:content-'' before:-top-5 before:-right-5 before:-z-10 before:animate-bounce after:absolute after:w-10 after:h-10 after:rounded-full after:bg-gradient-to-br after:from-green-400 after:to-blue-500 after:content-'' after:-bottom-5 after:-left-5 after:-z-10 after:animate-bounce"></div>
                </div>
                <div className="space-y-4 text-justify mt-5 md:mt-0 ml-0 md:ml-10 md:w-2/3 xl:w-3/4 dark:text-slate-400">
                    <p>Hello 👋, my full name is <span className='font-bold'>Si Ngurah Putu Juliarta</span>, I'm usually called Juli or Ngurah. I am a Web Developer and Student. I was born and live in Badung, Bali. Currently, I am a student at <span className='font-bold'>SMK NEGERI 1 DENPASAR</span> majoring in Software Engineering. I have a strong interest in the world of programming, especially in the field of web development. My journey in the world of web development started with HTML and CSS. At first, I was just dabbling, but as time went by, I realized that this world challenged and interested me. That's why I decided to dive into it. Now, I have developed my skills in several programming languages, including PHP and JavaScript. I have also learned several frameworks, such as Laravel, React.js, and Vue.js, which allow me to build more complex and dynamic web applications. </p>
                    <p>I am very enthusiastic to continue learning and developing my skills in the world of programming. If you have questions, want to use my services, or want to collaborate on a joint project, don't hesitate to contact me. I am always ready to learn and grow together.</p>
                </div>
            </div>
        </>
    )
}

export default AboutSection